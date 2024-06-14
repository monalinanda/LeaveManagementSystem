
const PublicNavigation = [
    {name: "Home Page", href: "/", current: true },
    { name: "Customers", href: "/customers", current: false },
    { name: "Pricing", href: "/pricing", current: false }
  ];

  const ProtectedcNavigation = [
    { name: "Home", href: "/home", current: true },
    { name: "Dashoard", href: "/dashboard", current: false },
    { name: "Leave policy", href: "/leave-policy", current: false },
  ];

  const ProtectedcNavigationforManager =[
    { name: "Home", href: "/home", current: true },
    { name: "Dashoard", href: "/dashboard", current: false },
    { name: "Engineers Leaves", href: "/engineers-leave", current: false },
    { name: "Leave policy", href: "/leave-policy", current: false },
  ]
  
  const UserTypes = [
    { value: "HR", label: "HR" },
    { value: "Manager", label: "Manager" },
    { value: "Engineer", label: "Engineer" },
  ];

  const allLeavs = [
    {
      category : "Parental Leave",
      details:"I'll we caring for boanding with a newborn or newly adopted or newly placed child",
      status : "Active",
      subCategory:[
        {
          category: "Birthing parent",
          description:"I am Physically giving birth to my new Child",
          details:""
        },
        {
          category: "Non-birthing parent",
          description:"I am not physically giving birth to my new Child",
          details:""
        }
      ]
  },
  {
      category : "Medical Leave",
      details :" I have a serious health condition that I'll be taking care of.",
      status  : "Active",
  },
  {
      category : "Casual Leave",
      details :"I'll be caring for a family memeber with  a serious health condition .",
      status  : "Active",
  }
  ]

  const holidays = [
    "New Year's Day - January 1",
    "Makar Sankranti - January 14",
    "Republic Day - January 26",
    "Good Friday - April 10",
    "Eid al-Fitr (Ramadan Eid) - April 14",
    "Independence Day - August 15",
    "Ganesh Chaturthi - September 2",
    "Maha Navami (Dussehra) - October 6",
    "Diwali - October 27",
    "Christmas Day - December 25"
];

const benefits = [
 " A more streamlined attendance and payroll process" ,
"Better employee satisfaction and retention rate" ,
"Ensure enforcement and consistency of leave policy" ,
"Makes you better compliant with the employment laws" ,
"The error count in attendance drops significantly" ,
"Increases the productivity and efficiency" ,
]
  export {PublicNavigation , ProtectedcNavigation,ProtectedcNavigationforManager, UserTypes , allLeavs , holidays , benefits};