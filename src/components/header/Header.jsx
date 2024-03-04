import './Header.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import {headerBooks} from "../../data/data";
import {Link} from "react-router-dom";
import {Navigation, Pagination} from "swiper/modules";

import {GoArrowRight} from "react-icons/go";
import {GoArrowLeft} from "react-icons/go"
export const Header = () => {

    const truncateDescription = (description, maxLength) => {
        if (!description) return '';

        if (description.length > maxLength) {
            let truncated = description.substring(0, maxLength);
            const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

            while (truncated.length > 0 && !consonants.includes(truncated[truncated.length - 1])) {
                truncated = truncated.substring(0, truncated.length - 1);
            }

            // Add the ellipsis
            return truncated + '...';
        }

        return description;
    };


    return (
        <header>
            <div className="header-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        prevEl: '.button-prev-slide',
                        nextEl: '.button-next-slide',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false
                    }}

                >
                    {
                        headerBooks.map(({title, cover, author, btnLink, description}, index) => {
                            const truncatedDescription = truncateDescription(description, 370);

                            return (
                                <SwiperSlide key={index}>
                                    <div className="header-wrapper container">
                                        <div className="header-left">
                                            <h1 className="header-title">{title}</h1>
                                            <p className="header-desc" dangerouslySetInnerHTML={{ __html: truncatedDescription}}></p>
                                            <Link className="btn btn-border padding-btn" to={btnLink}>
                                                Learn More
                                            </Link>
                                        </div>
                                        <div className="header-right">
                                            <div className="book">
                                                <div
                                                    className="book-cover"
                                                    style={{backgroundImage: 'url(' + cover + ')'}}
                                                >
                                                    <div className="effect"></div>
                                                    <div className="light"></div>
                                                </div>
                                                <div className="book-inside"></div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                    <div className="slider-button">
                        <div className="button-prev-slide slidebutton">
                            <GoArrowLeft/>
                        </div>
                        <div className="button-next-slide slidebutton">
                            <GoArrowRight/>
                        </div>
                    </div>

                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>

                <div className="header-shape">
                    <img />
                </div>


            </div>
        </header>
    )
}