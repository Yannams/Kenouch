import type { StructureType } from "../Structure"
import Structure from "../Structure"
import excellence from "../../assets/exellence.jpg"
import kenouch from "../../assets/kenouch.jpg"
import kenouch_et_yann from "../../assets/kenou_et_yann.jpg"
import heures from "../../assets/24_heures.png"

type StoryItem = {
  image: string
  titre: string
  texte: string
}

const Story = () => {
    const story: StoryItem[] = [
        {
            image: excellence,
            titre: "Votre rencontre",
            texte: "C'est ici qu'il t'a vu pour la première fois. Et ce jour là même en couple il pensait déjà à toi",
        },
        {
            image: kenouch,
            titre: "La premiere photo",
            texte: "C'est la première photo que tu lui a envoyé. il était trop heureux",
        },
        {
            image:kenouch_et_yann,
            titre:"Mieux on se tait",
            texte:"Est ce que j'ai besoin de parler Kénouch ?"
        },
          {
            image:heures,
            titre:"L'un des plus beau moment",
            texte:"Ce jour là on a passé 24h et ce jour est resté gravé dans ma tête"
        }
    ]

    const content: StructureType = {
        titre: "Votre histoire d'amour",
        description: (
            <div className="mt-4 w-full max-w-3xl">
                <ul className="space-y-4">
                    {story.map((item, index) => (
                        <li
                            key={`${item.titre}-${index}`}
                            className="flex items-start gap-4 rounded-xl bg-white/70 p-3 text-left shadow-sm"
                        >
                            <img
                                src={item.image}
                                alt={item.titre}
                                className="h-20 w-20 shrink-0 rounded-lg border-2 border-white object-cover shadow"
                            />
                            <div className="space-y-1">
                                <p className="font-semibold text-red-900">{item.titre}</p>
                                <p className="text-sm text-rose-800">{item.texte}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        ),
    }

    return <Structure titre={content.titre} description={content.description} />
}

export default Story
