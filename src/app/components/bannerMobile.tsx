interface BannerMobileProps {
  banners: BannerProps[];
}

interface BannerProps {
  id: number;
  image: string;
  title: string;
  text: string[];
  subText: string[];
  buttonText: string;
  overlayImage: string;
}

const BannerMobile = ({ banners }: BannerMobileProps) => {
  return (
    <div className="flex flex-col items-center justify-center lg:hidden w-full px-6 py-3 gap-3 relative">
      {banners[0].overlayImage && (
        <img
          className="absolute -top-[7%] z-10"
          src="/icon-banner-mobile.png"
          alt="Icon"
        />
      )}
      <div className="w-full h-[90%] rounded-2xl overflow-hidden shadow-lg relative">
        <button className="absolute top-2 right-3 z-10">
          <img src="/infor.svg" alt="info icon" />
        </button>
        <img src="/banner-mobile.png" alt="Mobile Banner" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white text-center py-6 px-4">
          <div className="bg-[#FFFFFF1A] rounded-[80px] font-semibold text-xs px-4 py-1">
            CashBack
          </div>
          <h2 className="text-xl font-extrabold pb-2">
            Piggy Christmas Tap: <br /> €35,000 For Your Win
          </h2>
          <button className="bg-[#FF0960] uppercase font-semibold text-sm px-20 py-3 rounded-[10px]">
            Discover More
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerMobile;
