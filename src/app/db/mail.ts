"use server";
import { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
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
  message: string,
  dc: string | null,
  socials: string | null,
  honeypot: string
) {
  // Honeypot Anti Spam
  if (honeypot !== "") return true;

  const mailOption: MailOptions = {
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    replyTo: [mail],
    subject: `[Contact Form] New message from ${name}`,
    text: `Hello, ${name} has submitted a message through the website contact form. \n 
		\n Email: ${mail} 
		\n Phone:${phone ? phone : "N/A"}
		\n Discord: ${dc ?? "N/A"} 
		\n Message: ${message} 
  	\n ${socials ? `Socials: ${socials}` : ""}
		
		
		`,
  };

  try {
    const res = await transporter.sendMail(mailOption);
    console.log(res, "mail info");
    if (res.accepted && res.accepted.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
