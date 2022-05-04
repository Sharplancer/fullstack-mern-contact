import { Contacts } from '../models/contact.model';

const createContact = (contact, next) => {
  const newContact = new Contacts(contact);
  return newContact.save()
  .then(() => {
    next(0, 'success');
    return true;
  })
  .catch(error => {
    next(1, error);
    return false;
  });
};

export { createContact };