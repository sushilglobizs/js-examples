export interface User {
    id:        number;
    firstname: string;
    lastname:  string;
    email:     string;
    birthDate: Date;
    login:     Login;
    address:   Address;
    phone:     string;
    website:   string;
    company:   Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface Login {
    uuid:       string;
    username:   string;
    password:   string;
    md5:        string;
    sha1:       string;
    registered: Date;
}