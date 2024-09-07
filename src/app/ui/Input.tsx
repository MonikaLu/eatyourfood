interface InputProps {
  type: string;
  name: string;
}

export default function Input({ type, name }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className="border-2 border-stroke bg-headline text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12"
    />
  );
}
