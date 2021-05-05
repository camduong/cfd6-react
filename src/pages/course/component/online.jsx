import CourseItem from "../../../component/CourseItem";

export default function CourseOnline() {
  return (
    <section className="section-1">
      <div className="container">
        <h2 className="main-title">KHÓA HỌC CFD</h2>
        <p className="top-des">
          The readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
        </p>
        <div className="textbox">
          <h3 className="sub-title">KHÓA HỌC</h3>
          <h2 className="main-title">ONLINE</h2>
        </div>
        <div className="list row">
          <CourseItem
            status="sap-dien-ra"
            img="/assets/img/img1.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
          <CourseItem
            status="da-ket-thuc"
            img="/assets/img/img2.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
          <CourseItem
            status="sap-dien-ra"
            img="/assets/img/img3.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
          <CourseItem
            status="dang-dien-ra"
            img="/assets/img/img4.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
          <CourseItem
            status="sap-dien-ra"
            img="/assets/img/img5.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
          <CourseItem
            status="sap-dien-ra"
            img="/assets/img/img6.png"
            title="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher="Trần Nghĩa"
            teach_ava="/assets/img/avt.png"
          />
        </div>
      </div>
    </section>
  );
}
