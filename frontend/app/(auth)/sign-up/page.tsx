"use client";
import { useActionState } from "react";
import type { TAuthSchema } from "@/utils/validationSchemas";
import { actionRegister } from "@/utils/actions/authActions";
import { FaGoogle } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import Link from "next/link";
import AuthFormInput from "@/components/inputs/AuthFormInput";
import Button from "@/components/buttons/Button";

type RegisterFormFields = TAuthSchema;

const LoginPage = () => {
  const [state, action, isPending] = useActionState(actionRegister, undefined);

  return (
    <div className="max-w-125">
      {state?.message && (
        <div className="flex justify-start items-center gap-x-3 px-2 py-1 rounded-sm bg-white shadow-[0_0_10px_rgba(0,0,0,10%)] mb-3">
          <IoAlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-sm text-red-500 leading-normal font-medium capitalize">
            {state?.message}
          </p>
        </div>
      )}
      <h2 className="text-2xl font-bold leading-normal text-black mb-4">
        Sign Up
      </h2>
      <p className="text-base font-normal text-gray-500 leading-normal mb-8">
        Create an account by entering all necessary credentials. Already have an
        account?{" "}
        <Link className="underline text-blue-500" href={"/sign-in"}>
          Log in system
        </Link>
      </p>
      <form action={action} className="flex flex-col gap-y-4">
        <AuthFormInput<RegisterFormFields>
          name="username"
          id="username-input"
          placeholder="Provide your name"
          label="Username"
          error={state?.errors?.username && state?.errors?.username[0]}
          defaultValue={state?.fields.username}
        />
        <AuthFormInput<RegisterFormFields>
          name="email"
          id="email-input"
          placeholder="Provide your email address"
          label="Email address"
          error={state?.errors?.email && state?.errors?.email[0]}
          defaultValue={state?.fields.email}
        />
        <AuthFormInput<RegisterFormFields>
          name="password"
          id="password-input"
          placeholder="Provide your password"
          label="Password"
          type="password"
          error={state?.errors?.password && state?.errors?.password[0]}
          defaultValue={state?.fields.password}
        />
        <Button
          className="w-full py-2 rounded-lg text-white font-medium leading-normal text-base bg-blue-500 hover:bg-blue-400 transition-colors duration-100 ease-in-out disabled:bg-blue-300"
          type="submit"
          disabled={isPending}
        >
          Sign Up
        </Button>
        <div className="flex justify-between items-center gap-x-4">
          <div className="h-0.5 flex-1 bg-gray-300"></div>
          <span className="uppercase text-sm leading-normal font-medium text-gray-300">
            or
          </span>
          <div className="h-0.5 flex-1 bg-gray-300"></div>
        </div>
        {/* oauth 2.0 google example */}
        <Button className="flex justify-center items-center gap-x-2 w-full py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-200 transition-colors duration-100 ease-in-out text-black font-medium leading-normal text-sm">
          <FaGoogle className="w-4 h-4" /> <p>Continue with Google</p>
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
