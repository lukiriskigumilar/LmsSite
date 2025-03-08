function ListCourseLayout({ cardCourse, headContent, clasname }) {
    return (
        <>
            <div
                className={clasname}>
                <h1 className="font-[600] text-[25px]">Koleksi Video Pembelajaran Unggulan</h1>
                <p className="font-[500] text-[17px] text-text-secondary mt-1 font-family-dm-sans">Jelajahi Dunia Pengetahuan Melalui
                    Pilihan
                    Kami!</p>
                <div className="flex flex-col">
                    {headContent}
                    {cardCourse}
                </div>
            </div>

        </>

    );
}

export default ListCourseLayout;