import Structure, { type StructureType } from "../Structure"
import imageFestival from "../../assets/image_festival.jpg"
import excellence from "../../assets/exellence.jpg"
import kenouch from "../../assets/kenouch.jpg"
import kenouchEtYann from "../../assets/kenou_et_yann.jpg"
import heures from "../../assets/24_heures.png"
import lit from "../../assets/lit.jpg"
import sourire from "../../assets/Sourire.jpg"
import deux from "../../assets/deux.png"
import belle from "../../assets/belle.png"
import blonde from "../../assets/blonde.png"

const Coeur = () => {
  const content: StructureType = {
    titre: "Le coeur de vos souvenirs",
    description: "Toutes vos photos rassemblees en forme de coeur.",
    mediaLayout: "heart",
    medias: [
      { path: imageFestival, size: "sm", alt: "festival" },
      { path: excellence, size: "sm", alt: "excellence" },
      { path: kenouch, size: "sm", alt: "kenouch" },
      { path: kenouchEtYann, size: "sm", alt: "kenouch et yann" },
      { path: heures, size: "sm", alt: "24 heures" },
      { path: lit, size: "sm", alt: "lit" },
      { path: sourire, size: "sm", alt: "sourire" },
      { path: deux, size: "sm", alt: "deux" },
      { path: belle, size: "sm", alt: "belle" },
      { path: blonde, size: "sm", alt: "blonde" },
    ],
  }

  return <Structure titre={content.titre} description={content.description} mediaLayout={content.mediaLayout} medias={content.medias} />
}

export default Coeur
