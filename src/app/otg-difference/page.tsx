import React from "react";
import Header from "../components/header/Header";
import { FaBuilding, FaWrench } from "react-icons/fa6";

type Props = {};
import "./otgdiff.scss";
import { LuConstruction } from "react-icons/lu";
export default function Page({}: Props) {
  return (
    <div className="otg-diff" id="p_otgdiff">
      <p className="const">
        <LuConstruction /> Under Construction <LuConstruction />
      </p>
      <p className="desc">We are currently working on this page!</p>
    </div>
  );
}
