import { Router } from 'express';
import { addContact } from '../controllers/contact.controller';
import bodyParser from 'body-parser';

export const apiRouter = () => {
  const router = Router();
  router.use(<any>bodyParser.json());
  router.post('/api/v1/contacts', addContact)
  return router;
};