import { Module, NestModule } from '@nestjs/common';
import { GraphqlConfigModule } from './config/graphql.config/graphql.config.module';
import { PrismaModule } from 'prisma/services/prisma.module';
import { UserModule } from './modules/user/user.module';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [
    GraphqlConfigModule,
    UserModule,
    PrismaModule,
    StudentModule,
    CourseModule
  ],
  providers: [
  ]
})
export class AppModule {
}
