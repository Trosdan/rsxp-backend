class RankingController {
  async index(req, res) {
    return res.status(200).json([{
      id: 1,
      nome: 'Jordan',
      score: 125,
    }]);
  }
}

export default new RankingController();
