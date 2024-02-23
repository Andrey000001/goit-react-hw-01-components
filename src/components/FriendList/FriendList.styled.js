import styled from "@emotion/styled";

export const List = styled.ul`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const ChoiseStatus = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${({ isOnline }) => (isOnline ? "red" : "green")};
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
