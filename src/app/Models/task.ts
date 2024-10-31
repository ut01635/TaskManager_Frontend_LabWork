import { User } from "./user";

export interface Task{
    id :number
    title: string;
    description : string;
    dueDate : Date;
    priority :string;
    user : User
    
}