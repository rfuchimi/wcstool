/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

appEnv.services['compose-for-mongodb'] = [{
  credentials: {
    "db_type": "mongodb",
    "maps": [],
    "name": "bmix-dal-yp-14e698c7-17e4-4ee2-ad84-c2ae8a989851",
    "uri_cli": "mongo --ssl --sslAllowInvalidCertificates sl-us-south-1-portal.16.dblayer.com:27562/compose -u admin -p CIGOBSCAPUBZZUVD --authenticationDatabase admin",
    "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURlekNDQW1PZ0F3SUJBZ0lFV2dvUDRUQU5CZ2txaGtpRzl3MEJBUTBGQURBL01UMHdPd1lEVlFRREREUmoKYjI1MFlYUnZRRzh5ZEdJdVkyOXRMbUp5TFRnd1lXVXpNRGN6WkdNeE9XTXdZbUl6TnpJd01tWmpNR1prTldNNApNVGhtTUI0WERURTNNVEV4TXpJeE16UXlOVm9YRFRNM01URXhNekl4TURBd01Gb3dQekU5TURzR0ExVUVBd3cwClkyOXVkR0YwYjBCdk1uUmlMbU52YlM1aWNpMDRNR0ZsTXpBM00yUmpNVGxqTUdKaU16Y3lNREptWXpCbVpEVmoKT0RFNFpqQ0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQU1INjBaalBRcGwvbGdvSQpESVdXaEJNY3NYTU9wTW5SbVRxeEdEbCtwNjRWZmF3d2ZJU2VoMGdOOVFZMHd0cnVRSWRIYng4eVFSUTVmZ051Ci90VHJ5czQ3c0YyWm44RzdmOFJaRllDRFN6Z2R4RkpKVlN0SjgrSXFiY1o5V3ZzQU5sbWFLSlRvWXVqMEhsWHYKYnhOYnFMKys0ZGI3Q0hpQkEzMXdzSXBPeFVwdXcwTnNVNWJvb1JVa3VkT2locjRNTHFZTmQ3QVc2MURXN3cyMAo0RlF2ZnlxL2pJZ0RjRHBRYjVBQ0lobU5pSmtIeGx0SG1pdk9DUGdPbURZZWxCVGZBTE9semd5WGlENVZ5bXp0CkduazVIYXZ6OFI4dWhRblUxVE9IODdhSHFDRmhicE5QQ09ZNmhuMWRleWI1ZUluTFpZVWJ0eGEyWmJZd1RIT3oKNWIyTWhETUNBd0VBQWFOL01IMHdIUVlEVlIwT0JCWUVGSis0b2ErcFAwei9oK3RiTHA3M1VwOUY0bFBKTUE0RwpBMVVkRHdFQi93UUVBd0lDQkRBZEJnTlZIU1VFRmpBVUJnZ3JCZ0VGQlFjREFRWUlLd1lCQlFVSEF3SXdEQVlEClZSMFRCQVV3QXdFQi96QWZCZ05WSFNNRUdEQVdnQlNmdUtHdnFUOU0vNGZyV3k2ZTkxS2ZSZUpUeVRBTkJna3EKaGtpRzl3MEJBUTBGQUFPQ0FRRUFOWitFS1ZoK05PUVpGNit1cUJiWi9ORWJ0cEkyOVlVL3dzS3RrcWU3OW1SSQpXcWNKQTJLUXF1Slc1TkluUDJkN3FSWC9HNFR1K3h2UzdVRkhzbjNicWZuRjcwWnMrMFpyb25Id2IxT0NhcDgzCnpjSzBNYmNkRVNvYVJ3RTZXRitZRFVpVEhPUXNSZVYyZGV2TG1zZnV1SDJuK01RNUxRUmNaYWJvSkZRN1V1cGwKMUpqeWZRMU1wU2JWLzYvRENkeWRmb1E2TFRYR2RKcVRQUk5ldDl3T2tjakNDc2M0NUMzQzZvaVZnOE1DckM3NAp0UVFjcEJzUC9zejU1ejUxTkF1SzM0anlsK1ljMUo1MjdQcVRZU0wyaFpNVlZYRENQdkxFZ3JDNHNCeXVIYlJuCmx5b3hzTEpWQzVpU0hLNWQ3TXdqdkNRNnI0dytLVDVVYmt6S0QrMDJGQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
    "deployment_id": "5a0a0fd6c53eff001b045470",
    "uri": "mongodb://admin:CIGOBSCAPUBZZUVD@sl-us-south-1-portal.16.dblayer.com:27562,sl-us-south-1-portal.14.dblayer.com:27562/compose?authSource=admin&ssl=true"
  }
}];

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  // localDiskDb: {
  //   adapter: 'sails-disk'
  // },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  //Usando MONGODB do IBM BlueMix
  
  mongodbServer: {
    adapter: 'sails-mongo',
    url: appEnv.services['compose-for-mongodb'][0].credentials['uri'],
    ssl: true,
    sslValidate: false,
    sslCA: appEnv.services['compose-for-mongodb'][0].credentials['ca_certificate_base64']
  },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
