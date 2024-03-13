"use client";

import Image from "next/image";
import InputForm from "./components/InputForm";
import PlainDataAnswers from "./components/PlainDataAnswers";
import { useState } from "react";
import Hero from "./components/Hero";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Footer from "./components/Footer";

export default function Home() {
  const [startingCapital, setStartingCapital] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [apy, setApy] = useState(5);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <main
      className={`overflow-hidden ${
        darkMode ? " bg-[#203b20] text-white" : "bg-white text-black"
      }`}
    >
      <DarkModeSwitch setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <InputForm
        setStartingCapital={setStartingCapital}
        setMonthlyInvestment={setMonthlyInvestment}
        setApy={setApy}
        darkMode={darkMode}
      />
      <PlainDataAnswers
        startingCapital={startingCapital}
        monthlyInvestment={monthlyInvestment}
        apy={apy}
        darkMode={darkMode}
      />
      <Footer />
    </main>
  );
}
