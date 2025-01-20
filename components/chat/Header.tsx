import { usePersona } from "@/hooks/usePersona";

const ChatHeader = () => {
  const { currentPersona } = usePersona();
  return (
    <header className="fixed w-screen bg-background left-0 top-0 z-50 flex items-center justify-center p-2 border-b border-gray-300">
      <h1 className="text-xl font-bold text-white">
        Therapy session with {currentPersona.split(" ")[0]}
      </h1>
    </header>
  );
};

export default ChatHeader;
