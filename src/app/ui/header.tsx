import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full bg-headline text-primary ">
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
      </div>
    </>
  );
};

export default Header;
