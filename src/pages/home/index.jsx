import Action from "./component/action";
import Banner from "./component/banner";
import CourseList from "./component/courselist";
import Different from "./component/different";
import Gallery from "./component/gallery";
import Testimonial from "./component/testimonial";

export default function Home() {
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
