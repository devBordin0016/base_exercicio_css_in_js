import styled from 'styled-components'

// Componente Form
export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

// Componente Container
export const Container = styled.div`
  position: relative;
  width: 100%; // Para garantir que ocupe toda a largura
`

// Componente Título
export const HeroTitle = styled.h2`
  color: #eee;
  font-family: Gloock, serif;
  font-size: 48px;
  margin-left: 100px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
