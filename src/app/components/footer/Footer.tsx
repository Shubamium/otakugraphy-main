import Link from "next/link";
import "./footer.scss";
import {
  FaBluesky,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { CSSProperties } from "react";
import { fetchData, urlFor } from "@/app/db/sanity";

type Props = {};

export default async function Footer({}: Props) {
  const gd = await fetchData<any>(`
		*[_type == 'general' && preset == 'main'][0]{
				ft_bg,
				ft_title,
				ft_desc,
		}
		`);
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
              OTG RIG
            </Link>

            <Link href={"/vtubers"} className="btn-fn">
              Vtuber Events
            </Link>
            <Link href={"/otg-difference "} className="btn-fn">
              OTG DIFFERENCE
            </Link>
            <Link href={"/conventions"} className="btn-fn">
              Conventions
            </Link>

            <Link href={"/nightlife"} className="btn-fn">
              Nightlife
            </Link>
            <Link href={"/brands"} className="btn-fn">
              Brands
            </Link>
            <Link href={"/featured"} className="btn-fn">
              Featured Creator
            </Link>
            <Link href={"/contact"} className="btn-fn">
              Contact us
            </Link>
            <a href="#top" className="btn btn-scroll two">
              <span> Scroll to the top</span>
              <LuArrowUpToLine />
            </a>
          </nav>
        </div>
        <div
          className="c"
          style={
            {
              "--bg": `url(${gd.ft_bg && urlFor(gd.ft_bg).height(800).format("webp").url()})`,
            } as CSSProperties
          }
        >
          <img src="/gfx/logo_only2.png" alt="" className="logo" />

          <div className="lens-scl">
            <a
              href="https://x.com/otg_Otakugraphy"
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
              href="https://www.youtube.com/@otg_otakugraphy"
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
              href="https://otakugraphy.carrd.co/"
              target="_blank"
              className="btn-lens"
            >
              {/* <FaLinkedin className="ic" /> */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="ic"
                viewBox="0 0 896 896"
                style={
                  {
                    enableBackground: "new 0 0 896 896",
                  } as CSSProperties
                }
                // xml:space="preserve"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M661.2,613.1L401.1,738c-1.6,0.8-3.4,1.2-5.2,1.2c-2.2,0-4.4-0.6-6.4-1.8c-3.5-2.2-5.6-6-5.6-10.2V603.5 l-140.5-58.8c-4.5-1.9-7.4-6.2-7.4-11.1V208.8c0-4.1,2.1-8,5.6-10.2c3.5-2.2,7.9-2.4,11.6-0.7l270.4,129.8l127.3-61.1 c3.7-1.8,8.1-1.5,11.6,0.7c3.5,2.2,5.6,6,5.6,10.2v324.8C668,606.9,665.4,611.1,661.2,613.1z M260,227.9v297.7l123.9,51.9v-59.8 L306,486.3c-6.1-2.5-9.1-9.5-6.7-15.6c2.5-6.2,9.5-9.1,15.6-6.7l69,27.8v-49.1L306,411.3c-6.1-2.5-9.1-9.5-6.7-15.6 c2.5-6.2,9.5-9.1,15.6-6.7l69,27.8v-14.3c0-4.6,2.6-8.8,6.8-10.8l17.8-8.6l-103.1-46.9c-6-2.7-8.7-9.9-6-15.9s9.9-8.7,15.9-6 l121.3,55.3l59.1-28.4L260,227.9z M644,296.6L407.9,410v24.3c0,0,0,0,0,0.1v74.9c0,0,0,0,0,0.1v198.8L644,594.7V296.6z M453,451.8 l135.3-65.4c6-2.9,13.1-0.4,16,5.6s0.4,13.2-5.6,16l-135.3,65.4c-1.7,0.8-3.5,1.2-5.2,1.2c-4.5,0-8.7-2.5-10.8-6.8 C444.6,461.9,447.1,454.7,453,451.8z M453,526.8l135.3-65.4c6-2.9,13.1-0.4,16,5.6s0.4,13.2-5.6,16l-135.3,65.4 c-1.7,0.8-3.5,1.2-5.2,1.2c-4.5,0-8.7-2.5-10.8-6.8C444.6,536.8,447.1,529.7,453,526.8z M453,601.7l135.3-65.4 c6-2.9,13.1-0.4,16,5.6s0.4,13.2-5.6,16l-135.3,65.4c-1.7,0.8-3.5,1.2-5.2,1.2c-4.5,0-8.7-2.5-10.8-6.8 C444.6,611.8,447.1,604.6,453,601.7z M448,881.3c-239.4,0-433.4-194-433.4-433.3S208.6,14.7,448,14.7s433.4,194,433.4,433.3S687.4,881.3,448,881.3z"
                />
              </svg>
              {/* <img src="/gfx/" alt="" /> */}

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
          <h2 className="fh">{gd.ft_title}</h2>
          <p>{gd.ft_desc}</p>
          <a href="#top" className="btn btn-scroll one">
            <span> Scroll to the top</span>
            <LuArrowUpToLine />
          </a>
          <p className="attribution">
            © 2025 Otakugraphy. <br /> <br />
            All images and trademarks are the property of their respective
            owners
          </p>
        </div>
      </div>
    </div>
  );
}
