## Webpack

Webpack bundle all different files in a single js, css, and html.

By default webpack create a dist folder at root with index.js bundled.
It will work only if the src/entrypoint.js is provided.

### Webpack config

CASHBUSTING
Cache busting is useful because it allows the visitors to receive the most recently updated files without having to perform a hard refresh or clear their browser cach

PLUGIN

`const HtmlWebpackplugin = require("html-webpack-plugin");`

HtmlWebpackplugin will automatically update the script path in index.html following
a change in one of the dependencies modules.

html-loader :

```
{
    test: /\.html$/,
    use: ["html-loader"],
},
```

file-loader: allow to import all the assets like images (svg, png, jpg, ...)
by checking the src attr of img tag and create

```
{
    test: /\.(svg|png|jpg)$/,
    use: {
        loader: "file-loader",
        options: {
            name: "[name].[hash].[ext]",
            outputPath: "img",
        },
    },
},
```

clean-webpack-plugin: this plugin will automatically remove the previous [hash].js because a new one is created with the latest update.

mini-css-extract-plugin: this plugin will create a style
