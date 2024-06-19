import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
//import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

import { buildContext } from "graphql-passport";

import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { connectDB } from "./db/connectDB.js";
import { configurePassport } from "./passport/passport.config.js";
const port =  4000;
dotenv.config();
configurePassport();
const __dirname = path.resolve();
const app = express();
const httpServer = http.createServer(app);
const MongoDBStore = connectMongo(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});
store.on("error", (err) => console.log(err));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // this option specifies whether to save the session to the store on every request
    saveUninitialized: false, // option specifies whether to save uninitialized sessions
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true, // this option prevents the Cross-Site Scripting (XSS) attacks
      sameSite: 'none'
    },
    store: store,
  })
);
app.use(passport.initialize());
app.use(passport.session());
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
  playground: true,
});

  await server.start();
// Ensure we wait for our server to start
//await server.start();
// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
const corsConfig = {
  origin: 'https://leave-management-system-frontend.vercel.app',
  credentials: true , 
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
//app.use(express.json());
  // Apply Apollo middleware
  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );
  // Start the Express server
  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
  });
// Start the server and handle errors
// startServer().catch((err) => {
//   console.error('Error starting server:', err);
// });
//await new Promise((resolve) => httpServer.listen({ port: port }, resolve));
await connectDB();
// app.use(
//   "/graphql",
//   cors({
//   origin: " http://localhost:5173", 
//   credentials: true,
// }),
//   express.json(),
//   // expressMiddleware accepts the same arguments:
//   // an Apollo Server instance and optional configuration options
//   expressMiddleware(server, {
//     context: async ({ req, res }) => buildContext({ req, res }),
   
//   })
// );
// npm run build will build your frontend app, and it will the optimized version of your app
//  app.use(express.static(path.join(__dirname, "frontend/dist")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
// });
// Modified server startup
console.log(`🚀 Server ready at ${port}`);
