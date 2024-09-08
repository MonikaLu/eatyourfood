import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-center w-full bg-background text-primary">
      <Link className="m-5" href="/home">
        Home
      </Link>
      <Link className="m-5" href="/products">
        Products
      </Link>
    </div>
  );
};

export default Header;
