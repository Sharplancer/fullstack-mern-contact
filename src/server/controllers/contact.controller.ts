import { Request, Response } from 'express';
import { createContact } from '../services/contact.service';

const addContact = async (req, res) => {
  const contact = req.body;

  if ( !contact ) {
    return res.status(422).json({
      message: 'The fields name and description are required',
    });
  }

  createContact(contact, (error, result) => {
      if(error)
        return res.status(500).json({ data: result });
      else
        return res.status(201).json({ data: result });
      })
};

export { addContact };