import { gql } from 'apollo-boost';

export const CURRENT_PERSON_UPDATE = gql`
  mutation currentPersonUpdate($person: PersonInput) {
    currentPersonUpdate(person: $person) {
      id
    }
  }
`;

export const PHOTO_UPDATE = gql`
  mutation changePhoto($file: Upload!) {
    changePhoto(file: $file) {
      photo {
        url
      }
    }
  }
`;
