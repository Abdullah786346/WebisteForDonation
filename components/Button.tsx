type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "white" | "outlinedWhite";
  size?: "sm" | "md" | "lg" | "full";
  margin?: "auto" | "none";
};

const Button = ({ margin, variant, size, children, ...rest }: ButtonProps) => {
  const buttonStyles = {
    variants: {
      orange: "bg-orange-800 text-white hover:bg-orange-800/80",
      blue: "bg-blue-800 text-white hover:bg-blue-800/90",
      outlinedWhite:
        "bg-white border border-blue-800 text-blue-800 hover:bg-gray-100",
      white: "bg-white text-blue-800 hover:bg-gray-100",
    },
    sizes: {
      sm: "px-6 py-2 text-sm min-w-28",
      md: "px-8 py-2 text-md sm:text-sm min-w-32",
      lg: "px-10 py-2 text-md min-w-32 sm:text-sm md:text-md",
      full: "p-2 w-full",
    },
    margins: {
      auto: "mx-auto",
      none: "m-0",
    },
  };

  const buttonVariant = variant || "blue";
  const buttonSize = size || "md";
  const buttonMargin = margin || "none";
  return (
    <button
      className={`rounded-3xl flex font-medium items-center justify-center gap-2 w-fit ${buttonStyles.sizes[buttonSize]} ${buttonStyles.variants[buttonVariant]} ${buttonStyles.margins[buttonMargin]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
