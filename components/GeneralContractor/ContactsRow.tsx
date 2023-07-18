import Link from "next/link";
import React from "react";

interface Props {
  description: string;
  email: string;
  subcontractor: string;
  division: string;
  phone: string;
}

const ContactsRow: React.FC<Props> = ({
  description,
  email,
  subcontractor,
  division,
  phone,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1.5fr,1.5fr] min-w-[800px] border-b-[2px] border-gray px-4 py-[8px]">
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-semibold text-black-main text-[11px] capitalize">
          {subcontractor}
        </p>
      </div>
      {/* Division here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {division.length > 16 ? division.substring(0, 15) + "..." : division}
        </p>
      </div>
      {/*Phone here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {phone}
        </p>
      </div>
      {/* email here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {email}{" "}
        </p>
      </div>
      {/* Description  here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {description.length > 30
            ? description.substring(0, 29) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default ContactsRow;
