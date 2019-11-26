class RankingController {
  async index(req, res) {
    return res.status(200).json([{ranking: 1}]);
  }
}

export default new RankingController();
