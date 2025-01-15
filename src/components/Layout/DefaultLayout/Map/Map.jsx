import React from "react";
import classNames from "classnames/bind";
import styles from "~/components/Layout/DefaultLayout/Map/Map.module.scss";

const cx = classNames.bind(styles);

export default function Map() {
  return (
    <>
      <aside className={cx("wrapper")}>
        <h2>Map</h2>
      </aside>
    </>
  );
}
