"use server";
import { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
const transporter = createTransport({
  service: "yahoo",
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
  honeypot: string,
) {
  // Honeypot Anti Spam
  if (honeypot !== "") return true;

  const messageBody = `\n Email: ${mail} 
		\n Phone:${phone ? phone : "N/A"}
  	\n ${socials ? `Socials: ${socials}` : ""}
		\n Discord: ${dc ?? "N/A"} 
		\n Message: ${message} 
		`;

  const formattedMessage = messageBody
    .split("\n")
    .map((line) => `<p style="margin:0;">${line}</p>`)
    .join("");
  const mailOption: MailOptions = {
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    replyTo: [mail],
    subject: `[Contact Form] New message from ${name}`,
    text: `Hello, ${name} has submitted a message through the website contact form. \n 
		${messageBody}
		`,
  };
  const confirmationEmail: MailOptions = {
    from: "vicnet.video@gmail.com",
    to: mail,
    subject: `[Otakugraphy] We’ve received your message`,
    // text: `Hi ${name},\n\nThank you for contacting us. We’ve successfully received your message and our team will review it shortly.\n\nIf your inquiry requires a response, we’ll get back to you as soon as possible. Please note that this is an automated message and replies to this email are not monitored.\n\nBest regards,\nOtakugraphy Team`,
    html: `
  <p style="color:#666;font-size:12px;">
    [This is an automated message, replies to this email are not monitored]
  </p>

  <p>Hi ${name},</p>

  <p>Thank you for contacting <strong>Otakugraphy</strong>!</p>

  <p>
    Attached below is a copy of your submission. If your message requires a response,
    we will get back to you as soon as possible!
  </p>

  <blockquote style="margin:16px 0;padding-left:12px;border-left:3px solid #ccc;color:#333;">
    ${formattedMessage}
  </blockquote>
`,
  };
  try {
    const res = await transporter.sendMail(mailOption);
    const confirm = await transporter.sendMail(confirmationEmail);

    const mailOneStatus = res.accepted && res.accepted.length > 0;
    const mailTwoStatus = confirm.accepted && confirm.accepted.length > 0;

    if (mailOneStatus && mailTwoStatus) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
