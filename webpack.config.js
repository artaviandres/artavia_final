module: {
  rules: [
    {
     test: /\.svg$/,
     loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
    },
  ]
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    }, 
    {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }
  ]
}
vue: {
  loaders: {
    scss: 'style!css!sass'
  }
}
