import CardContainer from "../atoms/CardContainer";
import CardImage from "../atoms/CardImage";
import Price from "../atoms/Price";
import Rating from "../atoms/rating";
import TutorProfile from "../molecules/TutorProfile";

function CardCourse({ tittleCourse, descCourse, tutorJob, tutorName, workAt, cardImage, tutorImage }) {
    return (
        <CardContainer>
            <div className="flex gap-5 lg:block whitespace-normal">
                <CardImage imagesCard={cardImage} />
                <div>

                    <h3 className="font-bold text-[17px] 
                            lg:mt-4 lg:text-[20px]">{tittleCourse}</h3>
                    <p className="hidden lg:mt-[10px] lg:line-clamp-2 text-text-secondary text-[15px] font-light font-family-dm-sans">
                        {descCourse}
                    </p>
            
                    <TutorProfile tutorJob={tutorJob}
                        tutorName={tutorName} workAt={workAt} tutorImage={tutorImage}
                    />
                </div>
            </div>
            <div className="flex justify-between mt-3 place-items-center px-2">
            <Rating rating={4.5} totalReview={100} />
            <Price price={"200"} />
            </div>
            <div>

            </div>
        </CardContainer>
    );
}

export default CardCourse;