import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { UnsplashImage } from '../types';
import css from './ImageGallery.module.css';

export default function ImageGallery({
  images,
  openModal,
}: {
  images: UnsplashImage[];
  openModal: (image: UnsplashImage) => void;
}) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => {
            openModal(image);
          }}
          className={css.listitem}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}