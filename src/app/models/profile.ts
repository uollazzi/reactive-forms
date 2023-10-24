export interface Profile {


  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  active: boolean;
  address: Address;
}

export interface Address {

  street: string;
  city: string;
  state: string;
  zip: string;

}
