import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container flex-col column min-h-screen max-w-100% mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gray-100 ">
      {children}
    </div>
  );
};
