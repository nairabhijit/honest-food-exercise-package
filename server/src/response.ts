import { Response } from "express";

export enum ResponseStatusCodes {
  BAD_REQUEST = 400,
  OK = 200,
}

export const sendErrorResponse = (res: Response) => {
  return (statusCode: ResponseStatusCodes, errorMessage: string) => {
    res.status(statusCode);
    res.send({
      error: true,
      message: errorMessage,
    });
  };
};

export const sendSuccessResponse = (res: Response) => {
  return (details: any) => {
    res.status(ResponseStatusCodes.OK);
    res.send({
      success: true,
      details,
    });
  };
};
