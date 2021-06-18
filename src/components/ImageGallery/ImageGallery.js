import ImageGalleryItem from '../ImageGalleryItem/';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.gallery}>
    {images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem id={id} webformatURL={webformatURL} tags={tags} />
    ))}
  </ul>
);

export default ImageGallery;
