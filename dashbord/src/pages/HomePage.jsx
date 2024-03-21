import React, { useEffect } from "react";
import styled from "styled-components";
import DataCard from "../components/DataCard";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { IoList } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsAsync,
  getFollowersAsync,
  getWeatherAsync,
  selectComments,
  selectFollowers,
  selectWeather,
} from "../features/home/homeSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const followers = useSelector(selectFollowers);
  const weather = useSelector(selectWeather);
  useEffect(() => {
    dispatch(getCommentsAsync());
    dispatch(getFollowersAsync());
    dispatch(getWeatherAsync());
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <div className="top_info">
          <DataCard title={"500+"} description={"total followers"} />
          <DataCard title={"30M+"} description={"total post views"} />
          <DataCard title={"200+"} description={"total blogposts"} />
          <DataCard title={"500$"} description={"total earnings"} />
        </div>
        <div className="followers">
          <div className="header">
            <h1>followers</h1>
            <div className="action">
              <CiGrid41 />
              <IoList />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="data_table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {followers?.map((elem) => (
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.firstName}</td>
                    <td>{elem.email}</td>
                    <td>{elem.gender}</td>
                    <td>{elem.age}</td>
                    <td>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <a href="#">❮</a>
            <a href="#">❯</a>
          </div>
        </div>
        <div className="posts">
          <div className="header">
            <h1>Comments</h1>
            <div className="action">
              <CiGrid41 />
              <IoList />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="data_table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Post ID</th>
                  <th>userId</th>
                  <th>username</th>
                  <th>message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {comments?.map((elem) => (
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.postId}</td>
                    <td>{elem.user.id}</td>
                    <td>{elem.user.username}</td>
                    <td>{elem.body.slice(0, 30)}...</td>
                    <td>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <a href="#">❮</a>
            <a href="#">❯</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 10px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .top_info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .followers,
    .posts {
      .pagination {
        display: inline-block;
        margin: 10px 0;
      }

      .pagination a {
        color: #fff;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color 0.3s;
        border: 1px solid #3f3f40;
      }

      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        min-width: 600px;
      }

      tr {
        border-bottom: 1px solid #3f3f40;
        text-align: left;
        padding: 8px;
      }
      td,
      th {
        padding: 8px;
      }
      td {
        font-size: 13px;
        color: #dddbdb;
        .material-checkbox {
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #777777;
          cursor: pointer;
        }

        .material-checkbox input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .checkmark {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 12px;
          border: 2px solid #454b00;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .material-checkbox input[type="checkbox"]:checked ~ .checkmark {
          background-color: #2f3300;
          border-color: #454b00;
        }

        .material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 6px;
          width: 4px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .material-checkbox input[type="checkbox"]:focus ~ .checkmark {
          box-shadow: 0 0 0 2px #dfec5065;
        }

        .material-checkbox:hover input[type="checkbox"] ~ .checkmark {
          border-color: #c3cf34;
        }

        .material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
          border-color: #4d4d4d;
        }
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      h1 {
        font-size: 20px;
      }
      .action {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }
  }
  @media only screen and (max-width: 615px) {
    .container {
      .top_info {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .data_table {
      width: 100%;
      overflow-x: scroll;
      /* Track */
      &::-webkit-scrollbar-track {
        background: #262626;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #fff;
      }
    }
  }
  @media only screen and (max-width: 426px) {
    .container {
      .top_info {
        grid-template-columns: 1fr;
      }
    }
  }
`;
export default HomePage;
