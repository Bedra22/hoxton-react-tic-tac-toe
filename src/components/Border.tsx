import { EachBox } from "./EachBox";

export function Border({ border, onClick }) {
    return (
        <div className="border">
            {border.map((box, index) => (
                <EachBox key={index} value={box} onClick={() => onClick(index)} />
            ))}

        </div>
    )
}


