import gql from "graphql-tag";

export const SITE_INFO = gql`
  query {
    site {
      name
    }
  }
`;

export const POSTS_BY_CATEGORY = gql`
  query ($category: String!) {
    postsByCategory(category: $category) {
      title
      slug
      content
      isPublished
      isFeatured
      createdAt
    }
  }
`;

export const ALL_CATEGORIES = gql`
  query {
    allCategories {
      name
      slug
    }
  }
`;

export const POST_BY_SLUG = gql`
  query ($slug: String!) {
    postBySlug(slug: $slug) {
      id
      title
      content
      featuredImage
      createdAt
      category {
        name
        slug
      }
      tag {
        name
        slug
      }
      user {
        id
        username
        firstName
        lastName
      }
      numberOfLikes
      likes {
        id
      }
    }
  }
`;

export const ALL_POSTS = gql`
  query {
    allPosts {
      title
      slug
      content
      isPublished
      isFeatured
      createdAt
      category {
        name
        slug
      }
    }
  }
`;
