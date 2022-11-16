import styled from "styled-components";


export const FuncionariosContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const FuncionariosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const FuncionariosCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const FuncionariosImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const FuncionariosHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const FuncionariosTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const FuncionariosInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const FuncionariosDesc = styled.p`
  margin-bottom: 1rem;
`;