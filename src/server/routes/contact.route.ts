import { Router } from 'express';
import { addContact } from '../controllers/contact.controller';

export const contactRoute = () => {
  const router = Router();
  router.post('/api/contact', addContact);
  return router;
};