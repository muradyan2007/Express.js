import {Router} from 'express';
import * as linksController from '../services/linksController';
import { validateLink } from '../validationMiddleware';


const router = Router();

// CRUD - create, retrieve, update, delete
router.post('/links', validateLink, linksController.createOne);
router.get('/links/:id', linksController.getOne);
router.get('/links', linksController.getAll);
router.put('/links/:id', validateLink, linksController.updateOne);
router.delete('/links/:id', linksController.deleteOne);

export default router;
