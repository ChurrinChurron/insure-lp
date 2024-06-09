import DifBox from "./DifBox"
import snappy from "../assets/icon-snappy-process.svg"
import prices from "../assets/icon-affordable-prices.svg"
import people from "../assets/icon-people-first.svg"

const Different = () => {
  return (
    <section className="my-16 mx-auto max-w-[72em] lg:px-8 lg:mt-80 xl:px-0">
      <h2 className="font-dm text-4xl text-center relative -z-10 before:content-[''] before:w-[3.4em] before:h-[.040em] 
        before:bg-gray-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-16 lg:text-left lg:before:-translate-x-0 lg:before:left-0 lg:before:bottom-20 xl:text-5xl">{`We're different`}</h2>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[3em]">
        <DifBox img={snappy}
                title="Snappy Process"
                desc="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."/>
        <DifBox img={prices}
                title="Affordable Prices"
                desc="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."/>
        <DifBox img={people}
                title="People First"
                desc="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."/>
      </div>
    </section>
  )
}

export default Different