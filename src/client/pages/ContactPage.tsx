import React from "react";
import ContactForm from "../components/ContactForm";
import { SnackbarProvider } from 'notistack';

const ContactPage = () => {

    return (
        <SnackbarProvider>
            <ContactForm editMode={true}></ContactForm>
        </SnackbarProvider>
    );
}

export default ContactPage;