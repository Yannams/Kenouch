import { Music2 } from "lucide-react"
import type { ReactNode } from "react"

export type MediaLayout = "free" | "heart" | "music"
export type MediaPlacement =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center"

export type MediaType = "image" | "audio"

export type MediaItem = {
  path: string
  type?: MediaType
  placement?: MediaPlacement
  nearText?: boolean
  offsetX?: number
  offsetY?: number
  rotate?: number
  size?: "sm" | "md" | "lg"
  objectPosition?: string
  position?: string
  alt?: string
}

export type StructureType = {
  titre: string
  description: ReactNode
  mediaLayout?: MediaLayout
  medias?: MediaItem[]
}

const sizeClasses: Record<NonNullable<MediaItem["size"]>, string> = {
  sm: "h-20 w-20 sm:h-28 sm:w-28",
  md: "h-24 w-24 sm:h-40 sm:w-40",
  lg: "h-28 w-28 sm:h-52 sm:w-52",
}

const heartOffsets = [
  { x: -31, y: -21 },
  { x: -11, y: -30 },
  { x: 11, y: -30 },
  { x: 31, y: -21 },
  { x: -39, y: 0 },
  { x: -18, y: 6 },
  { x: 0, y: 17 },
  { x: 18, y: 6 },
  { x: 39, y: 0 },
  { x: 0, y: 34 },
]

const getPlacementOffset = (placement: MediaPlacement = "right", nearText = false) => {
  const axis = nearText ? 170 : 285
  const diagonal = nearText ? 130 : 225

  switch (placement) {
    case "top":
      return { x: 0, y: -axis }
    case "right":
      return { x: axis, y: 0 }
    case "bottom":
      return { x: 0, y: axis }
    case "left":
      return { x: -axis, y: 0 }
    case "top-right":
      return { x: diagonal, y: -diagonal }
    case "top-left":
      return { x: -diagonal, y: -diagonal }
    case "bottom-right":
      return { x: diagonal, y: diagonal }
    case "bottom-left":
      return { x: -diagonal, y: diagonal }
    default:
      return { x: 0, y: 0 }
  }
}

const renderImage = (media: MediaItem, index: number) => {
  const objectPosition = media.objectPosition ?? media.position
  const sizeClass = sizeClasses[media.size ?? "md"]

  return (
    <div className="bg-white border border-white p-2 shadow-xl">
      <img
        src={media.path}
        alt={media.alt ?? `photo-${index + 1}`}
        className={`${sizeClass} object-cover`}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  )
}

const renderAudio = (media: MediaItem, index: number) => {
  return (
    <div
      key={`${media.path}-${index}`}
      className="w-full max-w-xs rounded-xl border border-white/80 bg-white/90 p-3 shadow-lg"
    >
      <div className="mb-2 flex items-center gap-2 text-red-900">
        <Music2 size={16} />
        <span className="text-sm font-semibold">Audio {index + 1}</span>
      </div>
      <audio controls className="w-full">
        <source src={media.path} />
      </audio>
    </div>
  )
}

const Structure = ({ titre, description, medias, mediaLayout = "free" }: StructureType) => {
  const hasMedias = (medias?.length ?? 0) > 0

  if (!hasMedias) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <div className="text-4xl font-extrabold text-red-900">{titre}</div>
          <div className="text-rose-800">{description}</div>
        </div>
      </div>
    )
  }

  if (mediaLayout === "music") {
    const audioMedias = medias?.filter((media) => (media.type ?? "audio") === "audio") ?? []

    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
          <div className="text-4xl font-extrabold text-red-900">{titre}</div>
          <div className="text-rose-800">{description}</div>
          <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
            {audioMedias.map((media, index) => renderAudio(media, index))}
          </div>
        </div>
      </div>
    )
  }

  if (mediaLayout === "heart") {
    const imageMedias = medias?.filter((media) => (media.type ?? "image") === "image") ?? []

    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
          <div className="text-4xl font-extrabold text-red-900">{titre}</div>
          <div className="text-rose-800">{description}</div>

          <div className="relative mt-4 h-[76vw] w-[76vw] max-h-[420px] max-w-[420px] min-h-[260px] min-w-[260px]">
            {imageMedias.map((media, index) => {
              const heartPoint = heartOffsets[index % heartOffsets.length]
              const rotate = media.rotate ?? (index % 2 === 0 ? -6 : 6)

              return (
                <div
                  key={`${media.path}-${index}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${heartPoint.x}% + ${(media.offsetX ?? 0)}px)`,
                    top: `calc(50% + ${heartPoint.y}% + ${(media.offsetY ?? 0)}px)`,
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  {renderImage(media, index)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10">
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="z-30 flex max-w-2xl flex-col items-center gap-2 rounded-2xl bg-pink-100/75 px-4 py-3 text-center backdrop-blur-[1px]">
          <div className="text-4xl font-extrabold text-red-900">{titre}</div>
          <div className="text-rose-800">{description}</div>
        </div>
      </div>

      {medias?.map((media, index) => {
        if ((media.type ?? "image") === "audio") {
          return (
            <div
              key={`${media.path}-${index}`}
              className="absolute left-1/2 top-1/2 z-10 w-72"
              style={{
                transform: `translate(-50%, -50%) translate(${(media.offsetX ?? 0)}px, ${(media.offsetY ?? 220)}px) rotate(${media.rotate ?? 0}deg)`,
              }}
            >
              {renderAudio(media, index)}
            </div>
          )
        }

        const placementOffset = getPlacementOffset(media.placement, media.nearText)
        const x = placementOffset.x + (media.offsetX ?? 0)
        const y = placementOffset.y + (media.offsetY ?? 0)

        return (
          <div
            key={`${media.path}-${index}`}
            className="absolute left-1/2 top-1/2 z-10"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${media.rotate ?? 0}deg)`,
            }}
          >
            {renderImage(media, index)}
          </div>
        )
      })}
    </div>
  )
   
    
}

export default Structure
