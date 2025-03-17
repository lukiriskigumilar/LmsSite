function CardImage({imagesCard = "/images/card-image2.png"}) {
    return (
        <img src={imagesCard} alt="card image" className="
        w-[82px] h-[82px] rounded-lg object-cover shadow-2xl
                    lg:w-full lg:h-fit lg:shadow-sm
                    "/>
    );
}

export default CardImage;