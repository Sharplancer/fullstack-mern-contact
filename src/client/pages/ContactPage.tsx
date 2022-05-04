import React from "react";
import ContactForm from "../components/ContactForm";
import { SnackbarProvider } from 'notistack';
import { Box } from "@mui/material";

const ContactPage = () => {
  return (
    <Box component="main" sx={{ p: 16 }}>
      <SnackbarProvider>
        <ContactForm editMode={true}></ContactForm>
      </SnackbarProvider>
    </Box>
  );
}

export default ContactPage;