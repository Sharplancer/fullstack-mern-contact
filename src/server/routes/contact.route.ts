import { Router } from 'express';
import { addContact } from '../controllers/contact.controller';

export const contactRoute = () => {
  const router = Router();
  router.post('/api/v1/contacts/', addContact);
  return router;
};