import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TeamMember } from 'src/team-member.schema';
import { TeamMemberService } from './team-member.service';

@Controller('team-members')
export class TeamMemberController {
  constructor(private readonly teamMemberService: TeamMemberService) {}

  @Post()
  async create(@Body() createTeamMemberDto: any): Promise<TeamMember> {
    return this.teamMemberService.create(createTeamMemberDto);
  }

  @Get()
  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeamMemberDto: any,
  ): Promise<TeamMember> {
    return this.teamMemberService.update(id, updateTeamMemberDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.teamMemberService.delete(id);
  }
}
