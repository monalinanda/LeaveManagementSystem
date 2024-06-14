import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allLeavs } from "../../constants/constant";
import RadioButton from "../ui/RadioButton";
import Button from "../ui/Button";
import previous from "../../assets/previous.png";
import LeaveReasons from "./LeaveReasons";

const LeavePlan = () => {
  const [isShow, setIsShow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = () => {
    setIsShow(false);
  };
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className="max-w-lg rounded overflow-hidden shadow-lg p-9 h-fit">
        {isShow ? (
          <>
            <h1 className="sm:text-4xl text-3xl font-thin tracking-tight text-primary font-serif leading-normal text-left">
              What type of leave are you Taking ?
            </h1>
            <div>
              {allLeavs.map((leave, index) => (
                <div className="px-6 py-4 border border-gray-400 mt-8 text-primary rounded-md">
                  <div className="font-bold text-xl mb-2">{leave.category}</div>
                  <div className="flex text-primary items-center text-left">
                    <p className="text-base">{leave.details}</p>
                    <RadioButton
                      id={leave.category}
                      label=""
                      name={leave.category}
                      value={leave.category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      checked={selectedCategory === leave.category}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-evenly">
              <Link to="/home">
                <button className="bg-[#d7d9c4] h-12 w-14 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2  mt-3 ">
                  <img src={previous} className="w-5 h-5 m-auto" />
                </button>
              </Link>
              <a href="#LeaveReasons" onClick={handleClick}>
                <Button name="Next" width="300px" onClick={handleClick} />
              </a>
            </div>
          </>
        ) : (
          <>
            <LeaveReasons
              id="LeaveReasons"
              selectedCategory={selectedCategory}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LeavePlan;
