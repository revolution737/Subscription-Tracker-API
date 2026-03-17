import { Router } from 'express';
import { signIn, signUp, signOut } from '../controllers/authRouter.controller.js';

const authRouter = Router();

authRouter.post('/sign-up', signIn)
authRouter.post('/sign-in', signOut)
authRouter.post('/sign-out', signUp)

export default authRouter;