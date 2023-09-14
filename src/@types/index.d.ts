declare global {
    type Bindings = {
        endpoint: string;
        corpus_id: string;
        customer_id: string;
        api_key: string;

        // App
        ux: string;
        app_title: string;
        enable_app_header: string;
        enable_app_footer: string;

        // App header
        app_header_logo_link: string;
        app_header_logo_src: string;
        app_header_logo_alt: string;
        app_header_logo_height: string;
        app_header_learn_more_link: string;
        app_header_learn_more_text: string;

        // Filters
        enable_source_filters: string;
        sources: string;

        // summary
        summary_default_language: string;
        summary_num_results: string;
        summary_num_sentences: string;
        summary_prompt_name: string;

        // rerank
        rerank: string;
        rerank_num_results: string;

        // Search header
        search_logo_link: string;
        search_logo_src: string;
        search_logo_alt: string;
        search_logo_height: string;
        search_title: string;
        search_description: string;
        search_placeholder: string;

        // Auth
        authenticate: string;
        google_client_id: string;

        // Analytics
        google_analytics_tracking_code: string;
        full_story_org_id: string;
    }
}
export {}
