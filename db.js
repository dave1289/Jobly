const { Client } = require('pg');

let DB_URI;

if (process.env.NODE_ENV === 'test') {
   DB_URI = 'postgresql:///jobly_test';
}
else {
   DB_URI = 'postgresql:///jobly'
}

let db = new Client({
   username: 'davelaptop',
   password: 'pass',
   connectionString: DB_URI
});


db.connect();

module.exports = db;