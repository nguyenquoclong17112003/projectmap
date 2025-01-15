import React from "react";
import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "~/components/Layout/components/Header.module.scss";
import Filter from "~/components/Layout/components/Filter/Filter";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>
        </div>
      </header>
      <Filter />
    </>
  );
}
