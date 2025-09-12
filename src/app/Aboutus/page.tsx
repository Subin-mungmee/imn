"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import BounceLoader from "react-spinners/SyncLoader";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Layout
import HeaderNavbar from "@/components/Menu/indexnavbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

// Images
import LogoInfi from "@/components/Img/logo-infinity-2.png";
import BannerTeam from "@/components/Img/team.png";
import BannerLady from "@/components/Img/im-g-16-1edit.png";
import IconMarketing from "@/components/Img/online-rating.png";
import IconWeb from "@/components/Img/web-design.png";
import IconMedia from "@/components/Img/multimedia.png";
import LogoLoading from "@/components/Img/logo-infinity.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = LogoLoading.src;
    img.onload = () => setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <img src={LogoLoading.src} width="200" alt="Loading Logo" />
          <BounceLoader color="white" loading={true} size={12.5} />
        </div>
      )}

      {!loading && (
        <>
          <HeaderNavbar />

          {/* Hero Section */}
          <Container style={{ paddingTop: "50px" }}>
            <Row className="align-items-center">
              {/* Left Section */}
              <Col md={6}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                  }}
                >
                  <motion.div
                    className={styles.textCenter}
                    variants={fadeInUp}
                    custom={0}
                  >
                    <Image
                      src={LogoInfi}
                      alt="โลโก้บริษัท อินฟินิตี้ มาร์เก็ตติ้ง เน็ตเวิร์ค"
                      className={styles.logo}
                      priority
                    />
                    <h1 className={styles.heading}>
                      บริษัท อินฟินิตี้ มาร์เก็ตติ้ง เน็ตเวิร์ค จำกัด
                    </h1>
                    <h2 className={styles.subheading}>
                      INFINITY MARKETING NETWORK COMPANY LIMITED
                    </h2>
                  </motion.div>

                  <motion.p
                    className={styles.subtext}
                    variants={fadeInUp}
                    custom={1}
                  >
                    ทีมงาน บริษัท อินฟินิตี้ มาร์เก็ตติ้ง เน็ตเวิร์ค จำกัด
                    เริ่มเข้าสู่โลกการตลาดออนไลน์ตั้งแต่ปี 2015 และได้เริ่มจดทะเบียนจัดตั้ง
                    บริษัท อินฟินิตี้ มาร์เก็ตติ้ง เน็ตเวิร์ค จำกัด เมื่อปี 2017 ด้วยทุนจดทะเบียน
                    3 ล้านบาท โดยเน้นให้บริการด้าน โฆษณาออนไลน์ และ การตลาดออนไลน์
                    MU-MARKETING การสร้างแบรนด์ MUKETING
                    เพื่อเป็นแบรนด์ผู้นำด้านการตลาดสาย MUTECH
                    แนวใหม่ ครบวงจรอย่างแท้จริง
                  </motion.p>
                </motion.div>
              </Col>

              {/* Right Section */}
              <Col md={6} className="text-center mt-4 mt-md-0">
                <div className={styles.imageWrapper}>
                  <motion.img
                    src={BannerLady.src}
                    alt="สายมูเตลู"
                    className="img-fluid"
                    animate={{ y: [0, -15, 0, 15, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          {/* Services Section */}
          <main className={styles.mainContent}>
            <div className={styles.gridContainer}>
              {[
                {
                  icon: IconMarketing,
                  title: "ทำการตลาดออนไลน์",
                  description:
                    'เราทำตลาดออนไลน์แบบใหม่ "สายมู" เพื่อดึงดูดพลังงานและสร้างยอดขายที่ปัง',
                },
                {
                  icon: IconWeb,
                  title: "รับออกแบบ Website",
                  description:
                    "ไม่ว่าธุรกิจของคุณจะเล็กหรือใหญ่ เราช่วยให้ธุรกิจของคุณเติบโตในโลกออนไลน์",
                },
                {
                  icon: IconMedia,
                  title: "รับทำคลิป ภาพ ADS",
                  description:
                    "ทำภาพกราฟิก ตัดต่อวิดีโอ เพื่อทำการตลาดทุกช่องทาง",
                },
              ].map((service, index) => (
                <div className={styles.serviceCard} key={index}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                    priority
                  />
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.textCenter}>
              <Image
                src={BannerTeam}
                alt="ภาพทีมงาน Infinity Marketing"
                sizes="(max-width: 768px) 100vw, 2000px"
                style={{ width: "100%", height: "auto" }}
                className="rounded-xl shadow-md"
                priority
              />
            </div>
          </main>

          <footer className={styles.footer}>
            <Newsletter />
            <Footer />
          </footer>
        </>
      )}

      {/* CSS ตรงนี้ */}
      <style jsx>{`
        /* Loading Overlay */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #0a3e8e;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loading-overlay img {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}
