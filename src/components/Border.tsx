import { EachBox } from "./EachBox";

export function Border({ border, onClick }) {
    return (
        <div className="border">
            {border.map((box, index) => (
                <EachBox key={index} value={box} onClick={() => box === null && onClick(index)} />
            ))}

        </div>
    )
}


