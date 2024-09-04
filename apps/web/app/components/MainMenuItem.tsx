import React from "react";

const MainMenuItem = ({
  title,
  children,
}: {
  title: String;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex cursor-pointer hover:cotrast-200 hover:shadow-md rounded-md hover:bg-base-200 p-2">
      <span className=" inline-block px-1">{children}</span>
      {title}
    </div>
  );
};

export default MainMenuItem;
