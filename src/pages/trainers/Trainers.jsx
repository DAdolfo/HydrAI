import "./trainers.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
/*import {Link} from "react-router-dom"*/
import {trainers} from "../../data"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import Trainer from "../../components/Trainer"


const Trainers = () => {
  return (
    <>
      <Header title={"Our Trainers"} image={HeaderImage}>
        Ni puta idea de que poner acá.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebookF/>, link: socials[2]},
                  {icon: <FaLinkedin/>, link: socials[3]}
                ]
              }/>
            }
          )
          }
        </div>
      </section>
    </>
  )
}

export default Trainers