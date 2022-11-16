import React from 'react';
import {
  FuncionariosContainer,
  FuncionariosWrapper,
  FuncionariosHeading,
  FuncionariosTitle,
  FuncionariosCard,
  FuncionariosImg,
  FuncionariosInfo,
  FuncionariosDesc
}  from './FuncionariosElements';

const Funcionarios = ({ heading, data }) => {
  return (
    <FuncionariosContainer>
      <FuncionariosHeading>{heading}</FuncionariosHeading>
      <FuncionariosWrapper>
        {data.map((Funcionarios, index) => {
          return (
            <FuncionariosCard key={index}>
              <FuncionariosImg src={Funcionarios.img} alt={Funcionarios.alt} />
              <FuncionariosInfo>
                <FuncionariosTitle>{Funcionarios.name}</FuncionariosTitle>
                <FuncionariosDesc>{Funcionarios.desc}</FuncionariosDesc>
              </FuncionariosInfo>
            </FuncionariosCard>
          );
        })}
      </FuncionariosWrapper>
    </FuncionariosContainer>
  );
};

export default Funcionarios;