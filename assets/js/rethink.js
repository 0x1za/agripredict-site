var r = require('rethinkdb');
r.table('users').count().run(conn, callback);


