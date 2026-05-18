"use client";
import { useState } from "react";
import {
  startOfToday,
  startOfMonth,
  eachDayOfInterval,
  endOfMonth,
  add,
  sub,
  format,
  isEqual,
  getDay,
} from "date-fns";
import { FaChevronDown } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Button from "../buttons/Button";

const DAYS_OF_WEEK = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const COLUMN_START = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const CustomDateInput = ({
  defaultValue,
  name,
}: {
  defaultValue?: Date | string;
  name: string;
}) => {
  const currentDate = startOfToday();
  const [selectedDate, setSelectedDate] = useState(defaultValue || currentDate);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(currentDate));

  const daysOfMonth = eachDayOfInterval({
    start: currentMonth,
    end: endOfMonth(currentMonth),
  });

  const handleChangeMonth = (action: "next" | "prev") => {
    setCurrentMonth((prev) => 
      action === "next" ? add(prev, {months: 1}) : sub(prev, {months: 1}),
    );
  };

  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center px-4 py-3 rounded-sm border ${isOpen ? "border-blue-500" : "border-gray-300"} cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input type="hidden" value={new Date(selectedDate).toISOString()} name={name} />
        <p>{format(selectedDate, "d MMM yyyy") || `Select Date`}</p>
        <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="absolute p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,10%)] bg-white top-0 -translate-y-full -right-2">
          <div className="flex justify-between items-center">
            <Button className="inline-block w-fit" onClick={() => handleChangeMonth("prev")}>
              <MdKeyboardDoubleArrowLeft />
            </Button>
            <span className="text-sm font-medium text-black leading-normal capitalize inline-block">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <Button className="inline-block w-fit" onClick={() => handleChangeMonth("next")}>
              <MdKeyboardDoubleArrowRight />
            </Button>
          </div>
          <div className={`grid grid-cols-7 gap-2 mt-4`}>
            {DAYS_OF_WEEK.map((el, i) => (
              <span
                key={`days-${i}`}
                className="font-medium text-sm leading-normal text-black capitalize inline-block text-center"
              >
                {el}
              </span>
            ))}
            {daysOfMonth.map((day, i) => (
              <Button
                key={format(day, "yyyy-MM-dd")}
                className={`w-6 h-6 block text-center text-sm relative rounded-full hover:bg-[0_0_0_10%] ${isEqual(selectedDate, day) ? "bg-blue-500 text-white font-medium" : "text-black font-normal"} ${i === 0 ? COLUMN_START[getDay(day)] : ""}`}
                onClick={() => {
                  setSelectedDate(day);
                  setIsOpen(false);
                }}
              >
                <span className="absolute top-1/2 left-1/2 -translate-1/2">
                  {format(day, "d")}
                </span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default CustomDateInput;
