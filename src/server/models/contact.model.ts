import mongoose, { Schema, Model, Document } from 'mongoose';
import { string } from 'yup';

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const contactSchema = new Schema<IContact>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contacts = mongoose.model<IContact>('Contact', contactSchema);
export { Contacts };