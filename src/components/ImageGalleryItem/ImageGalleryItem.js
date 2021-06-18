import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, tags }) => (
  <li key={id} className={styles.item}>
    <img src={webformatURL} alt={tags} className={styles.item__image} />
  </li>
);

export default ImageGalleryItem;
