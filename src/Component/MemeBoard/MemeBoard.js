import "./MemeBoard.scss"

import MemeCard from "../MemeCard/MemeCard"

const MemeBoard = (props) => {
    return ( 
        <div className="meme-board">
            {props.memes.map((eachMeme, index) => <MemeCard key={index} source={eachMeme.url} />)}
        </div>
    );
}
 
export default MemeBoard;