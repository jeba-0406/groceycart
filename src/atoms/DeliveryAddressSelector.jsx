"use client";
import { useState } from "react";
import { ButtonAtom } from "@/atoms/button";

const RadioButton = ({ selected }) => {
  return (
    <div className="w-5 h-5 rounded-full border-2 border-[#27BCA0] flex items-center justify-center mt-1">
      {selected && (
        <div className="w-2.5 h-2.5 bg-[#27BCA0] rounded-full"></div>
      )}
    </div>
  );
};

export const DeliveryAddressSelector = () => {
  const [selectedAddress, setselectedAddress] = useState(1);

  const addresses = [
    {
      id: 1,
      label: "Home",
      name: "RINKU VERMA",
      address:
        "H No 222 Street No 6 Adarsh Mohalla Delhi\nIndia Delhi near govt school",
      phone: "+919873798202",
    },
    {
      id: 2,
      label: "Home",
      name: "RINKU VERMA",
      address:
        "H No 222 Street No 6 Adarsh Mohalla Delhi\nIndia Delhi near govt school",
      phone: "+919873798202",
    },
  ];

  return (
    <div className="w-[48.6875rem] h-[27.6875rem] p-6 border rounded-xl bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium text-black/70">
          Select Delivery Address
        </h2>

        <ButtonAtom
          className="px-4 py-2 bg-[#02B290] text-white font-bold text-sm rounded-md"
          label="Add New Address"
        />
      </div>

      {addresses.map((item) => (
        <div key={item.id}>
          <div
            className={`p-4 border rounded-lg mt-3 cursor-pointer transition 
            ${selectedAddress === item.id ? "bg-green-100" : "bg-gray-100"}`}
            onClick={() => setselectedAddress(item.id)}
          >
            <div className="flex gap-4">
              <RadioButton selected={selectedAddress === item.id} />

              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm text-black/70 font-medium">
                    {item.label}
                  </h2>

                  <button className="text-[#27BCA0] font-semibold cursor-pointer bg-transparent p-0 border-none">
                    EDIT
                  </button>
                </div>

                <p className="text-sm text-black font-medium">{item.name}</p>

                <pre className="whitespace-pre-line text-sm text-black/80 leading-5">
                  {item.address}
                </pre>

                <p className="text-sm text-black mt-1">{item.phone}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
