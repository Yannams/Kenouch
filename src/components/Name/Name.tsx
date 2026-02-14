import Structure, { type StructureType } from "../Structure"

const Name = () => {
  const content: StructureType = {
    titre: "Les surnoms",
    description: (
      <div className="mt-3 max-w-2xl space-y-4 text-left leading-relaxed">
        <div>Est-ce qu'il t'a dit pourquoi il te donne certains surnoms ?</div>
        <ul className="space-y-2">
          <li>🐻 <span className="font-bold">Nounours:</span> parce que dans tes bras il est consolé</li>
          <li>🫂 <span className="font-bold">Chéri:</span> parce que tu es chère à ses yeux</li>
          <li>👶 <span className="font-bold">Bébé:</span> parce que tu resteras le plus gros bébé qu'il a</li>
          <li>❤️<span className="font-bold">Amour de sa vie:</span> parce que tu es et tu resteras la personne qu'il a le plus aimé</li>
        </ul>
      </div>
    ),
  }

  return <Structure titre={content.titre} description={content.description} />
}

export default Name
