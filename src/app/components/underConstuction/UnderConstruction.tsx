"use client";
import React from "react";
import { FaBuilding, FaWrench } from "react-icons/fa6";

type Props = {
  onAccess?: () => void;
};
import "./underConstruction.scss";
import { LuConstruction } from "react-icons/lu";
export default function UnderConstruction({ onAccess }: Props) {
  return (
    <div className="otg-diff" id="under-const">
      <p className="const">
        <LuConstruction /> Under Construction <LuConstruction />
      </p>
      <p className="desc">We are currently working on this website!</p>
      {onAccess && (
        <button
          className="btn btn-main"
          onClick={() => {
            onAccess();
          }}
        >
          I'm an admin
        </button>
      )}
    </div>
  );
}
