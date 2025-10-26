import React, { useState } from "react";
import { Plus, ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
  ]);

  const addImage = () => {
    const newImg = `https://picsum.photos/200/200?random=${Math.random()}`;
    setImages([...images, newImg]);
  };

  return (
    <div className="bg-[#1c1f26] rounded-2xl shadow-lg p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-semibold">Gallery</h2>
        <div className="flex gap-2">
          <button
            onClick={addImage}
            className="bg-[#2c2f38] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#343844] transition-all"
          >
            + Add Image
          </button>
          <button className="bg-[#2c2f38] p-2 rounded-full hover:bg-[#343844] transition">
            <ArrowLeft size={16} />
          </button>
          <button className="bg-[#2c2f38] p-2 rounded-full hover:bg-[#343844] transition">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className="rounded-xl w-32 h-32 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
