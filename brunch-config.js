exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] },
    sass: { options: { includePaths: ['node_modules/bootstrap-sass/assets/stylesheets'] } }
  }

};
