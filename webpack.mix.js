let mix = require('laravel-mix')

// ---- Public path ----
mix.setPublicPath('dist')

// ---- SCSS ----
mix.sass('src/sass/app.scss', 'public/css')

// ---- JS ----
mix.js('src/js/app.js', 'public/js').vue()
    .extract(['vue', 'bootstrap'])

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                {
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                },
                {
                    use: ['raw-loader', 'pug-plain-loader']
                }
                ]
            }
        ]
    }
    });