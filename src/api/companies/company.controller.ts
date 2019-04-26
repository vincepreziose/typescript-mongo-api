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

const createCompany = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from createCompany controller!'
  })
};

const deleteById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getProjects controller!'
  })
};

const getById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getCompanies controller!'
  })
};

const getCompanies = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getCompanies controller!'
  })
};

const updateById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getProjects controller!'
  })
};

export default {
  _load,
  createCompany,
  deleteById,
  getById,
  getCompanies,
  updateById
};
