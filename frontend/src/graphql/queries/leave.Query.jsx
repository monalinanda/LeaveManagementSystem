import { gql } from "@apollo/client";

export const GET_LEAVES = gql`
	query GetLeaves {
		leaves{
			_id
			userId
			name
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

export const GET_LEAVE = gql`
	query GetLeave($id: ID!) {
		leave(leaveId: $id) {
			_id
			userId
			description
			subject
			category
            leavestart
            leaveend
            manageremail
			status
			user {
				name
				username
				profilePicture
			}
		}
	}
`;

export const GET_ENGINEERS_LEAVES = gql`
	query GetEngineersLeaves {
		engineersLeaves{
			_id
			userId
			name
			email
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