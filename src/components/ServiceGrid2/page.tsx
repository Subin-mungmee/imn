'use client';
import React from 'react';
import Image from 'next/image';
import styles from './ServiceGrid2.module.css';

import Icondong1 from '../Img/Company-2.jpg';
import Icondong2 from '../Img/Company-3.jpg';
import Icondong3 from '../Img/Company-4.jpg';
import Icondong4 from '../Img/Company-5.jpg';
import Icondong5 from '../Img/Company-6.jpg';
import Icondong6 from '../Img/Company-7.jpg';

const services = [
  { title: 'Account Executive', icon: Icondong1.src },
  { title: 'ADS Optimizer', icon: Icondong2.src },
  { title: 'Video Product', icon: Icondong3.src },
  { title: 'Content Creator', icon: Icondong4.src },
  { title: 'Graphic Designer', icon: Icondong5.src },
  { title: 'Marketing Planner', icon: Icondong6.src },
];

export default function ServiceGrid() {
  return (
    <section className={`${styles.bgMu} py-5`}>
      <div className="container py-5">
        <h1 className={styles.muHeading}>บริการของเรา</h1>
        <p className={styles.detailHeading}>
          เราผสมผสานเทคโนโลยีกับสายมูอย่างลงตัว เพื่อผลลัพธ์ที่เหนือกว่า
        </p>

        <div className={`${styles.gridWrapper}`}>
          {services.map((service, index) => (
            <div key={index} className={styles.muCard}>
              <Image
                src={service.icon}
                alt={service.title}
                width={800}
                height={600}
                className={styles.muFullImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
