import { Box } from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                width: 500
            },
            }}>
        <ContactForm editMode={true}></ContactForm>
        </Box>
    );
}

export default ContactPage;