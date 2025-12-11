"use client";
import React, { CSSProperties, useState } from "react";
import { RiFilterFill } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { createPortal } from "react-dom";
import { GiCrossMark } from "react-icons/gi";

type Props = {
  agencies: any[];
  events: any[];
};

type Month = {
  month: string;
  year: string;
};
export default function FeaturedAction({ agencies, events }: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const [sEvent, setSEvent] = useState<string | null>(null);
  const [sAgency, setSAgency] = useState<string | null>(null);

  const [sColor, setSColor] = useState<string | null>(null);

  const [from, setFrom] = useState<Month | null>(null);
  const [to, setTo] = useState<Month | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  console.log(agencies);

  return (
    <>
      <div className="controls">
        <input
          type="search"
          name="name"
          id="name"
          placeholder="Search for a creator here"
        />
        <button className="btn btn-control">
          <CgSearch />
        </button>
        <button
          className="btn btn-control"
          onClick={() => {
            setOpenFilter(true);
          }}
        >
          <RiFilterFill />
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            id="filter-popup"
            className={`${openFilter ? "open" : "closed"}`}
            onClick={() => {
              setOpenFilter(false);
            }}
          >
            <div
              className="panel"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2 className="mt">FILTER</h2>
              <div className="ig">
                <div className="ff">
                  <label htmlFor="name">FROM</label>

                  <div className="input">
                    <select name="month" id="month">
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                    <select name="year" id="year">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2026">2027</option>
                      <option value="2026">2028</option>
                      <option value="2026">2029</option>
                      <option value="2026">2030</option>
                      <option value="2026">2031</option>
                      <option value="2026">2032</option>
                      <option value="2026">2033</option>
                      <option value="2026">2034</option>
                      <option value="2026">2035</option>
                    </select>
                  </div>
                </div>
                <div className="ff">
                  <label htmlFor="name">To</label>

                  <div className="input">
                    <select name="month" id="month" onChange={() => {}}>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                    <select name="year" id="year">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2026">2027</option>
                      <option value="2026">2028</option>
                      <option value="2026">2029</option>
                      <option value="2026">2030</option>
                      <option value="2026">2031</option>
                      <option value="2026">2032</option>
                      <option value="2026">2033</option>
                      <option value="2026">2034</option>
                      <option value="2026">2035</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="selection">
                <p>Event:</p>
                <div className="list">
                  <button
                    className={`btn btn-red ${sEvent === null && "selected"}`}
                    onClick={() => {
                      setSEvent(null);
                    }}
                  >
                    All
                  </button>
                  {events?.map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-red ${e.slug?.current === sEvent && "selected"} `}
                        key={i + e.name}
                        onClick={() => {
                          setSEvent(e.slug?.current);
                        }}
                      >
                        {e.name}
                      </button>
                    );
                  })}

                  {/* <button className={`btn btn-red `}>Tsumi Con</button>
                  <button className={`btn btn-red`}>Carrier Con</button>
                  <button className={`btn btn-red`}>Carrier Con</button>
                  <button className={`btn btn-red`}>Carrier Con</button>
                  <button className={`btn btn-red`}>Carrier Con</button>
                  <button className={`btn btn-red`}>Carrier Con</button> */}
                </div>
              </div>
              <div className="selection">
                <p>Agency:</p>
                <div className="list">
                  <button
                    className={`btn btn-red ${sAgency === null && "selected"}`}
                    onClick={() => {
                      setSAgency(null);
                    }}
                  >
                    All
                  </button>
                  {agencies?.map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-red ${e.slug?.current === sAgency && "selected"}`}
                        key={i + e.name}
                        onClick={() => {
                          setSAgency(e.slug?.current);
                        }}
                      >
                        {e.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Red, Orange, Yellow, Green, Blue, Purple, Pink, White, Black */}
              <div className="color-picker">
                <p>Creator Color:</p>
                <div className="list">
                  <button
                    className={`btn btn-color initial ${sColor === null && "selected"}`}
                    onClick={() => {
                      setSColor(null);
                    }}
                  ></button>
                  {[
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "blue",
                    "purple",
                    "pink",
                    "white",
                    "black",
                  ].map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-color ${sColor === e && "selected"}`}
                        style={{ "--col": e } as CSSProperties}
                        onClick={() => {
                          setSColor(e);
                        }}
                      ></button>
                    );
                  })}
                </div>
              </div>
              <div className="action">
                <button className="btn btn-apply">CLEAR</button>
                <button className="btn btn-apply">APPLY</button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
