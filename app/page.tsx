"use client";

import Image from "next/image";
import InputForm from "./components/InputForm";
import PlainDataAnswers from "./components/PlainDataAnswers";
import { useState } from "react";

export default function Home() {
  const [startingCapital, setStartingCapital] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  return (
    <main>
      <InputForm
        setStartingCapital={setStartingCapital}
        setMonthlyInvestment={setMonthlyInvestment}
      />
      <PlainDataAnswers
        startingCapital={startingCapital}
        monthlyInvestment={monthlyInvestment}
      />
    </main>
  );
}
