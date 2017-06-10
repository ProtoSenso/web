export class User {
    constructor(uId: string, fullName: string){
        this.uId = uId;
        this.fullName = fullName;
    }

    uId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    photoUrl: string;
    age: number;
    dateOfBirth: Date;
    location: string;

    watcherType: number;
    parents: any[];
    children: any[];
    sensors: any[];
}