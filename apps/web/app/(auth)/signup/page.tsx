"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff, FiChevronDown } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COUNTRY_CODES } from "@/const/CountryCode";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry] = useState(COUNTRY_CODES[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Account
          </h1>
          <p className="text-gray-500 mt-2">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input type="text" placeholder="John Doe" className="mt-1 py-6" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              className="mt-1 py-6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex gap-2 mt-1">
              <Button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors py-6"
              >
                <Image
                  src={`https://flagcdn.com/24x18/${selectedCountry.country.toLowerCase()}.png`}
                  alt={selectedCountry.name}
                  width={24}
                  height={18}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span className="text-gray-600">{selectedCountry.code}</span>
                <FiChevronDown className="ml-auto text-gray-400" />
              </Button>
              <Input
                type="tel"
                placeholder="123 456 7890"
                className="flex-grow py-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <Input
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
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-[1.01] shadow-sm py-7"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
