import ImageGalleryItem from '../ImageGalleryItem/';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

export default ImageGallery;
