import styled from "@emotion/styled";

export const Contant = styled.section`
    padding: 200px
`
export const Table = styled.table`
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border-spacing: 0;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const Th = styled.th`
    border: 1px solid ${(props) => props.theme.colors.grey};
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${(props) => props.theme.colors.thTable};
    color: ${(props) => props.theme.colors.white};
`;
export const Td = styled.td`
    border: 1px solid ${(props) => props.theme.colors.grey};
    padding-top: 10px;
    padding-bottom: 10px;
    color: #858585;
`;
export const Tr = styled.tr`
    &:nth-child(2n) {
        background-color: ${(props) => props.theme.colors.grey};
    }
`;
