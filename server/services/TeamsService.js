import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class TeamsService {
  async removeTeam(teamId) {
    const team = await this.getTeamById(teamId)
    fakeDb.teams.splice(fakeDb.teams.indexOf(team), 1)
  }

  createTeam(formData) {
    // FIXME this also assumes the client is sending us good data..... not a good idea
    // big changes for tomorrow
    formData.id = Math.floor(Math.random() * 10000) // SUPER FAKE ONLY FOR TODAY
    fakeDb.teams.push(formData)
    return formData
  }

  async getTeamById(teamId) {
    // tomorrow small changes
    const team = fakeDb.teams.find(t => t.id == teamId)

    if (!team) {
      throw new BadRequest('Invalid Id')
      // FULL STOP
    }

    return team
  }

  async getTeams() {
    // tomorrow small changes
    const res = fakeDb
    return res.teams
  }


}


export const teamsService = new TeamsService()
