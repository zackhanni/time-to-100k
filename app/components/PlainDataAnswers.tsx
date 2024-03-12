import Image from "next/image";

const goals = [
  100_000, 200_000, 300_000, 400_000, 500_000, 600_000, 700_000, 800_000,
  900_000,
];

interface PlainDataAnswersProps {
  startingCapital: number;
  monthlyInvestment: number;
  apy: number;
  darkMode: boolean;
}

export default function PlainDataAnswers({
  startingCapital,
  monthlyInvestment,
  apy,
  darkMode,
}: PlainDataAnswersProps) {
  const calculateMonthsToReachGoal = (goal: number) => {
    let months = 0;
    let total = startingCapital;
    const monthlyRate = apy / 12 / 100;

    while (total < goal && months < 999_999) {
      total = total + monthlyInvestment;
      total += total * monthlyRate;
      months++;
    }
    return months;
  };

  return (
    <div className=" py-8 px-4 sm:px-16 flex flex-col justify-center">
      {/* <p>Starting capital: {startingCapital}</p> */}
      {/* <p>Monthly investment: {monthlyInvestment}</p> */}
      <Image
        src="/piggy-bank.svg"
        width={100}
        height={100}
        alt="Picture of the author"
        className="mx-auto"
      />
      <div className="text-black space-y-4 flex flex-col items-center w-full justify-center max-w-screen-sm mx-auto">
        {startingCapital > 0 || (monthlyInvestment > 0 && apy > 0) ? (
          goals.map((goal) =>
            startingCapital > goal ? null : (
              <div
                key={goal}
                className={`px-4 py-2 flex flex-col sm:flex-row sm:space-x-8 items-center space-y-4 sm:space-y-0 w-full rounded-md ${
                  darkMode ? "bg-slate-600 text-white" : "bg-[#E9F1FA]"
                } `}
              >
                <div className="flex justify-between items-center w-full">
                  <p>Months until: {goal}</p>
                  <p className="bg-[#00ABE4] text-white py-1 px-2 rounded-md">
                    {calculateMonthsToReachGoal(goal)}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p>Months until next 100k</p>
                  <p className="bg-[#00ABE4] text-white py-1 px-2 rounded-md">
                    {calculateMonthsToReachGoal(goal + 100_000) -
                      calculateMonthsToReachGoal(goal)}
                  </p>
                </div>
              </div>
            )
          )
        ) : (
          <p className={`${darkMode ? " text-white" : ""}`}>
            Enter data into the form above to get started
          </p>
        )}
        {(startingCapital > 0 || (monthlyInvestment > 0 && apy > 0)) && (
          <div
            className={`bg-[#E9F1FA] py-4 px-4 rounded-md w-full ${
              darkMode ? "bg-slate-600 text-white" : "bg-[#E9F1FA]"
            }`}
          >
            <p className="font-bold text-lg text-center pb-4">
              Want to become a millionaire?
            </p>
            <div className="flex items-center sm:space-x-8 justify-between">
              <p>At this rate, it will take you:</p>
              <p className="bg-[#00ABE4] text-white py-1 px-2 rounded-md">
                {calculateMonthsToReachGoal(1_000_000) < 12
                  ? calculateMonthsToReachGoal(1_000_000) + " months"
                  : Math.floor(calculateMonthsToReachGoal(1_000_000) / 12) +
                    " years"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
