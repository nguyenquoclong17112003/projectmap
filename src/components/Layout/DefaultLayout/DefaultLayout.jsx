import React from "react";
import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Map from "./Map/Map";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Map />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
