function BannerContainer({mainBanner,children}) {
    return (
        <>
            <div
            className="bg-no-repeat bg-cover max-w-full h-fit sm:h-fit sm:max-w-[80%] lg:max-w-[80%] mx-4 sm:mx-auto p-6 mt-[60px] mb-[60px] rounded-lg"
            style={{ backgroundImage: `url(${mainBanner})` }}
        >
                <div className="relative z-10  items-center justify-center h-full text-white block">
                    {children}
                </div>
            </div>
        </>
    );
}

export default BannerContainer;