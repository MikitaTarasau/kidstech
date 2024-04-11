
import '../styles/tile.scss';

interface TileProps {
    title: string,
    bgColor: string,
    image: string,
    tags: string[]
}

export const Tile:React.FC<TileProps> = (props) => {
    return (
        <div className="tile">
            <div className="tile__image" style={{backgroundColor: props.bgColor, backgroundImage: `url(${props.image})`}}>&nbsp;</div>
            <div className="tile__title">
                {props.title}
            </div>
        </div>
    )
}