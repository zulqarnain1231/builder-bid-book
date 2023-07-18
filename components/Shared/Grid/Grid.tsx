import React from "react";
import { BiSearch } from "react-icons/bi";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

interface Props {
  Title: string;
  TableHeaders: Array<string>;
  children: React.ReactNode;
  GridCols: string;
  Search: string;
  SetSearch: any;
  MinWidth?: string;
  Pages?: number;
  CurrentPage?: number;
  OnPageChange?: any;
}

const Grid: React.FC<Props> = ({
  Title,
  TableHeaders,
  GridCols,
  children,
  Search,
  SetSearch,
  MinWidth = "min-w-[800px]",
  Pages,
  CurrentPage,
  OnPageChange,
}: Props) => {
  return (
    <div className="w-full h-[calc(100vh-118px)] bg-white-main border-[1px] rounded-[8px] shadow-secondary">
      {/* table heading here */}
      <div className="w-full h-[80px] flex items-center justify-between border-b-[2px] p-4">
        <p className="font-inter capitalize font-semibold text-black-main sm:text-[20px] text-[16px]">
          {Title}
        </p>
        {/* search bar here */}
        <div className="w-[300px] flex items-center justify-center">
          <input
            value={Search}
            onChange={SetSearch}
            className="w-[calc(100%-40px)] h-[40px] font-inter font-medium bg-white-main/60 text-black-main/50 text-[14px] focus:outline-none rounded-l-[5px] p-2 border-[1px] focus:border-brand-tartary placeholder:font-primary"
            type="text"
            placeholder="Search keyword here..."
          />
          <button className="h-[40px] w-[40px] flex items-center justify-center rounded-r-[5px] text-white-main bg-brand-tartary border-[3px] border-brand-tartary">
            <BiSearch size={20} />
          </button>
        </div>
      </div>
      <div className="w-full h-[calc(100%-140px)] HideScroll">
        {/* table columns here */}
        <div className="w-full h-[50px] overflow-auto">
          <div
            className={`w-full h-full grid ${GridCols} ${MinWidth} border-b-[2px] border-gray p-4`}
          >
            {TableHeaders.map((item: string, index: any) => (
              <div
                key={index}
                className="w-full h-full flex items-center justify-start capitalize font-medium whitespace-nowrap text-black-main text-[14px] font-inter"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* rows here */}
        <div
          className={`w-full h-[calc(100%-40px)] overflow-auto ThinScrollbar`}
        >
          {children}
        </div>
      </div>
      <div>
        <div className="w-full h-[60px] border-t-[1px] border-gray flex justify-center items-center">
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#255ABF",
                    color: "white",
                    display: {
                      md: "block",
                      xs: "none",
                    },
                  },
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
