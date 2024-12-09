import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/signup-form";
import React from "react";

const SignUp = () => {
  return (
    <div className="bg-background h-screen flex items-center justify-center w-full">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
