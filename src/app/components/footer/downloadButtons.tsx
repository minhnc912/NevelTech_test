import React from "react";

const DownloadButtons: React.FC = () => {
  return (
    <div>
      <button className="bg-[#1A3157] py-[6px] px-3 flex rounded-lg hover:bg-[#b4b4b4cc]">
        <img src="/apple.svg" alt="apple icon" />
        <div className="text-left font-medium">
          <p>Bluechip App</p>
          <p>for Mac OS</p>
        </div>
      </button>
      <div className="flex gap-2 pt-2">
        <button className="bg-[#1A3157] flex flex-col items-center px-3 flex-1 rounded-[10px] hover:bg-[#b4b4b4cc]">
          <img src="/android.svg" alt="android icon" />
          <p className="text-left font-medium">Android</p>
        </button>
        <button className="bg-[#1A3157] flex flex-col items-center px-3 flex-1 rounded-[10px] hover:bg-[#b4b4b4cc]">
          <img src="/apple.svg" alt="apple icon" />
          <p className="text-left font-medium">IOS</p>
        </button>
      </div>
    </div>
  );
};

export default DownloadButtons;
