import Link from "next/link";
import Media from "./components/galleryDisplayer/media/Media";
import "./home.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import PartnershipSlide from "./components/partnershipSlide/PartnershipSlide";

const conventionPartners = [
  "/gfx/p/c1.png",
  "/gfx/p/c2.png",
  "/gfx/p/c3.png",
  "/gfx/p/c4.png",
  "/gfx/p/c5.png",
  "/gfx/p/c6.png",
  "/gfx/p/c7.png",
  "/gfx/p/c8.png",
  "/gfx/p/c10.png",
];

const brandPartners = [
  "/gfx/p/b1.png",
  "/gfx/p/b2.png",
  "/gfx/p/b3.png",
  "/gfx/p/b4.png",
  "/gfx/p/b5.png",
  "/gfx/p/b6.png",
  "/gfx/p/b7.png",
  "/gfx/p/b8.png",
];

const vtuberPartners = [
  "/gfx/p/v/v1.png",
  "/gfx/p/v/v2.png",
  "/gfx/p/v/v3.png",
  "/gfx/p/v/v4.png",
  "/gfx/p/v/v5.png",
  "/gfx/p/v/v6.png",
  "/gfx/p/v/v7.png",
];
const nightlifePartners = [
  "/gfx/p/n/n1.png",
  "/gfx/p/n/n2.png",
  "/gfx/p/n/n3.png",
  "/gfx/p/n/n4.png",
];
export default function Home() {
  return (
    <main id="page_home">
      <section id="banner-h">
        <div className="confine">
          <img src="/gfx/logo.png" alt="" className="main" />
        </div>
      </section>

      <section id="highlights">
        <div className="confine">
          <div className="h-h h">
            <h2>HIGHLIGHTS</h2>
            <div className="arr"></div>
          </div>
          <div className="images">
            <div className="l">
              <Media />
            </div>
            <div className="c">
              <div className="t">
                <Media />
                <Media />
              </div>
              <div className="b">
                <Media />
              </div>
            </div>
            <div className="r">
              <Media />
            </div>
          </div>

          <div className="videos">
            <Media />
            <Media />
          </div>
        </div>
      </section>

      <section id="lens">
        <div className="text confine">
          <h2 className="h">
            MODERN LENS
            <svg
              width="212"
              height="212"
              viewBox="0 0 212 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lens"
            >
              <path
                d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
                stroke="#C7A654"
                strokeWidth="0"
              />
            </svg>
          </h2>

          <p className="h second">
            <span className="fill">ON</span> MODERN OTAKUS
          </p>
        </div>
      </section>

      <section id="category">
        <div className="category-row">
          <Link href={"/conventions"} className="cr-h">
            <h2> CONVENTIONS</h2>
            <p className="footer">
              <span>
                VIEW MORE <FaArrowRightLong />
              </span>
            </p>
          </Link>
          <div className="cr-l">
            <Media />
            <Media />
            <Media />
          </div>
        </div>
        <div className="category-row">
          <Link href={"/brands"} className="cr-h">
            <h2> BRANDS</h2>
            <p className="footer">
              <span>
                VIEW MORE <FaArrowRightLong />
              </span>
            </p>
          </Link>
          <div className="cr-l">
            <Media />
            <Media />
            <Media />
          </div>
        </div>
        <div className="category-row">
          <Link href={"/vtubers"} className="cr-h">
            <h2> VTUBERS</h2>
            <p className="footer">
              <span>
                VIEW MORE <FaArrowRightLong />
              </span>
            </p>
          </Link>
          <div className="cr-l">
            <Media />
            <Media />
            <Media />
          </div>
        </div>
        <div className="category-row">
          <Link href={"/conventions"} className="cr-h">
            <h2> NIGHTLIFE</h2>
            <p className="footer">
              <span>
                VIEW MORE <FaArrowRightLong />
              </span>
            </p>
          </Link>
          <div className="cr-l">
            <Media />
            <Media />
            <Media />
            <Media />
            <Media />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="confine">
          <div className="l">
            <h2>ABOUT US</h2>
            <p>
              We are a professional LLC company of freelancer photographers and
              videographers, capturing the quirky spirit of Otaku culture
              through Conventions, Brands, VTubers, and Nightlife.
            </p>
            <div className="arr"></div>
          </div>
          <div className="r">
            <img src="/gfx/about1.png" alt="" className="about" />
          </div>
        </div>
      </section>
      <section id="mission">
        <div className="confine">
          <div className="r">
            <img src="/gfx/about2.png" alt="" className="about" />
          </div>
          <div className="l">
            <h2>OUR MISSION </h2>
            <p>
              At Otakugraphy, We Are Storytellers. With each frame, we narrate
              the untold stories, unseen moments, and unmatched energy.
            </p>
            <div className="arr"></div>
          </div>
        </div>
      </section>
      <section id="values">
        <h2 className="th">VALUES</h2>

        <div className="left-box"></div>
        <div className="right-box"></div>
        <div className="cubes confine">
          <div className="cube txt">
            <h2>
              <b>Dedication To</b> Fandom
            </h2>
            <p>
              We are driven by a <b>genuine love</b> for the Otaku universe
            </p>
          </div>
          <div className="cube">
            <img src="/gfx/cube1.png" alt="" className="mim" />
          </div>
          <div className="cube txt">
            <h2>
              <b>Community Driven</b> Creativity
            </h2>
            <p>
              We collaborate with the <b>Otaku</b> community to craft
              respectful, authentic, and stunning content
            </p>
          </div>
          <div className="cube">
            <img src="/gfx/cube2.png" alt="" className="mim" />
          </div>
          <div className="cube txt">
            <h2>
              <b>Authentic Visual</b> Storytelling
            </h2>
            <p>
              We create authentic, <strong>high-quality visual</strong> stories
              that inspires, entertains, and connects fans worldwide
            </p>
          </div>
          <div className="cube">
            <img src="/gfx/cube3.png" alt="" className="mim" />
          </div>
        </div>
      </section>

      <section id="partnership">
        <div className="p-h">
          <h2 className="h ol">PARTNERSHIP</h2>
          <div className="arr"></div>
        </div>
        <div className="p-l">
          <PartnershipSlide p={conventionPartners} />
          <PartnershipSlide p={brandPartners} reverse={true} />
          <PartnershipSlide p={vtuberPartners} />
          <PartnershipSlide p={nightlifePartners} reverse={true} />
        </div>
      </section>
    </main>
  );
}
