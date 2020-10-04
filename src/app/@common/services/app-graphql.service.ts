import {Injectable} from '@angular/core';
import {gql} from '@apollo/client/core';
import {Apollo, QueryRef} from 'apollo-angular';
import {QueryFindPropertyByIdArgs} from '../../@generated/app-graphql-models';

@Injectable()
export class AppGraphqlService {
  constructor(private  apollo: Apollo) {
  }

  getPropertyById(args: QueryFindPropertyByIdArgs): QueryRef<QueryFindPropertyByIdArgs> {
    return this.apollo
      .watchQuery({
        query: gql`query findPropertyById($id:String!){
                     findPropertyById(id:$id){
                        ${PROPERTY_FRAGMENT.NAME}
                      }
                    }
               ${PROPERTY_FRAGMENT.VALUE}`,
        variables: args
      });
  }

}

export const USER_FRAGMENT = {
  NAME: '...UserFragment',
  VALUE: `
  fragment UserFragment on User {
  id
  createdBy
  createdOn
  deletedBy
  deletedOn
  modifiedBy
  modifiedOn
  dateOfBirth
  email
  enabled
  firstName
  gender
  lastName
  status
}
  `
};

export const PROPERTY_FRAGMENT = {
  NAME: '...PropertyFragment',
  VALUE: `
fragment PropertyFragment on Property {
  id
  createdOn
  modifiedOn
  deletedOn
  createdBy{
    ${USER_FRAGMENT.NAME}
  }
  modifiedBy {
      ${USER_FRAGMENT.NAME}
    }
  deletedBy{
    ${USER_FRAGMENT.NAME}
  }
  amenities
  buildCondition
  buildingType
  condition
  floorNumber
  images
  parking
  parkingAvailable
  sizeUnitOfMeasurement
  thumbnail
  totalBalconies
  totalBathRooms
  totalRooms
  totalSize
  listing {
    id
    contactName
    contactType
    createdBy
    deletedBy
    modifiedBy
    createdOn
    modifiedOn
    currency
    description
    email
    phoneNumber
    price
    propertyId
    type
  }
}
${USER_FRAGMENT.VALUE}`
};
