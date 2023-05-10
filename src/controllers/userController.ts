// cadastro e login
import {Request, Response} from 'express'
import { Localizacao } from '../models/Localizacao'

export const cadastro =  (req:Request,res:Response) =>{
    res.render("pages/cadastro")
}

export const login = async (req:Request,res:Response) =>{
    res.render("pages/login")
}

export const salvaLocalizacao = async (req:Request,res:Response) => {
    const endereco = req.body.endereco
    const num = req.body.numero
    const cep = req.body.cep
    const complemento = req.body.complemento
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const estado = req.body.estado

     console.log(`\nendereco = ${endereco}\nnumero = ${num}\n cep = ${cep}\ncomplemento = ${complemento}\nbairro = ${bairro}\ncidade = ${cidade}\nestado = ${estado}\n`)
    console.log(`endereco = ${endereco}`);


    const nova_localizacao = Localizacao.build({
        endereco:endereco,
        numero:num,
        cep:cep,
        complemento:complemento,
        bairro:bairro,
        cidade:cidade,
        siglaEst:estado
    })

    await nova_localizacao.save()
    res.redirect("/")

}
