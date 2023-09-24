import React from "react";
import styled from "styled-components";
import colors from "./colors";

const Color = styled.div`
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px black;
  cursor: pointer;
  background-color: ${({ color }) => color};
  ${({ selected }) =>
    selected &&
    `
    border: 1px solid white; 
  `};
`;

const Flex = styled.div`
  display: flex;
  margin-right: 10px;
  flex-wrap: wrap; 
  width:100%;
  text-align: center;
  justify-content: end;
`;

export default function PalettePicker({ currentTheme, setCurrentTheme }) {
  return (
    <Flex>
      {colors.map((color, index) => (
        <Color key={index}
          onClick={() =>
            setCurrentTheme({
              ...currentTheme,
              palette: { primary: color, secondary: color },
            })
          }
          selected={currentTheme.palette.primary[300] === color[300]}
          color={color[300]}
        />
      ))}
    </Flex>
  );

}
