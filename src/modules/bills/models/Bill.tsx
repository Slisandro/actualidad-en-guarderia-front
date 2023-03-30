import { Course } from "../../courses/models/Course";
import { User } from "../../users/models/User";

export interface Bill {
    id: string;
    user: User;
    course: Course;
    dateCreated: string;
}