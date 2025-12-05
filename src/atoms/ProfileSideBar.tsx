"use client"
import { useState } from "react";
import { FiUser, FiMapPin, FiHeart, FiShoppingBag, FiLogOut } from "react-icons/fi";
import Image from "next/image";
type ProfileSidebarProps={
    path:StaticImageData;
}

export default function ProfileSidebar({path}:ProfileSidebarProps) {
  const [active, setActive] = useState("my Profile");

  const menuItems = [
    { label: "My Profile", icon: <FiUser /> },
    { label: "Address", icon: <FiMapPin /> },
    { label: "Wishlist", icon: <FiHeart /> },
    { label: "My Orders", icon: <FiShoppingBag /> },
    { label: "Logout", icon: <FiLogOut /> },
  ];

  return (
    <div className="w-[18.125rem] h-[26rem] bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-6 bg-white">
        <Image 
          src={path} 
          alt="profile background" 
          width={100} 
          height={100} 
        />
        <h2 className="text-lg font-semibold mt-2 opacity-70">RINKU VERMA</h2>
        <p className="text-gray-500 text-sm">advanceduitechniques@gmail.com</p>
      </div>

      <div className="pt-4">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="relative cursor-pointer"
            onClick={() => setActive(item.label)}
          >
            {active === item.label && (
              <div className="absolute left-0 top-2 w-[4px] h-4/6 bg-[#02B290]"></div>
            )}

            <div className="flex items-center gap-4 p-2 pl-5  bg-[#F5F5F5]">
              {item.icon}
              <span className=" h-[1.375rem] font-medium text-base opacity-90">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
