import Lottie from "lottie-react";

type LottieAnimationProps = {
    animationData: any;
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
};

function LottieAnimation({
    animationData,
    width = 200,
    height = 200,
    loop = true,
    autoplay = true,
    className = "",
}: LottieAnimationProps) {
    return (
        <div
            className={className}
            style={{
                width,
                height,
            }}
        >
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}

export default LottieAnimation;
