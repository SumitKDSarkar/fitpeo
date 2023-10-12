import React from "react";
import style from "./Styles/FirstContainer.module.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import doller from "./assests/doller.png";
import order from "./assests/order.png";
import balance from "./assests/balance.png";
import total from "./assests/total.png";

const FirstContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.div1}>
        <div className={style.img_container}>
          <img className={style.img} src={doller} alt="logo" />
        </div>
        <div>
          <p className={style.p1}>Earning</p>
          <h2 className={style.h2}>$198k</h2>
          <p className={style.p_green}>
            <span className={style.icon}>
              <AiOutlineArrowUp />{" "}
            </span>
            <span>37.8%</span> this month
          </p>
        </div>
      </div>
      <div className={style.div2}>
        <div className={style.img_container}>
          <img className={style.img} src={order} alt="logo" />
        </div>
        <div>
          <p className={style.p1}>Orders</p>
          <h2 className={style.h2}>$2.4k</h2>
          <p className={style.p_red}>
            <span className={style.icon}>
              <AiOutlineArrowDown />
            </span>
            <span>2%</span> this month
          </p>
        </div>
      </div>
      <div className={style.div3}>
        <div className={style.img_container}>
          <img className={style.img} src={balance} alt="logo" />
        </div>
        <div>
          <p className={style.p1}>Balance</p>
          <h2 className={style.h2}>$2.4k</h2>
          <p className={style.p_red}>
            <span className={style.icon}>
              <AiOutlineArrowDown />
            </span>
            <span>2%</span> this month
          </p>
        </div>
      </div>
      <div className={style.div4}>
        <div className={style.img_container}>
          <img className={style.img} src={total} alt="logo" />
        </div>
        <div>
          <p className={style.p1}>Total Sales</p>
          <h2 className={style.h2}>$89k</h2>
          <p className={style.p_green}>
            <span className={style.icon}>
              <AiOutlineArrowUp />{" "}
            </span>
            <span>11%</span> this month
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstContainer;
