"use client"

import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import styles from "./page.module.css";
import HeaderNavbar from "@/components/Menu/indexnavbar";
import Footer from "@/components/Footer";
import Newletter from "@/components/Newsletter";
import BounceLoader from "react-spinners/SyncLoader"
import Image from "next/image"
import Link from "next/link"
import LogoPic from "@/components/Img/logo-infinity.png"

const BlogPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const img = new window.Image();
        img.src = LogoPic.src;
        img.onload = () => setTimeout(() => setLoading(false), 300);
    }, []);

    const mockArticles = [
        {
            id: 1,
            title: "เปิด TikTok ยังไงให้ไวรัล ปี 2025",
            summary: "เรียนรู้เทคนิค TikTok ยังไงให้ไวรัล ปี 2025...",
            imageUrl: "/Img/contant-4.jpg",
            slug: "tiktok-viral-2025",
            publishDate: "2025-05-01",
        },
        {
            id: 2,
            title: "Search Intent คืออะไร ทำ SEO ได้อย่างไร",
            summary: "Search Intent เกี่ยวข้องกับการวิเคราะห์หา Keyword...",
            imageUrl: "/Img/contant-1.jpg",
            slug: "Search-Intent-SEO",
            publishDate: "2025-04-28",
        },
        {
            id: 3,
            title: "เว็บไซต์ WordPress คืออะไร",
            summary: "ระบบเว็บไซต์สำเร็จรูป คือระบบเว็บไซต์ที่มีระบบสร้าง Template...",
            imageUrl: "/Img/contant-2.jpg",
            slug: "About-Wordpress",
            publishDate: "2025-04-15",
        },
        {
            id: 4,
            title: "โฆษณา PPC คืออะไร ปี 2025",
            summary: "โฆษณา PPC (Pay-Per-Click) ไม่ใช่เรื่องใหม่ในปี 2025...",
            imageUrl: "/Img/contant-3.jpg",
            slug: "PPC-2025",
            publishDate: "2025-04-20",
        },
        {
            id: 5,
            title: "ธุรกิจสายมู มาแรง",
            summary: "โอกาสทองในยุคที่ความเชื่อคือพลังแห่งการตลาด...",
            imageUrl: "/Img/contant-5.jpg",
            slug: "Mu-Sai-Business",
            publishDate: "2025-05-05",
        },
        {
            id: 6,
            title: "ทิศทาง ฮวงจุ้ย 2025",
            summary: "เสริมพลังชีวิต เสริมโชคลาภปี 2025...",
            imageUrl: "/Img/contant-6.jpg",
            slug: "Feng-Shui-Direction-2025",
            publishDate: "2025-05-05",
        },
        {
            id: 7,
            title: "อัพเดทการตลาดเทรนใหม่ 2025",
            summary: "ใครปรับก่อน รอดก่อน โลกของการตลาดในปี 2025...",
            imageUrl: "/Img/contant-7.jpg",
            slug: "Update-marketing-2025",
            publishDate: "2025-05-05",
        },
              {
            id: 8,
            title: "เทรนด์อาชีพมาแรง ยุค Digital",
            summary: "เทรนด์อาชีพมาแรง ยุค Digital ที่คุณไม่ควรมองข้าม...",
            imageUrl: "/Img/contant-8.jpg",
            slug: "Hot-career-trends-in-the-digital-age",
            publishDate: "2025-05-19",
        },
    ]

    return (
        <>
            {loading && (
                <div className="loading-overlay">
                    <img src={LogoPic.src} width="200" alt="Loading Logo" />
                    <BounceLoader color="white" loading={loading} size={12.5} />
                </div>
            )}
            {!loading && (
                <>
                    <HeaderNavbar />
                    <Container className="py-5">
                        <div className={styles.container}>
                            <h1 className={styles.heading}>บทความล่าสุด</h1>
                            <p className={styles.subheading}>
                                รวมเนื้อหาอัปเดตใหม่ ที่จะช่วยให้คุณเก่งขึ้นทุกวัน
                            </p>
                            <div className={styles.grid}>
                                {mockArticles
                                    .sort((a, b) => {
                                        const dateA = new Date(b.publishDate).getTime();
                                        const dateB = new Date(a.publishDate).getTime();
                                        if (dateA === dateB) {
                                            return b.id - a.id; // ถ้าวันเหมือนกัน เรียงตาม id มากก่อน
                                        }
                                        return dateA - dateB;
                                    })
                                    .map((article) => (
                                        <div key={article.id} className={styles.card}>
                                            <Image
                                                src={article.imageUrl}
                                                alt={article.title}
                                                width={400}
                                                height={220}
                                                className={styles.image}
                                            />
                                            <div className={styles.cardContent}>
                                                <h2>{article.title}</h2>
                                                <p>{article.summary}</p>
                                                <Link href={`/Articles/${article.slug}`} className={styles.readMore}>
                                                    อ่านต่อ →
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                        </div>
                    </Container>
                    <Newletter />
                    <Footer />
                </>
            )}
        </>
    )
}

export default BlogPage;
