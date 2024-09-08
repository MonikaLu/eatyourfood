import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-2/3 bg-headline text-primary m-4 rounded-xl">
        <Link
          className="m-5 p-3  text-background hover:bg-tertiary hover:text-highlight"
          href="/home"
        >
          Home
        </Link>
        <Link
          className="m-5 p-3 text-background  hover:bg-tertiary hover:text-highlight "
          href="/products"
        >
          Products
        </Link>
        <Link
          className="m-5 p-3 text-background  hover:bg-tertiary hover:text-highlight "
          href="/"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Header;
