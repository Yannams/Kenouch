import Structure, { type StructureType } from "../Structure"
import imageFestival from "../../assets/image_festival.jpg"


const Hero  = () => {

    const intro: StructureType = {
        titre:"Bonsoir Kékéli,",
        description:"il est 21h je crois, et ceci est un petit cadeau que Yann a travaillé dure à te concevoir. Il m'a dit que ce jour n'est pas spéciale pour lui, mais il est là pour lui rappeler à quel point il t'aime.",
        medias:[{
            path:imageFestival,
            placement:"top",
            nearText:true,
            rotate:-6,
            size:"lg",
            objectPosition:"center"
        }]
    }
    return(
       <Structure titre={intro.titre} description={intro.description} medias={intro.medias}  />
    )
}

export default Hero
