import About from "./components/sections/About";
import EduBio from "./components/sections/EduBio";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Images from "./components/sections/Images";
import MainLayout from "./components/layouts/MainLayout";
import Navbar from "./components/NavBar";
import Photos from "./components/sections/Photos";
import Socials from "./components/sections/Socials";
import ThreeScene from "./components/ThreeScene";
import Title from "./components/Title";
import WorkBio from "./components/sections/WorkBio";

const App:React.FC = () => {
  return (
    <div className="text-white">
      <Navbar />
      <MainLayout>
        <ThreeScene />
        <Header />
        <Title title="About Me" />
        <About />
        <Title title="Education" />
        <EduBio />
        <Title title="Work" />
        <WorkBio />
        <Title title="Socials" />
        <Socials />
        <Title title="Photos" />
        <Photos />
        <Images
          images={[
            "/gallery/castle-conway.webp",
            "/gallery/fish.webp",
            "/gallery/ruins.webp",
            "/gallery/fingerpaint.webp",
            "/gallery/kj.webp",
            "/gallery/naptime.webp",
            "/gallery/freddie.webp",
            "/gallery/pitching.webp",
            "/gallery/giants-night.webp",
          ]}
        />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
