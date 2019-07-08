export default function (config, env, helpers) {
  config.module.loaders[config.module.loaders.length - 2] = {
    test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i,
    loader: false ? 'file-loader' : 'url-loader'
  };
}
