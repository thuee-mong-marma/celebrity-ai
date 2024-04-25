"use client";

import { useState } from "react";
import { usePersona } from "@/hooks/usePersona";
import { personas } from "@/data/personaData";
import NumberedHeader from "./NumberedHeader";
import Textarea from "./Textarea";
import { Button } from "./Button";
import getAdvice from "@/actions/getAdvice";

const AIForm = () => {
  const { currentPersona } = usePersona();
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const message = formData.get("message") as string;

    const prompt = `You goal is to give advice in the style of ${personas[currentPersona].name} on the following situation.\n${personas[currentPersona].personality}Make 3 paragraphs and keep it around 900 and 1100 characters.\nDo not exceed 1100 characters\n\nSituation:\n${message}`;

    const { data, err } = await getAdvice(prompt);

    if(!err) {
      console.log(data)
    }
  }

  return (
    <section className="py-5 md:py-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <NumberedHeader number="1">
          Write what&apos;s on your mind
        </NumberedHeader>
        <Textarea placeholder="Type here..."/>
        <Button
          type="submit"
          className="block w-[250px] mx-auto bg-violet text-white text-xl h-[unset] p-3"
        >
          Generate Advice
        </Button>
      </form>
    </section>
  );
};

export default AIForm;
