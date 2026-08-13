function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;