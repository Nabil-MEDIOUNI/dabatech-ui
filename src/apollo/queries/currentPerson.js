import { gql } from 'apollo-boost';

export const USER_INFO = gql`
  query currentPerson {
    currentPerson {
      id
      name
      email
      bio
      phone
      photo {
        url
      }
      is_verified
    }
  }
`;
