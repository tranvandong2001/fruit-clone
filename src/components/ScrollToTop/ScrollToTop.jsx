import { useEffect, useState } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
const ScrollToTop = () => {
    const [scrollY, setScrollY] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                setScrollY(true);
            } else {
                setScrollY(false);
            }
        });
    });

    return (
        <div>
            {/* 👇️ scroll to top on button click */}
            {scrollY && (
                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                    style={{
                        position: "fixed",
                        padding: "4px",
                        fontSize: "20px",
                        bottom: "40px",
                        right: "40px",
                        backgroundColor: "#0C9",
                        color: "#fff",
                        textAlign: "center",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <ArrowCircleUpOutlinedIcon />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
