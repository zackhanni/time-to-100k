import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Hero({ darkMode }) {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center py-16 ">
      <div className="flex flex-col max-w-lg space-y-4 px-4">
        <h1 className="text-2xl font-bold">
          <span className="font-bold text-7xl sm:text-8xl pb-4">How long</span>
          <br />{" "}
          <span className="text-[#ffb3cb] italic">
            does it take to make 100k?
          </span>
        </h1>
        <p>
          This tool empowers users to strategize their path to significant
          wealth accumulation with confidence. Elevate your investment strategy
          today and chart a direct course towards your financial aspirations.
        </p>
        <a
          href="#input"
          className={`bg-[#ffb3cb] flex items-center justify-center py-2 px-4 mx-auto rounded-sm font-bold ${
            darkMode ? "text-[#203b20]" : ""
          }`}
        >
          <FontAwesomeIcon className="pr-2" icon={faArrowDown} /> Scroll down
        </a>
      </div>

      <Image
        src="/undraw_blooming.svg"
        width={275}
        height={275}
        alt="Picture of the author"
        className="pt-8 sm:pt-0 sm:w-[350px] sm:h-[350px]"
      />
    </section>
  );
}
