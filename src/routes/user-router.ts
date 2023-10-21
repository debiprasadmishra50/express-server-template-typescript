import express from "express";
import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.post("/users", createUser);

userRouter.get("/users", getUsers);

userRouter.get("/users/:id", getUser);

userRouter.patch("/users/:id", updateUser);

userRouter.delete("/users/:id", deleteUser);

export default userRouter;
