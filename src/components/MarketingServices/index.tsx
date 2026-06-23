import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./stely.css"; // 👈 นำเข้า CSS ที่แยกออกมา

import PicBanner from "../Img/infi-yong-group.jpg";
import IconPersona from "../Img/IconCustomer.png";
import IconContent from "../Img/IconContent.png";
import IconSEO from "../Img/IconSeo.png";
import IconSEM from "../Img/IconSem.png";
import IconSocial from "../Img/IconSocial.png";
import IconData from "../Img/IconData.png";

interface Service {
    title: string;
    description: string;
    icon: string;
}

// ปรับปรุงบริการให้เป็นกลุ่ม "Muketing" และความเชื่อออนไลน์
const services: Service[] = [
    {
        title: "Muketing Strategy & Insight",
        description: "เจาะลึกพฤติกรรมผู้บริโภคสายมู วิเคราะห์ข้อมูลเพื่อวางแผนกลยุทธ์การตลาดสายมูอย่างมีประสิทธิภาพ",
        icon: IconPersona.src,
    },
    {
        title: "Creative Content & Beliefs",
        description: "สร้างสรรค์คอนเทนต์ดึงดูดใจ ใส่ไอเดียความเชื่อ เช่น สีมงคล เลขอสังหาฯ และฤกษ์มงคล เพื่อเพิ่มยอดขาย",
        icon: IconContent.src,
    },
    {
        title: "Lucky Number & Fortune Marketing",
        description: "ทำการตลาดและวิเคราะห์ศาสตร์ตัวเลข เบอร์มงคล เลขป้ายทะเบียนมงคล และศาสตร์ฮวงจุ้ยเพื่อธุรกิจ",
        icon: IconSEO.src,
    },
    {
        title: "Amulet & Online Merits (SEM)",
        description: "โปรโมตและยิงโฆษณาออนไลน์สำหรับธุรกิจวัตถุมงคล ทำบุญออนไลน์ ดูดวงออนไลน์ ให้เข้าถึงกลุ่มเป้าหมายได้ทันที",
        icon: IconSEM.src,
    },
    {
        title: "Spiritual Tourism Marketing",
        description: "ทำการตลาดและสร้างการรับรู้ผ่าน Social Media สำหรับธุรกิจทัวร์ไหว้พระ เสริมดวง ทั้งในและต่างประเทศ",
        icon: IconSocial.src,
    },
    {
        title: "Data-Driven Muketing Campaign",
        description: "ใช้ข้อมูลวิเคราะห์เทรนด์ความนิยมปัจจุบัน เช่น สีรถมงคล ฤกษ์ออกรถ เพื่อนำมาดีไซน์แคมเปญให้ปังและตรงกลุ่ม",
        icon: IconData.src,
    },
];

const Content2: React.FC = () => {
    return (
        <div className="marketing-section">
            <Container>
                {/* ส่วนหัวข้อแนะนำองค์กร (เพิ่มข้อความตามบรีฟ) */}
                <div className="muketing-intro text-center mb-5" style={{ color: '#fff' }}> 
                    <h2 className="fw-bold mb-3">ผู้นำด้านการตลาดสายมู MUKETING</h2>
                    <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
                        เรามีความมุ่งมั่น เชี่ยวชาญ พร้อมใส่ไอเดียครีเอทีฟและพลังแห่งความเชื่อเข้าไปในเนื้องาน 
                        ด้วยประสบการณ์ทำการตลาดธุรกิจทำบุญ-เสริมดวงออนไลน์ ดูดวง วัตถุมงคล เลขมงคล เบอร์มงคล ฮวงจุ้ย 
                        รวมถึงทัวร์ไหว้พระทั้งในและต่างประเทศ เพื่อขับเคลื่อนธุรกิจของคุณให้เติบโตอย่างยั่งยืน
                    </p>
                </div>

                <div className="banner-wrapper mb-5">
                    <img src={PicBanner.src} alt="ทีมงาน Muketing ของเรา" className="team-image" />
                </div>

                <Row className="g-4" style={{textAlign:'left'}}>
                    {services.map((service, index) => (
                        <Col md={6} key={index}>
                            <Card className="marketing-card">
                                <Card.Body className="d-flex align-items-start gap-3">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="marketing-icon"
                                    />
                                    <div>
                                        <Card.Title className="marketing-title fw-bold">
                                            {service.title}
                                        </Card.Title>
                                        <Card.Text className="marketing-description text-muted">
                                            {service.description}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Content2;