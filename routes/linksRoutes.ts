import {Router} from 'express';
import * as linksController from '../controllers/linksController';


const router = Router();

router.get('/links/:id', linksController.getOne);
router.get('/links', linksController.getAll);
router.post('links', linksController.createOne);
router.delete('/links/:id', linksController.deleteOne);
router.put('/links/:id', linksController.updateOne);