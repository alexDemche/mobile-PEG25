import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      title
      id
      icon {
        url
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query getCategory($categoryId: ID!) {
    category(id: $categoryId) {
      title
      id
      description
      emotions {
        id
        title
        description
        icon {
          url
        }
      }
    }
  }
`;

export const GET_EMOTIONS_BY_CATEGORY_ID = gql`
  query getEmotionsByCategoryId($categoryId: ID!) {
    emotions(where: { category: { id: $categoryId } }) {
      title
      id
      description
    }
  }
`;

export const GET_EMOTION = gql`
  query getEmotion($emotionId: ID!) {
    emotion(id: $emotionId) {
      title
      id
      description
      images {
        url
        id
      }
    }
  }
`;
