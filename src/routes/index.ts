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

router.get('/noticia',pageController.noticia)

router.get('/noticia2',pageController.noticia2)

router.get('/noticia3',pageController.noticia3)

router.get('/noticia4',pageController.noticia4)

router.get('/noticia5',pageController.noticia5)

router.get('/cadastro', userController.cadastro)



router.get('/login',userController.login)



router.post('/localizacao',userController.salvaLocalizacao)







export default router