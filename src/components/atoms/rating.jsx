function Rating({ rating, totalReview }) {
    const stars = []
    for (let i = 1; i <= 5; i++)
        if (rating >= i) {
            stars.push(<img src="/images/full-star.svg" key={`full-${i}`} className="w-3 h-3" />)
        } else if (rating >= i - 0.5) {
            stars.push(<img src="/images/starhalf.png" key={`half-${i}`} className="w-3 h-3" />)
        } else {
            stars.push(<img src="/images/none-star.png" key={`none-${i}`} className="w-3 h-3" />)
        }
    return (
        <>
            <div className="font-family-dm-sans flex place-items-baseline  justfy-center gap-2 lg:mt-1">
                <div className="flex gap-1">{stars}</div>
                <p className=" text-text-secondary mt-2 lg:text-[13px] text-[12px] font-[500px]  underline underline-offset-4 font-family-dm-sans ">{rating} ({totalReview})</p>
            </div>
        </>
    );
}

export default Rating;