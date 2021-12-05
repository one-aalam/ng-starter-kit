require('dotenv').config()
const webpack = require('webpack')


module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
                SUPABASE_KEY: JSON.stringify(process.env.SUPABASE_KEY)
            }
        })
    ]
}
