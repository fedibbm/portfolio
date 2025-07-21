import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" mx-auto min-h-screen ">
      {children}
    </div>
  );
};

export default Container;
