"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollInto from "react-scroll-into-view";
import { useChat } from "ai/react";
import NumberedHeader from "@/components/NumberedHeader";
import { usePersona } from "@/hooks/usePersona";
import { Button } from "@/components/Button";
import { personas } from "@/data/personaData";
import Loader from "@/components/Loader";

const AdviceWindow = () => {
  const { currentPersona } = usePersona();
  const [message, setMessage] = useState("");

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading: isGenerating,
  } = useChat({
    api: "/api/advice",
    body: {
      message: message,
      persona: currentPersona,
      personality: personas[currentPersona].personality,
    },
    onResponse: (response) => {
      console.log("response", response.body);
    },
  });

  const customInputChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleInputChange(e);
    setMessage(e.target.value);
  };

  return (
    <section className="space-y-10">
      <NumberedHeader number="2">Write what&apos;s on your mind</NumberedHeader>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <textarea
          name="message"
          placeholder="Type here..."
          className="bg-textarea-background bg-no-repeat bg-full w-full rounded-xl p-10 bg-transparent focus-visible:outline-none text-white text-xl md:text-2xl"
          rows={8}
          maxLength={300}
          value={input}
          onChange={customInputChangeHandler}
        />
        <ScrollInto selector="#advice">
          <Button
            type="submit"
            className="block w-[250px] mx-auto bg-violet text-white text-xl h-[unset] p-3"
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Advice"}
          </Button>
        </ScrollInto>
      </form>
      <div
        id="advice"
        data-container='test'
        className="min-h-[400px] w-full p-10 max-h-fit bg-persona-background bg-full bg-no-repeat space-y-4"
      >
        <div className="flex items-center justify-center gap-4">
          <Image
            src={personas[currentPersona].iconPath}
            alt={personas[currentPersona].name}
            width={64}
            height={64}
          />
          <div>
            <h2 className="text-2xl md:text-3xl text-white">
              {personas[currentPersona].name}
            </h2>
            <p className="text-red">{personas[currentPersona].profession}</p>
          </div>
        </div>
        <div className="text-white text-xl md:text-2xl">
          <div className="text-white">
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "assistant" && m.content}
              </div>
            ))}
          </div>
        </div>
        {isGenerating && <Loader />}
      </div>
    </section>
  );
};

export default AdviceWindow;
