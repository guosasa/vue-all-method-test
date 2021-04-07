if(process.env.NODE_ENV ==='production') {
  // module.exports = process.env.release === 'true' ? releaseConfig:distConfig
} else {
  module.exports = {
    devServer: {
      port: '3008',
      host: '0.0.0.0',
      disableHostCheck: true,
    },
    lintOnSave:false
  }
}