import { Router } from 'express';
import { CreateUserController } from './useCases/createUser/CreateUserController';

const authenticateUserController = new CreateUserController()

const router = Router();

router.post('/user', authenticateUserController.handle)

export { router };