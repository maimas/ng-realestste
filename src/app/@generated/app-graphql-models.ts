import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Base64-encoded binary */
  Base64String: any;
  /** Built-in scalar for dynamic values */
  ObjectScalar: any;
  /** Built-in scalar representing an instant in time */
  Instant: any;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
  /** Built-in scalar for map-like structures */
  HashMap_String_ObjectScalar: any;
};



export type User = {
  __typename?: 'User';
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  dateOfBirth?: Maybe<Scalars['Instant']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  email?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  status?: Maybe<Status>;
};

export enum ContactType {
  Agent = 'Agent',
  Owner = 'Owner'
}

/** Query root */
export type Query = {
  __typename?: 'Query';
  findPropertyById?: Maybe<Property>;
  findAllProperties?: Maybe<Array<Maybe<Property>>>;
  findPropertiesByCreatedBy?: Maybe<Array<Maybe<Property>>>;
  findUserById?: Maybe<User>;
  findUserByEmail?: Maybe<User>;
};


/** Query root */
export type QueryFindPropertyByIdArgs = {
  id: Scalars['String'];
};


/** Query root */
export type QueryFindAllPropertiesArgs = {
  offset: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};


/** Query root */
export type QueryFindPropertiesByCreatedByArgs = {
  username: Scalars['String'];
};


/** Query root */
export type QueryFindUserByIdArgs = {
  id: Scalars['String'];
};


/** Query root */
export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  country?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
};

export type PropertyOfferInput = {
  offerType?: Maybe<OfferType>;
  contactName?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  phoneNumber?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  createdOn?: Maybe<Scalars['Instant']>;
  modifiedBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contactType?: Maybe<ContactType>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  dateAvailable?: Maybe<Scalars['Instant']>;
  email?: Maybe<Scalars['String']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  data?: Maybe<Scalars['Base64String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['HashMap_String_ObjectScalar']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  name?: Maybe<Scalars['String']>;
  relatedItemId?: Maybe<Scalars['String']>;
  type?: Maybe<AttachmentType>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}


export enum OfferType {
  Buy = 'Buy',
  Rent = 'Rent',
  Sell = 'Sell'
}

export enum BuildingType {
  Apartment = 'Apartment',
  Condo = 'Condo',
  House = 'House',
  Unknown = 'Unknown'
}

export type PropertyOffer = {
  __typename?: 'PropertyOffer';
  changes?: Maybe<Array<Maybe<Change>>>;
  contactName?: Maybe<Scalars['String']>;
  contactType?: Maybe<ContactType>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  currency?: Maybe<Currency>;
  dateAvailable?: Maybe<Scalars['Instant']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  offerType?: Maybe<OfferType>;
  phoneNumber?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  propertyId?: Maybe<Scalars['String']>;
};

export enum Currency {
  Eur = 'EUR',
  Mdl = 'MDL',
  Ron = 'RON',
  Usd = 'USD'
}


export enum AreaUnit {
  Ft2 = 'FT2',
  M2 = 'M2'
}

export type Property = {
  __typename?: 'Property';
  address?: Maybe<Address>;
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  buildCondition?: Maybe<BuildCondition>;
  buildingType?: Maybe<BuildingType>;
  changes?: Maybe<Array<Maybe<Change>>>;
  condition?: Maybe<Condition>;
  createdBy?: Maybe<User>;
  createdOn?: Maybe<Scalars['Instant']>;
  deletedBy?: Maybe<User>;
  deletedOn?: Maybe<Scalars['Instant']>;
  floorNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<User>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  offer?: Maybe<PropertyOffer>;
  parking?: Maybe<Parking>;
  parkingAvailable: Scalars['Boolean'];
  sizeUnitOfMeasurement?: Maybe<AreaUnit>;
  thumbnail?: Maybe<Scalars['Base64String']>;
  totalBalconies?: Maybe<Scalars['Int']>;
  totalBathRooms?: Maybe<Scalars['Int']>;
  totalFloors?: Maybe<Scalars['Int']>;
  totalRooms?: Maybe<Scalars['Int']>;
  totalSize?: Maybe<Scalars['BigDecimal']>;
};

export enum BuildCondition {
  New = 'New',
  Old = 'Old'
}

export enum Condition {
  AfterReparation = 'AfterReparation',
  Normal = 'Normal',
  RequiresReparation = 'RequiresReparation',
  Unknown = 'Unknown'
}

export enum Status {
  Active = 'Active',
  Pending = 'Pending'
}

export enum AttachmentType {
  Doc = 'DOC',
  Html = 'HTML',
  Image = 'IMAGE',
  Pdf = 'PDF',
  Video = 'VIDEO'
}


export enum Parking {
  Private = 'Private',
  Public = 'Public'
}

export type UserInput = {
  createdBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  firstName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Instant']>;
  deletedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  createdOn?: Maybe<Scalars['Instant']>;
  modifiedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
};

export type Change = {
  __typename?: 'Change';
  action?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  fieldName?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  newValue?: Maybe<Scalars['ObjectScalar']>;
  objectId?: Maybe<Scalars['String']>;
  objectType?: Maybe<Scalars['String']>;
  oldValue?: Maybe<Scalars['ObjectScalar']>;
};


export type PropertyInput = {
  deletedOn?: Maybe<Scalars['Instant']>;
  parkingAvailable: Scalars['Boolean'];
  createdBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  thumbnail?: Maybe<Scalars['Base64String']>;
  condition?: Maybe<Condition>;
  modifiedBy?: Maybe<Scalars['String']>;
  sizeUnitOfMeasurement?: Maybe<AreaUnit>;
  id?: Maybe<Scalars['String']>;
  totalFloors?: Maybe<Scalars['Int']>;
  totalBalconies?: Maybe<Scalars['Int']>;
  floorNumber?: Maybe<Scalars['Int']>;
  parking?: Maybe<Parking>;
  totalRooms?: Maybe<Scalars['Int']>;
  totalSize?: Maybe<Scalars['BigDecimal']>;
  address?: Maybe<AddressInput>;
  deletedBy?: Maybe<Scalars['String']>;
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  createdOn?: Maybe<Scalars['Instant']>;
  totalBathRooms?: Maybe<Scalars['Int']>;
  buildCondition?: Maybe<BuildCondition>;
  buildingType?: Maybe<BuildingType>;
};



export type AttachmentInput = {
  type?: Maybe<AttachmentType>;
  name?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  relatedItemId?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  metadata?: Maybe<Scalars['HashMap_String_ObjectScalar']>;
  id?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  createdBy?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['Base64String']>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  updateUserPassword?: Maybe<User>;
  updatePropertyThumbnail?: Maybe<Property>;
  enableUser?: Maybe<User>;
  updatePropertyAddress?: Maybe<Property>;
  savePropertyAttachments?: Maybe<Property>;
  createProperty?: Maybe<Property>;
  createUser?: Maybe<User>;
  createOffer?: Maybe<PropertyOffer>;
};


/** Mutation root */
export type MutationUpdateUserPasswordArgs = {
  newPassword: Scalars['String'];
  id: Scalars['String'];
};


/** Mutation root */
export type MutationUpdatePropertyThumbnailArgs = {
  data?: Maybe<Scalars['Base64String']>;
  propertyId: Scalars['String'];
};


/** Mutation root */
export type MutationEnableUserArgs = {
  enable: Scalars['Boolean'];
  id: Scalars['String'];
};


/** Mutation root */
export type MutationUpdatePropertyAddressArgs = {
  address: AddressInput;
  propertyId: Scalars['String'];
};


/** Mutation root */
export type MutationSavePropertyAttachmentsArgs = {
  attachments: Array<Maybe<AttachmentInput>>;
  propertyId: Scalars['String'];
};


/** Mutation root */
export type MutationCreatePropertyArgs = {
  property: PropertyInput;
};


/** Mutation root */
export type MutationCreateUserArgs = {
  user: UserInput;
};


/** Mutation root */
export type MutationCreateOfferArgs = {
  offer: PropertyOfferInput;
};

export enum Amenities {
  AirConditioner = 'AirConditioner',
  ArmoredDor = 'ArmoredDor',
  AutonomousHitting = 'AutonomousHitting',
  CentralizedHitting = 'CentralizedHitting',
  DishWasher = 'DishWasher',
  Dryer = 'Dryer',
  ElectricAutonomousHeating = 'ElectricAutonomousHeating',
  Elevator = 'Elevator',
  FoodMarket = 'FoodMarket',
  FreeParkingZone = 'FreeParkingZone',
  GasAutonomousHeating = 'GasAutonomousHeating',
  Hospital = 'Hospital',
  InterPhone = 'InterPhone',
  Internet = 'Internet',
  Kindergarten = 'Kindergarten',
  MarketPlace = 'MarketPlace',
  Microwave = 'Microwave',
  PaidParkingZone = 'PaidParkingZone',
  Playground = 'Playground',
  School = 'School',
  Stove = 'Stove',
  Supermarket = 'Supermarket',
  Tv = 'TV',
  TvCable = 'TVCable',
  TelephoneLine = 'TelephoneLine',
  WarmFloors = 'WarmFloors',
  Washer = 'Washer'
}
