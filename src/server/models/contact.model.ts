import mongoose, { Schema, Model, Document } from 'mongoose';
import { string } from 'yup';

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const contactSchema = new Schema<IContact>({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  message: { type: String },
});

const Contacts = mongoose.model<IContact>('Contact', contactSchema);
export { Contacts };