import {Sequelize} from "sequelize";

//importando dotenv para 
//acessar as variaveis de ambiente
import dotenv from 'dotenv'
dotenv.config()

// const sequelize = new Sequelize("dbAquiseulixo","root", "123456", {
//     host: 'localhost',
//     dialet:'mysql'
// })

const dbHost = process.env.MYSQL_HOST as string
export const sequelize = new Sequelize(
    //recebendo os parametros de 
    //dotenv para iniciar nossa conexão 
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port: parseInt(process.env.MYSQL_PORT as string),
        host: dbHost,
        logging: false
    }
)