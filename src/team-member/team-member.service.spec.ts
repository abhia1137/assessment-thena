import { Test, TestingModule } from '@nestjs/testing';
import { TeamMemberService } from './team-member.service';
import { getModelToken } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// Mock TeamMemberModel
class MockTeamMemberModel {
  constructor(private data: any) {}
  static findOne() {
    return this;
  }

  exec() {
    return this.data;
  }

  static findByIdAndUpdate() {
    return this;
  }

  static findByIdAndDelete() {
    return this;
  }
}

describe('TeamMemberService', () => {
  let service: TeamMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamMemberService,
        {
          provide: getModelToken('TeamMember'), // Use getModelToken to get the token for TeamMemberModel
          useValue: MockTeamMemberModel, // Provide the mock TeamMemberModel
        },
      ],
    }).compile();

    service = module.get<TeamMemberService>(TeamMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Write your test cases here
});
