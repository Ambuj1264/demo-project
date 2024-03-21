import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import WeaterCard from "./WeaterCard";
import ProfileCard from "./ProfileCard";
import HomePage from "../pages/HomePage";
import { FaArrowLeftLong } from "react-icons/fa6";

const Layout = ({toggle,setTogle}) => {
  
  return (
    <Wrapper>
      <div className={`sidebar ${toggle? "show":""}`}>
        <div className="toggle">
          <FaArrowLeftLong size={20} cursor={"pointer"} onClick={()=>setTogle(false)}/>
        </div>
        <ul>
          <li>
            <a to={"/"} className="link">
              <GoHome />
              Home
            </a>
          </li>
          <li>
            <a to={"/"} className="link">
              <FaRegUser />
              Profile
            </a>
          </li>
          <li>
            <a to={"/"} className="link">
              <IoDocumentOutline />
              Blogposts
            </a>
          </li>
          <li>
            <a to={"/"} className="link">
              <MdPersonAddAlt />
              Followers
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <HomePage />
      </div>
      <div className="right_sidebar">
        <ProfileCard />
        <WeaterCard/>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
position: relative;
  display: flex;
  color: #fff;
  .sidebar,
  .main,
  .right_sidebar {
    max-height: calc(100vh - 50px);
    min-height: calc(100vh - 50px);
  }
  .main {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #262626;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #fff;
    }
  }
  .sidebar {
    width: 300px;
    border-right: 1px solid #3f3f40;
    padding: 10px 5px;
    .toggle {
      
      display: none;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        padding: 5px;
        border-radius: 3px;
        a {
          display: flex;
          gap: 5px;
          align-items: center;
          cursor: pointer;
        }
        &:hover {
          background-color: #262626;
        }
      }
    }
  }
  .main {
    width: calc(100vw - 500px);
  }
  .right_sidebar {
    width: 200px;
    border-left: 1px solid #3f3f40;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media only screen and (max-width: 1024px) {
    .right_sidebar {
   display: none;
  }
  .sidebar{
    width: 200px;
  }
  .main {
    width: calc(100vw - 200px);
  }
}
@media only screen and (max-width: 768px) {
  .sidebar{
    width: 300px;
    
    background-color:#212121;
    height: calc(100vh - 50px);
    position: absolute;
    left: -300px;
    transition: 0.3s;
    z-index: 2;
    .toggle{
        display: flex;
      justify-content: end;
    }
  }
  .show{
    left: 0;
  }
  .main {
    width: 100%;
  }
}

`;
export default Layout;
