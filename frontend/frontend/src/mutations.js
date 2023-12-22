import gql from "graphql-tag";

export const USER_SIGNUP = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
      }
    }
  }
`;

export const USER_SIGNIN = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      user {
        id
        username
        firstName
        lastName
        email
        avatar
        bio
        location
        website
      }
    }
  }
`;

export const UPDATE_POST_LIKE = gql`
  mutation ($postID: ID!, $userID: ID!) {
    updatePostLike(postId: $postID, userId: $userID) {
      post {
        id
        title
        likes {
          id
        }
      }
    }
  }
`;