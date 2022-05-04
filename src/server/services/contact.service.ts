import { Contacts } from '../models/contact.model';

const createContact = (contact, next) => {
  const newContact = new Contacts(contact);
  newContact.save()
  .then(() => {
    console.info('Add ContactForm data to MongoDB successed!');
    next(0, 'success');
  })
  .catch((error => {
    console.error('Add ContactForm data to MongoDB failed!');
    next(1, error);
  }));
};

export { createContact };