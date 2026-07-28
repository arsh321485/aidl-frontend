/* ============================================================
   AIDL Avatar Builder — parts catalogue + SVG layer generator.
   Everything is composed from primitive SVG shapes (no external
   art/images) so it stays self-contained and fully recolourable.
   ============================================================ */

export interface ShapeNode {
  tag: string
  attrs?: Record<string, string | number>
  children?: ShapeNode[]
}

export interface AvatarConfig {
  gender: 'boy' | 'girl'
  faceShape: string
  skin: string
  hairStyle: string
  hairColor: string
  eyes: string
  eyeColor: string
  eyewear: string
  outfit: string
  outfitColor: string
  facialHair: string
  bg: string
}

export const SKIN_TONES = [
  { key: 'porcelain', value: '#ffe0c2', label: 'Porcelain' },
  { key: 'fair', value: '#f5cba0', label: 'Fair' },
  { key: 'tan', value: '#e0a978', label: 'Tan' },
  { key: 'olive', value: '#c68863', label: 'Olive' },
  { key: 'brown', value: '#9c6845', label: 'Brown' },
  { key: 'deep', value: '#6b4226', label: 'Deep' }
] as const

export const HAIR_COLORS = [
  { key: 'black', value: '#1b1410', label: 'Black' },
  { key: 'darkbrown', value: '#3b2417', label: 'Dark Brown' },
  { key: 'brown', value: '#6b4423', label: 'Brown' },
  { key: 'auburn', value: '#8a3b24', label: 'Auburn' },
  { key: 'blonde', value: '#d9a441', label: 'Blonde' },
  { key: 'platinum', value: '#e8dcc8', label: 'Platinum' },
  { key: 'red', value: '#b8452f', label: 'Red' },
  { key: 'gray', value: '#9a958d', label: 'Silver' },
  { key: 'blue', value: '#4a6fa5', label: 'Blue' },
  { key: 'pink', value: '#e0789e', label: 'Pink' }
] as const

export const EYE_COLORS = [
  { key: 'brown', value: '#5b3a24', label: 'Brown' },
  { key: 'hazel', value: '#8a6b3d', label: 'Hazel' },
  { key: 'green', value: '#4a7c59', label: 'Green' },
  { key: 'blue', value: '#4a6fa5', label: 'Blue' },
  { key: 'gray', value: '#7c8798', label: 'Gray' }
] as const

export const OUTFIT_COLORS = [
  { key: 'red', value: '#e23a2e', label: 'Red' },
  { key: 'blue', value: '#2f6fed', label: 'Blue' },
  { key: 'green', value: '#2ec866', label: 'Green' },
  { key: 'yellow', value: '#ffcc00', label: 'Yellow' },
  { key: 'purple', value: '#8a5cf6', label: 'Purple' },
  { key: 'teal', value: '#2ab7ac', label: 'Teal' },
  { key: 'navy', value: '#1f2b47', label: 'Navy' },
  { key: 'black', value: '#14140f', label: 'Black' },
  { key: 'pink', value: '#f06292', label: 'Pink' },
  { key: 'gray', value: '#7c8798', label: 'Gray' }
] as const

export const BG_COLORS = [
  { key: 'sky', value: '#bfe3f0', label: 'Sky' },
  { key: 'mint', value: '#c9ead9', label: 'Mint' },
  { key: 'peach', value: '#f7ddc9', label: 'Peach' },
  { key: 'lavender', value: '#dcd3f0', label: 'Lavender' },
  { key: 'butter', value: '#fbe7ab', label: 'Butter' },
  { key: 'blush', value: '#f6d3d9', label: 'Blush' },
  { key: 'sand', value: '#e7ddc9', label: 'Sand' },
  { key: 'slate', value: '#cfd6de', label: 'Slate' }
] as const

export const FACE_SHAPES = [
  { key: 'oval', label: 'Oval' },
  { key: 'round', label: 'Round' },
  { key: 'square', label: 'Square' },
  { key: 'heart', label: 'Heart' }
] as const

const FACE_SHAPE_PATHS: Record<string, string> = {
  oval: 'M100,38 C130,38 148,60 148,94 C148,124 136,148 100,154 C64,148 52,124 52,94 C52,60 70,38 100,38 Z',
  round: 'M100,40 C134,40 150,64 150,94 C150,120 134,144 100,144 C66,144 50,120 50,94 C50,64 66,40 100,40 Z',
  square: 'M100,40 C128,40 146,58 148,86 L148,116 Q148,140 124,146 L76,146 Q52,140 52,116 L52,86 C54,58 72,40 100,40 Z',
  heart: 'M100,38 C132,38 150,58 148,84 C146,108 136,126 116,140 Q100,152 84,140 C64,126 54,108 52,84 C50,58 68,38 100,38 Z'
}

export const HAIRSTYLES: { key: string; label: string; gender: 'boy' | 'girl' | 'unisex' }[] = [
  { key: 'crew-cut', label: 'Crew Cut', gender: 'boy' },
  { key: 'side-part', label: 'Side Part', gender: 'boy' },
  { key: 'spiky', label: 'Spiky', gender: 'boy' },
  { key: 'quiff', label: 'Quiff', gender: 'boy' },
  { key: 'man-bun', label: 'Man Bun', gender: 'boy' },
  { key: 'afro', label: 'Afro', gender: 'unisex' },
  { key: 'curly', label: 'Curly', gender: 'unisex' },
  { key: 'pixie', label: 'Pixie', gender: 'girl' },
  { key: 'bob', label: 'Bob', gender: 'girl' },
  { key: 'long-straight', label: 'Long Straight', gender: 'girl' },
  { key: 'long-wavy', label: 'Long Wavy', gender: 'girl' },
  { key: 'curly-long', label: 'Long Curly', gender: 'girl' },
  { key: 'ponytail', label: 'Ponytail', gender: 'girl' },
  { key: 'bun', label: 'Bun', gender: 'girl' },
  { key: 'twin-buns', label: 'Twin Buns', gender: 'girl' },
  { key: 'braids', label: 'Braids', gender: 'girl' },
  { key: 'hijab', label: 'Hijab', gender: 'girl' }
]

export const EYE_STYLES = [
  { key: 'round', label: 'Round' },
  { key: 'almond', label: 'Almond' },
  { key: 'happy', label: 'Happy' }
]

export const EYEWEAR_STYLES = [
  { key: 'none', label: 'None' },
  { key: 'round', label: 'Round Glasses' },
  { key: 'square', label: 'Square Glasses' },
  { key: 'sunglasses', label: 'Sunglasses' },
  { key: 'aviators', label: 'Aviators' }
]

export const OUTFIT_STYLES: { key: string; label: string; gender: 'boy' | 'girl' | 'unisex' }[] = [
  { key: 'tshirt', label: 'T-Shirt', gender: 'unisex' },
  { key: 'shirt', label: 'Shirt', gender: 'unisex' },
  { key: 'shirt-tie', label: 'Shirt & Tie', gender: 'unisex' },
  { key: 'blazer', label: 'Blazer', gender: 'unisex' },
  { key: 'hoodie', label: 'Hoodie', gender: 'unisex' },
  { key: 'turtleneck', label: 'Turtleneck', gender: 'unisex' },
  { key: 'jacket', label: 'Jacket', gender: 'unisex' },
  { key: 'dress', label: 'Dress', gender: 'girl' }
]

export const FACIAL_HAIR_STYLES = [
  { key: 'none', label: 'Clean Shaven' },
  { key: 'mustache', label: 'Mustache' },
  { key: 'short-beard', label: 'Short Beard' },
  { key: 'full-beard', label: 'Full Beard' }
]

export const DEFAULT_AVATAR: AvatarConfig = {
  gender: 'girl',
  faceShape: 'oval',
  skin: SKIN_TONES[1].value,
  hairStyle: 'long-wavy',
  hairColor: HAIR_COLORS[2].value,
  eyes: 'almond',
  eyeColor: EYE_COLORS[0].value,
  eyewear: 'none',
  outfit: 'tshirt',
  outfitColor: OUTFIT_COLORS[1].value,
  facialHair: 'none',
  bg: BG_COLORS[0].value
}

export const PRESETS: (AvatarConfig & { name: string })[] = [
  { name: 'Maya', gender: 'girl', faceShape: 'oval', skin: SKIN_TONES[1].value, hairStyle: 'long-wavy', hairColor: HAIR_COLORS[2].value, eyes: 'happy', eyeColor: EYE_COLORS[0].value, eyewear: 'none', outfit: 'tshirt', outfitColor: OUTFIT_COLORS[8].value, facialHair: 'none', bg: BG_COLORS[2].value },
  { name: 'Zoe', gender: 'girl', faceShape: 'round', skin: SKIN_TONES[0].value, hairStyle: 'bob', hairColor: HAIR_COLORS[4].value, eyes: 'round', eyeColor: EYE_COLORS[3].value, eyewear: 'round', outfit: 'dress', outfitColor: OUTFIT_COLORS[4].value, facialHair: 'none', bg: BG_COLORS[3].value },
  { name: 'Aisha', gender: 'girl', faceShape: 'heart', skin: SKIN_TONES[4].value, hairStyle: 'hijab', hairColor: HAIR_COLORS[6].value, eyes: 'almond', eyeColor: EYE_COLORS[0].value, eyewear: 'none', outfit: 'blazer', outfitColor: OUTFIT_COLORS[6].value, facialHair: 'none', bg: BG_COLORS[0].value },
  { name: 'Priya', gender: 'girl', faceShape: 'oval', skin: SKIN_TONES[2].value, hairStyle: 'braids', hairColor: HAIR_COLORS[0].value, eyes: 'happy', eyeColor: EYE_COLORS[1].value, eyewear: 'none', outfit: 'hoodie', outfitColor: OUTFIT_COLORS[2].value, facialHair: 'none', bg: BG_COLORS[4].value },
  { name: 'Ivy', gender: 'girl', faceShape: 'square', skin: SKIN_TONES[3].value, hairStyle: 'afro', hairColor: HAIR_COLORS[0].value, eyes: 'round', eyeColor: EYE_COLORS[0].value, eyewear: 'sunglasses', outfit: 'jacket', outfitColor: OUTFIT_COLORS[8].value, facialHair: 'none', bg: BG_COLORS[5].value },
  { name: 'Nora', gender: 'girl', faceShape: 'oval', skin: SKIN_TONES[5].value, hairStyle: 'ponytail', hairColor: HAIR_COLORS[7].value, eyes: 'almond', eyeColor: EYE_COLORS[4].value, eyewear: 'none', outfit: 'turtleneck', outfitColor: OUTFIT_COLORS[6].value, facialHair: 'none', bg: BG_COLORS[6].value },
  { name: 'Lena', gender: 'girl', faceShape: 'heart', skin: SKIN_TONES[1].value, hairStyle: 'twin-buns', hairColor: HAIR_COLORS[9].value, eyes: 'happy', eyeColor: EYE_COLORS[2].value, eyewear: 'none', outfit: 'dress', outfitColor: OUTFIT_COLORS[9].value, facialHair: 'none', bg: BG_COLORS[1].value },
  { name: 'Pixie', gender: 'girl', faceShape: 'round', skin: SKIN_TONES[0].value, hairStyle: 'pixie', hairColor: HAIR_COLORS[8].value, eyes: 'round', eyeColor: EYE_COLORS[3].value, eyewear: 'none', outfit: 'tshirt', outfitColor: OUTFIT_COLORS[3].value, facialHair: 'none', bg: BG_COLORS[7].value },
  { name: 'Rohan', gender: 'boy', faceShape: 'square', skin: SKIN_TONES[2].value, hairStyle: 'side-part', hairColor: HAIR_COLORS[1].value, eyes: 'round', eyeColor: EYE_COLORS[0].value, eyewear: 'none', outfit: 'shirt-tie', outfitColor: OUTFIT_COLORS[6].value, facialHair: 'none', bg: BG_COLORS[0].value },
  { name: 'Diego', gender: 'boy', faceShape: 'oval', skin: SKIN_TONES[3].value, hairStyle: 'crew-cut', hairColor: HAIR_COLORS[0].value, eyes: 'almond', eyeColor: EYE_COLORS[1].value, eyewear: 'none', outfit: 'tshirt', outfitColor: OUTFIT_COLORS[1].value, facialHair: 'short-beard', bg: BG_COLORS[4].value },
  { name: 'Marcus', gender: 'boy', faceShape: 'square', skin: SKIN_TONES[5].value, hairStyle: 'crew-cut', hairColor: HAIR_COLORS[0].value, eyes: 'round', eyeColor: EYE_COLORS[0].value, eyewear: 'square', outfit: 'blazer', outfitColor: OUTFIT_COLORS[7].value, facialHair: 'full-beard', bg: BG_COLORS[5].value },
  { name: 'Sam', gender: 'boy', faceShape: 'round', skin: SKIN_TONES[0].value, hairStyle: 'quiff', hairColor: HAIR_COLORS[2].value, eyes: 'happy', eyeColor: EYE_COLORS[3].value, eyewear: 'none', outfit: 'shirt', outfitColor: OUTFIT_COLORS[0].value, facialHair: 'none', bg: BG_COLORS[2].value },
  { name: 'Kenji', gender: 'boy', faceShape: 'oval', skin: SKIN_TONES[1].value, hairStyle: 'spiky', hairColor: HAIR_COLORS[0].value, eyes: 'almond', eyeColor: EYE_COLORS[0].value, eyewear: 'sunglasses', outfit: 'jacket', outfitColor: OUTFIT_COLORS[8].value, facialHair: 'none', bg: BG_COLORS[6].value },
  { name: 'Theo', gender: 'boy', faceShape: 'heart', skin: SKIN_TONES[4].value, hairStyle: 'curly', hairColor: HAIR_COLORS[0].value, eyes: 'round', eyeColor: EYE_COLORS[1].value, eyewear: 'none', outfit: 'turtleneck', outfitColor: OUTFIT_COLORS[6].value, facialHair: 'short-beard', bg: BG_COLORS[3].value },
  { name: 'Owen', gender: 'boy', faceShape: 'square', skin: SKIN_TONES[2].value, hairStyle: 'man-bun', hairColor: HAIR_COLORS[3].value, eyes: 'happy', eyeColor: EYE_COLORS[2].value, eyewear: 'aviators', outfit: 'jacket', outfitColor: OUTFIT_COLORS[7].value, facialHair: 'mustache', bg: BG_COLORS[7].value },
  { name: 'Arjun', gender: 'boy', faceShape: 'oval', skin: SKIN_TONES[3].value, hairStyle: 'crew-cut', hairColor: HAIR_COLORS[0].value, eyes: 'almond', eyeColor: EYE_COLORS[0].value, eyewear: 'none', outfit: 'shirt-tie', outfitColor: OUTFIT_COLORS[9].value, facialHair: 'full-beard', bg: BG_COLORS[1].value }
]

const DARK = '#1b1410'
let clipCounter = 0

function n(tag: string, attrs: Record<string, string | number>, children?: ShapeNode[]): ShapeNode {
  return { tag, attrs, children }
}

/* ---------------------------------------------------------- head + neck */
function headAndNeck(gender: 'boy' | 'girl', faceShape: string, skin: string): ShapeNode[] {
  const d = FACE_SHAPE_PATHS[faceShape] || FACE_SHAPE_PATHS.oval!
  if (gender === 'boy') {
    return [
      n('rect', { x: 82, y: 128, width: 36, height: 44, rx: 6, fill: skin }),
      n('path', { d, fill: skin })
    ]
  }
  return [
    n('rect', { x: 88, y: 138, width: 24, height: 40, rx: 8, fill: skin }),
    n('path', { d, fill: skin })
  ]
}

/* ---------------------------------------------------------- hair: back layer */
const SHADE = 'rgba(0,0,0,0.16)'
const SHEEN = 'rgba(255,255,255,0.22)'

function hairBack(style: string, color: string): ShapeNode[] {
  switch (style) {
    case 'afro': {
      const shapes: ShapeNode[] = [n('circle', { cx: 100, cy: 88, r: 55, fill: color })]
      const bumps: [number, number][] = [[52, 62], [68, 38], [100, 32], [132, 38], [148, 62], [152, 90], [148, 118], [132, 140], [100, 148], [68, 140], [52, 118], [48, 90]]
      for (const [cx, cy] of bumps) shapes.push(n('circle', { cx, cy, r: 13, fill: color }))
      return shapes
    }
    case 'long-straight':
      return [
        n('path', { d: 'M55,70 Q47,130 52,180 Q54,198 64,200 L82,200 Q74,150 72,96 Q73,80 66,72 Z', fill: color }),
        n('path', { d: 'M145,70 Q153,130 148,180 Q146,198 136,200 L118,200 Q126,150 128,96 Q127,80 134,72 Z', fill: color }),
        n('ellipse', { cx: 100, cy: 62, rx: 47, ry: 29, fill: color }),
        n('path', { d: 'M100,26 L100,42', stroke: SHADE, 'stroke-width': 1.4, 'stroke-linecap': 'round' }),
        n('path', { d: 'M66,92 Q62,140 68,190', stroke: SHADE, 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M134,92 Q138,140 132,190', stroke: SHADE, 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M78,58 Q100,48 122,58', stroke: SHEEN, 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'long-wavy':
      return [
        n('path', { d: 'M53,72 Q44,110 58,146 Q45,158 58,196 Q64,205 75,200 L86,198 Q75,160 79,120 Q81,96 70,80 Z', fill: color }),
        n('path', { d: 'M147,72 Q156,110 142,146 Q155,158 142,196 Q136,205 125,200 L114,198 Q125,160 121,120 Q119,96 130,80 Z', fill: color }),
        n('ellipse', { cx: 100, cy: 62, rx: 47, ry: 29, fill: color }),
        n('path', { d: 'M100,26 L100,42', stroke: SHADE, 'stroke-width': 1.4, 'stroke-linecap': 'round' }),
        n('path', { d: 'M61,100 Q53,130 63,155 Q55,168 64,192', stroke: SHADE, 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M139,100 Q147,130 137,155 Q145,168 136,192', stroke: SHADE, 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M78,58 Q100,48 122,58', stroke: SHEEN, 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'curly-long': {
      const shapes: ShapeNode[] = [n('ellipse', { cx: 100, cy: 60, rx: 48, ry: 30, fill: color })]
      for (const side of [-1, 1]) {
        for (let i = 0; i < 6; i++) {
          const cx = 100 + side * (46 + (i % 2) * 10)
          const cy = 88 + i * 18
          const r = i > 3 ? 11 : 14
          shapes.push(n('circle', { cx, cy, r, fill: color }))
          shapes.push(n('path', { d: `M${cx - r * 0.4},${cy - r * 0.5} Q${cx},${cy - r} ${cx + r * 0.4},${cy - r * 0.5}`, stroke: SHEEN, 'stroke-width': 1.4, fill: 'none', 'stroke-linecap': 'round' }))
        }
      }
      return shapes
    }
    case 'ponytail':
      return [
        n('ellipse', { cx: 100, cy: 60, rx: 46, ry: 28, fill: color }),
        n('path', { d: 'M136,52 Q168,64 160,120 Q156,150 138,144 Q152,104 132,66 Z', fill: color }),
        n('rect', { x: 128, y: 55, width: 16, height: 11, rx: 5, fill: SHADE }),
        n('path', { d: 'M141,72 Q151,102 143,138', stroke: SHADE, 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'bun':
    case 'man-bun': {
      const bunCy = style === 'bun' ? 42 : 38
      const bunR = style === 'bun' ? 17 : 13
      return [
        n('ellipse', { cx: 100, cy: 62, rx: 44, ry: 27, fill: color }),
        n('circle', { cx: 100, cy: bunCy, r: bunR, fill: color }),
        n('path', { d: `M${100 - bunR * 0.6},${bunCy} Q100,${bunCy - bunR * 0.7} ${100 + bunR * 0.6},${bunCy}`, stroke: SHADE, 'stroke-width': 1.4, fill: 'none' }),
        n('path', { d: `M${100 - bunR * 0.5},${bunCy + bunR * 0.4} Q100,${bunCy - bunR * 0.2} ${100 + bunR * 0.5},${bunCy + bunR * 0.4}`, stroke: SHADE, 'stroke-width': 1.2, fill: 'none' })
      ]
    }
    case 'twin-buns':
      return [
        n('ellipse', { cx: 100, cy: 64, rx: 44, ry: 26, fill: color }),
        n('circle', { cx: 58, cy: 46, r: 14, fill: color }),
        n('circle', { cx: 142, cy: 46, r: 14, fill: color }),
        n('path', { d: 'M50,46 Q58,35 66,46', stroke: SHADE, 'stroke-width': 1.3, fill: 'none' }),
        n('path', { d: 'M134,46 Q142,35 150,46', stroke: SHADE, 'stroke-width': 1.3, fill: 'none' })
      ]
    case 'braids': {
      const shapes: ShapeNode[] = [n('ellipse', { cx: 100, cy: 62, rx: 44, ry: 27, fill: color })]
      for (const cx of [56, 144]) {
        shapes.push(n('rect', { x: cx - 8, y: 68, width: 16, height: 116, rx: 8, fill: color }))
        for (let i = 0; i < 8; i++) {
          const y = 76 + i * 13
          const dir = i % 2 === 0 ? 1 : -1
          shapes.push(n('path', { d: `M${cx - 7},${y} Q${cx},${y + dir * 4} ${cx + 7},${y}`, stroke: SHADE, 'stroke-width': 1.2, fill: 'none' }))
        }
      }
      return shapes
    }
    case 'hijab':
      return [
        n('path', { d: 'M40,110 Q34,190 54,210 L146,210 Q166,190 160,110 Q160,54 100,44 Q40,54 40,110 Z', fill: color }),
        n('path', { d: 'M100,44 Q40,54 40,110 L46,112 Q48,64 100,56 Q152,64 154,112 L160,110 Q160,54 100,44 Z', fill: 'rgba(0,0,0,0.12)' })
      ]
    default:
      return []
  }
}

/* ---------------------------------------------------------- hair: front layer */
function hairFront(style: string, color: string): ShapeNode[] {
  switch (style) {
    case 'crew-cut':
      return [
        n('path', { d: 'M53,72 Q49,28 100,25 Q151,28 147,72 L147,56 Q100,32 53,56 Z', fill: color }),
        n('path', { d: 'M62,50 Q100,34 138,50', stroke: SHEEN, 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'side-part':
      return [
        n('path', { d: 'M53,74 Q49,28 100,25 Q151,28 147,74 L147,56 Q100,32 53,56 Z', fill: color }),
        n('path', { d: 'M88,26 Q84,38 90,46', stroke: SHADE, 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M96,30 Q118,32 136,48', stroke: SHEEN, 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M62,42 Q78,34 88,30', stroke: SHEEN, 'stroke-width': 1.4, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'spiky':
      return [
        n('path', { d: 'M54,74 L60,42 L72,62 L80,32 L92,60 L100,28 L108,60 L120,32 L128,62 L140,42 L146,74 L146,82 Q100,54 54,82 Z', fill: color }),
        n('path', { d: 'M80,40 L82,56', stroke: SHEEN, 'stroke-width': 1.6 }),
        n('path', { d: 'M120,40 L118,56', stroke: SHEEN, 'stroke-width': 1.6 })
      ]
    case 'quiff':
      return [
        n('path', { d: 'M54,78 Q50,32 100,28 Q150,32 146,78 L146,58 Q100,36 54,58 Z', fill: color }),
        n('path', { d: 'M66,44 Q80,4 128,16 Q112,24 102,42 Q88,34 74,38 Q68,40 66,44 Z', fill: color }),
        n('path', { d: 'M80,22 Q100,10 118,18', stroke: SHEEN, 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'curly': {
      const shapes: ShapeNode[] = [n('path', { d: 'M50,82 Q46,30 100,26 Q154,30 150,82 L150,66 Q100,40 50,66 Z', fill: color })]
      const pts: [number, number][] = [[58, 52], [74, 36], [92, 28], [108, 28], [126, 36], [142, 52], [66, 66], [100, 24], [134, 66]]
      for (const [x, y] of pts) shapes.push(n('circle', { cx: x, cy: y, r: 9, fill: color }))
      return shapes
    }
    case 'pixie':
      return [
        n('path', { d: 'M54,76 Q50,32 100,28 Q148,32 148,68 Q132,50 120,58 Q110,34 88,40 Q66,46 54,76 Z', fill: color }),
        n('path', { d: 'M92,32 Q80,46 78,58', stroke: SHADE, 'stroke-width': 1.4, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'bob':
      return [
        n('path', { d: 'M52,78 Q48,28 100,25 Q152,28 148,78 L148,124 Q142,92 136,82 L64,82 Q58,92 52,124 Z', fill: color }),
        n('path', { d: 'M64,70 Q100,58 136,70', stroke: SHADE, 'stroke-width': 1.4, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M70,48 Q100,36 130,48', stroke: SHEEN, 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'long-straight':
    case 'long-wavy':
      return [
        n('path', { d: 'M56,66 Q60,78 68,84', stroke: color, 'stroke-width': 5, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M144,66 Q140,78 132,84', stroke: color, 'stroke-width': 5, fill: 'none', 'stroke-linecap': 'round' })
      ]
    case 'curly-long':
      return [n('path', { d: 'M52,74 Q48,30 100,26 Q152,30 148,74 L148,58 Q100,34 52,58 Z', fill: color })]
    case 'twin-buns':
      return [n('path', { d: 'M54,72 Q50,32 100,28 Q150,32 146,72 L146,58 Q100,36 54,58 Z', fill: color })]
    case 'braids':
      return [
        n('path', { d: 'M54,78 Q50,32 100,28 Q150,32 146,78 L146,60 Q100,34 54,60 Z', fill: color }),
        n('path', { d: 'M100,28 L100,40', stroke: SHADE, 'stroke-width': 1.3 })
      ]
    case 'man-bun':
      return [n('path', { d: 'M54,80 Q50,38 100,34 Q150,38 146,80 L146,64 Q100,40 54,64 Z', fill: color })]
    default:
      return []
  }
}

/* ---------------------------------------------------------- facial hair, clipped to the chosen face outline
   so it can never spill past the jaw regardless of face shape */
function facialHairBig(style: string, color: string, faceShape: string): { defs: ShapeNode[]; shapes: ShapeNode[] } {
  if (style !== 'short-beard' && style !== 'full-beard') return { defs: [], shapes: [] }
  const clipId = `avatar-face-clip-${clipCounter++}`
  const clipDef = n('clipPath', { id: clipId }, [n('path', { d: FACE_SHAPE_PATHS[faceShape] || FACE_SHAPE_PATHS.oval!, fill: '#000' })])
  const blob = style === 'full-beard'
    ? n('ellipse', { cx: 100, cy: 136, rx: 53, ry: 32, fill: color, 'clip-path': `url(#${clipId})` })
    : n('ellipse', { cx: 100, cy: 140, rx: 42, ry: 20, fill: color, 'clip-path': `url(#${clipId})` })
  return { defs: [clipDef], shapes: [blob] }
}

/* mustache sits above the lip, drawn after the mouth so it's never obscured */
function facialHairMouth(style: string, color: string): ShapeNode[] {
  if (style === 'mustache') return [n('path', { d: 'M84,116 Q100,108 116,116 Q100,122 84,116 Z', fill: color })]
  return []
}

/* ---------------------------------------------------------- eyes + brows (gendered proportions) */
function eyesAndBrows(style: string, gender: 'boy' | 'girl', eyeColor: string): ShapeNode[] {
  const isGirl = gender === 'girl'
  const brow = isGirl
    ? [
        n('path', { d: 'M69,74 q11,-10 22,-2', stroke: '#3a2c22', 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M109,72 q11,-8 22,2', stroke: '#3a2c22', 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' })
      ]
    : [
        n('path', { d: 'M68,78 q11,-6 22,-1', stroke: '#3a2c22', 'stroke-width': 4.4, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M110,77 q11,-5 22,1', stroke: '#3a2c22', 'stroke-width': 4.4, fill: 'none', 'stroke-linecap': 'round' })
      ]

  if (style === 'happy') {
    return [
      ...brow,
      n('path', { d: 'M70,94 q8,-10 16,0', stroke: DARK, 'stroke-width': 3.2, fill: 'none', 'stroke-linecap': 'round' }),
      n('path', { d: 'M114,94 q8,-10 16,0', stroke: DARK, 'stroke-width': 3.2, fill: 'none', 'stroke-linecap': 'round' })
    ]
  }

  const rx = isGirl ? 9 : 7.4
  const ry = style === 'almond' ? (isGirl ? 6.4 : 5.4) : (isGirl ? 9.6 : 7.2)
  const irisR = isGirl ? 5.2 : 4.2
  const pupilR = isGirl ? 2.3 : 2
  const eyes: ShapeNode[] = [...brow]
  for (const cx of [78, 122]) {
    eyes.push(n('ellipse', { cx, cy: 93, rx, ry, fill: '#fff', stroke: 'rgba(0,0,0,0.15)', 'stroke-width': 1 }))
    eyes.push(n('circle', { cx, cy: 93, r: irisR, fill: eyeColor }))
    eyes.push(n('circle', { cx, cy: 93, r: pupilR, fill: DARK }))
    eyes.push(n('circle', { cx: cx - 1.8, cy: 91, r: 1.3, fill: '#fff' }))
    eyes.push(n('path', { d: `M${cx - rx},${93 - ry * 0.6} Q${cx},${93 - ry * 1.3} ${cx + rx},${93 - ry * 0.6}`, fill: 'none', stroke: DARK, 'stroke-width': 1.4, 'stroke-linecap': 'round' }))
    if (isGirl) {
      const dir = cx < 100 ? -1 : 1
      const ex = cx + dir * rx * 0.9
      eyes.push(n('path', { d: `M${ex},${89} l${dir * 5},-5`, stroke: DARK, 'stroke-width': 1.4, 'stroke-linecap': 'round' }))
      eyes.push(n('path', { d: `M${ex - dir * 2},${91} l${dir * 5},-3`, stroke: DARK, 'stroke-width': 1.2, 'stroke-linecap': 'round' }))
    }
  }
  return eyes
}

/* ---------------------------------------------------------- eyewear */
function eyewear(style: string): ShapeNode[] {
  const common = { fill: 'none', 'stroke-width': 3 }
  switch (style) {
    case 'round':
      return [
        n('circle', { cx: 78, cy: 93, r: 15, stroke: DARK, ...common }),
        n('circle', { cx: 122, cy: 93, r: 15, stroke: DARK, ...common }),
        n('path', { d: 'M93,93 L107,93', stroke: DARK, 'stroke-width': 3 })
      ]
    case 'square':
      return [
        n('rect', { x: 63, y: 81, width: 30, height: 24, rx: 4, stroke: DARK, ...common }),
        n('rect', { x: 107, y: 81, width: 30, height: 24, rx: 4, stroke: DARK, ...common }),
        n('path', { d: 'M93,91 L107,91', stroke: DARK, 'stroke-width': 3 })
      ]
    case 'sunglasses':
      return [
        n('rect', { x: 61, y: 83, width: 34, height: 20, rx: 8, fill: '#14140f' }),
        n('rect', { x: 105, y: 83, width: 34, height: 20, rx: 8, fill: '#14140f' }),
        n('path', { d: 'M95,89 L105,89', stroke: DARK, 'stroke-width': 3 })
      ]
    case 'aviators':
      return [
        n('path', { d: 'M62,87 Q78,75 94,87 Q94,105 78,107 Q62,105 62,87 Z', fill: 'rgba(30,40,60,0.55)', stroke: DARK, 'stroke-width': 2.5 }),
        n('path', { d: 'M106,87 Q122,75 138,87 Q138,105 122,107 Q106,105 106,87 Z', fill: 'rgba(30,40,60,0.55)', stroke: DARK, 'stroke-width': 2.5 }),
        n('path', { d: 'M94,85 L106,85', stroke: DARK, 'stroke-width': 2.5 })
      ]
    default:
      return []
  }
}

/* ---------------------------------------------------------- outfit (torso) */
function outfit(style: string, color: string): ShapeNode[] {
  const shade = 'rgba(0,0,0,0.18)'
  const sheen = 'rgba(255,255,255,0.22)'
  const trim = '#2a2a26'
  const base = n('path', { d: 'M20,220 Q24,170 100,153 Q176,170 180,220 Z', fill: color })
  const shoulders = [
    n('path', { d: 'M46,174 Q54,158 66,155', fill: 'none', stroke: shade, 'stroke-width': 1.5, 'stroke-linecap': 'round' }),
    n('path', { d: 'M154,174 Q146,158 134,155', fill: 'none', stroke: shade, 'stroke-width': 1.5, 'stroke-linecap': 'round' })
  ]
  const collar = [
    n('path', { d: 'M78,156 L100,151 L92,180 Z', fill: '#fdfdfb' }),
    n('path', { d: 'M122,156 L100,151 L108,180 Z', fill: '#fdfdfb' })
  ]
  switch (style) {
    case 'shirt':
      return [
        base, ...shoulders, ...collar,
        n('path', { d: 'M100,168 L100,218', stroke: shade, 'stroke-width': 1.2 }),
        n('circle', { cx: 100, cy: 186, r: 2.2, fill: color }),
        n('circle', { cx: 100, cy: 200, r: 2.2, fill: color }),
        n('circle', { cx: 100, cy: 214, r: 2.2, fill: color })
      ]
    case 'shirt-tie':
      return [
        base, ...shoulders, ...collar,
        n('path', { d: 'M94,158 L106,158 L100,169 Z', fill: '#1f2b47' }),
        n('path', { d: 'M96,167 L104,167 L110,220 L100,227 L90,220 Z', fill: '#1f2b47' }),
        n('path', { d: 'M97,167 L103,167 L100,176 Z', fill: 'rgba(255,255,255,0.18)' })
      ]
    case 'blazer':
      return [
        base, ...shoulders, ...collar,
        n('path', { d: 'M70,158 L100,151 L86,206 Z', fill: color, stroke: shade, 'stroke-width': 1.6 }),
        n('path', { d: 'M130,158 L100,151 L114,206 Z', fill: color, stroke: shade, 'stroke-width': 1.6 }),
        n('path', { d: 'M86,206 L100,197 L114,206 L110,220 L90,220 Z', fill: color, stroke: shade, 'stroke-width': 1.6 }),
        n('path', { d: 'M70,158 L61,220', stroke: shade, 'stroke-width': 1.6, fill: 'none' }),
        n('path', { d: 'M130,158 L139,220', stroke: shade, 'stroke-width': 1.6, fill: 'none' }),
        n('circle', { cx: 100, cy: 201, r: 2.2, fill: '#fff' }),
        n('circle', { cx: 100, cy: 213, r: 2.2, fill: '#fff' })
      ]
    case 'hoodie':
      return [
        n('path', { d: 'M62,150 Q100,133 138,150 Q142,170 130,182 Q100,160 70,182 Q58,170 62,150 Z', fill: shade }),
        base,
        n('path', { d: 'M78,158 Q100,170 122,158', fill: 'none', stroke: shade, 'stroke-width': 2.2 }),
        n('path', { d: 'M90,164 Q88,176 89,188', stroke: '#fdfdfb', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }),
        n('path', { d: 'M110,164 Q112,176 111,188', stroke: '#fdfdfb', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }),
        n('circle', { cx: 89, cy: 190, r: 2, fill: '#fdfdfb' }),
        n('circle', { cx: 111, cy: 190, r: 2, fill: '#fdfdfb' }),
        n('path', { d: 'M74,202 Q100,212 126,202', fill: 'none', stroke: shade, 'stroke-width': 1.6 })
      ]
    case 'turtleneck':
      return [
        base,
        n('ellipse', { cx: 100, cy: 155, rx: 23, ry: 9, fill: color, stroke: shade, 'stroke-width': 2 }),
        n('ellipse', { cx: 100, cy: 162, rx: 21.5, ry: 8, fill: color, stroke: shade, 'stroke-width': 2 }),
        n('ellipse', { cx: 100, cy: 169, rx: 20, ry: 7.5, fill: color, stroke: shade, 'stroke-width': 2 })
      ]
    case 'jacket':
      return [
        base,
        n('path', { d: 'M56,160 L68,220 L44,220 Q42,188 56,160 Z', fill: shade }),
        n('path', { d: 'M144,160 L132,220 L156,220 Q158,188 144,160 Z', fill: shade }),
        n('ellipse', { cx: 100, cy: 154, rx: 22, ry: 8, fill: trim }),
        n('path', { d: 'M100,155 L100,220', fill: 'none', stroke: trim, 'stroke-width': 3 }),
        n('circle', { cx: 100, cy: 173, r: 1.8, fill: '#c9c2a8' }),
        n('circle', { cx: 100, cy: 188, r: 1.8, fill: '#c9c2a8' }),
        n('circle', { cx: 100, cy: 203, r: 1.8, fill: '#c9c2a8' }),
        n('rect', { x: 42, y: 210, width: 14, height: 8, rx: 3, fill: trim }),
        n('rect', { x: 144, y: 210, width: 14, height: 8, rx: 3, fill: trim })
      ]
    case 'dress':
      return [
        n('path', { d: 'M16,220 Q22,164 100,150 Q178,164 184,220 Z', fill: color }),
        n('path', { d: 'M76,154 Q100,172 124,154 Q118,147 100,145 Q82,147 76,154 Z', fill: 'rgba(255,255,255,0.32)' }),
        n('path', { d: 'M58,190 Q100,199 142,190', fill: 'none', stroke: 'rgba(0,0,0,0.16)', 'stroke-width': 2 }),
        n('path', { d: 'M40,220 Q60,206 100,204 Q140,206 160,220 Z', fill: 'rgba(0,0,0,0.08)' })
      ]
    default:
      return [
        base,
        n('path', { d: 'M78,154 Q100,167 122,154', fill: 'none', stroke: shade, 'stroke-width': 2.2 }),
        n('path', { d: 'M78,154 Q100,163 122,154', fill: 'none', stroke: sheen, 'stroke-width': 1.4 }),
        ...shoulders
      ]
  }
}

/* ---------------------------------------------------------- assemble */
export function buildAvatarLayers(cfg: AvatarConfig): ShapeNode[] {
  const skin = cfg.skin
  const isGirl = cfg.gender === 'girl'
  const layers: ShapeNode[] = []
  const beard = facialHairBig(cfg.facialHair, cfg.hairColor, cfg.faceShape)

  layers.push(n('rect', { x: 0, y: 0, width: 200, height: 220, fill: cfg.bg }))
  if (beard.defs.length) layers.push(n('defs', {}, beard.defs))
  layers.push(...hairBack(cfg.hairStyle, cfg.hairColor))
  layers.push(...headAndNeck(cfg.gender, cfg.faceShape, skin))
  layers.push(n('ellipse', { cx: isGirl ? 55 : 53, cy: 96, rx: 6, ry: 9, fill: skin }))
  layers.push(n('ellipse', { cx: isGirl ? 145 : 147, cy: 96, rx: 6, ry: 9, fill: skin }))
  layers.push(n('ellipse', { cx: 68, cy: 112, rx: 10, ry: 6, fill: '#ff8fa3', opacity: isGirl ? 0.28 : 0.14 }))
  layers.push(n('ellipse', { cx: 132, cy: 112, rx: 10, ry: 6, fill: '#ff8fa3', opacity: isGirl ? 0.28 : 0.14 }))
  layers.push(...eyesAndBrows(cfg.eyes, cfg.gender, cfg.eyeColor))
  layers.push(n('path', { d: 'M97,98 Q94,110 100,114', fill: 'none', stroke: 'rgba(0,0,0,0.25)', 'stroke-width': 2.5, 'stroke-linecap': 'round' }))
  layers.push(...beard.shapes)
  if (isGirl) {
    layers.push(n('path', { d: 'M80,124 Q100,120 120,124 Q113,135 100,136 Q87,135 80,124 Z', fill: '#c26b74' }))
    layers.push(n('path', { d: 'M84,124 Q100,129 116,124', fill: 'none', stroke: '#a1505c', 'stroke-width': 1.4 }))
  } else {
    layers.push(n('path', { d: 'M84,124 Q100,132 116,124', fill: 'none', stroke: '#8a5a4a', 'stroke-width': 3, 'stroke-linecap': 'round' }))
  }
  layers.push(...facialHairMouth(cfg.facialHair, cfg.hairColor))
  layers.push(...hairFront(cfg.hairStyle, cfg.hairColor))
  layers.push(...eyewear(cfg.eyewear))
  layers.push(...outfit(cfg.outfit, cfg.outfitColor))

  return layers
}
