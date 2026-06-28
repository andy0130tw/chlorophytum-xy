import * as z from 'zod'

const PointIDRef = z.strictObject({
  kind: z.literal('PointID'),
  id: z.int(),
})

// const Direction = z.enum({ X: 1, Y: 2 })

const EmBoxName = z.enum([
  'Ideograph',
  'Hiragana',
  'Katakana',
])

/** @template {z.ZodArray<any> | z.ZodTuple<any[], null>} T */
const SequenceHintT = (/** @type {T} */ T) => z.strictObject({
  type: z.literal('Chlorophytum::SequenceHint'),
  of: T,
})

// const SequenceHint = z.strictObject({
//   type: z.literal('Chlorophytum::SequenceHint'),
//   get of() { return z.array(HintNode) },
// })

/**
 * @template {z.ZodType} D
 * @template {z.ZodType} T */
const WithDirectionDT = (/** @type {D} */ D, /** @type {T} */ T) => z.strictObject({
  type: z.literal('Chlorophytum::CommonHints::WithDirection'),
  dir: D,
  inner: T,
})

// const WithDirection = z.strictObject({
//   type: z.literal('Chlorophytum::CommonHints::WithDirection'),
//   dir: Direction,
//   get inner() { return HintNode },
// })

/** @template {z.ZodType} T */
const UseEmBoxT = (/** @type {T} */ T) => z.strictObject({
  type: z.literal('@chlorophytum/hint-embox::Hints::UseEmBox'),
  name: EmBoxName,
  inner: T,
})

// const UseEmBox = z.strictObject({
//   type: z.literal('@chlorophytum/hint-embox::Hints::UseEmBox'),
//   name: EmBoxName,
//   get inner() { return HintNode },
// })

const LinkChain = z.strictObject({
  type: z.literal('Chlorophytum::CommonHints::LinkChain'),
  pts: z.array(PointIDRef).nonempty(),
})

const Interpolate = z.strictObject({
  type: z.literal('Chlorophytum::CommonHints::Interpolate'),
  rp1: PointIDRef,
  rp2: PointIDRef,
  pts: z.array(PointIDRef),
})

const Smooth = z.strictObject({
  type: z.literal('Chlorophytum::CommonHints::Smooth'),
})

/** @template {z.ZodLiteral<string>} T */
const IdeoEdgeHintT = (/** @type {T} */ T) => z.strictObject({
  type: T,
  boxName: EmBoxName,
  top: z.boolean(),
  zEdge: PointIDRef,
})

const IdeoEdgeHint = IdeoEdgeHintT(z.literal('@chlorophytum/hint-embox::Hints::Edge'))
const IdeoEdgeHintH = IdeoEdgeHintT(z.literal('@chlorophytum/hint-embox::Hints::EdgeH'))

/** @template {z.ZodLiteral<string>} T */
const IdeoStrokeHintT = (/** @type {T} */ T) => z.strictObject({
  type: T,
  boxName: EmBoxName,
  atTop: z.boolean(),
  spur: z.boolean(),
  zsBot: PointIDRef,
  zsTop: PointIDRef,
  leavePixelsAbove: z.number(),
  leavePixelsBelow: z.number(),
})

const IdeoStrokeHint = IdeoStrokeHintT(z.literal('@chlorophytum/hint-embox::Hints::Stroke'))
const IdeoStrokeHintH = IdeoStrokeHintT(z.literal('@chlorophytum/hint-embox::Hints::StrokeH'))

/** @template {z.ZodLiteral<string>} T */
const IdeoMultiStrokeHintT = (/** @type {T} */ T) => z.strictObject({
  type: T,
  props: z.strictObject({
    emBoxName: EmBoxName,
    gapMinDist: z.array(z.number()),
    inkMinDist: z.array(z.number()),
    topBalanceForbidden: z.optional(z.boolean()),
    bottomBalanceForbidden: z.optional(z.boolean()),
    mergePriority: z.array(z.int()),
    allowCollide: z.array(z.boolean()),
    topPoint: z.nullable(PointIDRef),
    bottomPoint: z.nullable(PointIDRef),
    middleStrokes: z.array(z.tuple([PointIDRef, PointIDRef])).nonempty(),
    giveUpMode: z.optional(z.union([z.literal(-1), z.literal(1)])),
  }),
})

const IdeoMultiStrokeHint = IdeoMultiStrokeHintT(z.literal('@chlorophytum/hint-multi-stroke::MultiStrokeHint'))
const IdeoMultiStrokeHintH = IdeoMultiStrokeHintT(z.literal('@chlorophytum/hint-multi-stroke::MultiStrokeHintH'))

export const CommonGlyphHint = z.discriminatedUnion('type', [
  LinkChain,
  Interpolate,
  IdeoEdgeHint,
  IdeoStrokeHint,
  IdeoMultiStrokeHint,
])

export const CommonGlyphHintH = z.discriminatedUnion('type', [
  LinkChain,
  Interpolate,
  IdeoEdgeHintH,
  IdeoStrokeHintH,
  IdeoMultiStrokeHintH,
])

/** @template {z.ZodType} T */
const HintDescInnerT = (/** @type {T} */ T) => SequenceHintT(
  z.tuple([
    UseEmBoxT(SequenceHintT(z.array(T)))
  ]))

/** @typedef {z.output<typeof CommonGlyphHint>} CommonGlyphHint */
/** @typedef {z.output<typeof CommonGlyphHintH>} CommonGlyphHintH */

const HintYDescInner = WithDirectionDT(z.literal(2), HintDescInnerT(CommonGlyphHint))
const HintXDescInner = WithDirectionDT(z.literal(1), HintDescInnerT(CommonGlyphHintH))

export const HintRootNode = SequenceHintT(
  z.tuple([
    HintYDescInner,
    Smooth,
  ]))


export const CombinedHintRootNode = SequenceHintT(
  z.tuple([
    HintYDescInner,
    HintXDescInner,
    Smooth,
  ]))

// sadly this does not type check; see:
// https://github.com/colinhacks/zod/pull/6013
// export const HintNode = z.discriminatedUnion('type', [
//   WithDirection,
//   SequenceHint,
//   UseEmBox,
//   CommonGlyphHint,
//   Smooth,
// ])

/** @typedef {z.output<typeof HintRootNode>} HintRootNode */
/** @typedef {z.output<typeof CombinedHintRootNode>} CombinedHintRootNode */
