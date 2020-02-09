// dependences
const morgan = require("morgan"),
  path = require("path"),
  cors = require("cors"),
  express = require("express"),
  { ApolloServer } = require("apollo-server-express"),
  app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // variables de entorno
}

const { mongoose } = require("./config/database"),
  resolvers = require("./graphql/resolvers"),
  typeDefs = require("./graphql/typeDefs"),
  mocks = require("./graphql/mocks"),
  server = new ApolloServer({ typeDefs, resolvers, mocks });

// settings
app.set("port", process.env.PORT);
app.set("host", process.env.HOST);

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
app.listen(app.get("port"), () => {
  if (process.env.NODE_ENV === "development")
    console.log(
      `Server graph ready at http://${app.get("host")}:${app.get("port")}${server.graphqlPath}`
    );
});
