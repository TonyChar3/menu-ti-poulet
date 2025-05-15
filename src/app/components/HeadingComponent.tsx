import React from "react";

interface HeadingComponentProps {
  title: string;
}

const HeadingComponent: React.FC<HeadingComponentProps> = ({ title }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-primary-50">{title}</h1>
      <p className="mt-4 text-lg text-primary-500">
        Welcome to the {title} page!
      </p>
    </div>
  );
};

export default HeadingComponent;
