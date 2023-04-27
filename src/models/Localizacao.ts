import {Model, DataTypes} from'sequelize'
import {sequelize} from '../config/mysql'

//criando um modelo para o users do meu banco
export interface LocalizacaoInstance extends Model{
    codLoc:number
    endereco:string
    numero:string
    cep:string
    complemento:string
    bairro:string
    cidade:string
    siglaEst:string
}

export const Localizacao = sequelize.define<LocalizacaoInstance>("Localizacao,",{
    codLoc:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull:false
    },
    numero:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    cep:{
        type: DataTypes.STRING,
        allowNull:false
    },
    complemento:{
        type: DataTypes.STRING,
        allowNull:true
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull:false
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull:false
    },
    siglaEst:{
        type: DataTypes.STRING,
        allowNull:false
    },


},{
    tableName:'tblocalizacao',
    timestamps:false
})