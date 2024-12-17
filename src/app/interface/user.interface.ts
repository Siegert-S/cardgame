import { Friend } from "./friend.interface";

export interface User {
    id: string;
    name: string;
    friends?: Friend[];
    type: "user";
    online: boolean;
}
