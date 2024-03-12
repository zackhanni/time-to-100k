import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center py-16 ">
      <div className="flex flex-col max-w-lg space-y-4 px-4 sm:px-4 ">
        <h1 className="text-2xl">
          <span className="font-bold text-7xl sm:text-8xl pb-4">How long</span>
          <br /> does it take to make 100k?
        </h1>
        <p>
          This tool empowers users to strategize their path to significant
          wealth accumulation with confidence. Elevate your investment strategy
          today and chart a direct course towards your financial aspirations.
        </p>
        <a
          href="#input"
          className=" bg-[#00ABE4] flex items-center justify-center py-2 px-4 mx-auto rounded-sm text-white"
        >
          <FontAwesomeIcon className="pr-2" icon={faArrowDown} /> Scroll down
        </a>
      </div>

      <Image
        src="/undraw_investment_data.svg"
        width={350}
        height={350}
        alt="Picture of the author"
        className="pt-8 sm:pt-0"
      />
    </section>
  );
}
