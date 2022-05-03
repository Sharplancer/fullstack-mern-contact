import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { contactRoute } from './routes/contact.route';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import * as config from './config';

console.log(`*******************************************`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`config: ${JSON.stringify(config, null, 2)}`);
console.log(`*******************************************`);

//connect MongoDB
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/contacts")
    .then(() => {
      return console.info('Successfully connected to Database');
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    });
};
connect()
mongoose.connection.on('disconnected', connect);

//Express configuration
const app = express();
app.set('view engine', 'ejs');

app.use('/assets', <any>express.static(path.join(process.cwd(), 'assets')));
app.use(apiRouter());
app.use(contactRoute());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});
