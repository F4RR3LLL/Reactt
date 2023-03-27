import React, {useState} from "react";

const ToDoImage=() => {
    const [showImage, setShowImage] = useState(false);

    return (
        <div>
            <button onClick={()=> setShowImage(!showImage)}>
                {showImage ? 'Hide Image' : 'Show Image'}
            </button>
            <br></br>
            {showImage && <img src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/03/24/3430392723.jpg" alt="Panda" style={{width:300}}/>}
        </div>
    );
};

export default ToDoImage;