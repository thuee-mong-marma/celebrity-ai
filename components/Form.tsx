'use client';

import getAdvice from '@/actions/getAdvice';
import { personas } from '@/data/personaData';
import { useAdvice } from '@/hooks/useAdvice';
import { usePersona } from '@/hooks/usePersona';
import { Button } from './Button';
import NumberedHeader from './NumberedHeader';
import Textarea from './Textarea';

const AIForm = () => {
  const { currentPersona } = usePersona();
  const { advice, setAdvice, setAdviceGenerating } = useAdvice();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (advice) {
      setAdvice('');
    }
    const formData = new FormData(e.currentTarget);

    const message = formData.get('message') as string;

    const prompt = `You goal is to give advice in the style of ${personas[currentPersona].name} on the following situation.\n${personas[currentPersona].personality}Make 3 paragraphs and keep it around 900 and 1100 characters.\nDo not exceed 1100 characters\n\nSituation:\n${message}`;

    setAdviceGenerating(true);
    const { data, err } = await getAdvice(prompt);

    if (err) {
      console.error(err);
    }

    if (data) {
      console.log(data);
      setAdviceGenerating(false);
      setAdvice(data);
    }
  };

  return (
    <section className="py-5 md:py-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <NumberedHeader number="1">
          Write what&apos;s on your mind
        </NumberedHeader>
        <Textarea placeholder="Type here..." />
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
