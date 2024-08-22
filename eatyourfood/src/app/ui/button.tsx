interface ButtonProps {
  content: string;
}

function Button({ content }: ButtonProps) {
  return (
    <button
      type="submit"
      className="bg-button text-buttonText rounded py-2 px-4 hover:cursor-pointer hover:bg-primary border-stroke m-1"
    >
      {content}
    </button>
  );
}

export default Button;
