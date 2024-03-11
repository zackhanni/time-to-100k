import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center py-16 ">
      <div className="flex flex-col max-w-md space-y-4 px-4 sm:px-4 ">
        <h1 className="text-2xl">
          How long does it take to make 100k? and the next?
        </h1>
        <p>
          Enter your starting balance the how much you invest monthly to find
          out how long it will take you to earn 100k.
        </p>
        {/* <div className="bg-[#00ABE4] h-8 w-full px-8 border-b-4 border-black"></div> */}
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
