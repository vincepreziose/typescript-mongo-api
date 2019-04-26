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

const createClient = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from createClient controller!'
  })
};

const deleteById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the load controller!'
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

const getClients = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getClients controller!'
  })
};

const updateById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from the load controller!'
  })
};

export default {
  _load,
  createClient,
  deleteById,
  getById,
  getClients,
  updateById
};
