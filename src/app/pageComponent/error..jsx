import React from 'react'
import animationData from '../../assets/error1.json'
import Lottie from "lottie-react";

export default function Error() {
    return (

        <div className="min-h-0 mt-14 flex justify-center items-center">
            <Lottie height="50" width="200"
            animationData={animationData}  />
        </div>
    )
}

