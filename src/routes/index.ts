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

router.get('/informacao1',pageController.noticia)

router.get('/informacao2',pageController.noticia2)

router.get('/informacao3',pageController.noticia3)

router.get('/informacao4',pageController.noticia4)

router.get('/informacao5',pageController.noticia5)

router.get('/cadastro', userController.cadastro)

router.get('/login',userController.login)



router.post('/localizacao',userController.salvaLocalizacao)







export default router