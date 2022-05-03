import mongoose, { Schema, Model, Document } from 'mongoose';

type ContactDocument = Document & {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

const contactsSchema = new Schema(
  {
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    secondName: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    message: {
        type: Schema.Types.String,
        required: true,
    },
  },
  {
    collection: 'contacts',
    timestamps: true,
  },
);

const Contact: Model<ContactDocument> = mongoose.model<ContactDocument>('Contact', contactsSchema);

export { Contact };