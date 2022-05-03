import { Contact } from '../models/contact.model';


const createContact = (contact, next) => {
  Contact.create(contact)
  .then(() => {
    next(0, 'success');
  })
  .catch((error => {
    next(1, error);
  }));
};

export { createContact };