import('../db/mongoDB/db-connection.js');
import { app } from "../app/app.js";

app.listen(3000, () => console.log('server listens on port 3000.'));