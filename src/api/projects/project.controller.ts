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

const createProject = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from createProject controller!'
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
    message: 'hello from getProjects controller!'
  })
};

const getProjects = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  res.status(200).json({
    message: 'hello from getProjects controller!'
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
  createProject,
  deleteById,
  getById,
  getProjects,
  updateById
};
