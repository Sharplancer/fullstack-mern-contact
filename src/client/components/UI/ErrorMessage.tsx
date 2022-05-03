import React from "react";
import { Alert } from "@mui/material";

const ErrorMessage: React.FC<{ message: string}> = (props) => {
  return (
    <Alert severity="error">
      { props.message }
    </Alert>
  )
};

export default ErrorMessage;