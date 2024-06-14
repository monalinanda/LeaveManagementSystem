import React from "react";
import { useOutletContext } from "react-router-dom";
import checkedImage from "../../assets/checkedImage.gif";
import { Link } from "react-router-dom";

const EmployeeLeaveHomepage = () => {
  const { authenticatedUser } = useOutletContext();

  const checkListData = [
    "Design your Leave plan in private",
    "submit your leave plan to notify",
    "we'll guied you  through any paperwork needed for you to recive your full pay",
    "we ensure  a smooth transition  back to your work ",
  ];
  return (
    <div className=" w-full h-auto mt-20 pl-5 pr-5">
      <div className=" sm:w-full max-w-6xl m-auto  sm:flex gap-4 items-baseline">
        <div>
          <h1 className="sm:text-6xl text-xl font-thin tracking-tighter leading-10 text-primary font-serif text-left">{`${authenticatedUser?.name} , let's design  a leave plan that works for You`}</h1>
          <p className="text-primary mt-3">
            we'll guied you through submitting a leave plan that fits for your
            employer's leave Policy
          </p>
          <Link to="/leaveplan">
            <button
              type="button"
              className="text-white bg-secondary  focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg   px-5 py-2.5 me-2 mb-2  mt-3 focus:outline-none "
            >
              Design your leave plan
            </button>
          </Link>
        </div>
        <div className="mt-14">
          <ul className=" text-sm font-medium text-primary  border-gray-200 rounded-lg shadow-lg ">
            {checkListData.map((listText, index) => (
              <li key={index}>
                <div className="flex items-center ps-3">
                  <img src={checkedImage} className=" w-6 " />
                  <label
                    for="vue-checkbox"
                    className ="w-full py-3 ms-2 text-lg font-lg "
                  >
                    {listText}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeaveHomepage;
