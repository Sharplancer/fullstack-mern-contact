import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { connectDB } from './utils/dbSetup';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import * as config from './server_config';

console.log(`*******************************************`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`config: ${JSON.stringify(config, null, 2)}`);
console.log(`*******************************************`);


connectDB();
mongoose.connection.on('disconnected', connectDB);

//Express configuration
const app = express();
app.set('view engine', 'ejs');

app.use('/assets', <any>express.static(path.join(process.cwd(), 'assets')));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});
