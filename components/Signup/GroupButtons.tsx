import React from "react";

interface Props {
  state: boolean;
  eventListener: React.Dispatch<React.SetStateAction<boolean>>;
}

const GroupButtons: React.FC<Props> = ({ state, eventListener }: Props) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => eventListener(true)}
        className={`w-[130px] h-[30px] flex items-center justify-center ${
          state
            ? "bg-brand-tartary text-white-main"
            : "bg-transparent hover:bg-gray-200/20"
        } text-black-main text-[14px] font-medium rounded-[6px]`}
      >
        Sub Contractor
      </button>
      <button
        type="button"
        onClick={() => eventListener(false)}
        className={`w-[150px] h-[30px] flex items-center justify-center ${
          !state
            ? "bg-brand-tartary text-white-main"
            : "bg-transparent hover:bg-gray-200/20"
        } text-black-main text-[14px] font-medium rounded-[6px]`}
      >
        General Contractor
      </button>
    </div>
  );
};

export default GroupButtons;
