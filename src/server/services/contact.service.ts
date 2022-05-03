import { Contacts } from '../models/contact.model';

const createContact = (contact, next) => {
  const newContact = new Contacts(contact);
  newContact.save()
  .then(() => {
    next(0, 'success');
  })
  .catch((error => {
    next(1, error);
  }));
};

export { createContact };