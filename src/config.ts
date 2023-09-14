export const makeConfig = (env: Bindings) => {
    /** NEVER PASS API_KEY TO THE CLIENT */
    return {
            // Search
            corpus_id: env.corpus_id,
            customer_id: env.customer_id,

            // App
            ux: env.ux,
            app_title: env.app_title,
            enable_app_header: env.enable_app_header,
            enable_app_footer: env.enable_app_footer,

            // App header
            app_header_logo_link: env.app_header_logo_link,
            app_header_logo_src: env.app_header_logo_src,
            app_header_logo_alt: env.app_header_logo_alt,
            app_header_logo_height: env.app_header_logo_height,
            app_header_learn_more_link: env.app_header_learn_more_link,
            app_header_learn_more_text: env.app_header_learn_more_text,

            // Filters
            enable_source_filters: env.enable_source_filters,
            sources: env.sources,

            // summary
            summary_default_language: env.summary_default_language,
            summary_num_results: env.summary_num_results,
            summary_num_sentences: env.summary_num_sentences,
            summary_prompt_name: env.summary_prompt_name,

            // rerank
            rerank: env.rerank,
            rerank_num_results: env.rerank_num_results,

            // Search header
            search_logo_link: env.search_logo_link,
            search_logo_src: env.search_logo_src,
            search_logo_alt: env.search_logo_alt,
            search_logo_height: env.search_logo_height,
            search_title: env.search_title,
            search_description: env.search_description,
            search_placeholder: env.search_placeholder,

            // Auth
            authenticate: env.authenticate,
            google_client_id: env.google_client_id,

            // Analytics
            google_analytics_tracking_code: env.google_analytics_tracking_code,
            full_story_org_id: env.full_story_org_id,
    }
}
