import React from 'react'
import Lottie from "lottie-react";
import animationData from "/public/assets/error.json";
import {Player, Controls} from "@lottiefiles/react-lottie-player";

function errorPage() {
    return (

            <Player
            autoplay
            loop
            src="https://lottie.host/ec0ce35f-391c-4933-9b6a-efe68671e076/Xapo2aZIgE.json"
            Style={{height:'500px', width:"500px"}}
            >

            </Player>

    )
}

export default errorPage
