import {useState, useEffect} from 'react';

import { Tile } from './Tile';

import '../styles/board.scss';

interface BoardProps {
    currentTag: string
}

interface Course {
    name: string,
    bgColor: string,
    image: string,
    id: string,
    tags: string[]
}

export const Board:React.FC<BoardProps> = (props) => {

    const [tiles, setTiles] = useState(Array<Course>);

    const [reserveTiles, setReserveTiles] = useState(Array<Course>);

    function obtainCourses() {
        fetch("https://logiclike.com/docs/courses.json")
            .then(response => response.json())
            .then(data => {
                console.log(`Data `, data);
                setTiles(data);
                setReserveTiles(data);
            });
    }

    useEffect(() => {
        obtainCourses();
    }, []);

    useEffect(() => {
        const allTiles:Course[] = reserveTiles.slice();
        let filteringTiles:Course[];
        if(props.currentTag === 'Все темы') {
            setTiles(allTiles);
        }
        else {
            filteringTiles = allTiles.filter((item) => item.tags.includes(props.currentTag));
            setTiles(filteringTiles);
        }
    }, [props.currentTag]);

    return (
        <ul className="board">
            {
                tiles.map((item:Course) => {
                    const id: string = item.id;
                    const title: string = item.name;
                    const bgColor: string = item.bgColor;
                    const image: string = item.image;
                    const tags: string[] = item.tags;
                       return (
                        <Tile key={id} title={title} bgColor={bgColor} image={image} tags={tags} />
                    )
                })
            }
        </ul>
    )
}
