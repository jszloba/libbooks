import {TitileTypeOne} from "../../ui/TitileTypeOne/TitileTypeOne.jsx";
import './FeaturesBooks.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from "swiper/modules";

import {featuredBooks} from "../../data/data";
import {Link} from "react-router-dom";

import {BsArrowReturnRight} from "react-icons/bs";



const breakpoints={
    1024: {
        slidesPerView: 4,
        spaceBetween: 30,

    },
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    }
}


export const FeaturesBooks = () => {
    return (
        <section className="featured">
            <div className="container featurers-book-container">
                <TitileTypeOne
                    TitleTop={'Some quality items'}
                    Title={'Featured Books'}
                />

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={{el: '.swiper-pagination', clickable: true }}
                    breakpoints={breakpoints}
                >

                    {featuredBooks.map(({coverLink, writer, cover, nameLink, price, name}, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="featurebook-box">
                                    <Link to={coverLink} className="featurebook">
                                        <div className="book-feature-coverbox">
                                            <div
                                                className="book-cover-feature"
                                                style={{backgroundImage: 'url(' + cover + ')'}}
                                            >
                                                <div className="effect-feature"></div>
                                                <div className="light-feature"></div>
                                            </div>
                                            <div className="book-inside-feature"></div>
                                        </div>
                                    </Link>
                                    <div className="featurebook-info">
                                        <Link to={nameLink}>
                                            <h4>{name}</h4>
                                        </Link>
                                        <div>
                                            <small>{writer}</small>
                                        </div>
                                        <h5><span>{price}</span></h5>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    })}

                    <div className="feature-border"></div>
                    <div className="swiper-pagination"></div>
                    <Link to="*" className="btn feature-btn">View All Books <BsArrowReturnRight/></Link>
                </Swiper>

            </div>
        </section>
    )
}