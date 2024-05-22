import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember, TeamMemberDocument } from 'src/team-member.schema';
// import { TeamMember, TeamMemberDocument } from './team-member.schema';

@Injectable()
export class TeamMemberService {
  constructor(
    @InjectModel(TeamMember.name)
    private teamMemberModel: Model<TeamMemberDocument>,
  ) {}

  async create(createTeamMemberDto: any): Promise<TeamMember> {
    const createdTeamMember = new this.teamMemberModel(createTeamMemberDto);
    return createdTeamMember.save();
  }

  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberModel.find().exec();
  }

  async update(id: string, updateTeamMemberDto: any): Promise<TeamMember> {
    const existingTeamMember = await this.teamMemberModel.findByIdAndUpdate(
      id,
      updateTeamMemberDto,
      { new: true },
    );
    if (!existingTeamMember) {
      throw new NotFoundException(`TeamMember with ID "${id}" not found`);
    }
    return existingTeamMember;
  }

  async delete(id: string): Promise<void> {
    const result = await this.teamMemberModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`TeamMember with ID "${id}" not found`);
    }
  }
}
