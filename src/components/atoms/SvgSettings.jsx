function SvgSettings({className}) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.63l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.06 7.06 0 0 0-1.7-.98l-.38-2.65A.5.5 0 0 0 14.5 3h-5a.5.5 0 0 0-.49.42l-.38 2.65c-.63.26-1.2.6-1.7.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.63L4.57 11c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65a.5.5 0 0 0-.12.63l2 3.46a.5.5 0 0 0 .6.22l2.49-1c.5.38 1.07.72 1.7.98l.38 2.65a.5.5 0 0 0 .49.42h5c.25 0 .46-.18.49-.42l.38-2.65c.63-.26 1.2-.6 1.7-.98l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.63l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
                className={className || "fill-gray-secondary"}
                fillOpacity={1}
            />
        </svg>
    );


}

export default SvgSettings;