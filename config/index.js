module.exports = (app) =>
  ({
    config: require('./config')(app),
    db: require('./db')(app),
    passport: require('./passport')(app)
  });
