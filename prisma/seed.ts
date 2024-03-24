import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

import * as dotenv from 'dotenv';
import { CreateUserInput } from "src/modules/user/dto/input/create-user.input";
import { CreateCourseInput } from "src/modules/course/dto/create-course.input";

const prisma = new PrismaClient();

const courseData: CreateCourseInput[] = [
      {
            course_name: "Java tutorial from scratch"
      },
      {
            course_name: "Ruby tutorial from scratch"
      },
      {
            course_name: "PHP tutorial from scratch"
      },
      {
            course_name: "Go tutorial from scratch"
      },
      {
            course_name: "Javascript tutorial from scratch"
      },
      {
            course_name: "Typescript tutorial from scratch"
      }
]

      async function main() {
            await prisma.course.createMany({data: courseData});
      }

main()
      .catch((e) => console.error(e))
      .finally(async () => {
            await prisma.$disconnect();
      })