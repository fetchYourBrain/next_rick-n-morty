import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container flex-col min-h-screen h-[100%] w-[100%] mx-auto px-4 sm:px-6 lg:px-8 flex-1 my-10">
      {children}
    </div>
  );
};
