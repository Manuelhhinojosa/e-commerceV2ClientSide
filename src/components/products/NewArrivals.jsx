// React hooks
import { useState, useRef, useEffect } from "react";

// React router
import { Link } from "react-router-dom";

// State
// Static State
// Products state & text
import { newArrivalsText } from "../../assets/staticState/staticText";

// NewArrivals function component
const NewArrivals = () => {
  // static state text
  // icons
  const _leftIcon = newArrivalsText.scrollIcons[0];
  const _rightIcon = newArrivalsText.scrollIcons[1];

  //   react hook useRef for new arrivals scroll section
  const scrollRef = useRef(null);

  // logic for scroll sesction state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  //   functions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = (e) => {
    setIsDragging(false);
  };

  //   scroll funcion for scroll section
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  //   scroll buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  //   use effect for scroll section upon loading the page
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  //   return
  return (
    <section className="py-16 px-4 lg:px-0">
      {/* header */}
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4"> {newArrivalsText.text}</h2>
        <p className="text-lg text-gray-600 mb-8">{newArrivalsText.text2}</p>

        {/* scroll */}
        {/* buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <_leftIcon className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <_rightIcon className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scroll content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative p-5 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivalsText.newProducts.map((p) => (
          <div
            key={p._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={p.images[0].url}
              alt={p.images[0].altText}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${p._id}`} className="block">
                <h4 className="font-medium">{p.name}</h4>
                <p className="mt-1 ">${p.Price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
