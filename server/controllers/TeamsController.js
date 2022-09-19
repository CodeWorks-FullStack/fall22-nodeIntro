import { teamsService } from "../services/TeamsService.js";
import BaseController from "../utils/BaseController.js";

export class TeamsController extends BaseController {
  constructor() {
    super('api/teams')
    this.router
      .get('', this.getAllTeams)
      .get('/:teamId', this.getTeamById)
    //     ^ param name
      .post('', this.createTeam)
      .delete('/:teamId', this.removeTeam)
  }

  // EVERY SINGLE FUNCTION IN THE CONTROLLER HAS THE EXACT SAME SIGNATURE
  // NO BODY HERE
  async getAllTeams(req, res, next) {
    try {
      const teams = await teamsService.getTeams()
      // sending should always be your final step
      res.send(teams)
    } catch (error) {
      next(error)
    }
  }


  // NO BODY HERE
  async getTeamById(req, res, next) {
    try {
      //                        v param name
      const teamId = req.params.teamId
      const team = await teamsService.getTeamById(teamId)
      res.send(team)
    } catch (error) {
      next(error)
    }
  }


  async createTeam(req, res, next) {
    try {
      // where is the form data?
      const formData = req.body
      const team = await teamsService.createTeam(formData)
      res.send(team)

    } catch (error) {
      next(error)
    }
  }



  async removeTeam(req, res, next){
    try {
      // NO BODY HERE
      await teamsService.removeTeam(req.params.teamId)
      res.send('Team Removed')
    } catch (error) {
      next(error)
    }
  }



}
