function BannerContent({ textContent, buttonContent }) {
    return (
        <>
            <div className="block mt-[10px]">
                {textContent}
            </div>
            <div className="mt-4 flex justify-center">
                {buttonContent}
            </div>
        </>
    );
}

export default BannerContent;