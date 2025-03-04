//definir estructures necesarias para crear el json schema
export type User = {
    id: string
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}
type Address={
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}
type Geo ={
    lat: number
    lng: number
}
type Company ={
    name: string
    catchPhrase: string
    bs: string
}