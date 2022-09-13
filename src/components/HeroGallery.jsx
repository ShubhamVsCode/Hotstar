import asset0 from "../assets/images/asset 0.webp";
// import asset1 from "../assets/images/asset 1.webp";
// import asset2 from "../assets/images/asset 2.webp";
// import asset3 from "../assets/images/asset 3.webp";

import leftIcon from "../assets/icons/left-arrow.png";

const HeroGallery = () => {
  return (
    <section className="container group relative gap-5 overflow-hidden max-w-full bg-hotstarBlue ">
      <img
        src={leftIcon}
        className="w-7 group-hover:opacity-100 opacity-0 duration-200 cursor-pointer absolute top-52 left-5 "
        alt=""
      />
      <div className="bg-[#0a0f1f] h-[29rem] relative rounded-md mx-auto grid grid-cols-12 w-[90vw]">
        <div className="p-16 col-span-5 space-y-3">
          <h1 className="text-white font-bold text-4xl">Laali</h1>
          <h2 className="text-gray-400 text-lg">Hindi Drama 2022</h2>
          <h2 className="text-gray-300 text-lg">
            A lonely laundryman from the suburbs of Kolkata finds companionship
            in an unclaimed red dress, which triggers esoteric memories from the
            past.
          </h2>
        </div>
        <div className="bg-gradient-to-r absolute h-full w-36 right-1/2 from-[#0a0f1f]"></div>
        <img
          className="col-start-6 w-full col-span-7 rounded-r-md"
          src={asset0}
          alt=""
        />
      </div>
      {/* <img className=" w-[44vw] h-[28rem] rounded-md" src={asset1} alt="" />
      <img className=" w-[44vw] h-[28rem] rounded-md" src={asset2} alt="" />
      <img className=" w-[44vw] h-[28rem] rounded-md" src={asset3} alt="" /> */}

      {/* rotated left icon */}
      <img
        src={leftIcon}
        className="w-7 group-hover:opacity-100 opacity-0 duration-200 cursor-pointer rotate-180 absolute top-52 right-5 "
        alt=""
      />
    </section>
  );
};

export default HeroGallery;
