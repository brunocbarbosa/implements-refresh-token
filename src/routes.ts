import { Router } from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

const router = Router();

router.post('/user', createUserController.handle);
router.post('/login', authenticateUserController.handle);

router.get('/courses', ensureAuthenticated, (req, res)=>{
  return res.json([
    {id: 1, name: 'Nodejs'},
    {id: 2, name: 'Reactjs'},
    {id: 3, name: 'React NAtive'},
    {id: 4, name: 'Flutter'},
    {id: 5, name: 'Elixir'}
  ])
})

export { router };