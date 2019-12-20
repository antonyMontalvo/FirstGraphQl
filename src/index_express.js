// dependences
const morgan = require("morgan"),
  path = require("path"),
  cors = require("cors"),
  express = require("express"),
  { mongoose } = require("./models/database"),
  graphqlHTTP = require("express-graphql"),
  { makeExecutableSchema, mockServer } = require("graphql-tools"),
  app = express();

const resolvers = require("./graphql/resolvers"),
  typeDefs = require("./graphql/typeDefs"),
  mocks = require("./graphql/mocks");

// settings
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});
mockServer(executableSchema, mocks); // esto añade los mocks

app.set("port", process.env.PORT || 5678);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  "/graphiql",
  graphqlHTTP({
    schema: executableSchema,
    rootValue: root,
    graphiql: true
  })
);

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
    console.log(
      `Server graph ready at http://localhost:${app.get("port")}/graphiql`
    );
  });
}

// Funciona con la api de graphql por defecto
