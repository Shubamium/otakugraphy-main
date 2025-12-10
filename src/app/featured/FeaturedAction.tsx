"use client";
import React from "react";
import { RiFilterFill } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { createPortal } from "react-dom";

type Props = {};

export default function FeaturedAction({}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
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
        <button className="btn btn-control">
          <RiFilterFill />
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            id="filter-popup"
            className={`${openFilter ? "open" : "closed"}`}
          >
            <div className="panel">
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
              </div>

              <div className="selection">
                <p>Event:</p>
                <div className="list">
                  <button className={`btn btn-red`}></button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
