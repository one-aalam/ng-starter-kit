export const environment = {
    production: true,
    serverUrl: 'https://api.chucknorris.io',
    appHostUrl: '',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR'],
    supabaseClientConfig: {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
    },
};
