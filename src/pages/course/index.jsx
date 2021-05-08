import CourseOffline from "./\bcomponent/offline";
import CourseOnline from "./\bcomponent/online";


export default function CoursePage() {
  return (
    <main className="homepage" id="main">
      <CourseOnline />
      <CourseOffline />
    </main>
  );
}
