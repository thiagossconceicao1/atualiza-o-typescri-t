import {Router, Request, Response} from 'express'
import dotenv from 'dotenv'
import * as pageController from '../controllers/pageController'
import * as userController from '../controllers/userController'

const router = Router()
dotenv.config()



router.get('/',pageController.home)

router.get('/mapa',pageController.mapa)

router.get('/faleconosco', pageController.faleconosco)

router.get('/sobrenos',pageController.sobrenos)
 
router.get('/usuario',pageController.usuario)

router.get('/Reciclagem-de-Eletronicos',pageController.noticia)

router.get('/Tecnologias-Emergentes-na-Reciclagem-de-Lixo-Eletronico',pageController.noticia2)

router.get('/O-Papel-das-Empresas',pageController.noticia3)

router.get('/Reciclando-em-Casa',pageController.noticia4)

router.get('/Oportunidades-Economicas',pageController.noticia5)

router.get('/cadastro', userController.cadastro)

router.get('/login',userController.login)



router.post('/localizacao',userController.salvaLocalizacao)







export default router