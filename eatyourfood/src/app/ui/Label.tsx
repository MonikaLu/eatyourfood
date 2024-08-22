interface LabelProps {
  content: string;
  htmlFor: string;
}

export default function Label({ content, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-paragraph">
      {content}
    </label>
  );
}
