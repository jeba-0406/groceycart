'use client';
import { useState } from "react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export  function ProductTable() {
  const [selected, setSelected] = useState([]);

  const products = [
    {
      id: 1,
      img: "/img/surf.png",
      name: "Surf Excel Matic Front Load Liquid Detergent 2L",
      brand: "Surf Excel",
      category: "Groceries",
      subCategory: "Detergent",
      oldPrice: 199,
      newPrice: 220,
      sales: 5,
      stock: 7480,
      rating: 4,
    },
    {
      id: 2,
      img: "/img/saffola.png",
      name: "Saffola Gold Pro Healthy Lifestyle Rice Bran Oil",
      brand: "Saffola",
      category: "Groceries",
      subCategory: "Oil",
      oldPrice: 220,
      newPrice: 245,
      sales: 2,
      stock: 14583,
      rating: 5,
    },
    {
      id: 3,
      img: "/img/goodlife.png",
      name: "Good Life Refined Rice Bran Oil 1L",
      brand: "Good Life",
      category: "Groceries",
      subCategory: "Oil",
      oldPrice: 300,
      newPrice: 520,
      sales: 2,
      stock: 47852,
      rating: 2,
    },
  ];

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full overflow-x-auto border rounded-lg bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">PRODUCT</th>
            <th className="p-3">CATEGORY</th>
            <th className="p-3">SUB CATEGORY</th>
            <th className="p-3">PRICE</th>
            <th className="p-3">SALES</th>
            <th className="p-3">STOCK</th>
            <th className="p-3">RATING</th>
            <th className="p-3 text-right">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selected.includes(p.id)}
                  onChange={() => toggleSelect(p.id)}
                />
              </td>

              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src={p.img}
                    className="w-12 h-12 object-cover rounded"
                    alt={p.name}
                  />
                  <div>
                    <p className="font-semibold text-sm">{p.name.slice(0, 35)}...</p>
                    <p className="text-xs text-gray-500">{p.brand}</p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-sm">{p.category}</td>
              <td className="p-3 text-sm">{p.subCategory}</td>

              <td className="p-3">
                <p className="text-xs line-through text-gray-400">₹{p.oldPrice}</p>
                <p className="text-sm font-semibold text-blue-600">₹{p.newPrice}</p>
              </td>

              <td className="p-3 text-sm">{p.sales} sale</td>

              <td className="p-3 text-blue-600 font-semibold text-sm">
                {p.stock}
              </td>

              <td className="p-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < p.rating ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </td>

              <td className="p-3 text-right">
                <div className="flex justify-end gap-4 text-gray-600">
                  <FiEdit2 className="cursor-pointer hover:text-blue-500" />
                  <FiEye className="cursor-pointer hover:text-green-500" />
                  <FiTrash2 className="cursor-pointer hover:text-red-500" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-3 text-sm text-gray-600">
        <span>Rows per page: 50</span>
        <span>1–50 of 150</span>
      </div>
    </div>
  );
}
