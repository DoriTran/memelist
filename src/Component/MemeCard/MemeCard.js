import "./MemeCard.scss"

const MemeCard = (props) => {
    return ( 
        <img src={props.source} alt="MemeCard" className="meme-card"/>
    );
}
 
export default MemeCard;