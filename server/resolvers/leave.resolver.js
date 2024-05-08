import {leaves} from "../appData.js";

const leavesResolver = {
    Query:{
        leaves: ()=>{
            return leaves ;
        }
    },
        Mutation:{}
}

export default leavesResolver;