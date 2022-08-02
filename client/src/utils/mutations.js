import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password){
      token
      user {
        _id
        username
        #password
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const CREATE_GAME = gql`
  mutation createGame($clicks: Int!, $autoClicker: Boolean!, $multiClicker: Boolean!, $passiveClicker: Boolean!, $cafeState: Int!) {
    createGame(clicks: $clicks, autoClicker: $autoClicker, multiClicker: $multiClicker, passiveClicker: $passiveClicker, cafeState: $cafeState) {
      clicks
      autoClicker
      multiClicker
      passiveClicker
      cafeState
      user
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
  mutation createScore($score: Int!){
    createScore(score: $score) {
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