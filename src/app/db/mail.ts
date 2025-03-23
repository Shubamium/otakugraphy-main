"use server";
import { createTransport } from "nodemailer";
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail(
  name: string,
  mail: string,
  phone: string | null,
  subject: string,
  message: string
) {
  const mailOption = {
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    subject: `[Contact Form]${subject}`,
    text: `Hello, ${name} has submitted a message through the website contact form. \n \n Email: ${mail} \n Phone:${phone ? phone : "N/A"} \n Message: ${message} `,
  };

  try {
    const res = await transporter.sendMail(mailOption);
    console.log(res);
    if (res.accepted && res.accepted.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
