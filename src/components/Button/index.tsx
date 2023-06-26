import styled from 'styled-components';
import { IButtonProps } from "./types";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;