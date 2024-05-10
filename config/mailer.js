import nodemailer from "nodemailer";
process.loadEnvFile();

const { USER_EMAIL, USER_PASSWORD } = process.env;
const enviar = (to, subject, html) => {
  //config del correo
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_EMAIL,
      pass: USER_PASSWORD,
    },
  });
  //config de opciones
  const mailOptions = {
    from: "USER_EMAIL",
    to,
    subject,
    html,
  };
  //envío del correo
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Correo enviado: ${info.response}`);
    }
  });
};

export default enviar;