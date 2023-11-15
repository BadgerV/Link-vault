import { GridLoader } from "react-spinners";
import styled from "styled-components";

const HashLoaderDiv = styled.div`
  position: absolute;
  top: 40% !important;
  left: 50%;
`;
interface CustomHashLoaderProps {
  color?: string;
  size?: number;
}
export function CustomHashLoader({ color, size }: CustomHashLoaderProps) {
  return (
    <HashLoaderDiv>
      <GridLoader color={color} size={size} />
    </HashLoaderDiv>
  );
}
