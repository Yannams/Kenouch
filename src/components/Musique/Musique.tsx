import { ArrowDown } from "lucide-react"
import Structure, { type StructureType } from "../Structure"
import audio from "../../assets/Perfect.mp3"


const Music = () => {
    const music:StructureType = {
        titre: "La musique",
        description: 
        <div className="flex flex-col items-center">
            <div>il a choisi une musique pour t'accompagner tout au long du site</div>
            <ArrowDown className="mt-10"/>
            <div>(clique dessus et continue de scroller 😉)</div>
        </div>,
        medias:[
            {
                path:audio,
                type:"audio"
            }
        ]

    }
    return(
        <>
            <Structure titre={music.titre} description={music.description} medias={music.medias}/>
        </>
    )
}
export default Music