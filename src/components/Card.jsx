import play from "../assets/images/asset 129.svg";
import plus from "../assets/images/asset 130.svg";

const Card = ({ image, title, description, about }) => {
  return (
    <div className="relative group rounded-md  hover:scale-125 hover:z-10 duration-300 text-white">
      <img className="rounded-md" src={image} alt="" />
      <div className="bottom-0 opacity-0 duration-200 group-hover:opacity-100 bg-gradient-to-t from-[#101e38] via-[#112140] px-2 absolute w-full rounded-b-md">
        <div className="p-1">
          <p className="text-sm font-semibold z-30">{title}</p>
          <div className="text-[10px] font-semibold leading-4 ">
            <p>{description}</p>
            <p className="text-gray-300 mt-[2px]">{about}</p>
          </div>
          <p className="uppercase -mx-1 px-2 py-[2px] hover:bg-slate-100/20 rounded flex items-center text-[10px] text-gray-400 z-30 font-bold mt-[2px]">
            <img src={play} className="w-[6px] mr-[6px]" alt="" />
            <span className="mt-[2px]">Watch Movie</span>
          </p>
          <p className="uppercase -mx-1 px-2 py-[2px] mb-1 hover:bg-slate-100/20 rounded flex items-center text-[10px] text-gray-400 z-30 font-bold">
            <img src={plus} className="w-[10px] -ml-[2px] mr-1" alt="" />
            <span className="mt-[3px]"> Add to watchlist</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
