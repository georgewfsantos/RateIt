// import * as Yup from 'yup';
import { Op } from 'sequelize';
import User from '../models/User';
import File from '../models/File';

class FilterBusinessesController {
  async index(req, res) {
    const { businessType } = req.query;

    const businessList = businessType
      ? await User.findAll({
          where: {
            type: {
              [Op.iLike]: `%${businessType}`,
            },
          },
          attributes: ['id', 'type', 'name', 'email', 'provider', 'type'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        })
      : await User.findAll({
          where: {
            provider: true,
          },
        });

    return res.json(businessList);
  }
}

export default new FilterBusinessesController();
