import './BestSellingBook.css'
import {TitileTypeTwo} from "../../ui/TitileTypeTwo/TitileTypeTwo.jsx";

import ThreeShape from '../../assets/small-fruit-tree-growing-on-earth_41467.png';
import {sellingBookData} from '../../data/data';
import {Link} from "react-router-dom";

import {BsArrowReturnRight} from "react-icons/bs";

export const BestSellingBook = () => {
    return (
        <section className="BestSellingBook">
            <div className="treeShape">
                <img className="threeshape-img" src={ThreeShape} alt=""/>
            </div>

            <div className="container bestselling-cointainer">
                {
                    sellingBookData.map(({writer, name, cover, coverLink, nameLink, description, price, shopBtnLink}, index) => {
                        return (
                            <div className="container bestselling-container">
                                <div className="selling-book-left">
                                        <div className="book">
                                            <Link to={coverLink}>
                                                <div
                                                    className="book-cover"
                                                    style={{backgroundImage: 'url(' + cover + ')'}}
                                                >
                                                    <div className="effect"></div>
                                                    <div className="light"></div>
                                                </div>
                                                <div className="book-inside"></div>
                                            </Link>
                                        </div>
                                </div>

                                <div className="selling-book-right">
                                    <TitileTypeTwo Title={'Best Selling Book'} ClassName="sellingBookTitle"/>
                                    <div><small>{writer}</small></div>
                                    <h3>{name}</h3>
                                    <p className="selling-book-desc">{description}</p>
                                    <h5><span>{price}</span></h5>
                                    <Link to={shopBtnLink} className="btn">
                                        <small>Shop it now</small>
                                        <BsArrowReturnRight/>
                                    </Link>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </section>

    )
}