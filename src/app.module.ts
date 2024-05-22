import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamMemberModule } from './team-member/team-member.module';

@Module({
  imports: [
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forRoot('mongodb://localhost:27017'),
    TeamMemberModule,
  ],
})
export class AppModule {}
