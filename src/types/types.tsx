export interface UserProps {
    id: string;
    username: string;
    fullName: string;
    description: string;
    followers: number;
    following: number;
    postsAmount:number;
    lastPost: string;
    phone:string;
    email:string;
    site:string;
    potentiallyBusiness: boolean;
    business:boolean;
    businessCategory: string;
    countryCode:string;
    countryReason: string;
}

export interface ValueProps {
    query: string;
    isBusiness: boolean;
    isPhone: boolean;
    isEmail: boolean;
    isSite: boolean;
    userCountry: CountryProps;
    isCountry: boolean;
    filterKey: 'filterUsername' | '' | 'filterFullName' | 'filterSite' | 'filterEmail' | 'filterBusinessCategory';
    filterValue: string;
    maxFollowers: string;
    minFollowers: string;
}

export interface CountryProps {
    code: string;
    label: string;
    phone: string;
}
