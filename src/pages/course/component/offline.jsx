import CourseItem from "../../../component/CourseItem";

export default function CourseOffline() {
  return (
    <section className="section-2 section-blue">
      <div className="container">
        <div className="textbox white">
          <h3 className="sub-title">KHÓA HỌC</h3>
          <h2 className="main-title">OFFLINE</h2>
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
        </div>
        <div className="text-deco">C</div>
      </div>
    </section>
  );
}
