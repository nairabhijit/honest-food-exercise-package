require("custom-env").env(process.env.NODE_ENV);
import configureRoutes from "./routes";

Promise.resolve()
  .then(configureRoutes)
  .then((app) => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on PORT ${process.env.PORT}`);
    });
  });
