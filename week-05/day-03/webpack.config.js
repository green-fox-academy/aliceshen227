module.exports = {
  //define entry point
  entry:'./src/index.js',

  output:{
    path:__dirname+'/dist',
    filename:'bundle.js'
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['env']
        }
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  }
};
