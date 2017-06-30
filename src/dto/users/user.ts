export class User {

    uid: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    fullName(): string { return this.firstName + " " + this.lastName;  }
    photoUrl: string;
    age: number;
    dateOfBirth: string;
    location: string;
    watcherType: number;

    followee: any[];
    followers: any[];
    sensors: any[];
}