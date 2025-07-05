import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-2xl py-4 mx-auto min-h-screen px-6 ">
      {children}
    </div>
  );
};

export default Container;
