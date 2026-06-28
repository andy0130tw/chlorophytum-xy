import * as fs from 'fs'
// import { default as assert } from 'assert'

import * as zlib from 'zlib'

import { HintRootNode, CombinedHintRootNode, CommonGlyphHintH, CommonGlyphHint } from './validator.js'

const readGzJSON = async (/** @type {fs.PathLike} */ p) => {
  const data = fs.createReadStream(p)
  const gunzip = zlib.createGunzip()
  const s = data.pipe(gunzip)

  /**
   * @param {Uint8Array[]} xs
   */
  function decodeAll(xs) {
    const out = []
    const decoder = new TextDecoder()
    for (const x of xs) {
      out.push(decoder.decode(x, { stream: true }))
    }
    out.push(decoder.decode())
    return JSON.parse(out.join(''))
  }

  return new Promise((resolve, reject) => {
    /** @type {Uint8Array[]} */
    const chunks = []
    s.on('data', chunk => {
      chunks.push(Uint8Array.from(chunk))
    })
    s.on('end', () => {
      resolve(decodeAll(chunks))
    })
    s.on('error', reject)
  })
}

// const upright = readJSON('hint-upright')
// const rotated = readJSON('hint-rotated')

const upright = await readGzJSON('hint-upright-full.gz')
const rotated = await readGzJSON('hint-rotated-full.gz')

const knownLeaves = [
  '@chlorophytum/hint-embox::Hints::Stroke',
  '@chlorophytum/hint-embox::Hints::Edge',
  '@chlorophytum/hint-multi-stroke::MultiStrokeHint',
  'Chlorophytum::CommonHints::LinkChain',
  'Chlorophytum::CommonHints::Smooth',
  'Chlorophytum::CommonHints::Interpolate',
]

if (Object.keys(upright.glyphs).length != Object.keys(rotated.glyphs).length) {
  throw new Error('Rotated contains more glyphs than upright one')
}

/** @type {Record<string, CombinedHintRootNode>} */
const newGlyphs = {}

for (const [k, _v] of Object.entries(upright.glyphs)) {
  const v = HintRootNode.parse(_v)
  const vv = HintRootNode.parse(rotated.glyphs[k])
  if (!vv) throw new Error(`Key "${k}" is missing hinting info in rotated glyphs`)

  // assert(v.type === "Chlorophytum::SequenceHint")
  // assert(v.of.length === 2)
  // assert(v.of[0].type === "Chlorophytum::CommonHints::WithDirection")
  // assert(v.of[0].dir === 2)
  // assert(v.of[0].inner.type === "Chlorophytum::SequenceHint")
  // assert(v.of[0].inner.of.length === 1)
  // assert(v.of[0].inner.of[0].type === "@chlorophytum/hint-embox::Hints::UseEmBox")
  // assert(typeof v.of[0].inner.of[0].name === 'string')
  // assert(v.of[0].inner.of[0].inner.type === "Chlorophytum::SequenceHint")

  const emBoxName = v.of[0].inner.of[0].name

  /** @type {string[]} */
  const excluded = [
    // '@chlorophytum/hint-embox::Hints::Stroke',
    // '@chlorophytum/hint-embox::Hints::Edge',
    // '@chlorophytum/hint-multi-stroke::MultiStrokeHint',
  ]


  const vvv = vv.of[0].inner.of[0].inner.of.flatMap(/** @type {(x: CommonGlyphHint) => CommonGlyphHintH[]} */ (x => {
    if (excluded.includes(x.type)) return []
    if (0) {
    } else if (x.type === '@chlorophytum/hint-embox::Hints::Edge') {
      return [{ ...x, type: '@chlorophytum/hint-embox::Hints::EdgeH' }]
      // return []
    } else if (x.type === '@chlorophytum/hint-embox::Hints::Stroke') {
      return [{ ...x, type: '@chlorophytum/hint-embox::Hints::StrokeH' }]
      // return []
    } else if (x.type === '@chlorophytum/hint-multi-stroke::MultiStrokeHint') {
      return [{ ...x, type: '@chlorophytum/hint-multi-stroke::MultiStrokeHintH' }]
      // return []
    }
    return [x]
  }))

  newGlyphs[k] = {
    "type": "Chlorophytum::SequenceHint",
    of: [
      v.of[0],
      {
          "type": "Chlorophytum::CommonHints::WithDirection",
          dir: 1,
          inner: {
            "type": "Chlorophytum::SequenceHint",
            of: [
              {
                "type": "@chlorophytum/hint-embox::Hints::UseEmBox",
                name: emBoxName,
                inner: {
                  "type": "Chlorophytum::SequenceHint",
                  of: vvv,
                },
              }
            ]
          },
      },
      {
        "type": "Chlorophytum::CommonHints::Smooth"
      }
    ],
  }
}

const out = {
  ...upright,
  glyphs: newGlyphs,
}

// console.log(JSON.stringify(out, null, 2))

console.log('{')

console.log(`"sharedHints": ` + JSON.stringify(out.sharedHints, null, 2) + ',')
console.log(`"glyphHintCacheKeys": ` + JSON.stringify(out.glyphHintCacheKeys, null, 2) + ',')

console.log(`"glyphs": {`)
let isFirst = true
for (const [k, v] of Object.entries(out.glyphs)) {
  console.log(`${isFirst ? '' : ','}${JSON.stringify(k)}: ${JSON.stringify(v)}`)
  isFirst = false
}
console.log(`}`)

console.log('}')
