import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';

function renderHTML() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
    <title>Pattly</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/app-bundle.js"></script>
  </body>
</html>`;
}

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.send(renderHTML());
});

const server = app.listen(process.argv[2] || 3000, '0.0.0.0', err => {
  if (err) return console.error(err, err.stack);
  const { address, port } = server.address();

  return console.log(`[DEV Server] listening at http://${address}:${port}`);
});
