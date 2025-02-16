"use client";

import Link from "next/link";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, userLoginSchema } from "@repo/zod-schema/user";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const handleFormSubmit = (data: UserLogin) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-10 transition-all duration-300 hover:shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-500">Sign in to continue</p>
        </div>

        <form
          onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className="py-6 outline-none"
            />
            {errors.email && (
              <ErrorMessage message={errors.email.message ?? ""} />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative mt-1">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="pr-12 py-6"
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </Button>
              {errors.password && (
                <ErrorMessage message={errors.password.message ?? ""} />
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 "
          >
            Sign In <FiArrowRight size={20} />
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
