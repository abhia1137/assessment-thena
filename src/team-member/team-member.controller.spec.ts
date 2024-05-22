import { Test, TestingModule } from '@nestjs/testing';
import { TeamMemberController } from './team-member.controller';
import { TeamMemberService } from './team-member.service';

class MockTeamMemberService {
  async create(): Promise<void> {
    return Promise.resolve();
  }

  async findAll(): Promise<void> {
    return Promise.resolve();
  }
  async update(): Promise<void> {
    return Promise.resolve();
  }
  async delete(): Promise<void> {
    return Promise.resolve();
  }
}

describe('TeamMemberController', () => {
  let controller: TeamMemberController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let mockTeamMemberService: MockTeamMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamMemberController],
      providers: [
        {
          provide: TeamMemberService,
          useClass: MockTeamMemberService, // Provide the mock TeamMemberService
        },
      ],
    }).compile();

    controller = module.get<TeamMemberController>(TeamMemberController);
    mockTeamMemberService = module.get<any>(TeamMemberService); // Get the mock service instance
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Write your test cases here
});
