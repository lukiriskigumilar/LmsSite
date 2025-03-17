function SvgBasket({className}) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 16.9995C10.9 16.9995 10 16.0995 10 14.9995C10 13.8995 10.9 12.9995 12 12.9995C13.1 12.9995 14 13.8995 14 14.9995C14 16.0995 13.1 16.9995 12 16.9995Z"
                className={className || "fill-gray-secondary"}
                fillOpacity={1}
            />
        </svg>
    );
}

export default SvgBasket;