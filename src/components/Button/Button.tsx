/* eslint-disable react/function-component-definition */
import React from "react";

interface Props {
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Button;
