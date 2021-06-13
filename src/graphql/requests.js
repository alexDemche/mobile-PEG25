import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetExchangeRates {
    products {
      name
    }
  }
`;
