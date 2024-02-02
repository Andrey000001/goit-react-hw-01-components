import { FaCircle } from "react-icons/fa";
import { Item } from "./Friend.styled";
import PropTypes from "prop-types"; // ES6

export const Friend = ({ avatar, name, isOnline ,id }) => {
    return (
        <Item key={id}>
            {isOnline ? <FaCircle fill="green"/> : <FaCircle fill="red"/>}
            <span>{isOnline}</span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </Item>
    );
};

Friend.propTypes = { 
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
