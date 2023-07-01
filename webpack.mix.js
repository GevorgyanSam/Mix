const mix = require("laravel-mix");

mix.setPublicPath('build');
mix.js('src/js/script.js', 'js/script.js');
mix.sass('src/scss/style.scss', 'css/style.css');
mix.copy('src/index.html', 'build/index.html');
mix.options({
    babelConfig: {
        presets: ['@babel/preset-env']
    }
})