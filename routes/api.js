import express from 'express';
import { index,store,show,update, deleteItem } from '../controllers/UserController.js'; 
const router = express.Router();

router.get('/',(reg,res) =>{
    return res.status(200).send('Welcome to express js');
});

router.get('/users',index);
router.post('/users',store);
router.get('/users/:id',show);
router.put('/users/:id',update);
router.delete('/users/:id',deleteItem);
export default router;