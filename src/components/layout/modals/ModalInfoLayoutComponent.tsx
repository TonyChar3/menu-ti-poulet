import React from "react";
import { Facebook, Chrome, Phone } from "lucide-react";
import Link from "next/link";

const ModalInfoLayoutComponent: React.FC = () => {
  return (
    <div className="w-[80%] md:w-[50%] lg:w-[30%] flex flex-col justify-center items-center">
      <Link
        href="https://www.facebook.com/p/Poulet-Maniaque-March%C3%A9-Cantley-100070033620865/"
        target="_blank"
        className="w-full p-2 md:p-3 flex justify-center items-center bg-white shadow-lg shadow-gray-300 rounded-3xl transition hover:shadow-xl"
      >
        <div className="w-[50%] flex items-center justify-center">
          <Facebook size={30} />
        </div>
        <div className="w-[50%] flex items-center justify-start">
          <span className="font-bold md:text-lg">facebook</span>
        </div>
      </Link>

      <Link
        href="https://search.google.com/local/reviews?placeid=ChIJi0rsxeUdzkwREWF2C8QfuSE"
        target="_blank"
        className="w-full mt-4 p-2 md:p-3 flex justify-center items-center bg-white shadow-lg shadow-gray-300 rounded-3xl transition hover:shadow-xl"
      >
        <div className="w-[50%] flex items-center justify-center">
          <Chrome size={30} />
        </div>
        <div className="w-[50%] flex items-center justify-start">
          <span className="font-bold md:text-lg">google review</span>
        </div>
      </Link>

      <div className="w-full mt-4 p-2 md:p-3 flex justify-center items-center bg-white shadow-lg shadow-gray-300 rounded-3xl cursor-pointer transition hover:shadow-xl">
        <div className="w-[50%] flex items-center justify-center">
          <Phone size={30} />
        </div>
        <div className="w-[50%] flex items-center justify-start">
          <span className="font-bold md:text-lg">{"(819) 607-0578"}</span>
        </div>
      </div>
    </div>
  );
};

export default ModalInfoLayoutComponent;
