'use client';

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', 'true')
      setEmail('');
      setPassword('');
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center pt-16 bg-gray-100 dark:bg-dark-bg">
      <div className="bg-light-card-bg dark:bg-dark-card-bg p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-4 text-light-title-text dark:text-dark-title-text">
          Sign Up for Rick and Morty Adventures
        </h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300"
            >
              Enter your Intergalactic Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-400 dark:focus:ring-red-400 focus:outline-none"
              placeholder="example@galaxy.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300"
            >
              Create a Galactic Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-400 dark:focus:ring-red-400 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-light-btn dark:bg-dark-btn text-white py-3 rounded-lg hover:bg-blue-500 dark:hover:bg-red-500 transition-colors"
          >
            Sign Up
          </button>
          <h3 className="text-center">
            Already have an account?{' '}
            <Link href="/sign-in">
              <span className="text-light-title-text dark:text-dark-title-text underline cursor-pointer">Sign in</span>
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

