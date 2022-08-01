import { gql } from '@apollo/client';

export const QUERY_SCORE = gql`
  query score {
    score {
      _id
      score
      user
    }
  }
`;
export const QUERY_SCORES = gql`
  query scores {
    scores{
      _id
      score
      user
    }
  }
`;
export const QUERY_GAME = gql`
  query game {
    game {
      _id
      user
      clicks
      autoClicker
      multiClicker
      passiveClicker
      cafeState
    }
  }
`;
export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
    }
  }
`;