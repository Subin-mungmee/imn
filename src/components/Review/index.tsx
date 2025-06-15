import { Container, Carousel, Row, Col } from "react-bootstrap";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Customer1 from "../Img/person-1.png";
import Customer2 from "../Img/person-2.png";
import Customer3 from "../Img/person-3.png"
const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "พี่หงส์ AIA",
      text: "“กลยุทธ์ใหม่ทำให้ปิดการขายง่ายขึ้น ชนะคู่แข่ง ด้วยการตลาดสายมู ลูกค้าเปิดประสบการณ์ใหม่ๆ”",
      image: Customer2,
    },
    {
      name: "เจ้าแม่น้ำพริก",
      text: "“เจ้าแม่น้ำพริก งานออกแบบ ไว้ใจ Infinity เข้าใจแบรนด์ สื่อสารตรงจุด ราคาที่แม่ค้าออนไลน์ เริ่มต้นธุรกิจได้สบาย”",
      image: Customer3,
    },
    {
      name: "สุกี้แอปปี้",
      text: "“สายมู กับ อาหาร เข้ากันอย่างไม่น่าเชื่อ ไว้ใจกับทีมงานมีคุณภาพ ซื่อสัตย์ ราคามิตรภาพ”",
      image: Customer1,
    },
    // เพิ่มได้ตามต้องการ
  ];

  const chunked = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunked.push(testimonials.slice(i, i + 3));
  }

  return (
    <section className="py-5 bg-light">
      <Container>
        <Carousel
          indicators={false}
          controls={false}
          interval={5000}
          pause={false}
        >
          {chunked.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((item, i) => (
                  <Col xs={12} sm={6} md={4} key={i} className="mb-4">
                    <div className="p-4 shadow rounded bg-white text-center h-100 mx-2">
                      <div className="mb-3 text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-muted fst-italic">{item.text}</p>
                      <FaQuoteRight className="text-primary fs-3 mb-3" />
                      <div>
                        <img
                          src={item.image.src}
                          alt={item.name}
                          width="60"
                          height="60"
                          className="rounded-circle mb-2"
                        />
                        <h6 className="fw-bold">{item.name}</h6>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
