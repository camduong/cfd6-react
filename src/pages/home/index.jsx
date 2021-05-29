import { useEffect, useState } from "react";
import CourseApi from "../../service/courseapi";
import Action from "./component/action";
import Banner from "./component/banner";
import CourseList from "./component/courselist";
import Different from "./component/different";
import Gallery from "./component/gallery";
import Testimonial from "./component/testimonial";

export default function Home() {

  let [list, setList] = useState({
    offline: [],
    online: []
  })

  useEffect(() => {
    CourseApi.list()
    .then(res=>{
      setList(res)
    })
  }, [])
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList {...list}/>
      {/* cách viết khác */}
      {/* <CourseList online={list.online} offline={list.offline}/> */}
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
