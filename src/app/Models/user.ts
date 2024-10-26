export interface User {
    id :number,
    name:string,
    email:string,
    password:string,
    phone: string
    address? : Address
}

export interface Address{
    id : number,
    addressLine1:string,
    addressLine2:string,
    city:string
}