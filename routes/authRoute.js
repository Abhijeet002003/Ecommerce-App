import express from "express"
import { registerController,loginController,testController } from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGSTER || METHOD POST
router.post(`/register`,registerController)

//LOGIN|| POST
router.post('/login', loginController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController);

export default router