import { Course } from "@prisma/client";
import { CreateCourseInput } from "../dto/create-course.input";
import { UpdateCourseInput } from "../dto/update-course.input";

export interface ICourseService {
      createOneCourse(body: CreateCourseInput): Promise<Course>;
      findCourseByName(course_name: string): Promise<Course>;
      findAllCourse(params: {skip?: number, take?: number}): Promise<Course[]>;
      updateCourse(courseId: number, bodyToUpdate: UpdateCourseInput): Promise<Course>;
      deleteCourse(courseId: number): Promise<void>;
}