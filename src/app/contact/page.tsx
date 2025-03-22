import { HiPaperAirplane } from "react-icons/hi";
import "./contact.scss";
import { GoPaperAirplane } from "react-icons/go";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_contact">
      <div className="bgtop"></div>

      <section className="ct-heading">
        <img src="/gfx/logo.png" alt="" className="logo" />
      </section>

      <section className="ct-form">
        <div className="confine">
          <form className="ct-panel">
            <div className="l">
              <img src="/bg/about-side.png" alt="" />
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
                />
              </div>
              <div className="ff">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your_email@mail.com"
                />
              </div>
              <div className="ff">
                <label htmlFor="phone">
                  PHONE NUMBER <span className="op">(optional)</span>
                </label>
                <input type="tel" name="phone" placeholder="+1 (123) 456 789" />
              </div>
              <div className="ff">
                <label htmlFor="sub">Subject</label>
                <input
                  type="text"
                  name="sub"
                  required
                  placeholder="Write the subject here..."
                />
              </div>
              <div className="ff">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here. . ."
                ></textarea>
              </div>

              <div className="action">
                <button className="btn btn-send">
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
