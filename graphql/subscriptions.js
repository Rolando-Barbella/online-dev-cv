/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMainDetails = /* GraphQL */ `
  subscription OnCreateMainDetails {
    onCreateMainDetails {
      id
      name
      lastName
      email
      location
      description
      skills {
        id
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
export const onUpdateMainDetails = /* GraphQL */ `
  subscription OnUpdateMainDetails {
    onUpdateMainDetails {
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
export const onDeleteMainDetails = /* GraphQL */ `
  subscription OnDeleteMainDetails {
    onDeleteMainDetails {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
          id
          name
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
