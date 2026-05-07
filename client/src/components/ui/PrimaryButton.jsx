const PrimaryButton = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`
        px-6 py-3
        rounded-xl
        bg-orange-500
        hover:bg-orange-600
        transition-all
        duration-300
        text-white
        font-semibold
        cursor-pointer
        active:scale-95
        shadow-md
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;