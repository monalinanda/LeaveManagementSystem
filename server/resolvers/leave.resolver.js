import Leave from "../models/leave.model.js";

const leavesResolver = {
  Query: {
    leaves: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const leaves = await Leave.find({ userId });
        return leaves;
      } catch (err) {
        console.error("Error getting leaves:", err);
        throw new Error("Error getting leaves");
      }
    },
    leave: async (_, { leaveId }) => {
      try {
        const leave = await Leave.findById(leaveId);
        return leave;
      } catch (err) {
        console.error("Error getting leave:", err);
        throw new Error("Error getting leave");
      }
    },
    engineersLeaves: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const manageremail = await context.getUser().email;
        const leaves = await Leave.find({ manageremail });
        return leaves;
      } catch (err) {
        console.error("Error getting leaves:", err);
        throw new Error("Error getting leaves");
      }
    },
  },
  Mutation: {
    createLeave: async (_, { input }, context) => {
      try {
        const newLeave = new Leave({
          ...input,
          userId: context.getUser()._id,
          name: context.getUser().name,
          email: context.getUser().email,
        });
        await newLeave.save();
        return newLeave;
      } catch (err) {
        console.error("Error creating leave:", err);
        throw new Error("Error creating leave");
      }
    },
    updateLeave: async (_, { input }) => {
      try {
        const updatedLeave = await Leave.findByIdAndUpdate(
          input.leaveId,
          input,
          {
            new: true,
          }
        );
        return updatedLeave;
      } catch (err) {
        console.error("Error updating leave:", err);
        throw new Error("Error updating leave");
      }
    },
    updateLeaveStatus: async (_, { input }) => {
      try {
        const updateLeaveStatus = await Leave.findByIdAndUpdate(
          input.leaveId,
          input,
          {
            new: true,
          }
        );
        return updateLeaveStatus;
      } catch (err) {
        console.error("Error updating leave:", err);
        throw new Error("Error updating leave");
      }
    },

    deleteLeave: async (_, { leaveId }) => {
      try {
        const deletedLeave = await Leave.findByIdAndDelete(leaveId);
        return deletedLeave;
      } catch (err) {
        console.error("Error deleting leave:", err);
        throw new Error("Error deleting leave");
      }
    },
  },
};

export default leavesResolver;
