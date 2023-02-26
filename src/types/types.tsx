export interface UserProps {
    id: string;
    username: string;
    fullName: string;
    description: string;
    followers: number;
    following: number;
    postsAmount:number;
    lastPost: Date;
    phone:string;
    email:string;
    site:string;
    potentiallyBusiness: boolean;
    business:true;
    businessCategory: string;
    countryCode:string;
    countryReason: string;
}