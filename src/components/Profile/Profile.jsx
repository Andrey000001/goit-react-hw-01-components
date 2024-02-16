import PropTypes from "prop-types";
import {
    Content,
    ProfileSelf,
    Description,
    Name,
    Tag,
    Location,
    Stats,
    Card,
    Label,
    Quantity,
} from "./Profile.styled";
export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { views, followers, likes } = stats;
    return (
        <Content>
            <ProfileSelf class="profile">
                <Description class="description">
                    <img src={avatar} alt={username} width="30" height="30" />
                    <Name>{username}</Name>
                    <Tag>{tag}</Tag>
                    <Location>{location}</Location>
                </Description>
                <Stats class="stats">
                    <Card>
                        <Label class="label">Followers</Label>
                        <Quantity class="quantity">{followers}</Quantity>
                    </Card>
                    <Card>
                        <Label class="label">Views</Label>
                        <Quantity class="quantity">{views}</Quantity>
                    </Card>
                    <Card>
                        <Label>Likes</Label>
                        <Quantity>{likes}</Quantity>
                    </Card>
                </Stats>
            </ProfileSelf>
        </Content>
    );
};

Profile.propTypes = {
    user: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            stats: PropTypes.number.isRequired,
        })
    ),
};
