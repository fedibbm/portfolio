

const  SkillBlock : React.FC<{percentage : number, name : string }> = ({ percentage, name}) => {
    return (
        <div className="p-2 border-2 rounded border-white lg:w-60 w-40">
            <p>{name}</p>
            <div className="flex gap-2 w-full items-center">
                <div className="relative h-4 flex-grow  w-full">
                    <div className="absolute top-0 left-0 w-full h-4 bg-gray-500"></div>
                    <div style={{width:`${percentage}%`}} className={`absolute h-4 top-0 left-0  bg-gray-200`}></div>
                </div>
                <p>{percentage}%</p>
            </div>
        </div>
    );
}


export default SkillBlock;