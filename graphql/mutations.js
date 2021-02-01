/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const createMainDetails = /* GraphQL */ `
  mutation CreateMainDetails(
    $input: CreateMainDetailsInput!
    $condition: ModelMainDetailsConditionInput
  ) {
    createMainDetails(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateMainDetails = /* GraphQL */ `
  mutation UpdateMainDetails(
    $input: UpdateMainDetailsInput!
    $condition: ModelMainDetailsConditionInput
  ) {
    updateMainDetails(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteMainDetails = /* GraphQL */ `
  mutation DeleteMainDetails(
    $input: DeleteMainDetailsInput!
    $condition: ModelMainDetailsConditionInput
  ) {
    deleteMainDetails(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
