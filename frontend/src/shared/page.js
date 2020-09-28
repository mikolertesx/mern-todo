import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`;
const Page = (props) => {
  return <Div>
    {props.children}
  </Div>
}

export default Page;