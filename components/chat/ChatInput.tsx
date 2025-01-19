import Textarea from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { SendHorizontal } from "lucide-react";
import { useAIChat } from "@/components/providers/AIChatProvider";

const ChatInput = () => {
  const { input, handleInputChange, handleSubmit, isLoading } = useAIChat();

  return (
    <div className="w-full max-w-4xl p-2">
      <form onSubmit={handleSubmit} className="relative">
          <Textarea
            value={input}
            placeholder="Write your message here..."
            onChange={handleInputChange}
            rows={2}
            className="pr-10"
          />
          <Button
            type="submit"
            variant="default"
            size="icon"
            disabled={isLoading}
            className="ai-button"
          >
            <SendHorizontal className="w-6 h-6 text-white" />
          </Button>
      </form>
    </div>
  );
};

export default ChatInput;
