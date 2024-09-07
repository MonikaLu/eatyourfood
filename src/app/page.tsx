"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      // const response = await fetch("TODO", {
      //   method: "POST",
      //   body: formData,
      // });
      // const data = await response.json();
      console.log(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-24 bg-background flex flex-col justify-center items-center">
      <Link href="/home">Home</Link>
      <h1 className="text-title1 text-headline">Eat Your Food</h1>
      <form onSubmit={onSubmit}>
        <div className="h-full w-full flex-col gap-y-5 flex">
          <div>
            <Label content="Username:" htmlFor="username" />
            <Input type="text" name="username" />
          </div>
          <div>
            <Label content="Password:" htmlFor="password" />
            <Input type="password" name="password" />
          </div>
          <div className="flex flex-row justify-between">
            <Button content="Log In" />
            <Button content="Sign Up" />
          </div>
        </div>
      </form>
    </main>
  );
}
