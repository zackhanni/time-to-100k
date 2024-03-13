import DarkModeSwitch from "./DarkModeSwitch";

interface InputFormProps {
  setStartingCapital: React.Dispatch<React.SetStateAction<number>>;
  setMonthlyInvestment: React.Dispatch<React.SetStateAction<number>>;
  setApy: React.Dispatch<React.SetStateAction<number>>;
  darkMode: boolean;
}

export default function InputForm({
  setStartingCapital,
  setMonthlyInvestment,
  setApy,
  darkMode,
}: InputFormProps) {
  return (
    //finish setting up dark mode here
    <section
      id="input"
      className={` ${
        darkMode ? "bg-[#ffb3cb] text-[#203b20]" : "bg-pink-100"
      } flex flex-col sm:flex-row items-center justify-center py-8 space-y-8 sm:space-y-0`}
    >
      <form
        // action="/action_page.php"
        // onSubmit={}
        className="flex flex-col max-w-screen-lg space-y-4 px-4"
      >
        <div className="flex flex-col">
          <label htmlFor="initial-capital">Starting capital</label>
          <input
            type="number"
            id="initial-capital"
            name="initial capital"
            onChange={(e) => setStartingCapital(Number(e.currentTarget.value))}
            placeholder="0"
            className="px-2 py-2 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="investment">Monthly investment</label>
          <input
            type="number"
            id="investment"
            name="investment"
            onChange={(e) =>
              setMonthlyInvestment(Number(e.currentTarget.value))
            }
            placeholder="0"
            className="px-2 py-2 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="apy">Estimated % yearly return (APY)</label>
          <input
            type="number"
            id="apy"
            name="apy"
            onChange={(e) => setApy(Number(e.currentTarget.value))}
            defaultValue={5}
            className="px-2 py-2 text-black"
          />
        </div>

        {/* <label htmlFor="country">Investment interval</label>
        <select id="country" name="country">
          <option value="australia">Weekly</option>
          <option value="canada">Monthly</option>
          <option value="usa">Yearly</option>
        </select> */}

        {/* <button type="submit" value="Submit" className="bg-green-500 py-2">
          Submit
        </button> */}
      </form>
      <div>
        <p className="max-w-lg px-4">
          Our platform offers precise calculations for the accumulation of
          wealth, starting with initial monthly contributions and adjusting for
          expected Annual Percentage Yields (APY).
        </p>
      </div>
    </section>
  );
}
