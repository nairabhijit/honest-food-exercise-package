import { sendErrorResponse, ResponseStatusCodes } from "./response";
import express, { Request, Response, NextFunction } from "express";
import { fetchOutletIdentifier } from "./controller";
import cors from "cors";

const app = express();

const configureRoutes = () => {
  const router = express.Router();
  router.use("/outlet-identifier", fetchOutletIdentifier);
  // enable cors
  app.use(cors());
  // current supported version v1
  app.use("/api/v1", router);
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    sendErrorResponse(res)(ResponseStatusCodes.BAD_REQUEST, error.message);
  });
  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Great to see you here!!!");
  });
  return app;
};

export default configureRoutes;
