//grabbing our typedefs and resolvers from the correct files and exporting them
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };