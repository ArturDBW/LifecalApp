import styled from "styled-components";
import { Outlet } from "react-router-dom";

const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const MainStyled = styled.div`
  height: calc(100% - 80px);
`;

export const AppLayout = () => {
  return (
    <ContainerStyled>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </ContainerStyled>
  );
};
