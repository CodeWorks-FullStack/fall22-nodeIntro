import BaseController from "../utils/BaseController.js";

export class PlayersController extends BaseController {
  constructor() {
    super('api/players')
    this.router
      .get('', this.test)

  }

  // relationships query params pagination
  test(req, res, next) {
    try {
      res.send({
        page: 1,
        next: '?page=2',
        prev: null,
        results: [{
          name: 'Bobby Smith',
          number: 12,
          position: 'left bench',
          team: 1003
        }]
      })
    } catch (error) {
      next(error)
    }

  }
}
