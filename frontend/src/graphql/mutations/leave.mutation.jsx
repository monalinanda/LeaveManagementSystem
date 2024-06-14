import { gql } from "@apollo/client";

export const CREATE_LEAVE = gql`
  mutation CreateLeave($input: CreateLeaveInput!) {
    createLeave(input: $input) {
      _id
      userId
      description
      subject
      category
      leavestart
      leaveend
      manageremail
      status
    }
  }
`;

export const UPDATE_LEAVE_STATUS = gql`
  mutation UpdateLeaveStatus($input: UpdateLeaveStatusInput!) {
    updateLeaveStatus(input: $input) {
      _id
      status
    }
  }
`;
