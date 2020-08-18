import React from 'react';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
`;

const IndexPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800 ">
      <LogoImage src={logo} alt="logo" />
      <h1 className="text-white text-3xl text-center">CRA Typescript template configured with</h1>
      <ul className="text-white text-2xl text-center flex flex-wrap">
        <li className="px-2 underline">React</li>
        <li className="px-2 underline">Redux</li>
        <li className="px-2 underline">Redux Thunk</li>
        <li className="px-2 underline">React Router</li>
        <li className="px-2 underline">Material UI</li>
        <li className="px-2 underline">Tailwind Css</li>
        <li className="px-2 underline">Styled components</li>
        <li className="px-2 underline">Axios</li>
      </ul>
    </div>
  );
};

export default IndexPage;
