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
  sector?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
};

export type PropertyOfferInput = {
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  dateAvailable?: Maybe<Scalars['Instant']>;
  type?: Maybe<Type>;
  contactType?: Maybe<ContactType>;
  id?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  propertyId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['String']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  createdOn?: Maybe<Scalars['Instant']>;
  modifiedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['Instant']>;
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
  phoneNumber?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
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


export enum Parking {
  Private = 'Private',
  Public = 'Public'
}

export type UserInput = {
  deletedBy?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  deletedOn?: Maybe<Scalars['Instant']>;
  id?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Instant']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  createdOn?: Maybe<Scalars['Instant']>;
  gender?: Maybe<Gender>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  modifiedBy?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
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
  totalRooms?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['Base64String']>;
  images?: Maybe<Array<Maybe<Scalars['Base64String']>>>;
  totalBathRooms?: Maybe<Scalars['Int']>;
  modifiedOn?: Maybe<Scalars['Instant']>;
  modifiedBy?: Maybe<Scalars['String']>;
  parkingAvailable: Scalars['Boolean'];
  deletedBy?: Maybe<Scalars['String']>;
  buildingType?: Maybe<BuildingType>;
  address?: Maybe<AddressInput>;
  totalFloors?: Maybe<Scalars['Int']>;
  condition?: Maybe<Condition>;
  createdBy?: Maybe<Scalars['String']>;
  totalSize?: Maybe<Scalars['BigDecimal']>;
  totalBalconies?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  buildCondition?: Maybe<BuildCondition>;
  sizeUnitOfMeasurement?: Maybe<AreaUnit>;
  createdOn?: Maybe<Scalars['Instant']>;
  floorNumber?: Maybe<Scalars['Int']>;
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  deletedOn?: Maybe<Scalars['Instant']>;
  parking?: Maybe<Parking>;
};

export enum Type {
  Buy = 'Buy',
  Rent = 'Rent',
  Sell = 'Sell'
}


/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  updateUserPassword?: Maybe<User>;
  updatePropertyThumbnail?: Maybe<Property>;
  enableUser?: Maybe<User>;
  updatePropertyAddress?: Maybe<Property>;
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
