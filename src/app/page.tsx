"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Header from "./ui/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      console.log(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)]">
        <div className="w-full max-w-md flex flex-col gap-y-5">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-5">
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
        </div>
      </div>
    </>
  );
}
