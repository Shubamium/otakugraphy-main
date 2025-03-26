import Link from "next/link";
import "./footer.scss";
import {
  FaBluesky,
  FaDiscord,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div id="footer">
      <div className="confine">
        <div className="l">
          <h2 className="fh">NAVIGATION</h2>
          <nav className="fn">
            <Link href={"/"} className="btn-fn">
              Home
            </Link>
            <Link href={"/conventions"} className="btn-fn">
              Conventions
            </Link>
            <Link href={"/brands"} className="btn-fn">
              Brands
            </Link>
            <Link href={"/vtubers"} className="btn-fn">
              Vtubers
            </Link>
            <Link href={"/nightlife"} className="btn-fn">
              Nightlife
            </Link>
            <Link href={"/contact"} className="btn-fn">
              Contact us
            </Link>
          </nav>
        </div>
        <div className="c">
          <img src="/gfx/logo.png" alt="" className="logo" />

          <div className="lens-scl">
            <a
              href="https://x.com/OTG_Otakugraphy"
              target="_blank"
              className="btn-lens"
            >
              <FaXTwitter className="ic" />
              <svg
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lensi"
              >
                <path
                  d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
                  stroke="#C7A654"
                  strokeWidth="17"
                />
              </svg>
            </a>
            <a
              href="https://bsky.app/profile/otakugraphy.bsky.social"
              target="_blank"
              className="btn-lens"
            >
              <FaBluesky className="ic" />
              <svg
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lensi"
              >
                <path
                  d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
                  stroke="#C7A654"
                  strokeWidth="17"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/otg_otakugraphy/"
              target="_blank"
              className="btn-lens"
            >
              <FaInstagram className="ic" />
              <svg
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lensi"
              >
                <path
                  d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
                  stroke="#C7A654"
                  strokeWidth="17"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@OTG-otakugraphy"
              target="_blank"
              className="btn-lens"
            >
              <FaYoutube className="ic" />
              <svg
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lensi"
              >
                <path
                  d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
                  stroke="#C7A654"
                  strokeWidth="17"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="r">
          <h2 className="fh">ABOUT US</h2>
          <p>
            We are a professional LLC company of freelancer photographers and
            videographers, capturing the quirky spirit of Otaku culture through
            Conventions, Brands, VTubers, and Nightlife.
          </p>
          <a href="#top" className="btn btn-scroll">
            <span> Scroll to the top</span>
            <LuArrowUpToLine />
          </a>
          <p className="attribution">
            © 2024 Otakugraphy LLC. All images and trademarks are the property
            of their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
}
