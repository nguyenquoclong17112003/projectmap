import React from "react";
import classNames from "classnames/bind";
import styles from "./InputFilter.module.scss";

const cx = classNames.bind(styles);

export default function InputFilter({ children, leftIcon, rightIcon, isBold }) {
  return (
    <>
      <div className={cx("wrapper")}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}

        <span className={cx("filter_name", { bold: isBold })}>{children}</span>
        {rightIcon && (
          <span className={cx("icon", "icon_last")}>{rightIcon}</span>
        )}
      </div>
    </>
  );
}
