var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var assets      = require('metalsmith-assets');

Metalsmith(__dirname)
  .metadata({
    title: "ontwerper.com",
    description: "UX & Photography",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
