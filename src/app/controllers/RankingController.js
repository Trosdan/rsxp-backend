import User from '../schemas/User';

class RankingController {
  async index(req, res) {
    const userRank = await User.find()
      .sort({ score: 'desc' })
      .limit(3);

    return res.status(200).json(userRank);
  }
}

export default new RankingController();
