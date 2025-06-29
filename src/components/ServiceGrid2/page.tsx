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
    {
        title: 'Account Executive',
        subtitle: `- คนกลางสื่อสาร ทั้งทีมและลูกค้า
- บริการด้วยใจ พร้อมช่วยเหลือ
- ติดตาม โปรเจกต์เสร็จตามกำหนด
`,
        icon: Icondong1.src,
    },
    {
        title: 'ADS Optimizer',
        subtitle: `- ปรับแต่ง แคมเปญโฆษณาให้ได้ผลดีที่สุด
-  วิเคราะห์ข้อมูล จัดงบประมาณโฆษณา
-  ติดตามผล สร้าง Report สรุปผล
`,
        icon: Icondong2.src,
    },
    {
        title: 'Video Product',
        subtitle: `- สคริปต์โดนใจ ไอเดียเริ่ด
-  วาง Story Board เบื้องต้นเห็นภาพชัด
-  ถ่ายทำ
-  ตัดต่อวีดีโอ
-  พากษ์เสียงครบจบ
`,
        icon: Icondong3.src,
    },
    {
        title: 'Content Creator',
        subtitle: `- คิดคอนเทนต์ว้าวๆ ตามทันทุกกระแส
-  สร้างคอนเทนต์ ที่น่าสนใจตรงกลุ่มลูกค้า
-  แคปชั่นเริ่ดๆ สั้นยาวตอบโจทย์
`,
        icon: Icondong4.src,
    },
        {
        title: 'AGraphic Designer',
        subtitle: `- ดีไซน์ภาพ ตรงโจทย์
-  สร้างเอกลักษณ์ ให้แบรนด์
-  จัดวางองค์รวม สั้นยาวตอบโจทย์
`,
        icon: Icondong5.src,
    },
            {
        title: 'Marketing Planner',
        subtitle: `- วิเคราะห์ เจาะกลุ่มเป้าหมาย
-  รับมือคู่แข่ง ในตลาดเดียวกันได้ง่าย
-  เตรียมพร้อม ให้ทีมก่อนเริ่มแคมเปญ

`,
        icon: Icondong6.src,
    },
];

export default function ServiceGrid() {
    return (
        <section className={`${styles.bgMu} py-5`}>
            <div className="container py-5">
                <h1 className={styles.muHeading}>บริการของเรา</h1>
                <p className={styles.detailHeading}>
                    เราผสมผสานเทคโนโลยีกับสายมูอย่างลงตัว เพื่อผลลัพธ์ที่เหนือกว่า
                </p>

                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6">
                            <div className={styles.muCard}>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={800}
                                    height={800}
                                    className={styles.muIcon}
                                />
                                <div className={styles.muContent}>
                                    <h5 className="text-dark fw-bold mb-1">{service.title}</h5>
                                    <pre className={styles.muSubtext}>{service.subtitle}</pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
