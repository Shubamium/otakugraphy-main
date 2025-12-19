"use client";
import Link from "next/link";
import "./header.scss";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { TiArrowDownThick, TiArrowUp, TiArrowUpThick } from "react-icons/ti";
import { MdShutterSpeed } from "react-icons/md";
import { BiCamera } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

export type NavList = {
  name: string;
  rl: string;
  is_dropdown: string;
  dr_list: { name: string; rl: string }[];
};
type Props = {
  navlist: NavList[];
};

export default function Header({ navlist }: Props) {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setVisible(true);
    }
  }, []);
  useEffect(() => {
    setVisible(!isMobile);
  }, [isMobile]);
  return (
    <header
      id="header"
      className={visible ? "v" : "h"}
      onClick={() => {
        if (isMobile) {
          setVisible(false);
        }
      }}
    >
      <svg
        width="172"
        height="49"
        viewBox="0 0 172 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="d-side"
      >
        <path
          d="M115.718 14.3935L121.41 0L2.04213 35.2671L3.89862 44.0816L122.448 19.113L115.718 14.3935Z"
          fill="#C7A654"
          fillOpacity="0.32"
        />
        <path
          d="M161.04 42.0368L172 29.1255L12.7097 39.0342V48.0421H168.247L161.04 42.0368Z"
          fill="#C7A654"
        />
        <path
          d="M137.837 28.7953L146.061 15.1688L12.0549 36.0627L12.7886 45.0407L144.426 34.2822L137.837 28.7953Z"
          fill="#C7A654"
          fillOpacity="0.68"
        />
      </svg>

      <Link className="btn logo" href={"/"}>
        <img src="/gfx/logo_only2.png" alt="" />
      </Link>
      <nav id="main-nav">
        {/* Mobile Menu Render */}
        {isMobile &&
          navlist.map((item, index) => {
            if (item.is_dropdown) {
              return item.dr_list.map((dr_item, index) => {
                return (
                  <Link href={dr_item.rl} key={index} className="btn btn-nav">
                    {dr_item.name}
                  </Link>
                );
              });
            }
            return (
              <Link href={item.rl} key={index} className="btn btn-nav">
                {item.name}
              </Link>
            );
          })}

        {/* Desktop Menu Render */}
        {!isMobile &&
          navlist.map((item, index) => {
            if (item.is_dropdown) {
              return (
                <div
                  className="btn btn-nav btn-popup"
                  key={"dropdown-btn" + item.name}
                >
                  <span>{item.name}</span>
                  <div className="popups">
                    <Link href={"/featured"} className="btn btn-sub">
                      Featured Creators
                    </Link>
                    {item.dr_list?.map((dr_item, index) => {
                      return (
                        <Link
                          href={dr_item.rl}
                          key={index}
                          className="btn btn-sub"
                        >
                          {dr_item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return (
              <Link href={item.rl} key={index} className="btn btn-nav">
                {item.name}
              </Link>
            );
          })}
      </nav>

      <button
        className="btn btn-toggle"
        onClick={(e) => {
          setVisible(!visible);
          e.stopPropagation();
        }}
      >
        {!visible ? <TiArrowUpThick /> : <TiArrowDownThick />}

        <svg
          width="114"
          height="68"
          viewBox="0 0 114 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="s-l"
        >
          <path
            d="M89 45.5C107.5 27 114 0 114 0V68H0C0 68 70.5 64 89 45.5Z"
            fill="#C7A654"
          />
        </svg>
        <svg
          width="114"
          height="68"
          viewBox="0 0 114 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="s-r"
        >
          <path
            d="M89 45.5C107.5 27 114 0 114 0V68H0C0 68 70.5 64 89 45.5Z"
            fill="#C7A654"
          />
        </svg>
      </button>
    </header>
  );
}

// (
// 	    <Link href={"/rigs"} className="btn btn-nav">
//           {/* <img src="/gfx/brands.png" alt="" /> */}
//           <span>Rigs</span>
//         </Link>
//         <Link href={"/vtubers"} className="btn btn-nav">
//           {/* <img src="/gfx/vtubers.png" alt="" /> */}
//           <span>VTuber Events</span>
//         </Link>
//         <Link href={"/otg-difference"} className="btn btn-nav">
//           {/* <img src="/gfx/nightlife.png" alt="" /> */}
//           <span>The OTG Difference</span>
//         </Link>
//         <Link href={"/featured"} className="btn btn-nav btn-mobile">
//           Featured Creators
//         </Link>
//         <Link href={"/conventions"} className="btn btn-nav btn-mobile">
//           conventions
//         </Link>

//         <Link href={"/nightlife"} className="btn btn-nav btn-mobile">
//           Nightlife
//         </Link>
//         <Link href={"/brands"} className="btn btn-nav btn-mobile">
//           Brands
//         </Link>
//         <Link href={"/featured"} className="btn btn-nav btn-mobile">
//           Featured Creators
//         </Link>
//         <div className="btn btn-nav btn-popup">
//           {/* <img src="/gfx/nightlife.png" alt="" /> */}
//           <span>More</span>
//           <div className="popups">
//             <Link href={"/featured"} className="btn btn-sub">
//               Featured Creators
//             </Link>
//             <Link href={"/conventions"} className="btn btn-sub">
//               Conventions
//             </Link>
//             <Link href={"/nightlife"} className="btn btn-sub">
//               Nightlife
//             </Link>
//             <Link href={"/brands"} className="btn btn-sub">
//               Brands
//             </Link>
//           </div>
//         </div>
//         <Link href={"/contact"} className="btn btn-nav">
//           {/* <img src="/gfx/contactus.png" alt="" /> */}
//           <span>Contact us</span>
//         </Link>
// )
