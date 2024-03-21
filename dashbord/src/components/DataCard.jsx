import React from "react";
import styled from "styled-components";

const DataCard = ({title,description}) => {
  return (
    <Wrapper>
      <section className="card">
       <h1>{title}</h1>
       <span>{description}</span>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card {
   width: 100%;
    height: 150px;
    background: #262626;
    border-radius: 10px;
    border: 1px solid #3f3f40;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    h1{
        font-size: 40px;
    }
    span{
        text-transform: capitalize;
    }
  }

 
`;
export default DataCard;
