import { connectDB } from '../../utils/dbSetup';
import mongoose from 'mongoose';

import { createContact } from '../contact.service';

describe('contact send test', () => {

  beforeAll( async() => {
    await connectDB();
  })

  afterAll(async() => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  })

  describe('given the contact added', () => {
    it('success createContact in service', async() => {
      const res = await expect(createContact({
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        message: "hello",
      }, () => {}));
    })
  });


});