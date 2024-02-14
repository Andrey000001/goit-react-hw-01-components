import PropTypes from "prop-types";

import { Contant, Table, Th, Td, Tr } from "./TransactionHistory.styled";
export const TransactionHistory = ({ transactions }) => {
    return (
        <Contant>
            <Table>
                <thead>
                    <tr>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Currency</Th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(({ id, type, amount, currency }) => (
                        <Tr key={id}>
                            <Td>{type}</Td>
                            <Td>{amount}</Td>
                            <Td>{currency}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </Contant>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
