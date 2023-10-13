import React, { useState } from "react";
import style from "./Styles/ChartTable.module.css";
import PieChart from "./PieChart";

function ChartTable() {


  


  const maxExpense = 200;
  const barWidth = 50;
  const barMargin = 30;
  const numberOfMonths = 12;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Generate random data for 12 months
  const createRandomData = (numberOfMonths) => {
    const data = [];
    for (let i = 0; i < numberOfMonths; i++) {
      const randomExpense = Math.floor(Math.random() * maxExpense);
      data.push({ name: monthNames[i], expense: randomExpense });
    }
    return data;
  };

  const [expensesData, setExpensesData] = useState(
    createRandomData(numberOfMonths)
  );
  const [quantity, setQuantity] = useState(12); // Initial quantity value

  // Calculate the highest expense for the 12 months
  const calculateHighestExpense = (data) =>
    data.reduce((acc, cur) => Math.max(acc, cur.expense), 0);

  // Set the container height
  const containerHeight = 300;

  // Style for quarterly dropdown
  const quarterlyDropdownStyle = {
    position: "absolute",
    top: "10px",
    right: "20px",
  };

  return (
    <div className={style.container} style={{ height: containerHeight + "px" }}>
      <div className={style.container1} style={{ position: "relative" }}>
        <select
          className={style.quantityDropdown}
          style={quarterlyDropdownStyle}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        >
          <option value="12">Quarterly</option>
          <option value="1">1 Month</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
        </select>

        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${numberOfMonths * (barWidth + barMargin) + 20} ${
            containerHeight + 20
          }`}
        >
          <text x="20" y="5" textAnchor="start" fontSize="25" fontWeight="bold">
            Overview
          </text>
          <text
            x="20"
            y="40"
            textAnchor="start"
            fontSize="15"
            fontWeight="bold"
            fill="rgb(237,237,237)"
          >
            Monthly Earning
          </text>

          <rect
            x="0"
            y="40"
            width={numberOfMonths * (barWidth + barMargin)}
            height={containerHeight - 40}
            fill="none"
          />
          {expensesData.slice(0, quantity).map((data, index) => {
            // Calculate bar height based on expense and maxExpense
            const barHeight =
              (data.expense / maxExpense) * (containerHeight - 40);
            const highestExpense = calculateHighestExpense(expensesData);
            return (
              <Bar
                key={data.name}
                x={index * (barWidth + barMargin)}
                y={containerHeight - barHeight}
                width={barWidth}
                height={barHeight}
                data={data}
                highestExpense={highestExpense}
                containerHeight={containerHeight}
              />
            );
          })}
        </svg>
      </div>
{/* Pie Chart Start */}
<div className={style.container2}>
  <div >
  <h1 className="text-lg font-bold pl-3">Customers</h1>
  <h1 className="text-sm  pl-3" style={{ color: 'rgb(237, 237, 237)' }}>Customers that buy products</h1>
  </div>

  <div className={style.pieChart}>

    <PieChart/>
  </div>
    
    
    
  </div>

    </div>
  );
}

// Bar component
const Bar = ({
  x,
  y,
  width,
  height,
  data,
  highestExpense,
  containerHeight,
}) => (
  <>
    <rect
      x={x + 20}
      y={y}
      width={width}
      height={height}
      fill={
        data.expense === highestExpense
          ? "rgb(90, 50, 234)"
          : "rgb(242,239,255)"
      }
      rx={15}
      ry={12}
    />

    <text x={x + 45} y={containerHeight + 20} textAnchor="middle">
      {data.name}
    </text>
  </>
);

export default ChartTable;
