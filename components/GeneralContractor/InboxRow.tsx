import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  address: string;
  subcontractorCompany: string;
  division: string;
  dateSubmitted: string;
}

const InboxRow: React.FC<Props> = ({
  name,
  address,
  dateSubmitted,
  division,
  subcontractorCompany,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1.5fr,1fr,1fr,1fr] min-w-[800px] border-b-[2px] border-gray px-4 py-[8px]">
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-semibold text-black-main text-[11px] capitalize">
          {name}
        </p>
      </div>
      {/* Address here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {address}
        </p>
      </div>
      {/*GC's Name */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {subcontractorCompany}
        </p>
      </div>
      {/* Division here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {division.length > 16 ? division.substring(0, 15) + "..." : division}
        </p>
      </div>
      {/* Date here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {dateSubmitted}
        </p>
      </div>

      <div className="w-full flex items-center justify-start">
        <button
          className="w-[100px] h-[30px] flex items-center justify-center rounded-[6px] text-white-main text-[13px] font-inter font-medium bg-brand-secondary"
          onClick={() => {}}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default InboxRow;
