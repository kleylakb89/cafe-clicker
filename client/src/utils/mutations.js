import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
   createUser(username: $username, password: $password){
      _id
      username
      password
    }
  }
`;
export const CREATE_GAME = gql`
  mutation createGame($user: String!, $clicks: Int!, $autoClicker: Boolean!, $multiClicker: Boolean!, $passiveClicker: Boolean!, $cafeState: Int!) {
    createGame(user: $user, clicks: $clicks, autoClicker: $autoClicker, multiClicker: $multiClicker, passiveClicker: $passiveClicker, cafeState: $cafeState) {
      user
      clicks
      autoClicker
      multiClicker
      passiveClicker
      cafeState 
    }
  }
`;
export const UPDATE_GAME = gql`
  mutation updateGame($user: String!, $clicks: Int!, $autoClicker: Boolean!, $multiClicker: Boolean!, $passiveClicker: Boolean!, $cafeState: Int!) {
    updateGame(user: $user, clicks: $clicks, autoClicker: $autoClicker, multiClicker: $multiClicker, passiveClicker: $passiveClicker, cafeState: $cafeState) {
      user
      clicks
      autoClicker
      multiClicker
      passiveClicker
      cafeState 
    }
  }
`;
export const DELETE_GAME = gql`
  mutation deleteGame($_id: String!) {
    deleteGame(_id: $_id) {
      _id
    }
  }
`;
export const CREATE_SCORE = gql`
  mutation createScore($score: Int!, $user: String!){
    createScore(score: $score, user: $user) {
      score
      user  
    }
  }
`;
export const UPDATE_SCORE = gql`
  mutation updateScore($_id: String!, $score: Int!, $user: String!){
    createScore(_id: $_id, score: $score, user: $user) {
      _id
      score
      user  
    }
  }
`;
export const RESET_SCORE = gql`
mutation resetScore($_id: String!) {
    resetScore(_id: $_id) {
      _id
    }
  }
`;