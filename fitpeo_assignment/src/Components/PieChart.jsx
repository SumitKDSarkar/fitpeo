import React from "react";
import styles from "./Styles/PieChart.module.css";

const DonutChart = (props) => {
  const cx = 50;
  const cy = 50;
  const strokeWidth = 15;
  const radius = 20;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;

  const sum = props.data.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const ratio = 100 / sum;

  props.data.forEach((obj) => {
    const itemRatio = ratio * obj.value;

    obj.itemRatio = itemRatio;
    obj.angle = (filled * 360) / 100 + startAngle;
    obj.offset = dashArray - (dashArray * itemRatio) / 100;
    obj.filled = filled;

    filled += itemRatio;
  });

  const totalPercentage = (sum / 100).toFixed(2);

  return (
    <div className={styles["donut-chart"]}>
      <svg width="300px" height="300px" viewBox="0 0 100 100">
        {props.data.map((item, index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            stroke={item.color}
            strokeDasharray={dashArray}
            strokeDashoffset={item.offset}
            transform={`rotate(${item.angle} ${cx} ${cy})`}
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`${startAngle} ${cx} ${cy}`}
              to={`${item.angle} ${cx} ${cy}`}
              dur="1s"
            />

            <title>
              {item.name}: {item.value}
            </title>
          </circle>
        ))}

        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles["total-text"]}
          fontSize="5"
          fontWeight={700}
          fill="black"
        >
          {totalPercentage}%
        </text>
      </svg>
    </div>
  );
};

const donut = [
  {
    name: "Porta",
    color: "#f33396",
    value: 70,
  },
  {
    name: "Curabitur",
    color: "#5d36ea",
    value: 65,
  },
];

const PieChart = (props) => {
  return <DonutChart data={donut} />;
};

export default PieChart;
