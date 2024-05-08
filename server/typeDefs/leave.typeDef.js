const leaveTypeDef = `#graphql
  type Leave {
    _id: ID!
    userId: ID!
    description: String!
    leaveType: String!
    category: String!
    date: String!
    user: User!
  }

  type Query {
    leaves: [Leave!]
    leave(leaveId:ID!): Leave
    # categoryStatistics: [CategoryStatistics!]
  }

  type Mutation {
    createLeave(input: CreateLeaveInput!): Leave!
    updateLeave(input: UpdateLeaveInput!): Leave!
    deleteLeave(leaveId:ID!): Leave!
  }

#   type CategoryStatistics {
#     category: String!
#     totalAmount: Float!
#   }

  input CreateLeaveInput {
    description: String!
    leaveType: String!
    category: String!
    date: String!
  }

  input UpdateLeaveInput {
    leaveId: ID!
    description: String
    leaveType: String
    category: String
    date: String
  }
`;

export default leaveTypeDef;