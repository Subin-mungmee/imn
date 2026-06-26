import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./stely.css";

import PicBanner from "../Img/infi-yong-group.jpg";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Muketing Strategy & Insight",
    description:
      "เจาะลึกพฤติกรรมผู้บริโภคสายมู วิเคราะห์ข้อมูลเพื่อวางแผนกลยุทธ์การตลาดสายมูอย่างมีประสิทธิภาพ",
    icon: "/strategy.png",
  },
  {
    title: "Creative Content & Beliefs",
    description:
      "สร้างสรรค์คอนเทนต์ดึงดูดใจ ผสานความเชื่อ สีมงคล ฤกษ์มงคล และเรื่องราวแห่งศรัทธา เพื่อสร้างการจดจำและเพิ่มยอดขาย",
    icon: "/creative.png",
  },
  {
    title: "Lucky Number & Fortune Marketing",
    description:
      "วิเคราะห์ศาสตร์ตัวเลข เบอร์มงคล เลขทะเบียนมงคล ฮวงจุ้ย และความเชื่อร่วมสมัย เพื่อสร้างจุดขายที่แตกต่าง",
    icon: "/lucky.png",
  },
  {
    title: "Amulet & Online Merits",
    description:
      "ทำการตลาดออนไลน์สำหรับวัตถุมงคล พระเครื่อง การทำบุญออนไลน์ ดูดวง และสินค้าสายศรัทธาให้เข้าถึงกลุ่มเป้าหมาย",
    icon: "/amulet.png",
  },
  {
    title: "Spiritual Tourism Marketing",
    description:
      "สร้างการรับรู้และประชาสัมพันธ์เส้นทางไหว้พระ เสริมดวง ทัวร์สายมู และแหล่งท่องเที่ยวเชิงศรัทธาทั้งในและต่างประเทศ",
    icon: "/spiritual.png",
  },
  {
    title: "Data-Driven Muketing Campaign",
    description:
      "ใช้ข้อมูลและเทรนด์ความนิยมด้านความเชื่อ วิเคราะห์พฤติกรรมผู้บริโภค เพื่อนำมาสร้างแคมเปญที่ตรงกลุ่มและวัดผลได้",
    icon: "/driven.png",
  },
];

const Content2: React.FC = () => {
  return (
    <div className="marketing-section">
      <Container>
        <div className="muketing-intro text-center mb-5">
          <h2 className="fw-bold mb-3">
            ผู้นำด้านการตลาดสายมู MUKETING
          </h2>

          <p
            className="lead mx-auto"
            style={{ maxWidth: "850px" }}
          >
            เรามีความมุ่งมั่น เชี่ยวชาญ และเข้าใจพลังแห่งความศรัทธา
            พร้อมผสานความคิดสร้างสรรค์เข้ากับกลยุทธ์การตลาดสมัยใหม่
            ด้วยประสบการณ์ด้านธุรกิจวัตถุมงคล ดูดวง ทำบุญออนไลน์
            เลขมงคล เบอร์มงคล ฮวงจุ้ย และการท่องเที่ยวเชิงศรัทธา
            เพื่อช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืนและเข้าถึงกลุ่มเป้าหมายได้อย่างแท้จริง
          </p>
        </div>

        <div className="banner-wrapper mb-5">
          <img
            src={PicBanner.src}
            alt="ทีมงาน Muketing"
            className="team-image"
          />
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={6} key={index}>
              <Card className="marketing-card h-100">
                <Card.Body className="d-flex align-items-start gap-4">
                  <div className="marketing-icon">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="marketing-icon-img"
                    />
                  </div>

                  <div>
                    <Card.Title className="marketing-title">
                      {service.title}
                    </Card.Title>

                    <Card.Text className="marketing-description">
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