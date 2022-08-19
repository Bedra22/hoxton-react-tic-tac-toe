
export function EachBox({ value, onClick }: any) {
    const eachBoxStyle = value === 'X' ? 'box X' : 'box O'
    return (
        <div className="eachBoxStyle-button">
            <button className={eachBoxStyle} onClick={onClick}>
                {value}
            </button>
        </div>
    )
}