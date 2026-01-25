"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import { RiFilterFill } from "react-icons/ri";
import { CgCross, CgSearch } from "react-icons/cg";
import { createPortal } from "react-dom";
import { GiCrossMark } from "react-icons/gi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";

type Props = {
  agencies: any[];
  events: any[];
  paramDefaultValue: {
    q?: string;
    from?: string;
    to?: string;
    cc?: string;
    a?: string;
    e?: string;
    view?: string;
  };
};

type Month = {
  month?: string;
  year?: string;
};

const monthMap: { [key: string]: string } = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

const monthNumMap: { [key: string]: string } = {
  "01": "january",
  "02": "february",
  "03": "march",
  "04": "april",
  "05": "may",
  "06": "june",
  "07": "july",
  "08": "august",
  "09": "september",
  "10": "october",
  "11": "november",
  "12": "december",
};
const currDate = new Date();

const defaultFrom = {
  month: "january",
  year: currDate.getFullYear().toString(),
};
const defaultTo = {
  month: "january",
  year: (currDate.getFullYear() + 1).toString(),
};
export default function FeaturedAction({
  agencies,
  events,
  paramDefaultValue,
}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const [sEvent, setSEvent] = useState<string | null>(null);
  const [sAgency, setSAgency] = useState<string | null>(null);

  const [sColor, setSColor] = useState<string | null>(null);

  const [from, setFrom] = useState<Month | null>(defaultFrom);
  const [to, setTo] = useState<Month | null>(defaultTo);
  const [q, setQ] = useState<string | null>(null);
  const [view, setView] = useState<string | null>(
    paramDefaultValue.view ?? null,
  );

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectRef = React.useRef<HTMLSelectElement>(null);
  const [filter, setFilter] = useState("");
  React.useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (view) {
      updateURLState({ view: view }, true);
    }
  }, [view]);
  useEffect(() => {
    console.log(from);
  }, [from]);
  useEffect(() => {
    const { q, a, cc, from, to } = paramDefaultValue;
    if (q) setQ(q);
    if (a) setSAgency(a);
    if (cc) setSColor(cc);
    if (from) {
      const split = from.split("-");
      setFrom({
        month: monthNumMap[split[1]],
        year: split[0],
      });
    }
    if (to) {
      const split = to.split("-");
      setTo({
        month: monthNumMap[split[1]],
        year: split[0],
      });
    }
    if (view) {
      setView(view);
    }
  }, [paramDefaultValue]);

  function updateURLState(
    update: { [key: string]: string | null },
    applyDirectly?: boolean,
  ) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(update).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value as string);
      }
    });
    const newUrl = `${pathname}?${params.toString()}`;
    setFilter(newUrl);
    if (applyDirectly) {
      applyFilterDirectly(newUrl);
    }

    // router.replace(newUrl);
    // Map through the key and object of the input
    // If value is null then delete the key
  }

  function applyFilter() {
    if (filter !== "") {
      router.replace(filter);
      setOpenFilter(false);
    }
  }
  function applyFilterDirectly(filter: string) {
    if (filter !== "") {
      router.replace(filter);
    }
  }
  function clearFilter() {
    setFrom(defaultFrom);
    setTo(defaultTo);
    setSEvent(null);
    setSAgency(null);
    setSColor(null);
    updateURLState({
      from: null,
      to: null,
      e: null,
      a: null,
      cc: null,
    });
  }

  return (
    <>
      <div className="controls">
        <input
          type="search"
          name="name"
          id="name"
          placeholder="Search for a creator here"
          onChange={(e) => {
            setQ(e.target.value);
            updateURLState({ q: q });
            if (e.target.value === "") {
              updateURLState({ q: null });
            } else {
              updateURLState({ q: e.target.value });
            }
          }}
          value={q ?? ""}
        />
        <button
          className="btn btn-control"
          onClick={() => {
            applyFilter();
          }}
        >
          <CgSearch />
        </button>
        <select
          name="view"
          id="view"
          className="sort-select"
          onChange={(e) => {
            // updateURLState({ view: e.target.value });
            setView(e.target.value);
            // console.log(e.target.value);
          }}
          value={view ?? ""}
          // ref={selectRef}
        >
          <option value="default">Default View</option>
          <option value="name">Sort by Name {`(A - Z)`}</option>
          <option value="date">Sort by Date {`(Newest - Oldest)`}</option>
          <option value="agency">Group By Agency</option>
        </select>
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
              <button
                className="btn btn-popclose"
                onClick={() => {
                  setOpenFilter(false);
                }}
              >
                {" "}
                <FaXmark />
              </button>
              <h2 className="mt">FILTER</h2>
              <div className="ig">
                <div className="ff">
                  <label htmlFor="name">FROM</label>
                  <div className="input">
                    <select
                      name="month"
                      id="month"
                      onChange={(e) => {
                        setFrom((prev) => {
                          return {
                            ...prev,
                            month: e.target.value as string,
                          };
                        });
                        updateURLState({
                          from:
                            from?.year +
                            "-" +
                            monthMap[e.target.value as string],
                          to: to?.year + "-" + monthMap[to?.month as string],
                        });
                      }}
                      value={from?.month}
                    >
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
                    <select
                      name="year"
                      id="year"
                      onChange={(e) => {
                        setFrom((prev) => {
                          return {
                            ...prev,
                            year: e.target.value as string,
                          };
                        });
                        updateURLState({
                          from:
                            e.target.value +
                            "-" +
                            monthMap[from?.month as string],
                          to: to?.year + "-" + monthMap[to?.month as string],
                        });
                      }}
                      value={from?.year}
                    >
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
                    <select
                      name="month"
                      id="month"
                      onChange={(e) => {
                        setTo((prev) => {
                          return {
                            ...prev,
                            month: e.target.value as string,
                          };
                        });
                        updateURLState({
                          to:
                            to?.year + "-" + monthMap[e.target.value as string],
                          from:
                            from?.year + "-" + monthMap[from?.month as string],
                        });
                      }}
                      value={to?.month}
                    >
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
                    <select
                      name="year"
                      id="year"
                      onChange={(e) => {
                        setTo((prev) => {
                          return {
                            ...prev,
                            year: e.target.value as string,
                          };
                        });
                        updateURLState({
                          to:
                            e.target.value +
                            "-" +
                            monthMap[to?.month as string],
                          from:
                            from?.year + "-" + monthMap[from?.month as string],
                        });
                      }}
                      value={to?.year}
                    >
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                      <option value="2033">2033</option>
                      <option value="2034">2034</option>
                      <option value="2035">2035</option>
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
                      updateURLState({ e: null });
                    }}
                  >
                    All
                  </button>
                  {events?.map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-red ${(e.slug?.current === sEvent || sEvent == null) && "selected"} `}
                        key={i + e.name}
                        onClick={() => {
                          setSEvent(e.slug?.current);
                          updateURLState({ e: e.slug?.current });
                        }}
                        value={e.slug?.current}
                        id={e.slug?.current}
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
                      updateURLState({ a: null });
                    }}
                  >
                    All
                  </button>
                  {agencies?.map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-red ${(e.slug?.current === sAgency || sAgency == null) && "selected"}`}
                        key={i + e.name}
                        onClick={() => {
                          setSAgency(e.slug?.current);
                          updateURLState({ a: e.slug?.current });
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
                      updateURLState({ cc: null });
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
                    "grey",
                    "brown",
                    "white",
                    "black",
                  ].map((e: any, i: number) => {
                    return (
                      <button
                        className={`btn btn-color ${sColor === e && "selected"}`}
                        style={{ "--col": e } as CSSProperties}
                        key={e}
                        onClick={() => {
                          setSColor(e);
                          updateURLState({ cc: e });
                        }}
                      ></button>
                    );
                  })}
                </div>
              </div>
              <div className="action">
                <button className="btn btn-apply" onClick={clearFilter}>
                  CLEAR
                </button>
                <button className="btn btn-apply" onClick={applyFilter}>
                  SAVE
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
