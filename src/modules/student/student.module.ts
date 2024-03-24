import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { PrismaModule } from 'prisma/services/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
