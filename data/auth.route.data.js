const data = (params) => {
    return`import express from "express"
import { authUser, deleteUser, getAllUsers, getUserById, registerUser, userProfile, userUpdate, userUpdate_admin } from "../controllers/userControllers.js"
import { protect, admin } from "../middleware/authMiddleware.js"
const userRoutes = express.Router()



userRoutes.route('/').post(registerUser).get(protect,admin,getAllUsers)
userRoutes.route('/login').post(authUser)
userRoutes
    .route('/profile')
    .get(protect, userProfile)
    .put(protect, userUpdate)
userRoutes
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, userUpdate_admin)


export default userRouter`
}
export default data