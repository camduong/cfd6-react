import CourseOffline from "./component/offline";
import CourseOnline from "./component/online";


export default function CoursePage() {
  return (
    <main className="homepage" id="main">
      <CourseOnline />
      <CourseOffline />
    </main>
  );
}
