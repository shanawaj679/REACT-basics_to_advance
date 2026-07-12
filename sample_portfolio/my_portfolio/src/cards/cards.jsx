import "./cards.css";

function Card({ title }) {
    return <>
          <div className="card_background">
            <p>{title}</p>
        </div>
    </>
       

}

export default Card;