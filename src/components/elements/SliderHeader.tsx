import React from 'react'

interface Props {
    title: string;
    onBackPress: () => void
}

function SliderHeader({ title, onBackPress }: Props) {
    return (
        <div className="header">
            <button type="button" onClick={onBackPress}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256">
                    <g transform="translate(128 128) scale(0.72 0.72)">
                        <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
                            <path d="M 0.439 35.5 l 29.228 -19.767 c 0.308 -0.208 0.704 -0.229 1.029 -0.055 c 0.327 0.173 0.531 0.513 0.531 0.883 v 7.987 c 12.038 0.262 26.306 5.201 37.501 13.023 C 82.446 47.155 90 59.894 90 73.438 c 0 0.471 -0.329 0.878 -0.79 0.978 c -0.07 0.016 -0.141 0.022 -0.211 0.022 c -0.386 0 -0.747 -0.225 -0.911 -0.588 c -7.823 -17.312 -26.952 -26.183 -56.861 -26.376 v 8.62 c 0 0.37 -0.204 0.71 -0.531 0.883 c -0.325 0.173 -0.722 0.153 -1.029 -0.055 L 0.439 37.157 C 0.165 36.971 0 36.661 0 36.329 S 0.165 35.686 0.439 35.5 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                    </g>
                </svg>
            </button>

            <h2>{title}</h2>
        </div>
    )
}

export default SliderHeader