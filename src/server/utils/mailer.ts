import nodemailer from 'nodemailer';

export const mailer = (contact, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: "f235dd73fe085b",
      pass: "20be724f6c5cc5",
    }
  });

  transporter.verify((error, success) => {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
  });
  
  const mailOptions = {
    from: contact.email,
    to: "sharplancer021@gmail.com",
    subject: `Message from ${contact.firstName} ${contact.lastName}<${contact.email}>`,
    text: contact.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('MAILER error', error);
      return res.status(500).json({ data: error, msg: "Error occured on mailing!" });
    } else {
      console.info('Mailer Email sent: ' + info.response);
      return res.status(201).json({ data: info.response, msg: "Adding contact data to MongoDB & sending mail successed!" });
    }
  })
}