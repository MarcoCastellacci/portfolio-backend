import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import pagesActions from "../Redux/Actions/pagesActions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/pagesStyle.css";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

export default function ProyectsPages() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(pagesActions.getProyects())
        // eslint-disable-next-line
    }, []);

    const proyects = useSelector(store => store.pagesReducer.proyects)
    console.log(proyects);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {proyects.map((pages) => (
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            {pages.name}
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <a href={pages.link} target="_blank" rel="noopener noreferrer">{pages.name}</a>
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                {pages.description}
                            </p>
                            <div className="img-carrousel">
                                <img src={pages.logo} alt={pages.name} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
