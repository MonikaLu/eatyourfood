interface ButtonProps {
  content: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      className="bg-button text-buttonText rounded py-2 px-4 hover:cursor-pointer hover:bg-primary border-stroke m-1"
    >
      {props.content}
    </button>
  );
}

export default Button;
