interface NumberedHeaderProps {
  number?: React.ReactNode;
  children: React.ReactNode;
}

const NumberedHeader = ({ number, children }: NumberedHeaderProps) => {
  return (
    <div className="flex gap-4 items-center justify-center text-white">
      {number && <Number>{number}</Number>}
      <p className="text-2xl md:text-3xl">{children}</p>
    </div>
  );
};

export const Number = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-10 w-10 md:h-12 md:w-12 number-background flex items-center justify-center text-white text-xl md:text-2xl">
      {children}
    </div>
  );
};

export default NumberedHeader;
