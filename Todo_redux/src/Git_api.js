import { useState } from "react";
import Form from "./Git_form";

const Card = props => {
 return (
 <div style={{ margin: '1em' }}>
 <img alt="avatar" style={{ width: '70px' }} 
src={props.avatar_url} />
 <div>
 <div style={{ fontWeight:
'bold' }}>{props.name}</div>
 <div>{props.blog}</div>
 </div>
 </div>
 )
}
const CardList = props => <div>{props.cards.map(card => <Card {...card} />)}</div>
const GitApp = () => {
 const [cards, setCards] = useState([])
 function addNewCard(cardInfo){setCards(cards.concat(cardInfo))}
 return (
    <div>
    <Form onSubmit={addNewCard} />
    <CardList cards={cards} />
    </div>
 )
}
export default GitApp;