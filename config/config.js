module.exports = (app) => {

  var config = {
    production: {},
    development: {
      db: 'mongodb://localhost/expresstest'
    },
    test: {}
  };

  app.set('config', config);
};