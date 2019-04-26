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

const createShift = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from createShifts controller!'
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

const getShifts = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getShifts controller!'
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
  createShift,
  deleteById,
  getById,
  getShifts,
  updateById
};
