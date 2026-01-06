"use client";
import { HiPaperAirplane } from "react-icons/hi";
import "./contact.scss";
import { GoPaperAirplane } from "react-icons/go";
import { LuLoaderPinwheel } from "react-icons/lu";
import { CSSProperties, useState } from "react";
import { sendMail } from "../db/mail";
import { urlFor } from "../db/sanity";
import { BiCheckCircle } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

type Props = {
  gd: any;
};

export default function Contact({ gd }: Props) {
  const [l, setL] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const [dc, setDc] = useState<string | null>(null);
  const [mail, setMail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [socials, setSocials] = useState<string>("");

  // Honeypot Anti Spam
  const [information, setInformation] = useState<string>("");
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submit = async () => {
    setL(true);
    setSubmitResult(null);
    const res = await sendMail(
      name,
      mail,
      phone,
      subject,
      message,
      dc,
      socials,
      information
    );

    setTimeout(() => {
      if (res) {
        // alert("Your message has been submitted successfully!");
        setSuccess(true);
        setSubmitResult("Your message has been submitted successfully!");
      } else {
        // alert("Error, something went wrong");
        setSuccess(false);
        setSubmitResult("Error, something went wrong...");
      }
      setTimeout(() => {
        clearForm();
        setL(false);
      }, 3000);
    }, 2500);
  };
  const clearForm = () => {
    setName("");
    setPhone(null);
    setDc(null);
    setMail("");
    setSubject("");
    setMessage("");
    setSocials("");

    setSubmitResult(null);
    setSuccess(false);
  };
  return (
    <main id="page_contact">
      <div
        className="bgtop"
        style={
          {
            "--bg": `url(${gd.ct_bg && urlFor(gd.ct_bg).height(800).auto("format").url()})`,
          } as CSSProperties
        }
      ></div>
      <div className={"ct-loading " + (l ? "v" : " h")}>
        {!submitResult ? (
          <LuLoaderPinwheel className="spin" />
        ) : (
          <>{success ? <BiCheckCircle /> : <FaXmark />}</>
        )}
        <p>{submitResult}</p>
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
              {/* <img src="/gfx/contact-left.webp" alt="" /> */}
              <img
                src={
                  gd.ct_fs && urlFor(gd.ct_fs).height(1080).auto("format").url()
                }
                alt=""
              />
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
                <label htmlFor="socialLinks">Social Links</label>
                <textarea
                  name="socialLinks"
                  id="socialLinks"
                  placeholder="Write your socials here. . ."
                  value={socials}
                  className="socials"
                  required
                  onChange={(e) => {
                    setSocials(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="ff">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here. . ."
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="ff hp">
                <label htmlFor="address">Address</label>
                <textarea
                  name="adddress"
                  id="address"
                  placeholder="Write your Address here. . ."
                  value={information}
                  tabIndex={-1}
                  onChange={(e) => {
                    setInformation(e.target.value);
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
