import {Injectable} from '@angular/core';
import {gql} from '@apollo/client/core';
import {Apollo, QueryRef} from 'apollo-angular';
import {QueryFindAllPropertiesArgs, QueryFindPropertyByIdArgs} from '../../@generated/app-graphql-models';

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

  getAllProperties(args: QueryFindAllPropertiesArgs): QueryRef<QueryFindAllPropertiesArgs> {
    return this.apollo
      .watchQuery({
        query: gql`query findAllProperties($offset:Int!, $limit:Int){
                     findAllProperties(offset:$offset, limit:$limit){
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

export const PROPERTY_OFFER_FRAGMENT = {
  NAME: '...PropertyOfferFragment',
  VALUE: `
  fragment PropertyOfferFragment on PropertyOffer {
  id
  createdBy
  createdOn
  modifiedBy
  modifiedOn
  deletedBy
  deletedOn
  propertyId
  type
  dateAvailable
  contactName
  contactType
  currency
  description
  email
  phoneNumber
  price
}
  `
};

export const ADDRESS_FRAGMENT = {
  NAME: '...AddressFragment',
  VALUE: `
  fragment AddressFragment on Address {
  sector
  city
  country
  streetAddress
  zipCode
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
  address{
    ${ADDRESS_FRAGMENT.NAME}
  }
  offer {
    ${PROPERTY_OFFER_FRAGMENT.NAME}
  }
  amenities
  buildCondition
  buildingType
  condition
  floorNumber
  totalFloors
  images
  parking
  parkingAvailable
  sizeUnitOfMeasurement
  thumbnail
  totalBalconies
  totalBathRooms
  totalRooms
  totalSize
}
${USER_FRAGMENT.VALUE}
${ADDRESS_FRAGMENT.VALUE}
${PROPERTY_OFFER_FRAGMENT.VALUE}`
};
