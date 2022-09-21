
import { Router, Request, Response } from 'express';
import imageprocessing_routes from './api/imageprocessing';
import path from 'path';


const routes = Router();
 routes.get('/',(_req:Request, res: Response) =>{
    res.send(path.resolve("./"));
 
 });
 routes.use('./imageprocessing',imageprocessing_routes);
 export default routes;