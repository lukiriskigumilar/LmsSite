function CardImage({imagesCard = "/images/card-image2.png"}) {
    return (
        <img src={imagesCard} alt="card image" className="
        w-[82px] h-[82px] rounded-lg object-cover shadow-2xl
                    xl:w-[344px] xl:h-[193px] xl:shadow-sm
                    "/>
    );
}

export default CardImage;