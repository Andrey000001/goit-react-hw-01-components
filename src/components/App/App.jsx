import user from "../../user.json";
import data from "../../data.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"
import { Container } from "./App.styled";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriedList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";


export const App = () => {
    return (
        <Container >
            <Profile user={user} />
            <Statistics data={data} text='Upload stats'/> 
            <FriedList friends={friends}/>
            <TransactionHistory transactions={transactions}/>
        </Container>
    );
};
