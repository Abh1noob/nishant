import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/authForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[#8B5CF6]" />

          <div className="relative z-20 mx-auto my-auto w-[50%] rounded-xl bg-white p-6 font-semibold text-black">
            <blockquote className="space-y-2">
              <p className="mb-12 text-lg">
                "A game-changer for small businesses, offering AI-powered,
                intuitive tools for effortless content creation. Affordable and
                user-friendly, it's the key to elevating your digital presence."
              </p>
              <p className="text-lg">Stegosaurus Tex</p>
              <p className="text-sm font-normal text-[#777980]">Dino Inc.</p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="relative mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-[#667085]">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-[#883DCF]">Log in</span>
              </Link>
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
