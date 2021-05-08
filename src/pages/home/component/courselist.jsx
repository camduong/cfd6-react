import React from "react";
import {CourseItem} from "../../../component/CourseItem";

export default function CourseList() {
  return (
    <React.Fragment>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
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
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
          <CourseItem
              img="/assets/img/img2.png"
              title="Front-end căn bản"
              desc="One of the best corporate fashion brands in Sydney"
              teacher="Trần Nghĩa"
              teach_ava="/assets/img/avt.png"
            />
            <CourseItem
              img="/assets/img/img4.png"
              title="Front-end căn bản"
              desc="One of the best corporate fashion brands in Sydney"
              teacher="Trần Nghĩa"
              teach_ava="/assets/img/avt.png"
            />
            <CourseItem
              img="/assets/img/img6.png"
              title="Front-end căn bản"
              desc="One of the best corporate fashion brands in Sydney"
              teacher="Trần Nghĩa"
              teach_ava="/assets/img/avt.png"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </React.Fragment>
  );
}
