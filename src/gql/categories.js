import { gql } from '@apollo/client/core'

export const STORE_CATEGORIES = gql`
  query StoreCategories(
    $siteId: [Int]!
    $first: Int
    $after: String
    $search: String
    $isActive: Boolean
    $isPrivate: Boolean
  ) {
    storeCategories(
      siteId: $siteId
      first: $first
      after: $after
      search: $search
      isActive: $isActive
      isPrivate: $isPrivate
    ) {
      edges {
        node {
          id
          hid
          title
          slug
          image
          cover
          total
          isExternal
          external
        }
      }
    }
  }
`
