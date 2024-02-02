import { Event } from "./Event/Event";
import PropTypes from "prop-types";
import { Contant } from "./Statistics.styled";
export const Statistics = ({ data, text }) => {
    return (
        <Contant>
            <Event data={data} text={text} />
        </Contant>
    );
};
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};
