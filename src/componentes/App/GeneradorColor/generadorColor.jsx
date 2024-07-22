import { useState } from "react";
import './GeneradorColor.css';
const GeneradorColor = ()=>{
    const [color, setColor] = useState('');
    const [size, setSize] = useState(50);
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(color && size){
            setBoxes([...boxes, {color, size}]);
            setColor('');
            setSize(50);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Color:
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Size:
                        <input
                            type="number"
                            value={size}
                            onChange={(e) => setSize(parseInt(e.target.value) || 0)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Box</button>
            </form>
            <div className="box-container">
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{
                            backgroundColor: box.color,
                            width: `${box.size}px`,
                            height: `${box.size}px`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );

}

export default GeneradorColor;