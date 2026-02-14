import Structure, { type StructureType } from "../Structure"

const Lettre = () => {
  const content: StructureType = {
    titre: "Lettre d'amour",
    description: (
      <div className="mt-4 w-full max-w-3xl rounded-2xl border border-white/80 bg-white/80 p-6 text-left leading-8 shadow-lg">
        <p className="font-semibold text-red-900">Kekeli,</p>

        <div className="mt-4 space-y-3 text-rose-900/90">
          <p>
            J'ai enormement travaille sur ce petit projet pour toi, pour te montrer a quel point
            je veux realiser de grands projets avec toi.
          </p>
          <p>
            J'aime beaucoup notre histoire et tout ce qu'on a traverse. Tu apportes tellement
            dans ma vie que je ne sais pas ce que je ferais si tu n'etais pas la.
          </p>
          <p>
            Sache que je veux que notre histoire dure encore tres longtemps et crois-moi, je ne
            compte pas t'abandonner.
          </p>
          <p>
            Ces derniers temps on a beaucoup souffert. On aura certainement d'autres problemes,
            mais tu m'as montre que ca ne signifie pas la fin.
          </p>
          <p>J'espere qu'on se mariera de tout coeur.</p>
        </div>

        <p className="mt-6 font-semibold text-red-900">Yann</p>
      </div>
    ),
  }

  return <Structure titre={content.titre} description={content.description} />
}

export default Lettre
