import "./plans.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import {plans} from "../../data"
import Card from "../../UI/Card"


const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Aquí supongo vas a poner los diferentes servicios que podes automatizar.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>per project</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? "disabled" : ""}>{feature}</p>
                  })
                }
                <button className="btn lg"> Choose this Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans