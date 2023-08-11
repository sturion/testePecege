export interface PersonData {
    name?: string;
    phone?: string;
    email?: string;
    id?: number;
    username?: string;
    address?:{
        street?:string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: {
            lat?:string;
            lng?:string;
        }
    }
    website?: string;
    company?:{
        name?: string;
        catchPhrase?: string;
        bs?: string;
    }

  }