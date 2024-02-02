import PropTypes from "prop-types";
import {
    Description,
    Tag,
    Name,
    Profile,
    Stats,
    Card,
    Location,
    Label,
    Quantity,
} from "./Case.styled";
export const Case = ({
    avatar,
    tag,
    location,
    followers,
    views,
    likes,
    username,
}) => {
    return (
        <Profile>
            <Description>
                <img src={avatar} alt={username} width="50px" height="50px" />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Card>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </Card>
                <Card>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </Card>
                <Card>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </Card>
            </Stats>
        </Profile>
    );
};

Case.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
