import styled from "styled-components";
// import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const ContainerStyled = styled.div`
  width: 100vw;
  height: 100svh;
  background-color: #eee;
`;

const MainStyled = styled.div`
  height: calc(100% - 80px);
`;

export const AppLayout = () => {
  return (
    <ContainerStyled>
      <Header />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </ContainerStyled>
  );
};
