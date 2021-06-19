import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onImageClick,
}) => (
  <li className={styles.item}>
    <img
      src={webformatURL}
      alt={tags}
      className={styles.item__image}
      onClick={() => onImageClick(largeImageURL, tags)}
    />
  </li>
);

export default ImageGalleryItem;
