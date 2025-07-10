import styles from './grid.module.css';
import Image from 'next/image';

const images = [
  { src: '/assets/images/portfolio/grid1.jpg', cols: 2, rows: 2 },
  { src: '/assets/images/portfolio/grid2.jpg', cols: 2, rows: 1 },
  { src: '/assets/images/portfolio/grid3.jpg', cols: 2, rows: 2 },
  { src: '/assets/images/portfolio/port1.jpg', cols: 2, rows: 1 },
  { src: '/assets/images/portfolio/grid4.jpg', cols: 1, rows: 2 },
  { src: '/assets/images/portfolio/grid5.jpg', cols: 2, rows: 2 },
  { src: '/assets/images/portfolio/grid6.jpg', cols: 1, rows: 2 },
  { src: '/assets/images/portfolio/grid7.jpg', cols: 2, rows: 2 },
  { src: '/assets/images/portfolio/grid8.jpg', cols: 2, rows: 2 },
  { src: '/assets/images/portfolio/grid9.jpg', cols: 1, rows: 2 },
  { src: '/assets/images/portfolio/grid10.jpg', cols: 1, rows: 2 },
  { src: '/assets/images/portfolio/grid11.jpg', cols: 2, rows: 2 },
];

export default function ResponsiveImageGrid() {
  return (
    <div id="image-grid" className="position-relative" style={{ backgroundColor: "#fdfbf6" }}>
      <div className={styles.gridContainer}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.gridItem} ${img.cols === 2 ? styles["span-2-cols"] : ""} ${
              img.rows === 2 ? styles["span-2-rows"] : ""
            }`}
          >
            <Image src={img.src} alt={`Grid ${index}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
