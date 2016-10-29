var massive = require('massive');
var connectionString = "postgres://postgres:testmini@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
