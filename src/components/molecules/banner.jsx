import BannerContainer from "../atoms/BannerContainer";
import BannerContent from "../atoms/BannerContent";

function Banner({ imageBanner, buttonContent, textContent }) {
    return (
        <>
            <BannerContainer
                mainBanner={imageBanner}
                children={

                    <>
                        <BannerContent
                            buttonContent={buttonContent}
                            textContent={textContent}
                        />
                    </>
                }
            />
        </>
    );
}

export default Banner;