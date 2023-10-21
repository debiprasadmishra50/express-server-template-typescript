import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catch-async";
import AppError from "../utils/app-error";
import { getRepository } from "../utils/get-data-source";
import { User } from "./../models/user.entity";

export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);
  console.log(req.body);
  const { username } = req.body;

  const user = await userRepository.save(userRepository.create({ username }));

  res.status(200).json({ status: "success", data: { user } });
});

export const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);
  const { limit, page } = req.body;
  const offset = (+page - 1) * +limit;

  const users = await userRepository.find({ take: limit || 10, skip: offset || 0 });

  res.status(200).json({ status: "succes", results: users.length, data: users });
});

export const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);
  console.log(req.body);

  res.status(200).json({});
});

export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);
  console.log(req.body);

  res.status(200).json({});
});

export const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);
  console.log(req.body);

  res.status(200).json({});
});
