// dependences
const morgan = require("morgan"),
    path = require("path"),
    cors = require("cors"),
    express = require("express"),
    { ApolloServer } = require('apollo-server-express'),
    resolvers = require('./graphql/models'),
    { mongoose } = require('./models/database'),
    expressGraphQL = require("express-graphql"),
    schema = require("./graphql/graphql");
    const typeDefs = require("./graphql/types");
// resolvers = require("./controllers/employeeController");

//////////////////////////////

const app = express();
server = new ApolloServer({ typeDefs, resolvers });
// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
server.applyMiddleware({ app });

// global variables
app.use((req, res, next) => {
    next();
});

// static files
app.use(express.static(path.join(__dirname + "/public")));

// routes
app.use('/api/employees', require('./routes/employeeRoutes'));
// start server

if (process.env.NODE_ENV === 'development') {
    app.listen(app.get("port"), () => {
        console.log("Server on port ", app.get("port"));
        console.log(`Server graph ready at http://localhost:3000${server.graphqlPath}`);
    });
}
