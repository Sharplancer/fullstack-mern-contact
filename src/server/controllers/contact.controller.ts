import { createContact } from '../services/contact.service';
import { mailer } from '../utils/mailer';

const addContact = async (req, res) => {
  const contact = req.body;

  if ( !contact ) {
    return res.status(422).json({
      message: 'The fields name and description are required',
    });
  }

  createContact(contact, (error, result) => {
    if(error)
      return res.status(500).json({ data: result, message: "Error occured on database!" });
    else {
      mailer(contact, res);
    }
  })

};

export { addContact };