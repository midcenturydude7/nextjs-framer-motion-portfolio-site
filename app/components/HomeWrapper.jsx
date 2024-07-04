import React from "react";

export default function HomeWrapper() {
  return (
    <div className="flex h-lvh justify-center p-24">
      <div className="flex h-[25%] w-[50%] flex-wrap items-stretch">
        <div className="flex gap-8 w-1/3 flex-col">
          <div className="flex-1 bg-red-500">Row 1</div>
          <div className="flex-1 bg-green-500">Row 2</div>
          <div className="flex-1 bg-blue-500">Row 3</div>
        </div>
        <div className="w-2/3 bg-yellow-500">Right side content</div>
      </div>
    </div>
  );
}
