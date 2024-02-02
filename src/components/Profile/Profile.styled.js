import styled from "@emotion/styled";

export const Content = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: ${(props) => props.theme.colors.grey};
`;
