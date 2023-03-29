const moongose = require('mongoose');

module.exports = {
  connect: () => {
    const db_conn_str = process.env.DB_CONNECTION_STRING;
    moongose.connect(db_conn_str, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    const db = moongose.connection
    db.on('error', console.error.bind(console, 'Connection to mongo has failed'))
    db.once('once', () => {
        console.log('Succesfully connected to mongo db cluster')
    })
  },
  schemas: {},
};
