import "./contact.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Choose a way of getting in contact with us, we'll gladly help you.
      </Header>
      <section className="contact">
        <div className="contact__container">
          <div className="contact__wrapper">
            <a href="mailto:rreyna.wo.47@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+5215544706772" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact