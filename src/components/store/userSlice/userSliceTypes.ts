export interface Users {
  id: string,
  name: string,
  username: string,
  email: string,
  address: Address
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface Geo {
  lat: "-37.3159",
  lng: "81.1496"
}

export interface TodoState {
  list: Users[],
  loading: boolean,
  error: string | null
}

