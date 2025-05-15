import React from "react";

interface HeadingComponentProps {
  title: string;
}

const HeadingComponent: React.FC<HeadingComponentProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default HeadingComponent;
