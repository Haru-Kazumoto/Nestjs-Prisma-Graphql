import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { PrismaModule } from 'prisma/services/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CourseResolver, CourseService]
})
export class CourseModule {}
