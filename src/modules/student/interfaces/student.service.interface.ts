import { Course, Student } from "@prisma/client";
import { CreateStudentInput } from "../dto/create-student.input";

export interface IStudentService {
    createOneStudent(body: CreateStudentInput): Promise<Student>;
    findManyStudents(params: {skip: number, take: number}): Promise<Student[]>;
}