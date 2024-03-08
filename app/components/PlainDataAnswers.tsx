// PlainDataAnswers.tsx
import React from "react";

const goals = [
  100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
  1000000,
];

interface PlainDataAnswersProps {
  startingCapital: number;
  monthlyInvestment: number;
}

export default function PlainDataAnswers({
  startingCapital,
  monthlyInvestment,
}: PlainDataAnswersProps) {
  return (
    <div className="bg-gray-400 py-8">
      {/* <p>Starting capital: {startingCapital}</p> */}
      {/* <p>Monthly investment: {monthlyInvestment}</p> */}
      <div className="space-y-4 flex flex-col items-center justify-center ">
        {startingCapital > 0 && monthlyInvestment > 0 ? (
          goals.map((goal) =>
            startingCapital > goal ? null : (
              <div key={goal} className="bg-gray-200 px-4 py-2 flex space-x-8">
                <p>Months until: {goal}</p>
                <p className="bg-gray-300">
                  {Math.floor((goal - startingCapital) / monthlyInvestment)}
                </p>
                <p>Months until next 100k</p>
                <p className="bg-gray-300">
                  {Math.floor(
                    (goal + 100_000 - startingCapital) / monthlyInvestment
                  ) - Math.floor((goal - startingCapital) / monthlyInvestment)}
                </p>
              </div>
            )
          )
        ) : (
          <p>Enter data into the form above to get started</p>
        )}
      </div>
    </div>
  );
}
