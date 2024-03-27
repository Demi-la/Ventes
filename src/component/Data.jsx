import cordell from "../assets/cordell.png"
import derrick from "../assets/derrick.png"
import larissa from "../assets/larissa.png"
import nicholas from "../assets/nicholas.png"
import cart from "../assets/cart.svg";
import graph from "../assets/graph.svg";
import claimIcon from "../assets/claimIcon.svg";
import profile from "../assets/profile.svg";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

export const saleRepresentatives = [
  {
    profile: nicholas,
    name: "Nicholas Patrick ",
    amount: "$ 2540.58",
    totalProducts: "150 Products",
    totalPremium: "105 Premium",
    status: "+Gold",
  },
  {
    profile: cordell,
    name: "Cordell Edwards ",
    amount: "$ 1567.80",
    totalProducts: "95 Products",
    totalPremium: "60 Premium",
    status: "+Silver",
  },
  {
    profile: derrick,
    name: "Derrick Spencer",
    amount: "$ 1640.26",
    totalProducts: "120 Products",
    totalPremium: "75 Premium",
    status: "+Silver",
  },
  {
    profile: larissa,
    name: "Larissa Burton ",
    amount: "$ 2340.58",
    totalProducts: "120 Products",
    totalPremium: "99 Premium",
    status: "+Gold",
  },
];

export const report = [
    {
        title: "Product sold",
        amount: "25.1k",
        percentage: "+15%",
        link: "View Report",
        ReportIcon: cart ,
        statusIcon:arrowUp 
    },
       {
        title: "Total Profit",
        amount: "$2,435k",
        percentage: "-3.5%",
        link: "View Report",
        ReportIcon:graph  ,
        statusIcon: arrowDown
    },
       {
        title: "Total No. of Claim",
        amount: "3.5M",
        percentage: "+15%",
        link: "View More",
        ReportIcon: claimIcon ,
        statusIcon: arrowUp 
    },
       {
        title: "New Costumer",
        amount: "43.5k",
        percentage: "+10%",
        link: "View More",
        ReportIcon: profile ,
        statusIcon :arrowUp
    },
]