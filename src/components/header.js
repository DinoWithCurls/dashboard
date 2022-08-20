import React from "react";
import SearchInput from "./inputs/searchInput";
import Icon from "./icon";
import { BellIcon } from "../icons";
const Header = ({ screenName }) => {
  return (
    <div className="inline-flex items-center justify-between w-full h-1/10">
      <div className="text-3xl font-bold">{screenName}</div>
      <div className="inline-flex items-center justify-between">
        <div className="mr-7">
            <SearchInput />
        </div>
        <div>
         <BellIcon />
        </div>
        <Icon iconView={"Small"} iconUrl={require('../images/small.png')} />
      </div>
    </div>
  );
};

export default Header;
