const path = require("path");

module.exports =
  [
    ["hacss-plugin-copy.umd.js", "development"],
    ["hacss-plugin-copy.umd.min.js", "production"],
  ]
    .map(([ filename, mode ]) => ({
      entry: "./src/index.js",
      output: {
        path: path.join(__dirname, "dist"),
        filename,
        library: ["hacssPlugins", "copy"],
        libraryTarget: "umd",
        globalObject: "this",
        libraryExport: "default",
      },
      resolve: {
        alias: {
          "core-js": "core-js-pure"
        },
      },
      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
        ],
      },
      mode,
      devtool: "source-map",
    }));
