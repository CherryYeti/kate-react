import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="justify-center flex mt-20">
      <div className="max-w-xs md:max-w-lg lg:max-w-3xl">{children}</div>
    </div>
  );
};
export default MainLayout;
