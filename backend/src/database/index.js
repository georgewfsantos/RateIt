import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Comment from '../app/models/Comment';

import databaseConfig from '../config/database';

const models = [User, File, Comment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
