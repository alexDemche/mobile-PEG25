import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories($currLocale: String!) {
    categories(locale: $currLocale) {
      title
      id
      icon {
        url
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query getCategory($categoryId: ID!, $currLocale: String!) {
    categories(locale: $currLocale, where: { id: $categoryId }) {
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

export const GET_LEVELS = gql`
  query getLevels {
    levels {
      name
      id
      number
      toPoints
      icon {
        url
      }
    }
  }
`;

export const GET_LEVEL = gql`
  query getLevel($levelId: ID!) {
    level(id: $levelId) {
      name
      id
      icon {
        url
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
  query getEmotion($emotionId: ID!, $currLocale: String!) {
    emotions(locale: $currLocale, where: { id: $emotionId }) {
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
