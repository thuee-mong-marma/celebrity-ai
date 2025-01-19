import { AIChatProvider } from "@/components/providers/AIChatProvider";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AIChatProvider>
      <div className="w-full h-full max-w-4xl mx-auto min-h-dvh">
        {children}
      </div>
    </AIChatProvider>
  );
}
