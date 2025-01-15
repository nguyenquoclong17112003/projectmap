import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import InputFilter from "~/components/InputFilter/InputFilter";
import Tippy from "@tippyjs/react/headless"; // ! use
import { Wrapper as PopperWrapper } from "~/components/Popper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button/Button";
import {
  faChevronDown,
  faDollar,
  faHomeAlt,
  faTimes,
  faMapMarkerAlt,
  faSearch,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "~/components/MenuItem/MenuItem";

const cx = classNames.bind(styles);

export default function Filter() {
  const [filterResult, setFilterResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [icon, setIcon] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setFilterResult([1, 2]);
    }, 3000);
  });

  const handleClickOutside = () => {
    setShowResult(false);
    setIcon(false);
  };

  const handleInputClick = () => {
    setShowResult(true);
    setIcon(!icon);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className={cx("filter")}>
        <div className={cx("inner")}>
          <div onClick={handleInputClick} className={cx("filter__item")}>
            <Tippy
              interactive
              visible={showResult && filterResult.length > 0}
              placement="bottom-start"
              offset={[114, 8]}
              onClickOutside={handleClickOutside}
              appendTo={document.body}
              render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <h4 className={cx("search-title")}>Khoảng cách: 0-5 km</h4>
                    <MenuItem
                      value="1 km"
                      selectedValue={selectedValue}
                      onClick={handleRadioChange}
                    >
                      1 km
                    </MenuItem>
                    <MenuItem
                      value="2 km"
                      selectedValue={selectedValue}
                      onClick={handleRadioChange}
                    >
                      2 km
                    </MenuItem>
                    <MenuItem
                      value="3 km"
                      selectedValue={selectedValue}
                      onClick={handleRadioChange}
                    >
                      3 km
                    </MenuItem>
                    <MenuItem
                      value="4 km"
                      selectedValue={selectedValue}
                      onClick={handleRadioChange}
                    >
                      4 km
                    </MenuItem>
                    <MenuItem
                      seperate
                      value="5 km"
                      selectedValue={selectedValue}
                      onClick={handleRadioChange}
                    >
                      5 km
                    </MenuItem>
                    <div className={cx("btn-all")}>
                      <Button
                        leftIcon={<FontAwesomeIcon icon={faRefresh} />}
                        reset
                        onClick={() => setSelectedValue(null)}
                      >
                        Đặt lại
                      </Button>
                      <Button filter>Tìm ngay</Button>
                    </div>
                  </PopperWrapper>
                </div>
              )}
            >
              <InputFilter
                rightIcon={
                  <FontAwesomeIcon icon={icon ? faTimes : faChevronDown} />
                }
                isBold={!!selectedValue}
                leftIcon={<FontAwesomeIcon icon={faSearch} />}
              >
                {selectedValue ? selectedValue : "Khoảng cách tới trường"}
              </InputFilter>
            </Tippy>
          </div>
          <div className={cx("filter__item")}>
            <InputFilter
              read
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
              leftIcon={<FontAwesomeIcon icon={faHomeAlt} />}
            >
              Loại hình
            </InputFilter>
          </div>
          <div className={cx("filter__item")}>
            <InputFilter
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
              leftIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
            >
              Địa điểm
            </InputFilter>
          </div>

          <div className={cx("filter__item")}>
            <InputFilter
              read
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
              leftIcon={<FontAwesomeIcon icon={faDollar} />}
            >
              Mức giá
            </InputFilter>
          </div>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSearch} />}>
            Tìm kiếm
          </Button>
        </div>
      </div>
    </>
  );
}
