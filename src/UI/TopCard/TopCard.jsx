import React, { useContext } from "react";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { LuFolderCheck } from "react-icons/lu";
import { LuFolderSync } from "react-icons/lu";

function TopCard({ title, value, desc, bgcolor, text }) {

  return (
    <>
      <div className={`flex gap-2 ${bgcolor} p-5 rounded-xl h-32`}>
        <div>
          <HiOutlineFolderOpen
            className={` bg-gray-100 py-1 px-1 rounded-md`}
            size={24}
          />
        </div>
        <div>
          <p className={` text-[13px] mb-3 font-[500] ${text}`}>{title}</p>
          <h1 className={`text-xl mb-1 ${text}`}>{value}</h1>
          <p className={`text-[11px] ${text}`}>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default React.memo(TopCard);
