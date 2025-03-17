function TutorProfile({ tutorName, tutorJob, workAt,tutorImage="/images/tutor_image.png" }) {
    return (
        <>
            <div className="flex gap-3 mt-1 lg:mt-[10px] ">
                <img src={tutorImage} alt="avatar teach" className="w-[36px] h-[36px] rounded-sm" />
                <div className="flex flex-col justify-center">
                    <h4 className="font-semibold lg:text-[16px] text-[12px] font-family-dm-sans line-clamp-1">{tutorName}</h4>
                    <p className="lg:text-[16px] text-[12px]  text-text-secondary font-family-dm-sans line-clamp-1">{tutorJob}
                        <span className="hidden lg:inline"> di <span
                            className="hidden lg:inline lg:font-bold">{workAt}</span></span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default TutorProfile;