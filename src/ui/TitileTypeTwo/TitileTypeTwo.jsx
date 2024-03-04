import './TitileTypeTwo.css'
import divider from "../../assets/pngegg.png";
export const TitileTypeTwo = ({ClassName, Title}) => {
    return (
        <div className={`titleTypeTwo ${ClassName}`}>
            <h2>{Title}</h2>
            <img src={divider} alt="" className="divider"/>
        </div>
    )
}