import { useState, useEffect, useRef } from "react";
import './style.css'; 
const CarouselDraggable = () => {

    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);
    const [cardPerView, setCardPerView] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        const wrapper = wrapperRef.current;

        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = wrapper.querySelectorAll("i");
        const carouselChildrens = [...carousel.children];

        const handleDragStart = (e) => {
            setIsDragging(true);
            carousel.classList.add("dragging");
            setStartX(e.pageX);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const handleDragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const handleDragStop = () => {
            setIsDragging(false);
            carousel.classList.remove("dragging");
        };

        const handleInfiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            setTimeoutId(setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500));
        };

        const handleMouseEnter = () => clearTimeout(timeoutId);

        const handleMouseLeave = () => autoPlay();

        setCardPerView(Math.round(carousel.offsetWidth / firstCardWidth));

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        carousel.addEventListener("mousedown", handleDragStart);
        carousel.addEventListener("mousemove", handleDragging);
        document.addEventListener("mouseup", handleDragStop);
        carousel.addEventListener("scroll", handleInfiniteScroll);
        wrapper.addEventListener("mouseenter", handleMouseEnter);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        autoPlay();

        return () => {
            carousel.removeEventListener("mousedown", handleDragStart);
            carousel.removeEventListener("mousemove", handleDragging);
            document.removeEventListener("mouseup", handleDragStop);
            carousel.removeEventListener("scroll", handleInfiniteScroll);
            wrapper.removeEventListener("mouseenter", handleMouseEnter);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);


    return (
        <div className="wrapper" ref={wrapperRef}>
            <i id="left" className="fa-solid fa-angle-left">L</i>
            <ul className="carousel" ref={carouselRef}>
                <li className="card">
                    <div className="img"><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manager 1</span>
                </li>
                <li className="card">
                    <div className="img"><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manager 2</span>
                </li>
                <li className="card">
                    <div className="img"><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manage 3r</span>

                </li>
                <li className="card">
                    <div className="img"><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manager 4</span>
                </li>
                <li className="card">
                    <div className="img 5"><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manager</span>
                </li>
            </ul>
            <i id="right" className="fa-solid fa-angle-right">R</i>
        </div>
    )
}
export default CarouselDraggable;