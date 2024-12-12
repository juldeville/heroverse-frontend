interface ButtonProps {
  label: string;
  handleClick: () => void;
}

const Button = ({ label = "Button", handleClick }: ButtonProps) => {
  return (
    <div
      className="border-2 border-heroYellow p-2 rounded text-heroYellow cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Button;
