import {Hono} from 'hono'
import {prettyJSON} from 'hono/pretty-json'
import {cors} from 'hono/cors'
import {makeConfig} from "./config";

const app = new Hono<{ Bindings: Bindings }>()
app.use('*', prettyJSON())
app.use('*', cors({
    // TODO change this to the actual domain
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS']
}))
app.post('/v1/query', async (c) => {
    const body = await c.req.text()
    const response = await fetch(`https://${c.env.endpoint}/v1/query`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "customer-id": c.env.customer_id,
            "x-api-key": c.env.api_key,
            "grpc-timeout": "60S",
        },
        body: body,
        method: 'POST',
    })
    const json = await response.json()
    return c.json(json)
})

app.post('/config', (c) => c.json(makeConfig(c.env)))

export default app
