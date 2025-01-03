import "./about.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Sobre nosotros pero profundo.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            A big ass paragraph about cut one head and two more will pop out.
          </p>
          <p>
            Y otro más si eso quiere tu corazón.
          </p>
          <p>
            Y aquí la oración pa cerrarlo todo.
          </p>
        </div>
      </div>
    </section>


    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Cómo la ves?
          </p>
          <p>
            Otro párrafo por si se necesita qlg.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>


    <section className="about__Mission">
      <div className="container about__Mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Imposible.
          </p>
          <p>
            Tom Cruise.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About