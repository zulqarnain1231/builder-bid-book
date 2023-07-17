declare module ""

export interface ISubcontractorSignUpTypes {
  firstName: string;
  lastName: string;
  companyEmail: string;
  password: string;
  confirmPassword: string;
  phone: string;
  companyName: string;
  state: string;
  county: string;
  csiDivision: string | undefined;
}

export interface IGeneralContractor {
  csiDivision: string | undefined;
  county: string;
  instructions: string;
  attachment: File | undefined;
}

export interface ISubContractor {
  csiDivision: string | undefined;
  county: string | undefined;
  state: string | undefined;
  searchedKeyword: string;
}

export interface IContactList {
  csiDivision: string | undefined;
  county: string | undefined;
  searchedKeyword: string;
}
