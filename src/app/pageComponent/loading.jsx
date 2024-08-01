import React from 'react'
import Lottie from "lottie-react";
import animationData from "../../assets/loading3.json";

export default function Loading() {

    return (
        <div className="mt-14 p-14 flex justify-center items-center">
            <Lottie
                height={300} width={300}
                speed={1.0}
                animationData={animationData}
            />
        </div>
    )
}

