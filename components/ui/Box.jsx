import React from "react";

const Box = () => {
  return (
    <div className="flex bg-black h-screen">
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <p className="text-white text-center">
          This is a paragraph on the left side with details about the image.
        </p>
        <p className="text-white text-center">
          Additional details can go here.
        </p>
      </div>
      <div className="w-1/2 p-4 flex justify-center items-center bg-customGreen mt-10 mb-10" />
    </div>
  );
};

export default Box;
