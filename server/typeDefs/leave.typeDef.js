//schema
const leaveTypeDef = `#graphql
  type Leave {
    _id: ID!
    userId: ID!
    name: String!
    email: String!
    description: String!
    subject: String!
    category: String! 
    leavestart: String!
    leaveend: String!
    manageremail: String!
    status:String!
    user: User! 
    leaveId: ID!
  }

  type Query {
    leaves: [Leave!]
    leave(leaveId:ID!): Leave
    engineersLeaves: [Leave!]
  }

  type Mutation {
    createLeave(input: CreateLeaveInput!): Leave!
    updateLeave(input: UpdateLeaveInput!): Leave!
    deleteLeave(leaveId:ID!): Leave!
    updateLeaveStatus(input: UpdateLeaveStatusInput!): Leave!
  }


  input CreateLeaveInput {
    description: String!
    subject: String!
    category: String!
    leavestart: String!
    leaveend: String!
    manageremail: String!
    status: String!
  }

  input UpdateLeaveInput {
    leaveId: ID!
    description: String!
    subject: String!
    category: String!
    leavestart: String!
    leaveend: String!
    manageremail: String!
    status: String!
  }
  input UpdateLeaveStatusInput {
    leaveId: ID!
    status: String!
  }
`;

export default leaveTypeDef;