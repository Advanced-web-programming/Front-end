import { HomeTemplate } from "../../template/home/HomeTemplate"
import { Information } from "../../template/information/InformationTemplate"
import { ProjectTemplate } from "../../template/project/ProjectTemplate"
import { OrderTemplate } from "../../template/order/OrderTemplate"

export function Main() {

  return(
    <>
      <HomeTemplate />
      <Information />
      <ProjectTemplate />
      <OrderTemplate />
    </>
  )
}