import PropTypes from "prop-types";
import { Item, ChoiseStatus } from "./FriendList.styled";

export const FriendListItem = ({ friendsInfo }) => {
    const { name, isOnline, avatar } = friendsInfo;
    return (
        <Item>
            
            <ChoiseStatus isOnline={isOnline}/>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </Item>
    );
};

FriendListItem.propTypes = {
    friendsInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};
