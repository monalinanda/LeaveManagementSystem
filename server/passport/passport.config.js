import passport from "passport";
import bcrypt from "bcryptjs"; // before store password  bcrypt  hashing user password 

import User from "../models/user.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
	passport.serializeUser((user, done) => {
		console.log("Serializing user");
		done(null, user.id);
	});

	passport.deserializeUser(async (id, done) => {
		console.log("Deserializing user");
		try {
			const user = await User.findById(id);
			done(null, user);
		} catch (err) {
			done(err);
		}
	});

	passport.use(
		new GraphQLLocalStrategy(async (username, password, userType, done) => {
			try {
				const user = await User.findOne({ username });
				if (!user) {
					throw new Error("Invalid username or password");
				}
				const validPassword = await bcrypt.compare(password, user.password);
				if (!validPassword) {
					throw new Error("Invalid username or password");
				}
				if(userType !== user.userType){
					throw new Error("Invalid userType");
				}

				return done(null, user);
			} catch (err) {
				return done(err);
			}
		})
	);
};