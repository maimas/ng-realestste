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

export const ATTACHMENT_FRAGMENT = {
  NAME: '...AttachmentFragment',
  VALUE: `
  fragment AttachmentFragment on Attachment {
    id
    createdBy
    createdOn
    deletedBy
    deletedOn
    modifiedBy
    modifiedOn
    relatedItemId
    type
    name
    data
    metadata
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
  offerType
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
  amenities
  buildCondition
  buildingType
  condition
  floorNumber
  totalFloors
  parking
  parkingAvailable
  sizeUnitOfMeasurement
  thumbnail
  totalBalconies
  totalBathRooms
  totalRooms
  totalSize
}`
};

export const HYDRATED_PROPERTY_FRAGMENT = {
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
  attachments{
    ${ATTACHMENT_FRAGMENT.NAME}
  }
  amenities
  buildCondition
  buildingType
  condition
  floorNumber
  totalFloors
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
${PROPERTY_OFFER_FRAGMENT.VALUE}
${ATTACHMENT_FRAGMENT.VALUE}
`
};
