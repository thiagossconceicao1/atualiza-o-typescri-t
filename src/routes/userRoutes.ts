import { Router, Request, Response } from 'express';

const rotaUsu = Router()

rotaUsu.get('/', (Request: Request, Response: Response) => {
    return Response.json("OK");
});
export default rotaUsu;


