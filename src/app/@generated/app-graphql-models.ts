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
};



export type PropertyListing = {
  __typename?: 'PropertyListing';
  changes?: Maybe<Array<Maybe<Change>>>;
  contactName?: Maybe<Scalars['String']>;
  contactType?: Maybe<ContactType>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  currency?: Maybe<Currency>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  phoneNumber?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
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
  findUserById?: Maybe<User>;
  findPropertiesByCreatedBy?: Maybe<Array<Maybe<Property>>>;
  findUserByEmail?: Maybe<User>;
};


/** Query root */
export type QueryFindPropertyByIdArgs = {
  id: Scalars['String'];
};


/** Query root */
export type QueryFindUserByIdArgs = {
  id: Scalars['String'];
};


/** Query root */
export type QueryFindPropertiesByCreatedByArgs = {
  username: Scalars['String'];
};


/** Query root */
export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}


export enum BuildingType {
  Apartment = 'Apartment',
  Condo = 'Condo',
  House = 'House',
  Unknown = 'Unknown'
}

export enum Currency {
  Eur = 'EUR',
  Usd = 'USD'
}


export enum AreaUnit {
  Feet = 'Feet',
  Meeter = 'Meeter'
}

export type Property = {
  __typename?: 'Property';
  amenities?: Maybe<Array<Maybe<Amenities>>>;
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
  images?: Maybe<Array<Maybe<Scalars['Base64String']>>>;
  listing?: Maybe<PropertyListing>;
  modifiedBy?: Maybe<User>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  parking?: Maybe<Parking>;
  parkingAvailable: Scalars['Boolean'];
  sizeUnitOfMeasurement?: Maybe<AreaUnit>;
  thumbnail?: Maybe<Scalars['Base64String']>;
  totalBalconies?: Maybe<Scalars['Int']>;
  totalBathRooms?: Maybe<Scalars['Int']>;
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


export enum Parking {
  Private = 'Private',
  Public = 'Public'
}

export type UserInput = {
  gender?: Maybe<Gender>;
  modifiedBy?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  enabled: Scalars['Boolean'];
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  lastName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  firstName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Instant']>;
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
  condition?: Maybe<Condition>;
  createdBy?: Maybe<Scalars['String']>;
  parking?: Maybe<Parking>;
  totalSize?: Maybe<Scalars['BigDecimal']>;
  floorNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  totalBathRooms?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['Base64String']>;
  buildingType?: Maybe<BuildingType>;
  images?: Maybe<Array<Maybe<Scalars['Base64String']>>>;
  deletedBy?: Maybe<Scalars['String']>;
  totalBalconies?: Maybe<Scalars['Int']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  buildCondition?: Maybe<BuildCondition>;
  modifiedBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  deletedOn?: Maybe<Scalars['Instant']>;
  sizeUnitOfMeasurement?: Maybe<AreaUnit>;
  totalRooms?: Maybe<Scalars['Int']>;
  parkingAvailable: Scalars['Boolean'];
};

export enum Type {
  Buy = 'Buy',
  Rent = 'Rent',
  Sell = 'Sell'
}


export type PropertyListingInput = {
  modifiedBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Instant']>;
  createdBy?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  contactType?: Maybe<ContactType>;
  price?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
  id?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  updateUserPassword?: Maybe<User>;
  enableUser?: Maybe<User>;
  createUser?: Maybe<User>;
  createProperty?: Maybe<Property>;
  createOffer?: Maybe<PropertyListing>;
};


/** Mutation root */
export type MutationUpdateUserPasswordArgs = {
  newPassword: Scalars['String'];
  id: Scalars['String'];
};


/** Mutation root */
export type MutationEnableUserArgs = {
  enable: Scalars['Boolean'];
  id: Scalars['String'];
};


/** Mutation root */
export type MutationCreateUserArgs = {
  user: UserInput;
};


/** Mutation root */
export type MutationCreatePropertyArgs = {
  property: PropertyInput;
};


/** Mutation root */
export type MutationCreateOfferArgs = {
  offer: PropertyListingInput;
};

export enum Amenities {
  ArmoredDor = 'ArmoredDor',
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
  PaidParkingZone = 'PaidParkingZone',
  Playground = 'Playground',
  School = 'School',
  Supermarket = 'Supermarket',
  TvCable = 'TVCable',
  TelephoneLine = 'TelephoneLine',
  WarmFloors = 'WarmFloors'
}