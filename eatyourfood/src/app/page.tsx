"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/Input";
import Label from "./ui/Label";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("TODO", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex-row flex justify-center p-24 bg-background">
      <form onSubmit={onSubmit}>
        <div className="h-full flex-col flex gap-y-5">
          <div>
            <Label content="Username:" htmlFor="username" />
            <Input type="text" name="username" />
          </div>
          <div>
            <Label content="Password:" htmlFor="password" />
            <Input type="text" name="password" />
          </div>
          <Button content="Log in" />
        </div>
      </form>
    </main>
  );
}
