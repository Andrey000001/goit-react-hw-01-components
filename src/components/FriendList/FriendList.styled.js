import styled from "@emotion/styled";
import { FaCircle } from "react-icons/fa";

export const List = styled.ul`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const ChoiceRed = styled(FaCircle)`
    fill: red;
`;
export const ChoiceGreen = styled(FaCircle)`
    fill: green;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;