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
import { buildContext } from "graphql-passport";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { connectDB } from "./db/connectDB.js";
import { configurePassport } from "./passport/passport.config.js";

const port = 4000;
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
            httpOnly: false,
            sameSite: "none",
            secure: auto,
        },
        store: store,
    })
);
app.use(passport.initialize());
app.use(passport.session());
const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({
        httpServer
    })],
    introspection: true,
    playground: {
        settings: {
            'request.credentials': 'same-origin',
        },
    },
});

await server.start();
const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
    allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
};
// app.use(cors(corsConfig));
// app.options('*', cors(corsConfig));
// Apply Apollo middleware
app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server, {
        context: async ({
            req,
            res
        }) => buildContext({
            req,
            res
        }),
    })
);
// Start the Express server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
});
await connectDB();
console.log(`🚀 Server ready at ${port}`);
