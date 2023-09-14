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
app.get('/v1/query', (c) => {
    return fetch(`https://${c.env.endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "customer-id": c.env.customer_id,
            "x-api-key": c.env.api_key,
            "grpc-timeout": "60S",
        },
        method: 'POST',
    })
})

app.post('/config', (c) => c.json(makeConfig(c.env)))

export default app
