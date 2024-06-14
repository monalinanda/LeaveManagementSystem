import React from "react";
import leavePolicy from "../assets/leavePolicy.svg";
import checkedImage from "../assets/checkedImage.gif";
import { benefits } from "../constants/constant";

const LeavePolicy = () => {
  return (
    <div className="max-w-6xl pl-5 pr-5 m-auto pb-10">
      <>
        <h4 className=" font-bold text-4xl mb-8 mt-14  ">What is Leave?</h4>
        <p className=" text-lg leading-8 text-justify">
          Leave is simply taking an off from work day after informing the
          management formally and sometimes even informally. Leaves are the days
          that every working professional is entitled to and paid for, apart
          from the holidays. Paid leaves are a part of benefits offered by
          companies apart from medical claim.
        </p>
        <img src={leavePolicy} />
        <p className=" text-xl mt-3 leading-8 text-justify">
          Leaves are the days that every working professional is entitled to and
          paid for, apart from the holidays. Paid leaves are a part of benefits
          offered by companies apart from medical claim. Mostly, the earned
          leaves balance is carried forward every year till the time a person is
          employed in the same organisation. There is also a provision for EL
          encashment in most organisations at the time of leaving the
          organisation in case they remain unused. But, after the leaves are
          exhausted, the employee can only take LWP i.e. leave without pay, also
          known as (LOP) loss of pay.
        </p>
      </>
      <>
        <h4 className=" font-bold text-4xl mb-8 mt-14  ">
          What is Leave Management?
        </h4>
        <p className=" text-xl mt-3 leading-8 text-justify">
          Leave management, as the word suggests, is all about managing employee
          leave requests. It can also be referred to as time-off management,
          encompassing, sick/ wellness leaves, parental leaves, period leaves,
          and more. The ultimate goal of this is to ensure employees enjoy their
          benefits in a hassle-free manner without letting the same impact the
          business functioning. This s a major part of the HR department’s work
          scope. If done manually, leave management requires several mundane
          tasks to be completed and loads of paperwork to be dealt with.
          Needless to say, all the steps involved in the process are necessary
          and critical. So, to simplify and expedite the process, you must check
          solutions for HR functionalities in your software and use them to your
          benefit. They generally use a time and attendance management software
          to manage these requests while striking a balance between legalities
          and employee satisfaction. All this makes having a flawless leave
          management process imperative.
        </p>
        <p className=" text-xl mt-3 leading-8 text-justify">
          In today’s time, automating the leave management process is crucial to
          managing heaps of data better and deriving useful nuggets of
          information from it.
        </p>

        <p className=" text-xl mt-3 leading-8 text-justify">
          {" "}
          But, quite more than often, time and attendance management and leave
          management are considered each others equivalent. On the
          contrary,Leave management is a part of time and attendance management.
          Timesheet , leaves, attendance all three are different but related to
          each other.
        </p>
      </>
      <>
        <h4 className=" font-bold text-4xl mb-8 mt-14  ">
          {" "}
          Benefits of leave management{" "}
        </h4>
        <ul className=" text-sm font-medium text-primary  border-gray-200 rounded-lg shadow-lg ">
          {benefits.map((listText, index) => (
            <li key={index}>
              <div className="flex items-center ps-3">
                <img src={checkedImage} className=" w-6 " />
                <p
                  for="vue-checkbox"
                  className="w-full py-3 ms-2 text-lg font-lg "
                >
                  {listText}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default LeavePolicy;
