import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const user = await User.create({ name: req.body.name });
    return res.json(user);
  }

  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.json(user);
  }
}

export default new UserController();
