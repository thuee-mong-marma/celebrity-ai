import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-3xl md:text-4xl border-b border-white pb-2 text-white", {
  variants: {
    size: {
      sm: "text-2xl md:text-3xl",
      default: "text-3xl md:text-4xl",
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  children: React.ReactNode;
}

const Heading = ({ children, size, className }: HeadingProps) => {
  return <h1 className={cn(headingVariants({ size }), className)}>{children}</h1>;
};

export default Heading;