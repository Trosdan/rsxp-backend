import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const user = await User.create({ name: req.body.name });
    return res.json(user);
  }
}

export default new UserController();
