import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { CiCloudMoon } from "react-icons/ci";
import WeaterCard from "./WeaterCard";
import ProfileCard from "./ProfileCard";
import { RxCross2 } from "react-icons/rx";

const Header = ({ toggle, setTogle }) => {
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleWeather, setToggleWeather] = useState(false);
  const handleUserClick =()=>{
    setToggleUser(true)
    setToggleWeather(false)
  }
  const handleWeatherClick =()=>{
    setToggleUser(false)
    setToggleWeather(true)
  }
  return (
    <Wrapper>
      <div className="nav_container">
        <div className="left">
          <IoList
            size={25}
            onClick={() => setTogle(!toggle)}
            className="listIcon"
          />
          <div className="logo">
            <h1>dashbord</h1>
          </div>
        </div>

        <div className="links">
          <div className="serch">
            <IoIosSearch size={25} cursor={"pointer"} />
          </div>
          <div className="notification">
            <IoMdNotificationsOutline size={25} cursor={"pointer"} />
          </div>
          <div className="weather">
            <CiCloudMoon size={25} cursor={"pointer"} onClick={handleWeatherClick}/>
          </div>
          <div className="user">
            <FaRegUser size={20} cursor={"pointer"} onClick={handleUserClick}/>
          </div>
        </div>
      </div>
      {toggleUser && (
        <div className="user_card">
          <RxCross2 className="cross" onClick={()=>setToggleUser(false)}/>
          <ProfileCard />
        </div>
      )}
      {toggleWeather && (
        <div className="weather_card">
          <RxCross2 className="cross" onClick={()=>setToggleWeather(false)}/>
          <WeaterCard />
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: 50px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  background-color: #262626;
  .user_card,
  .weather_card {
    position: absolute;
    top: 60px;
    right: 10px;
    z-index: 3;
    .cross {
      position: absolute;
      z-index: 4;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }
  }

  .nav_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      gap: 20px;

      .listIcon {
        display: none;
      }
    }
    .logo {
      text-transform: uppercase;
    }
    .links {
      display: flex;
      align-items: center;
      gap: 30px;
      text-transform: capitalize;
    }
  }
  @media only screen and (max-width: 426px) {
    .nav_container {
      .left {
        .listIcon {
          display: block;
        }
      }
      .links {
        .serch {
          display: none;
        }
        .notification {
          display: none;
        }
      }
    }
  }
`;
export default Header;
