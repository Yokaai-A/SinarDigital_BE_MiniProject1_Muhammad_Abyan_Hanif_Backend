import app from "./src/app.js";
import { APP_PORT } from "./src/config/app.config.js";

app.listen(APP_PORT, () => {
  console.log(`Server running on http://localhost:${APP_PORT}`);
});
