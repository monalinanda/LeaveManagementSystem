import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
	query GetAuthenticatedUser {
		authUser {
			_id
			username
			name
			profilePicture
			email
            userType
		}
	}
`;


// export const GET_USER_AND_LEAVES = gql`
// 	query GetUserAndLeaves($userId: ID!) {
// 		user(userId: $userId) {
// 			_id
// 			name
// 			username
// 			profilePicture
//             userType
// 			# relationships
// 			leaves {
// 				_id
// 				description
// 				paymentType
// 				category
// 				amount
// 				location
// 				date
// 			}
// 		}
// 	}
// `;