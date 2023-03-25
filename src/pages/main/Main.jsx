import { HomeTemplate } from "../../template/home/HomeTemplate"
import { Information } from "../../template/information/InformationTemplate"
import { ProjectTemplate } from "../../template/project/ProjectTemplate"

export function Main() {

  return(
    <>
      <HomeTemplate />
      <Information />
      <ProjectTemplate />
    </>
  )
}