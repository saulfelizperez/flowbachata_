interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  label,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
    >
      {label}
    </button>
  );
}