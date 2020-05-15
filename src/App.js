import React from 'react';
import clsx from 'clsx';
import LazyLoad from 'react-lazyload';

import TopNavigationBar from './components/TopNavigationBar';
import Footer from './components/Footer/Footer';
import ImagePlaceholder from './components/ImagePlaceholder';

import styles from './App.module.css';

const App = () => {
  const images = [
    '14190142',
    '14190147',
    '14190152',
    '14190157',
    '14190162',
    '14190167',
    '14190122',
    '14190117',
  ];

  return (
    <div className="App">
      <TopNavigationBar />

      <main className={styles.container}>
        <section className={styles.product}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.productContent}>
                <h1 className={clsx(styles.productModel, styles.center)}>
                  Model 180S37
                </h1>
                <p className={clsx(styles.paragraph, styles.center)}>
                  The Bach 180 series Bb trumpets are the most versatile
                  available offering more options that meet the demanding needs
                  of today's most discriminating players.
                </p>
                <div className={styles.lineBreak} />
                <p className={clsx(styles.priceBox, styles.center)}>
                  The price in USD is a guideline price only!
                  <span className={styles.price}>$2,999</span>
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.center}>
                <img
                  className={styles.thumbnail}
                  src="/assets/180s37.png"
                  alt="180S37"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresContent}>
            <h2>Features</h2>
            <p>
              The Bach 180 series trumpets are the number one selling
              professional trumpets in the world. The 180S37 features a #37
              one-piece hand-hammered professional bell that produces a warm
              sound with great projection allowing this instrument to work well
              in multiple musical settings—from jazz to concert or solo playing.
              The #25 leadpipe allows for slight resistance that is effective in
              centering tone production. The silver-plate finish provides a
              controlled brilliance to the overall sound. These features
              combined with a .459" medium-large bore allow the player to
              produce a well-rounded sound well suited for all types of music.
            </p>
            <h2>Tech Specs</h2>
            <ul className={styles.techSpecs}>
              <li>.459" Medium-large bore</li>
              <li>Standard weight body</li>
              <li>
                Standard weight yellow brass one-piece hand-hammered #37 bell
              </li>
              <li>Standard construction #25 mouthpipe</li>
              <li>Monel pistons</li>
              <li>1st slide thumb saddle</li>
              <li>Adjustable 3rd slide rod stop</li>
              <li>Silver-plate finish</li>
              <li>Bach 7C mouthpiece</li>
              <li>C180 woodshell case</li>
            </ul>
          </div>
        </section>

        <section className={styles.gallery}>
          <h2 className={clsx(styles.galleryTitle, styles.center)}>Gallery</h2>
          <div className={styles.galleryImages}>
            {images.map((img) => (
              <div key={img} className={styles.galleryCell}>
                <LazyLoad
                  height={200}
                  offset={[-200, 0]}
                  debounce={500}
                  placeholder={<ImagePlaceholder />}
                >
                  <img
                    className={styles.galleryImage}
                    src={`/assets/${img}.jpg`}
                    alt={img}
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
