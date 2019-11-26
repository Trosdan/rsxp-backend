import User from '../schemas/User';

class ScoreController {
  async store(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId);

    const userScore = { ...user, score: user.score + req.body.score };

    await User.updateOne({ _id: userId }, { score: userScore.score });

    return res.json({ ...userScore._doc, score: userScore.score });
  }
}

export default new ScoreController();
