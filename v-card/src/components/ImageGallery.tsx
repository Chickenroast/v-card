// ImageGallery.tsx
import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imageGalleryItems } from "../gallery"; // Assurez-vous que le chemin est correct

const ImageGallery: React.FC = () => {
  return (
    <div>
      <Gallery items={imageGalleryItems} />
    </div>
  );
};

export default ImageGallery;
