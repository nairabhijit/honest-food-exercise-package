import { sendSuccessResponse } from "./response";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { getOutletIdentifier } from "./service";

export const fetchOutletIdentifier = (
  req: Request<{}, {}, {}, { lat: number; lng: number }>,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    lat: Joi.number().required(),
    lng: Joi.number().required(),
  }).optional();
  schema
    .validateAsync(req.query)
    .then((details) => getOutletIdentifier(details.lat, details.lng))
    .then(sendSuccessResponse(res))
    .catch(next);
};
