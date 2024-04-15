import { useState } from 'react';
import { sculptureList } from "@/data/article";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClickNext() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1)
        }
    }

    function handleClickPrev() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={handleClickPrev}
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 m-2 rounded"
                disabled={index === 0}>
                Artikel Sebelumnya
            </button>
            <button
                onClick={handleClickNext}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"
                disabled={index === sculptureList.length - 1}>
                Artikel Selanjutnya
            </button>
            <h2><i>{sculpture.name}  </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}