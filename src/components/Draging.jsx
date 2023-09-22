import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";



const PictureList = [
    {
        id: 1,
        url:
            "https://t.ly/gsH8z",
    },
    {
        id: 2,
        url:
            "https://t.ly/GhA1a",
    },
    {
        id: 3,
        url:
            "https://t.ly/kCHkF",
    },
    {
        id: 4,
        url:
            "https://t.ly/kZCva",
    },
    {
        id: 5,
        url:
            "https://t.ly/gsH8z",
    },
    {
        id: 6,
        url:
            "https://t.ly/kZCva",
    },
];

function Draging() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    };
    return (
        <>
            <div className="drag-class">
            <div className="Pictures">
                {PictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div>

                <div className="board-container">
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div>
                </div>

                </div>
        </>
    );
}

export default Draging;


