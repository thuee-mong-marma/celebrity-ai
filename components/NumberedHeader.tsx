interface NumberedHeaderProps {
  number?: React.ReactNode;
  children: React.ReactNode;
}

const Number = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-10 w-10 md:h-12 md:w-12 bg-number-background bg-full bg-no-repeat flex items-center justify-center text-white text-3xl md:text-4xl">
      {children}
    </div>
  );
};

const NumberedHeader = ({ number, children }: NumberedHeaderProps) => {
  return (
    <div className="flex gap-4 items-center text-white border-b-4 border-[#424256] pb-4">
      {number && <Number>{number}</Number>}
      <p className="text-3xl md:text-4xl">{children}</p>
    </div>
  );
};

export default NumberedHeader;
