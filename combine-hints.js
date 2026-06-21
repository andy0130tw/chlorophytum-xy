const fs = require('fs')
const assert = require('assert')

const readJSON = p => JSON.parse(fs.readFileSync(p, 'utf-8'))

const upright = readJSON('hint-upright')
const rotated = readJSON('hint-rotated')

// const knownLeaves = [
//   '@chlorophytum/hint-embox::Hints::Stroke',
//   '@chlorophytum/hint-embox::Hints::Edge',
//   '@chlorophytum/hint-multi-stroke::MultiStrokeHint',
//   'Chlorophytum::CommonHints::LinkChain',
//   'Chlorophytum::CommonHints::Smooth',
//   'Chlorophytum::CommonHints::Interpolate',
// ]

// function visit(node) {
//   if (node.type === 'Chlorophytum::SequenceHint') {
//     return node.of.forEach(visit)
//   }

//   if (node.type === 'Chlorophytum::CommonHints::WithDirection' ||
//       node.type === '@chlorophytum/hint-embox::Hints::UseEmBox') {
//     return visit(node.inner)
//   }

//   if (!knownLeaves.includes(node.type)) {
//     throw new Error('node.type: ' + node.type)
//   }
// }

// for (const [k, v] of Object.entries(upright.glyphs)) {
//   visit(v)
// }

const newGlyphs = {}

for (const [k, v] of Object.entries(upright.glyphs)) {
  const vv = rotated.glyphs[k]

  assert(v.type === "Chlorophytum::SequenceHint")
  assert(v.of.length === 2)
  assert(v.of[0].type === "Chlorophytum::CommonHints::WithDirection")
  assert(v.of[0].dir === 2)
  assert(v.of[0].inner.type === "Chlorophytum::SequenceHint")
  assert(v.of[0].inner.of.length === 1)
  assert(v.of[0].inner.of[0].type === "@chlorophytum/hint-embox::Hints::UseEmBox")
  assert(v.of[0].inner.of[0].name === "Ideograph")
  assert(v.of[0].inner.of[0].inner.type === "Chlorophytum::SequenceHint")

  const excluded = [
    // '@chlorophytum/hint-embox::Hints::Stroke',
    // '@chlorophytum/hint-embox::Hints::Edge',
    // '@chlorophytum/hint-multi-stroke::MultiStrokeHint',
  ]

  const vvv = vv.of[0].inner.of[0].inner.of.flatMap(x => {
    if (excluded.includes(x.type)) return []
    if (0) {
    } else if (x.type === '@chlorophytum/hint-embox::Hints::Stroke') {
      return [{ ...x, type: '@chlorophytum/hint-embox::Hints::StrokeH' }]
    } else if (x.type === '@chlorophytum/hint-embox::Hints::Edge') {
      return [{ ...x, type: '@chlorophytum/hint-embox::Hints::EdgeH' }]
    } else if (x.type === '@chlorophytum/hint-multi-stroke::MultiStrokeHint') {
      return [{ ...x, type: '@chlorophytum/hint-multi-stroke::MultiStrokeHintH' }]
    }
    return [x]
  })
  // console.dir({'!!!': 0, vvv}, {depth: 9})

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
                name: "Ideograph",
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

console.log(JSON.stringify(out, null, 2))
