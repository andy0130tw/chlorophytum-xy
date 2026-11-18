import * as z from 'zod';
const PointIDRef = // z.codec(
 z.strictObject({
    kind: z.literal('PointID'),
    id: z.int(),
});
/*  z.int(),
  {
    decode: obj => obj.id,
    encode: id => ({ kind: 'PointID' as const, id }),
  }
)*/
const Direction = z.enum({ X: 1, Y: 2 });
const EmBoxName = z.literal(['Ideograph', 'Hiragana', 'Katakana']);
const SequenceHintT = (t) => z.strictObject({
    type: z.literal('Chlorophytum::SequenceHint'),
    of: t,
});
// const SequenceHint = z.strictObject({
//   type: z.literal('Chlorophytum::SequenceHint'),
//   get of() { return z.array(HintNode) },
// })
const WithDirectionDT = (d, t) => z.strictObject({
    type: z.literal('Chlorophytum::CommonHints::WithDirection'),
    dir: d,
    inner: t,
});
// const WithDirection = z.strictObject({
//   type: z.literal('Chlorophytum::CommonHints::WithDirection'),
//   dir: Direction,
//   get inner() { return HintNode },
// })
const UseEmBoxT = (t) => z.strictObject({
    type: z.literal('@chlorophytum/hint-embox::Hints::UseEmBox'),
    name: EmBoxName,
    inner: t,
});
// const UseEmBox = z.strictObject({
//   type: z.literal('@chlorophytum/hint-embox::Hints::UseEmBox'),
//   name: EmBoxName,
//   get inner() { return HintNode },
// })
const Smooth = z.strictObject({
    type: z.literal('Chlorophytum::CommonHints::Smooth'),
});
const LinkChain = z.strictObject({
    type: z.literal('Chlorophytum::CommonHints::LinkChain'),
    pts: z.array(PointIDRef).nonempty(),
});
const Interpolate = z.strictObject({
    type: z.literal('Chlorophytum::CommonHints::Interpolate'),
    rp1: PointIDRef,
    rp2: PointIDRef,
    pts: z.array(PointIDRef),
});
const IdeoEdgeHintT = (t) => z.strictObject({
    type: t,
    boxName: EmBoxName,
    top: z.boolean(),
    zEdge: PointIDRef,
});
const IdeoEdgeHint = IdeoEdgeHintT(z.literal('@chlorophytum/hint-embox::Hints::Edge'));
const IdeoEdgeHintH = IdeoEdgeHintT(z.literal('@chlorophytum/hint-embox::Hints::EdgeH'));
const IdeoStrokeHintT = (t) => z.strictObject({
    type: t,
    boxName: EmBoxName,
    atTop: z.boolean(),
    spur: z.boolean(),
    zsBot: PointIDRef,
    zsTop: PointIDRef,
    leavePixelsAbove: z.number(),
    leavePixelsBelow: z.number(),
});
const IdeoStrokeHint = IdeoStrokeHintT(z.literal('@chlorophytum/hint-embox::Hints::Stroke'));
const IdeoStrokeHintH = IdeoStrokeHintT(z.literal('@chlorophytum/hint-embox::Hints::StrokeH'));
const IdeoMultiStrokeHintT = (t) => z.strictObject({
    type: t,
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
        giveUpMode: z.optional(z.literal([-1, 1])),
    }),
});
const IdeoMultiStrokeHint = IdeoMultiStrokeHintT(z.literal('@chlorophytum/hint-multi-stroke::MultiStrokeHint'));
const IdeoMultiStrokeHintH = IdeoMultiStrokeHintT(z.literal('@chlorophytum/hint-multi-stroke::MultiStrokeHintH'));
export const CommonGlyphHint = z.discriminatedUnion('type', [
    LinkChain,
    Interpolate,
    IdeoEdgeHint,
    IdeoStrokeHint,
    IdeoMultiStrokeHint,
]);
export const CommonGlyphHintH = z.discriminatedUnion('type', [
    LinkChain,
    Interpolate,
    IdeoEdgeHintH,
    IdeoStrokeHintH,
    IdeoMultiStrokeHintH,
]);
const HintDescInnerT = (t) => SequenceHintT(z.tuple([
    UseEmBoxT(SequenceHintT(z.array(t)))
]));
const HintYDescInner = WithDirectionDT(Direction.extract(['Y']), HintDescInnerT(CommonGlyphHint));
const HintXDescInner = WithDirectionDT(Direction.extract(['X']), HintDescInnerT(CommonGlyphHintH));
export const HintRootNode = SequenceHintT(z.tuple([
    HintYDescInner,
    Smooth,
]));
export const CombinedHintRootNode = SequenceHintT(z.tuple([
    HintYDescInner,
    HintXDescInner,
    Smooth,
]));
