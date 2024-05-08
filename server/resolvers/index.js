import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import leaveResolver from "./leave.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, leaveResolver]);

export default mergedResolvers;