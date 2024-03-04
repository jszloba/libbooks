import './TitileTypeOne.css'

import divider from '../../assets/pngegg.png'
export const TitileTypeOne = ({ClassName, Title, TitleTop}) => {
    return (
        <div className={`titleTypeOne ${ClassName}`}>
            <small>
                {TitleTop}
            </small>
            <div className="heading-H">
                <div className="line"></div>
                <h2>{Title}</h2>
                <div className="line"></div>
            </div>
            <img src={divider} alt="" className="divider"/>
        </div>
    )
}