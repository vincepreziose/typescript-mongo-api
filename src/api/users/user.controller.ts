import * as express from 'express';

const _load = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the load controller!'
  })
};

const createEmployee = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from createEmployees controller!'
  })
};

const deleteById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the delete controller!'
  })
};

const getById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the load controller!'
  })
};

const getEmployees = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getEmployees controller!'
  })
};

const login = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from login controller!'
  })
};

const register = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  const { companyName, email, name, password, phoneNumber } = req.body;
  res.status(200).json({
    message: 'hello from register controller!'
  })
};

const updateById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the update controller!'
  })
};

export default {
  _load,
  createEmployee,
  deleteById,
  getById,
  getEmployees,
  login,
  register,
  updateById,
};
