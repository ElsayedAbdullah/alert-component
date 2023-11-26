"use client";

import { ReactNode, useState } from "react";
import { X } from "lucide-react";

import "./Alert.scss";

interface IProps {
  name:
    | "alert-default"
    | "alert-error"
    | "alert-info"
    | "alert-success"
    | "alert-warning";
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ name, icon, title, description, children }: IProps) => {
  const [isActive, setIsActive] = useState(true);
  if (isActive) {
    return (
      <div className={`${name}`}>
        <h2 className="flex items-center gap-3 text-xl font-semibold">
          <span className="icon">{icon}</span>
          <span>{title}</span>
          <X
            className="ml-auto cursor-pointer"
            onClick={() => setIsActive(false)}
            size={25}
          />
        </h2>
        {children ? children : <p>{description}</p>}
      </div>
    );
  }
  return <></>;
};

export default Alert;
