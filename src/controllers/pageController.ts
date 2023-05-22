import {Request, Response} from 'express'
import { sequelize } from '../config/mysql'

export const home = async (req:Request,res:Response) =>{
    console.log(req.body.nome)

    /*
    testar conexão com o banco
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida")
    }catch(error){
        console.log("deu erro", error)
    } */
    

    res.render("pages/home")

}

export const mapa = (req:Request,res:Response) =>{
    res.render("pages/mapa")
}

export const faleconosco = (req:Request,res:Response) =>{
    res.render("pages/faleconosco")
}

export const sobrenos = (req:Request,res:Response) =>{
    res.render("pages/sobrenos")
}

export const usuario = (req:Request,res:Response) =>{
    res.render("pages/usuario")
}

export const noticia = (req:Request,res:Response) =>{
    res.render("pages/Reciclagem-de-Eletronicos")
}

export const noticia2 = (req:Request,res:Response) =>{
    res.render("pages/Tecnologias-Emergentes-na-Reciclagem-de-Lixo-Eletronico")
}

export const noticia3 = (req:Request,res:Response) =>{
    res.render("pages/O-Papel-das-Empresas")
}

export const noticia4 = (req:Request,res:Response) =>{
    res.render("pages/Reciclando-em-Casa")
}

export const noticia5 = (req:Request,res:Response) =>{
    res.render("pages/Oportunidades-Economicas")
}




