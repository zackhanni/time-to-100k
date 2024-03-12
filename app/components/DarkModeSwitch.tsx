"use client";

import { useState } from "react";

interface DarkModeProps {
  setDarkMode: (darkMode: boolean) => void;
}

export default function DarkModeSwitch({ setDarkMode }: DarkModeProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="h-16 w-full flex items-center justify-between px-8 md:px-0 max-w-screen-md mx-auto">
      <div className="font-bold">Time to 100k</div>
      <button
        className={`text-sm rounded-full px-2 py-1 hover:underline ${
          clicked
            ? "bg-white text-black border-b-4 border-r-4 border-gray-400"
            : " bg-black text-white border-b-4 border-r-4"
        }`}
        onClick={() => {
          setClicked(!clicked);
          setDarkMode(!clicked);
        }}
      >
        {clicked ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
