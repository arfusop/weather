import React from 'react'
import { StyledWindDisplay } from './styled/StyledWindDisplay'

// import { FaTree } from 'react-icons/fa'

const WindDisplay = ({ gust }) => {
    return (
        <StyledWindDisplay>
            <div className="treeContainer">
                <svg id="tree1" className="tree" viewBox="0 0 116 193">
                    <polygon
                        className="trunk"
                        points="64.93 156 57 156 55 193 62.93 193 64.93 156"
                    />
                    <path
                        className="brush"
                        d="M97,1,92,0C53,50,26.15,107.8,0,157l116,4S87,72,97,1Z"
                    />{' '}
                </svg>
                <svg id="tree2" className="tree" viewBox="0 0 116 193">
                    <polygon
                        className="trunk"
                        points="64.93 156 57 156 55 193 62.93 193 64.93 156"
                    />
                    <path
                        className="brush"
                        d="M97,1,92,0C53,50,26.15,107.8,0,157l116,4S87,72,97,1Z"
                    />{' '}
                </svg>
                <svg id="tree3" className="tree" viewBox="0 0 116 193">
                    <polygon
                        className="trunk"
                        points="64.93 156 57 156 55 193 62.93 193 64.93 156"
                    />
                    <path
                        className="brush"
                        d="M97,1,92,0C53,50,26.15,107.8,0,157l116,4S87,72,97,1Z"
                    />{' '}
                </svg>

                {/* <FaTree className="tree" />
                <FaTree className="tree" />
                <FaTree className="tree" /> */}
            </div>
            <div className="mph">{Math.round(gust)} mph</div>
        </StyledWindDisplay>
    )
}

export default WindDisplay
