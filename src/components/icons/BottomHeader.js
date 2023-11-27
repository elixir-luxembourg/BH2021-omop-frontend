import React from "react";

function BottomHeader(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="81"
            fill="none"
            version="1.1"
            viewBox="0 0 1440 81"
            className={props.className}
            alt={props.alt}
        >
            <path
                fill="#282c52"
                d="M-1.868 19.993c317.101 11.32 808.601 51.32 1440.061-5.155 631.46-56.474 0-16.026 0-16.026H-1.868s-317.1 9.863 0 21.181z"
            ></path>
        </svg>
    );
}

export default BottomHeader;
