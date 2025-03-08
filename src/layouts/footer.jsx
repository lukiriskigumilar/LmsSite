import MainIcon from "../components/atoms/MainIcon";
import FooterMenu from "../components/molecules/FooterMenu";


const Footer = () => {

    return (
        <footer className="bg-white">
            <div className="max-w-full h-fit sm:h-fit sm:max-w-[80%] lg:max-w-[80%] px-5 mx-4 sm:mx-auto pt-4 mt-[60px] mb-[20px] rounded-lg">
                <div className="block mt-[5px] mb-6 lg:flex lg:justify-between lg:items-start">
                    <div className="flex flex-col items-start lg:w-[35%]">
                        <MainIcon icon={"/images/mainIcon.png"} />
                        <p className="font-bold mt-2 text-[18px]">
                            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                        </p>
                        <p className="font-light mt-1 text-[15px] text-text-secondary">
                            Jl. Usman Effendi No. 50 Lowokwaru, Malang
                        </p>
                        <p className="font-light text-[15px] text-text-secondary">+62-877-7123-1234</p>
                    </div>

                    <div className="block mt-4 lg:mt-0 lg:flex lg:justify-center lg:items-start gap-5">
                        <FooterMenu
                            titleMenu={"Kategori"}
                            liList={[
                                <li><a href="#">Digital & Teknologi</a></li>,
                                <li><a href="#">Pemasaran</a></li>,
                                <li><a href="#">Manajemen Bisnis</a></li>,
                                <li><a href="#">Pengembangan Diri</a></li>,
                                <li><a href="#">Desain</a></li>,
                            ]

                            }
                        />

                        <FooterMenu
                            titleMenu={"Perusahaan"}
                            liList={[
                                <li><a href="#">Tentang Kami</a></li>,
                                <li><a href="#">FAQ</a></li>,
                                <li><a href="#">Kebijakan Privasi</a></li>,
                                <li><a href="#">Ketentuan Layanan</a></li>,
                                <li><a href="#">Bantuan</a></li>

                            ]}
                        />

                        <FooterMenu
                            titleMenu={"Komunitas"}
                            liList={[
                                <li><a href="#">Tips Sukses</a></li>,
                                <li><a href="#">Blog</a></li>,

                            ]}
                        />





                    </div>
                </div>

                <hr className="w-[100%] bg-text-secondary border-opacity-100" />

                <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mt-3">
                    <div className="mt-2">
                        <p className="text-[13px] font-light text-text-secondary">
                            @2023 Gerobak Sayur All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex gap-2 mt-2 lg:mt-0 lg:order-2 order-1">
                        <img src="images/linkedin.png" alt="sosmed" />
                        <img src="images/facebook.png" alt="sosmed" />
                        <img src="images/ig.png" alt="sosmed" />
                        <img src="images/twit.png" alt="sosmed" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
