import { useRef, useState } from "react";

const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
    height = 280
}) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState(10); // %

    const updatePosition = (clientX) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        setPosition((x / rect.width) * 100);
    };

    const onMouseDown = () => {
        const onMove = (e) => updatePosition(e.clientX);
        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    // const onTouchMove = (e) => {
    //     e.preventDefault();
    //     updatePosition(e.touches[0].clientX);
    // };

    const onTouchStart = (e) => {
        e.preventDefault();
        const onTouchMoveHandler = (e) => {
            e.preventDefault();
            updatePosition(e.touches[0].clientX);
        };
        const onTouchEnd = () => {
            window.removeEventListener("touchmove", onTouchMoveHandler);
            window.removeEventListener("touchend", onTouchEnd);
        };

        window.addEventListener("touchmove", onTouchMoveHandler);
        window.addEventListener("touchend", onTouchEnd);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-lg select-none"
            style={{ height }}
        >
            {/* BOTH IMAGES AT FULL SIZE */}
            <div className="relative w-full h-full">
                {/* BEFORE - Full image, always visible */}
                <img
                    src={afterImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                    alt="Before"
                />
                
                {/* AFTER - Full image, clipped from the left */}
                <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ 
                        clipPath: `inset(0 0 0 ${position}%)`,
                        WebkitClipPath: `inset(0 0 0 ${position}%)`
                    }}
                >
                    <img
                        src={beforeImage}
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                        alt="After"
                    />
                </div>
            </div>

            {/* SLIDE TEXT */}
            <div className="absolute top-2 left-2 rounded text-black bg-white px-1 text-sm font-medium pointer-events-none">
                Slide
            </div>

            {/* SLIDER LINE */}
            <div
                className="absolute top-0 bottom-0"
                style={{ left: `${position}%` }}
            >
                <div className="w-[2px] h-full bg-white/80" />

                {/* HANDLE */}
                <div
                    onMouseDown={onMouseDown}
                    onTouchStart={onTouchStart}
                    className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white rounded-full shadow cursor-ew-resize flex items-center justify-center touch-none"
                >
                    <div className="flex space-x-0.5">
                        <div className="w-[2px] h-3 bg-gray-400 rounded" />
                        <div className="w-[2px] h-3 bg-gray-400 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;