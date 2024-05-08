import React from 'react';
import { useStateContext } from "../../utils/StateContext";
import checkedImage from "../../assets/checkedImage.gif";

const EmployeeLeaveHomepage = () => {
  var reverse = function(x) {
    let rev = 0;
  
    while (x !== 0) {
        const digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.trunc(x / 10);
    }
  
    if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31)) {
        return 0;
    }
  
    return rev;
  };
  console.log(reverse(1234))
  //const { signedInUser , isUserAuthenticated} = useStateContext();
  //console.log(signedInUser,isUserAuthenticated,"signedInUser")
  const checkListData = ["Design your Leave plan in private","submit your leave plan to notify" , "we'll guied you  through any paperwork needed for you to recive your full pay"  ,"we ensure  a smooth transition  back to your work "]
  return (
    <div className=" w-full h-auto mt-20 pl-5 pr-5">
    <div className=" max-w-6xl m-auto sm:grid grid-cols-2 gap-4 items-baseline">
      <div>
    <h1 className="sm:text-4xl text-3xl font-thin tracking-tight text-primary font-serif   leading-normal text-left" >{`${signedInUser?.nickname} , let's design  a leave plan that works for You`}</h1>
    <p className="text-primary mt-3">we'll guied you through submitting a leave plan  that fits for your employer's leave Policy</p>
    <button type="button" class="text-white bg-secondary  focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2  mt-3 focus:outline-none ">Design leave plan</button>
    <p className=" text-xs text-gray-400">your Employer will not be notified</p>
    </div>
    <div className="mt-14">
   
    <ul className="w-full text-sm font-medium text-primary  border-gray-200 rounded-lg">
      {
        checkListData.map((listText)=>
        (
<li>
        <div class="flex items-center ps-3">
            <img src={checkedImage} className=" w-6 "/>
            <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-lg ">{listText}</label>
        </div>
    </li>
        )
        )
      }
  
</ul>


        
    </div>
    </div>
   </div>
  )
}

export default EmployeeLeaveHomepage