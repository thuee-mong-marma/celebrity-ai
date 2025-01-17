import { Message } from "ai";

interface Props {
  messages: Message[];
}

const ChatMessages = ({ messages }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 text-white flex flex-col">
      {messages.map((m) => (
        <>
          {m.role === "user" ? (
            <p className="whitespace-pre-wrap max-w-[75%] self-end bg-gray-700 rounded-lg p-2">
              {m.content}
            </p>
          ) : (
            <p className="whitespace-pre-wrap max-w-[80%] bg-purple text-black rounded-lg p-2">
              {m.content}
            </p>
          )}
        </>
      ))}
    </div>
  );
};

export default ChatMessages;
