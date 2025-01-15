import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

export default function MenuItem({
  children,
  seperate,
  value,
  selectedValue,
  onClick,
}) {
  const handleClick = () => {
    onClick({ target: { value } });
  };

  return (
    <div
      className={cx("wrapper", {
        seperate: seperate,
      })}
      onClick={handleClick}
    >
      <div className={cx("info")}>
        <input
          className={cx("spacer-radio")}
          type="radio"
          value={value}
          checked={selectedValue === value}
          readOnly
        />
        <span
          className={cx("custom-radio", {
            checked: selectedValue === value,
          })}
        ></span>
        <p className={cx("spacer")}>{children}</p>
      </div>
    </div>
  );
}
