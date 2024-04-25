import NumberedHeader from "@/components/NumberedHeader";
import Image from "next/image";
import { Personas } from "@/components/Personas";
import AdviceContainer from "@/components/AdviceContainer";
import AIForm from "@/components/Form";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-20">
      <section className="flex flex-col md:flex-row items-center gap-8 border-b-4 border-[#424256] pb-10">
        <Image
          src="/images/images/questioned-cat.png"
          alt="cat"
          width={96}
          height={96}
          className="w-24 h-24 min-w-24 min-h-24"
        />
        <div className="space-y-6 text-white text-center md:text-start">
          <h2 className="text-xl md:text-2xl leading-7">
            Feeling trapped in a monotonous routine? Why not seek guidance from
            your beloved celebrities? Although their advice may not be
            certified, it will undoubtedly be more entertaining than pouring
            your heart out to your unsuspecting feline friend.
          </h2>
          <p className="text-lg md:text-xl text-purple leading-6">
            <span className="text-danger mr-2">Disclaimer:</span>
            This advice provided by the AI is purely for amusement and should
            not be considered as professional advice.
          </p>
        </div>
      </section>
      <section className="py-5 md:py-10 space-y-4">
        <NumberedHeader number="2">Select your therapist</NumberedHeader>
        <Personas />
      </section>
      <AIForm/>
      <section className="space-y-10">
        <div className="space-y-4">
          <NumberedHeader>Celebrity Advice</NumberedHeader>
          <AdviceContainer />
        </div>
      </section>
    </main>
  );
}
