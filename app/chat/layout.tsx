import Footer from "@/components/Footer";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full max-w-4xl mx-auto min-h-[100dvh]">
      {children}
      {/* <Footer /> */}
    </div>
  );
}
