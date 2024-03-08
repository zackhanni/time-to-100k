// PlainDataAnswers.tsx
import React from "react";

const goals = [
  100_000, 200_000, 300_000, 400_000, 500_000, 600_000, 700_000, 800_000,
  900_000,
];

interface PlainDataAnswersProps {
  startingCapital: number;
  monthlyInvestment: number;
  apy: number;
}

export default function PlainDataAnswers({
  startingCapital,
  monthlyInvestment,
  apy,
}: PlainDataAnswersProps) {
  const calculateMonthsToReachGoal = (goal: number) => {
    let months = 0;
    let total = startingCapital;
    const monthlyRate = apy / 12 / 100;

    while (total < goal) {
      total += monthlyInvestment;
      total += total * monthlyRate;
      months++;
    }
    return months;
  };

  return (
    <div className="bg-gray-400 py-8">
      {/* <p>Starting capital: {startingCapital}</p> */}
      {/* <p>Monthly investment: {monthlyInvestment}</p> */}
      <div className="space-y-4 flex flex-col items-center justify-center ">
        {startingCapital > 0 && monthlyInvestment > 0 && apy > 0 ? (
          goals.map((goal) =>
            startingCapital > goal ? null : (
              <div
                key={goal}
                className="bg-gray-200 px-4 py-2 flex space-x-8 items-center"
              >
                <p>Months until: {goal}</p>
                <p className="bg-gray-300 p-1">
                  {calculateMonthsToReachGoal(goal)}
                </p>
                <p>Months until next 100k</p>
                <p className="bg-gray-300 p-1">
                  {calculateMonthsToReachGoal(goal + 100_000) -
                    calculateMonthsToReachGoal(goal)}
                </p>
              </div>
            )
          )
        ) : (
          <p>Enter data into the form above to get started</p>
        )}
        <div className="bg-gray-200 py-4 px-8 rounded-lg">
          <p>Want to be a millionaire?</p>
          <p>At this rate, becoming a millionaire will take:</p>
          <p>
            {calculateMonthsToReachGoal(1_000_000) < 12
              ? calculateMonthsToReachGoal(1_000_000) + " months"
              : Math.floor(calculateMonthsToReachGoal(1_000_000) / 12) +
                " years"}
          </p>
        </div>
      </div>
    </div>
  );
}
