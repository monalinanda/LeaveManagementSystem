import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import userTypeDef from "./user.typeDef.js";
import leaveTypeDef from "./leave.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, leaveTypeDef]);

export default mergedTypeDefs;

