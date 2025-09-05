"use client";
import { useState } from "react";
import Experience from "./Experience.jsx";
import Project from "./project.jsx";

function Main() {
  return (
    <div className="container mx-auto">
      <div className="">
        <h2 className="text-center pt-[30px] text-[#ccd6f6] text-3xl font-bold font-sans">
          Project & Experience
        </h2>
      </div>

      <Experience />
      <Project />
    </div>
  );
}

export default Main;
