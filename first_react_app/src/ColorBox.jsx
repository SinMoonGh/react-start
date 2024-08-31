import ColorBoxs from "./ColorBoxs";
import "./ColorBox.css"

export default function ColorBox({colors}) {
    // 작은 박스 25개
    // 무작위로 클릭 시 색깔 변함 
    const boxs = []
    
    for (let i=0; i<5; i++){
        boxs.push(
            <div className="row">
                <ColorBoxs boxColor = {colors}/>        
                <ColorBoxs boxColor = {colors}/>        
                <ColorBoxs boxColor = {colors}/>        
                <ColorBoxs boxColor = {colors}/>        
                <ColorBoxs boxColor = {colors}/>        
            </div>
        )
    }

    return (
        <div className="container">
            {boxs}                   
        </div>
    )
}