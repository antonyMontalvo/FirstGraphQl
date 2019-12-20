const morgan = require("morgan"),
  path = require("path"),
  cors = require("cors"),
  express = require("express"),
  { mongoose } = require("./models/database"),
  { ApolloServer } = require("apollo-server-express"),
  app = express();

const resolvers = require("./graphql/resolvers"),
  typeDefs = require("./graphql/typeDefs"),
  mocks = require("./graphql/mocks"),
  server = new ApolloServer({ typeDefs, resolvers, mocks });

// settings
app.set("port", process.env.PORT || 4000);

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

// start server
if (process.env.NODE_ENV === "development") {
  app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
    console.log(`Server graph ready at http://localhost:${app.get("port")}${server.graphqlPath}`
    );
  });
}
