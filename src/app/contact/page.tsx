"use client";
import { HiPaperAirplane } from "react-icons/hi";
import "./contact.scss";
import { GoPaperAirplane } from "react-icons/go";
import { LuLoaderPinwheel } from "react-icons/lu";
import { useState } from "react";
import { sendMail } from "../db/mail";

type Props = {};

export default function page({}: Props) {
  const [l, setL] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const [dc, setDc] = useState<string | null>(null);
  const [mail, setMail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = async () => {
    setL(true);
    const res = await sendMail(name, mail, phone, subject, message, dc);

    if (res) {
      alert("Your message has been submitted successfully!");
    } else {
      alert("Error, something went wrong");
    }

    setL(false);
  };
  return (
    <main id="page_contact">
      <div className="bgtop"></div>
      <div className={"ct-loading " + (l ? "v" : " h")}>
        <LuLoaderPinwheel />
      </div>
      <section className="ct-heading">
        <img src="/gfx/logo2.png" alt="" className="logo" />
      </section>

      <section className="ct-form">
        <div className="confine">
          <form
            className="ct-panel"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="l">
              <img src="/gfx/contact-left.webp" alt="" />
            </div>
            <div className="r">
              <h2 className="h"> WORK WITH US</h2>

              <div className="ff">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Write your name here..."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="ff">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your_email@mail.com"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
              </div>
              <div className="ff">
                <label htmlFor="phone">
                  PHONE <span className="op">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (123) 456 789"
                  value={phone ?? ""}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="ff">
                <label htmlFor="dc">
                  DISCORD <span className="op">(optional)</span>
                </label>
                <input
                  type="text"
                  name="dc"
                  placeholder="Your Discord username. . ."
                  value={dc ?? ""}
                  onChange={(e) => {
                    setDc(e.target.value);
                  }}
                />
              </div>
              {/* <div className="ff">
                <label htmlFor="sub">Subject</label>
                <input
                  type="text"
                  name="sub"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  placeholder="Write the subject here..."
                />
              </div> */}
              <div className="ff">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here. . ."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="action">
                <button className="btn btn-send" type="submit">
                  <span>SEND</span>
                  <GoPaperAirplane />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
