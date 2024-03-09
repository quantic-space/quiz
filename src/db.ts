import sequelize from "sequelize";
import * as config from './config'



const db = new sequelize.Sequelize({
   dialect: 'mysql',
   host: config.db_host,
   port:config.db_port,
   username: config.db_username,
   password: config.db_password
   
})

export default db