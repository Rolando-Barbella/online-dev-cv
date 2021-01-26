/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMainDetails = /* GraphQL */ `
  query GetMainDetails($id: ID!) {
    getMainDetails(id: $id) {
      id
      name
      lastName
      email
      location
      description
      skills {
        items {
          id
          name
          skillID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listMainDetails = /* GraphQL */ `
  query ListMainDetailss(
    $filter: ModelMainDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMainDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        email
        location
        description
        skills {
          items{
            name
            id
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      skillID
      mainDetails {
        id
        name
        lastName
        email
        location
        description
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        skillID
        mainDetails {
          id
          name
          lastName
          email
          location
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
