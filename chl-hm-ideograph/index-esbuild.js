var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../node_modules/.pnpm/typable@1.0.3/node_modules/typable/lib/type-rep.js
var require_type_rep = __commonJS({
  "../node_modules/.pnpm/typable@1.0.3/node_modules/typable/lib/type-rep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.implDynamicCast = exports.TypeRep = void 0;
    var TypeRep2 = class {
      constructor(uniqueName, ...inheritance) {
        this.uniqueName = uniqueName;
        const acceptableTypeNames = /* @__PURE__ */ new Set();
        for (const base of inheritance) {
          for (const tr of base.acceptableTypeNames)
            acceptableTypeNames.add(tr);
        }
        acceptableTypeNames.add(this.uniqueName);
        this.acceptableTypeNames = new Set(acceptableTypeNames);
      }
      is(type) {
        return this.acceptableTypeNames.has(type.uniqueName);
      }
      equal(that) {
        return this.is(that) && that.is(this);
      }
    };
    exports.TypeRep = TypeRep2;
    function implDynamicCast(tr, obj, trObj) {
      if (trObj.is(tr))
        return obj;
      else
        return void 0;
    }
    exports.implDynamicCast = implDynamicCast;
  }
});

// ../node_modules/.pnpm/typable@1.0.3/node_modules/typable/lib/index.js
var require_lib = __commonJS({
  "../node_modules/.pnpm/typable@1.0.3/node_modules/typable/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.implDynamicCast = exports.TypeRep = void 0;
    var type_rep_1 = require_type_rep();
    Object.defineProperty(exports, "TypeRep", { enumerable: true, get: function() {
      return type_rep_1.TypeRep;
    } });
    Object.defineProperty(exports, "implDynamicCast", { enumerable: true, get: function() {
      return type_rep_1.implDynamicCast;
    } });
  }
});

// packages/ideograph-hint-generator-1/src/index.ts
import { Interpolate as Interpolate2, LinkChain as LinkChain2, Sequence as Sequence3, Smooth as Smooth2, WithDirection as WithDirection3 } from "@chlorophytum/hint-common";

// packages/hint-embox/src/programs/twilight.ts
import { ControlValue, Template, Twilight } from "@chlorophytum/hltt-next";
import "@chlorophytum/hltt-next-expr";
import { Frac } from "@chlorophytum/hltt-next-type-system";
var Twilights;
((Twilights2) => {
  Twilights2.StrokeBottom = Template((group) => Twilight());
  Twilights2.StrokeTop = Template((group) => Twilight());
  Twilights2.SpurBottom = Template((group) => Twilight());
  Twilights2.SpurTop = Template((group) => Twilight());
  Twilights2.StrokeBottomOrig = Template((group) => Twilight());
  Twilights2.StrokeTopOrig = Template((group) => Twilight());
  Twilights2.SpurBottomOrig = Template((group) => Twilight());
  Twilights2.SpurTopOrig = Template((group) => Twilight());
  Twilights2.StrokeLeft = Template((group) => Twilight());
  Twilights2.StrokeRight = Template((group) => Twilight());
  Twilights2.SpurLeft = Template((group) => Twilight());
  Twilights2.SpurRight = Template((group) => Twilight());
  Twilights2.StrokeLeftOrig = Template((group) => Twilight());
  Twilights2.StrokeRightOrig = Template((group) => Twilight());
  Twilights2.SpurLeftOrig = Template((group) => Twilight());
  Twilights2.SpurRightOrig = Template((group) => Twilight());
})(Twilights || (Twilights = {}));
var ControlValues;
((ControlValues2) => {
  ControlValues2.StrokeBottom = Template((group) => ControlValue(Frac));
  ControlValues2.StrokeTop = Template((group) => ControlValue(Frac));
  ControlValues2.SpurBottom = Template((group) => ControlValue(Frac));
  ControlValues2.SpurTop = Template((group) => ControlValue(Frac));
  ControlValues2.StrokeLeft = Template((group) => ControlValue(Frac));
  ControlValues2.StrokeRight = Template((group) => ControlValue(Frac));
  ControlValues2.SpurLeft = Template((group) => ControlValue(Frac));
  ControlValues2.SpurRight = Template((group) => ControlValue(Frac));
})(ControlValues || (ControlValues = {}));

// packages/hint-embox/src/edge-hint.ts
import { HlttProgramSink as HlttProgramSink2 } from "@chlorophytum/final-hint-format-hltt";

// packages/hint-embox/src/constants.ts
var PREFIX = "@chlorophytum/hint-embox";

// packages/hint-embox/src/programs/edge.ts
import { Func } from "@chlorophytum/hltt-next";
import { add, gc, sub } from "@chlorophytum/hltt-next-expr";
import { Mdap, Scfs } from "@chlorophytum/hltt-next-stmt";
import { GlyphPoint, TwilightPoint } from "@chlorophytum/hltt-next-type-system";
var THintBottomEdge = Func(TwilightPoint, TwilightPoint, GlyphPoint).def(
  function* ($, zBot, zoBot, zsBot) {
    const adjustedDist = sub(gc.cur(zBot), gc.cur(zoBot));
    yield Mdap(zsBot);
    yield Scfs(zsBot, add(gc.orig(zsBot), adjustedDist));
  }
);
var THintTopEdge = Func(TwilightPoint, TwilightPoint, GlyphPoint).def(
  function* ($, zTop, zoTop, zsTop) {
    const adjustedDist = sub(gc.cur(zTop), gc.cur(zoTop));
    yield Mdap(zsTop);
    yield Scfs(zsTop, add(gc.orig(zsTop), adjustedDist));
  }
);

// packages/hint-embox/src/use-em-box.ts
var import_typable = __toESM(require_lib());
import { HlttProgramSink } from "@chlorophytum/final-hint-format-hltt";
var UseEmBox;
((UseEmBox2) => {
  UseEmBox2.ReadyPropT = (name) => new import_typable.TypeRep(`${PREFIX}::Init::Ready::` + name);
  const TAG = `${PREFIX}::Hints::UseEmBox`;
  class Hint {
    constructor(name, inner) {
      this.name = name;
      this.inner = inner;
    }
    toJSON() {
      return {
        type: TAG,
        name: this.name,
        inner: this.inner.toJSON()
      };
    }
    createInnerBag(bag) {
      const ready = (0, UseEmBox2.ReadyPropT)(this.name);
      const bag1 = bag.extend();
      bag1.set(ready, true);
      return bag1;
    }
    createCompiler(bag, sink) {
      const inner = this.inner.createCompiler(this.createInnerBag(bag), sink);
      if (!inner) return null;
      const hlttSink = sink.dynamicCast(HlttProgramSink);
      if (hlttSink) return new HlttCompiler(hlttSink, this.name, inner);
      return null;
    }
    traverse(bag, traveller) {
      traveller.traverse(this.createInnerBag(bag), this.inner);
    }
  }
  UseEmBox2.Hint = Hint;
  class HintFactory {
    constructor() {
      this.type = TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json, general) {
      if (json && json.type === TAG && json.inner) {
        const inner = general.readJson(json.inner, general);
        if (inner) return new Hint(json.name, inner);
      }
      return null;
    }
  }
  UseEmBox2.HintFactory = HintFactory;
  class HlttCompiler {
    constructor(sink, name, inner) {
      this.sink = sink;
      this.name = name;
      this.inner = inner;
    }
    doCompile() {
      this.inner.doCompile();
    }
  }
  UseEmBox2.HlttCompiler = HlttCompiler;
})(UseEmBox || (UseEmBox = {}));

// packages/hint-embox/src/edge-hint.ts
var EmBoxEdge;
((EmBoxEdge2) => {
  const TAG = `${PREFIX}::Hints::Edge`;
  class Hint {
    constructor(boxName, top, zEdge) {
      this.boxName = boxName;
      this.top = top;
      this.zEdge = zEdge;
    }
    toJSON() {
      return {
        type: TAG,
        boxName: this.boxName,
        top: this.top,
        zEdge: this.zEdge
      };
    }
    createCompiler(bag, sink) {
      const ready = UseEmBox.ReadyPropT(this.boxName);
      if (!bag.get(ready)) throw new Error(`Em box ${this.boxName} is not initialized.`);
      const hlttSink = sink.dynamicCast(HlttProgramSink2);
      if (hlttSink) return new HlttCompiler(hlttSink, this.boxName, this.top, this.zEdge);
      return null;
    }
    traverse() {
    }
  }
  EmBoxEdge2.Hint = Hint;
  class HintFactory {
    constructor() {
      this.type = TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAG) {
        return new Hint(json.boxName, json.top, json.zEdge);
      }
      return null;
    }
  }
  EmBoxEdge2.HintFactory = HintFactory;
  class HlttCompiler {
    constructor(sink, boxName, top, zEdge) {
      this.sink = sink;
      this.boxName = boxName;
      this.top = top;
      this.zEdge = zEdge;
    }
    doCompile() {
      const { boxName, top, zEdge } = this;
      const zidEdge = this.sink.resolveGlyphPoint(zEdge);
      this.sink.addSegment(function* ($) {
        if (top) {
          yield THintTopEdge(
            Twilights.SpurTop(boxName),
            Twilights.SpurTopOrig(boxName),
            zidEdge
          );
        } else {
          yield THintBottomEdge(
            Twilights.SpurBottom(boxName),
            Twilights.SpurBottomOrig(boxName),
            zidEdge
          );
        }
      });
    }
  }
  const TAGH = `${PREFIX}::Hints::EdgeH`;
  class HintHFactory {
    constructor() {
      this.type = TAGH;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAGH) {
        return new HintH(json.boxName, json.top, json.zEdge);
      }
      return null;
    }
  }
  EmBoxEdge2.HintHFactory = HintHFactory;
  class HintH {
    constructor(boxName, top, zEdge) {
      this.boxName = boxName;
      this.top = top;
      this.zEdge = zEdge;
    }
    toJSON() {
      return {
        type: TAGH,
        boxName: this.boxName,
        top: this.top,
        zEdge: this.zEdge
      };
    }
    createCompiler(bag, sink) {
      const ready = UseEmBox.ReadyPropT(this.boxName);
      if (!bag.get(ready)) throw new Error(`Em box ${this.boxName} is not initialized.`);
      const hlttSink = sink.dynamicCast(HlttProgramSink2);
      if (hlttSink) return new HlttCompilerH(hlttSink, this.boxName, this.top, this.zEdge);
      return null;
    }
    traverse() {
    }
  }
  EmBoxEdge2.HintH = HintH;
  class HlttCompilerH {
    constructor(sink, boxName, top, zEdge) {
      this.sink = sink;
      this.boxName = boxName;
      this.top = top;
      this.zEdge = zEdge;
    }
    doCompile() {
      const { boxName, top, zEdge } = this;
      const zidEdge = this.sink.resolveGlyphPoint(zEdge);
      this.sink.addSegment(function* ($) {
        if (top) {
          yield THintTopEdge(
            Twilights.SpurRight(boxName),
            Twilights.SpurRightOrig(boxName),
            zidEdge
          );
        } else {
          yield THintBottomEdge(
            Twilights.SpurLeft(boxName),
            Twilights.SpurLeftOrig(boxName),
            zidEdge
          );
        }
      });
    }
  }
})(EmBoxEdge || (EmBoxEdge = {}));

// packages/hint-embox/src/em-box-shared.ts
import { HlttProgramSink as HlttProgramSink3 } from "@chlorophytum/final-hint-format-hltt";
import { Miap } from "@chlorophytum/hltt-next-stmt";

// packages/hint-embox/src/programs/init.ts
import { Func as Func2, Template as Template2 } from "@chlorophytum/hltt-next";
import {
  abs,
  add as add2,
  div,
  gc as gc2,
  i2f,
  lt,
  max,
  min,
  mppem,
  round,
  sub as sub2
} from "@chlorophytum/hltt-next-expr";
import { If, Mdap as Mdap2, Scfs as Scfs2 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac2, TwilightPoint as TwilightPoint2 } from "@chlorophytum/hltt-next-type-system";
var BiRound = Template2(
  (rate) => Func2(TwilightPoint2, TwilightPoint2, TwilightPoint2, TwilightPoint2).def(
    function* ($, a, b, aOrig, bOrig) {
      const widthExpander = $.Local(Frac2);
      yield widthExpander.set(min(0.5, div(1, max(1, i2f(mppem())))));
      const roundedDist = $.Local(Frac2);
      yield roundedDist.set(
        round.gray(add2(widthExpander, sub2(gc2.cur(bOrig), gc2.cur(aOrig))))
      );
      const roundYBottom = $.Local(Frac2);
      yield roundYBottom.set(round.gray(gc2.cur(aOrig)));
      const roundBottomTotalMove = $.Local(Frac2);
      yield roundBottomTotalMove.set(
        add2(
          abs(sub2(gc2.cur(aOrig), roundYBottom)),
          abs(sub2(gc2.cur(bOrig), add2(roundYBottom, roundedDist)))
        )
      );
      const roundYTop = $.Local(Frac2);
      yield roundYTop.set(round.gray(gc2.cur(bOrig)));
      const roundTopTotalMove = $.Local(Frac2);
      yield roundTopTotalMove.set(
        add2(
          abs(sub2(gc2.cur(bOrig), roundYTop)),
          abs(sub2(gc2.cur(aOrig), sub2(roundYTop, roundedDist)))
        )
      );
      yield If(lt(roundTopTotalMove, roundBottomTotalMove)).Then(function* () {
        yield Scfs2(b, roundYTop);
        yield Scfs2(a, sub2(roundYTop, roundedDist));
      }).Else(function* () {
        yield Scfs2(a, roundYBottom);
        yield Scfs2(b, add2(roundYBottom, roundedDist));
      });
    }
  )
);
var ULink = Func2(TwilightPoint2, TwilightPoint2, TwilightPoint2, TwilightPoint2).def(
  function* ($, a, b, aOrig, bOrig) {
    yield Scfs2(b, add2(gc2.cur(a), sub2(gc2.cur(bOrig), gc2.cur(aOrig))));
  }
);
var TInitEmBoxTwilightPoints = Template2(
  (rate) => Func2(
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2,
    TwilightPoint2
  ).def(
    function* ($, strokeBottom, strokeTop, spurBottom, spurTop, strokeBottomOrig, strokeTopOrig, spurBottomOrig, spurTopOrig) {
      yield Mdap2(strokeBottom);
      yield Mdap2(strokeTop);
      yield Mdap2(spurBottom);
      yield Mdap2(spurTop);
      yield BiRound(rate)(strokeBottom, strokeTop, strokeBottomOrig, strokeTopOrig);
      yield ULink(strokeBottom, spurBottom, strokeBottomOrig, spurBottomOrig);
      yield ULink(strokeTop, spurTop, strokeTopOrig, spurTopOrig);
    }
  )
);

// packages/hint-embox/src/em-box-shared.ts
var EmBoxShared;
((EmBoxShared2) => {
  const TAG = `${PREFIX}::Hints::Shared`;
  class Hint {
    constructor(props) {
      this.props = props;
    }
    toJSON() {
      return {
        type: TAG,
        props: this.props
      };
    }
    createCompiler(bag, sink) {
      const hlttSink = sink.dynamicCast(HlttProgramSink3);
      if (hlttSink) return new HlttCompiler(hlttSink, this.props);
      return null;
    }
    traverse() {
    }
  }
  EmBoxShared2.Hint = Hint;
  class HintFactory {
    constructor() {
      this.type = TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAG) {
        return new Hint(json.props);
      }
      return null;
    }
  }
  EmBoxShared2.HintFactory = HintFactory;
  class HlttCompiler {
    constructor(sink, props) {
      this.sink = sink;
      this.props = props;
    }
    doCompile() {
      const props = this.props;
      const cvSpurBottom = ControlValues.SpurBottom(props.name);
      const cvSpurTop = ControlValues.SpurTop(props.name);
      const cvStrokeBottom = ControlValues.StrokeBottom(props.name);
      const cvStrokeTop = ControlValues.StrokeTop(props.name);
      this.sink.setDefaultControlValue(cvSpurBottom, props.spurBottom);
      this.sink.setDefaultControlValue(cvSpurTop, props.spurTop);
      this.sink.setDefaultControlValue(cvStrokeBottom, props.strokeBottom);
      this.sink.setDefaultControlValue(cvStrokeTop, props.strokeTop);
      this.sink.addSegment(function* ($) {
        const spurBottom = Twilights.SpurBottom(props.name);
        const spurTop = Twilights.SpurTop(props.name);
        const strokeBottom = Twilights.StrokeBottom(props.name);
        const strokeTop = Twilights.StrokeTop(props.name);
        const spurBottomOrig = Twilights.SpurBottomOrig(props.name);
        const spurTopOrig = Twilights.SpurTopOrig(props.name);
        const strokeBottomOrig = Twilights.StrokeBottomOrig(props.name);
        const strokeTopOrig = Twilights.StrokeTopOrig(props.name);
        yield Miap(strokeBottom, cvStrokeBottom.ptr);
        yield Miap(strokeTop, cvStrokeTop.ptr);
        yield Miap(spurBottom, cvSpurBottom.ptr);
        yield Miap(spurTop, cvSpurTop.ptr);
        yield Miap(strokeBottomOrig, cvStrokeBottom.ptr);
        yield Miap(strokeTopOrig, cvStrokeTop.ptr);
        yield Miap(spurBottomOrig, cvSpurBottom.ptr);
        yield Miap(spurTopOrig, cvSpurTop.ptr);
        yield TInitEmBoxTwilightPoints(props.smallSizeExpansionRate)(
          strokeBottom,
          strokeTop,
          spurBottom,
          spurTop,
          strokeBottomOrig,
          strokeTopOrig,
          spurBottomOrig,
          spurTopOrig
        );
      });
    }
  }
  const TAGH = `${PREFIX}::Hints::SharedH`;
  class HintH {
    constructor(props) {
      this.props = props;
    }
    toJSON() {
      return {
        type: TAGH,
        props: this.props
      };
    }
    createCompiler(bag, sink) {
      const hlttSink = sink.dynamicCast(HlttProgramSink3);
      if (hlttSink) return new HlttCompilerH(hlttSink, this.props);
      return null;
    }
    traverse() {
    }
  }
  EmBoxShared2.HintH = HintH;
  class HintHFactory {
    constructor() {
      this.type = TAGH;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAGH) {
        return new HintH(json.props);
      }
      return null;
    }
  }
  EmBoxShared2.HintHFactory = HintHFactory;
  class HlttCompilerH {
    constructor(sink, props) {
      this.sink = sink;
      this.props = props;
    }
    doCompile() {
      const props = this.props;
      const cvSpurLeft = ControlValues.SpurLeft(props.name);
      const cvSpurRight = ControlValues.SpurRight(props.name);
      const cvStrokeLeft = ControlValues.StrokeLeft(props.name);
      const cvStrokeRight = ControlValues.StrokeRight(props.name);
      this.sink.setDefaultControlValue(cvSpurLeft, props.spurLeft);
      this.sink.setDefaultControlValue(cvSpurRight, props.spurRight);
      this.sink.setDefaultControlValue(cvStrokeLeft, props.strokeLeft);
      this.sink.setDefaultControlValue(cvStrokeRight, props.strokeRight);
      this.sink.addSegment(function* ($) {
        const spurLeft = Twilights.SpurLeft(props.name);
        const spurRight = Twilights.SpurRight(props.name);
        const strokeLeft = Twilights.StrokeLeft(props.name);
        const strokeRight = Twilights.StrokeRight(props.name);
        const spurLeftOrig = Twilights.SpurLeftOrig(props.name);
        const spurRightOrig = Twilights.SpurRightOrig(props.name);
        const strokeLeftOrig = Twilights.StrokeLeftOrig(props.name);
        const strokeRightOrig = Twilights.StrokeRightOrig(props.name);
        yield Miap(strokeLeft, cvStrokeLeft.ptr);
        yield Miap(strokeRight, cvStrokeRight.ptr);
        yield Miap(spurLeft, cvSpurLeft.ptr);
        yield Miap(spurRight, cvSpurRight.ptr);
        yield Miap(strokeLeftOrig, cvStrokeLeft.ptr);
        yield Miap(strokeRightOrig, cvStrokeRight.ptr);
        yield Miap(spurLeftOrig, cvSpurLeft.ptr);
        yield Miap(spurRightOrig, cvSpurRight.ptr);
        yield TInitEmBoxTwilightPoints(props.smallSizeExpansionRate)(
          strokeLeft,
          strokeRight,
          spurLeft,
          spurRight,
          strokeLeftOrig,
          strokeRightOrig,
          spurLeftOrig,
          spurRightOrig
        );
      });
    }
  }
})(EmBoxShared || (EmBoxShared = {}));

// packages/hint-embox/src/stroke-hint.ts
import { HlttProgramSink as HlttProgramSink4 } from "@chlorophytum/final-hint-format-hltt";

// packages/hint-programs-stroke-adjust/src/phase-control.ts
import { Func as Func3, Template as Template3 } from "@chlorophytum/hltt-next";
import { add as add3, ceiling, div as div2, i2f as i2f2, max as max2, mppem as mppem2, mul, sub as sub3 } from "@chlorophytum/hltt-next-expr";
import { Frac as Frac3 } from "@chlorophytum/hltt-next-type-system";
var AdjustStrokeDistT = Template3(
  (rate) => Func3(Frac3).returns(Frac3).def(function* ($, d) {
    const ceilDist = $.Local(Frac3);
    yield ceilDist.set(ceiling(d));
    const kPhase = $.Local(Frac3);
    yield kPhase.set(sub3(1, div2(1, max2(1, mul(1 / rate, i2f2(mppem2()))))));
    yield $.Return(add3(1, mul(sub3(d, 1), kPhase)));
  })
);

// packages/hint-programs-stroke-adjust/src/vis-dist.ts
import { Func as Func4, Template as Template4 } from "@chlorophytum/hltt-next";
import { add as add4, ceiling as ceiling2, floor, gc as gc3, gteq, sub as sub4 } from "@chlorophytum/hltt-next-expr";
import { If as If2 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac4 } from "@chlorophytum/hltt-next-type-system";
var VisFloorT = Template4(
  (consideredDark) => Func4(Frac4, Frac4).returns(Frac4).def(function* ($, x, fillRate) {
    yield If2(gteq(sub4(x, floor(x)), consideredDark)).Then($.Return(add4(1, floor(x)))).Else($.Return(floor(x)));
  })
);
var VisCeilT = Template4(
  (consideredDark) => Func4(Frac4, Frac4).returns(Frac4).def(function* ($, x, fillRate) {
    yield If2(gteq(sub4(ceiling2(x), x), consideredDark)).Then($.Return(sub4(ceiling2(x), 1))).Else($.Return(ceiling2(x)));
  })
);
var VisDistT = Template4(
  (ConsideredDark3, Tb, Tt) => Func4(Tb, Tt, Frac4, Frac4).returns(Frac4).def(function* ($, zBot, zTop, frBot, frTop) {
    yield $.Return(
      sub4(
        VisFloorT(ConsideredDark3)(gc3.cur(zTop), frTop),
        VisCeilT(ConsideredDark3)(gc3.cur(zBot), frBot)
      )
    );
  })
);
var OctDistOrigT = Template4(
  (Tb, Tt) => Func4(Tb, Tt).returns(Frac4).def(function* ($, zBot, zTop) {
    yield $.Return(sub4(gc3.orig(zTop), gc3.orig(zBot)));
  })
);

// packages/hint-embox/src/programs/boundary.ts
import { Func as Func5 } from "@chlorophytum/hltt-next";
import { add as add5, div as div3, floor as floor2, gc as gc4, gteq as gteq2, max as max3, mul as mul2, sub as sub5 } from "@chlorophytum/hltt-next-expr";
import { If as If3, Scfs as Scfs3 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac5, GlyphPoint as GlyphPoint2, TwilightPoint as TwilightPoint3 } from "@chlorophytum/hltt-next-type-system";
var ComputeYAvgEmboxShift = Func5(TwilightPoint3, TwilightPoint3, TwilightPoint3, TwilightPoint3).returns(Frac5).def(function* ($, zBot, zTop, zBotOrig, zTopOrig) {
  yield $.Return(
    mul2(
      1 / 2,
      add5(sub5(gc4.cur(zBot), gc4.cur(zBotOrig)), sub5(gc4.cur(zTop), gc4.cur(zTopOrig)))
    )
  );
});
var HintBottomStroke = Func5(
  TwilightPoint3,
  TwilightPoint3,
  TwilightPoint3,
  TwilightPoint3,
  GlyphPoint2,
  GlyphPoint2
).def(function* ($, zBot, zTop, zBotOrig, zTopOrig, zsBot, zsTop) {
  const dBelowOrig = $.Local(Frac5);
  const dAboveOrig = $.Local(Frac5);
  const wOrig = $.Local(Frac5);
  const wCur = $.Local(Frac5);
  const spaceCur = $.Local(Frac5);
  yield dBelowOrig.set(sub5(gc4.orig(zsBot), gc4.cur(zBotOrig)));
  yield dAboveOrig.set(sub5(gc4.cur(zTopOrig), gc4.orig(zsTop)));
  yield wOrig.set(sub5(gc4.orig(zsTop), gc4.orig(zsBot)));
  yield wCur.set(max3(3 / 5, AdjustStrokeDistT(2)(wOrig)));
  yield spaceCur.set(sub5(sub5(gc4.cur(zTop), gc4.cur(zBot)), wCur));
  const yInterpolated = $.Local(Frac5);
  yield yInterpolated.set(
    add5(
      gc4.cur(zBot),
      max3(0, floor2(mul2(spaceCur, div3(dBelowOrig, add5(dBelowOrig, dAboveOrig)))))
    )
  );
  yield Scfs3(zsBot, yInterpolated);
  yield Scfs3(zsTop, add5(yInterpolated, wCur));
});
var HintTopStroke = Func5(
  TwilightPoint3,
  TwilightPoint3,
  TwilightPoint3,
  TwilightPoint3,
  GlyphPoint2,
  GlyphPoint2
).def(function* ($, zBot, zTop, zBotOrig, zTopOrig, zsBot, zsTop) {
  const dBelowOrig = $.Local(Frac5);
  const dAboveOrig = $.Local(Frac5);
  const wOrig = $.Local(Frac5);
  const wCur = $.Local(Frac5);
  const spaceCur = $.Local(Frac5);
  yield dBelowOrig.set(sub5(gc4.orig(zsBot), gc4.cur(zBotOrig)));
  yield dAboveOrig.set(sub5(gc4.cur(zTopOrig), gc4.orig(zsTop)));
  yield wOrig.set(sub5(gc4.orig(zsTop), gc4.orig(zsBot)));
  yield wCur.set(max3(3 / 5, AdjustStrokeDistT(2)(wOrig)));
  yield spaceCur.set(sub5(sub5(gc4.cur(zTop), gc4.cur(zBot)), wCur));
  const yInterpolated = $.Local(Frac5);
  yield yInterpolated.set(
    sub5(
      gc4.cur(zTop),
      max3(0, floor2(mul2(spaceCur, div3(dAboveOrig, add5(dBelowOrig, dAboveOrig)))))
    )
  );
  yield If3(
    gteq2(
      yInterpolated,
      add5(gc4.orig(zsTop), add5(ComputeYAvgEmboxShift(zBot, zTop, zBotOrig, zTopOrig), 1))
    )
  ).Then(function* () {
    yield yInterpolated.set(sub5(yInterpolated, 1));
  });
  yield Scfs3(zsTop, yInterpolated);
  yield Scfs3(zsBot, sub5(yInterpolated, wCur));
});

// packages/hint-embox/src/programs/free.ts
import { Func as Func6 } from "@chlorophytum/hltt-next";
import { abs as abs2, add as add6, div as div4, gc as gc5, gt, lt as lt2, max as max4, mul as mul3, round as round2, sub as sub6 } from "@chlorophytum/hltt-next-expr";
import { If as If4, Scfs as Scfs4 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac6, GlyphPoint as GlyphPoint3, TwilightPoint as TwilightPoint4 } from "@chlorophytum/hltt-next-type-system";
var HintStrokeFreeAuto = Func6(
  Frac6,
  Frac6,
  TwilightPoint4,
  TwilightPoint4,
  TwilightPoint4,
  TwilightPoint4,
  GlyphPoint3,
  GlyphPoint3
).def(function* ($, mdBot, mdTop, zBot, zTop, zBotOrig, zTopOrig, zsBot, zsTop) {
  const dBelowOrig = $.Local(Frac6);
  const dAboveOrig = $.Local(Frac6);
  const wOrig = $.Local(Frac6);
  const wCur = $.Local(Frac6);
  const spaceCur = $.Local(Frac6);
  const urTop = $.Local(Frac6);
  const rTop = $.Local(Frac6);
  const urBot = $.Local(Frac6);
  const rBot = $.Local(Frac6);
  yield dBelowOrig.set(sub6(gc5.orig(zsBot), gc5.cur(zBotOrig)));
  yield dAboveOrig.set(sub6(gc5.cur(zTopOrig), gc5.orig(zsTop)));
  yield wOrig.set(sub6(gc5.orig(zsTop), gc5.orig(zsBot)));
  yield wCur.set(max4(3 / 5, AdjustStrokeDistT(2)(wOrig)));
  yield spaceCur.set(sub6(sub6(gc5.cur(zTop), gc5.cur(zBot)), wCur));
  yield urTop.set(sub6(gc5.cur(zTop), mul3(spaceCur, div4(dAboveOrig, add6(dBelowOrig, dAboveOrig)))));
  yield urBot.set(add6(gc5.cur(zBot), mul3(spaceCur, div4(dBelowOrig, add6(dBelowOrig, dAboveOrig)))));
  yield rTop.set(round2.white(urTop));
  yield rBot.set(round2.white(urBot));
  yield If4(gt(abs2(sub6(rTop, urTop)), abs2(sub6(rBot, urBot)))).Then(function* () {
    yield Scfs4(zsBot, rBot);
    yield Scfs4(zsTop, add6(rBot, wCur));
  }).Else(function* () {
    yield Scfs4(zsTop, rTop);
    yield Scfs4(zsBot, sub6(rTop, wCur));
  });
  yield If4(lt2(gc5.cur(zsTop), add6(gc5.cur(zBot), mdBot))).Then(function* () {
    yield Scfs4(zsBot, add6(gc5.cur(zsBot), 1));
    yield Scfs4(zsTop, add6(gc5.cur(zsTop), 1));
  });
  yield If4(gt(gc5.cur(zsBot), sub6(gc5.cur(zTop), mdTop))).Then(function* () {
    yield Scfs4(zsBot, sub6(gc5.cur(zsBot), 1));
    yield Scfs4(zsTop, sub6(gc5.cur(zsTop), 1));
  });
});

// packages/hint-embox/src/stroke-hint.ts
var EmBoxStroke;
((EmBoxStroke2) => {
  const TAG = `${PREFIX}::Hints::Stroke`;
  const DistinguishDist = 3 / 5;
  class Hint {
    constructor(boxName, props) {
      this.boxName = boxName;
      this.props = props;
    }
    toJSON() {
      return {
        type: TAG,
        boxName: this.boxName,
        ...this.props
      };
    }
    createCompiler(bag, sink) {
      const ready = bag.get(UseEmBox.ReadyPropT(this.boxName));
      if (!ready) throw new Error(`Em box ${this.boxName} is not initialized.`);
      const hlttSink = sink.dynamicCast(HlttProgramSink4);
      if (hlttSink) {
        return new HlttCompiler(hlttSink, this.boxName, this.props);
      }
      return null;
    }
    traverse() {
    }
  }
  EmBoxStroke2.Hint = Hint;
  class HintFactory {
    constructor() {
      this.type = TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAG) {
        return new Hint(json.boxName, json);
      }
      return null;
    }
  }
  EmBoxStroke2.HintFactory = HintFactory;
  class HlttCompiler {
    constructor(sink, boxName, props) {
      this.sink = sink;
      this.boxName = boxName;
      this.props = props;
    }
    doCompile() {
      const { boxName, props } = this;
      const zsBot = this.sink.resolveGlyphPoint(this.props.zsBot);
      const zsTop = this.sink.resolveGlyphPoint(this.props.zsTop);
      this.sink.addSegment(function* ($) {
        const spurBottom = Twilights.SpurBottom(boxName);
        const spurTop = Twilights.SpurTop(boxName);
        const strokeBottom = Twilights.StrokeBottom(boxName);
        const strokeTop = Twilights.StrokeTop(boxName);
        const spurBottomOrig = Twilights.SpurBottomOrig(boxName);
        const spurTopOrig = Twilights.SpurTopOrig(boxName);
        const strokeBottomOrig = Twilights.StrokeBottomOrig(boxName);
        const strokeTopOrig = Twilights.StrokeTopOrig(boxName);
        if (props.spur) {
          yield HintStrokeFreeAuto(
            DistinguishDist + Math.max(0, props.leavePixelsBelow),
            DistinguishDist + Math.max(0, props.leavePixelsAbove),
            spurBottom,
            spurTop,
            spurBottomOrig,
            spurTopOrig,
            zsBot,
            zsTop
          );
        } else if (props.atTop) {
          yield HintTopStroke(
            strokeBottom,
            strokeTop,
            strokeBottomOrig,
            strokeTopOrig,
            zsBot,
            zsTop
          );
        } else {
          yield HintBottomStroke(
            strokeBottom,
            strokeTop,
            strokeBottomOrig,
            strokeTopOrig,
            zsBot,
            zsTop
          );
        }
      });
    }
  }
  EmBoxStroke2.HlttCompiler = HlttCompiler;
  const TAGH = `${PREFIX}::Hints::StrokeH`;
  class HintH {
    constructor(boxName, props) {
      this.boxName = boxName;
      this.props = props;
    }
    toJSON() {
      return {
        type: TAGH,
        boxName: this.boxName,
        ...this.props
      };
    }
    createCompiler(bag, sink) {
      const ready = bag.get(UseEmBox.ReadyPropT(this.boxName));
      if (!ready) throw new Error(`Em box ${this.boxName} is not initialized.`);
      const hlttSink = sink.dynamicCast(HlttProgramSink4);
      if (hlttSink) {
        return new HlttCompilerH(hlttSink, this.boxName, this.props);
      }
      return null;
    }
    traverse() {
    }
  }
  EmBoxStroke2.HintH = HintH;
  class HintHFactory {
    constructor() {
      this.type = TAGH;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAGH) {
        return new HintH(json.boxName, json);
      }
      return null;
    }
  }
  EmBoxStroke2.HintHFactory = HintHFactory;
  class HlttCompilerH {
    constructor(sink, boxName, props) {
      this.sink = sink;
      this.boxName = boxName;
      this.props = props;
    }
    doCompile() {
      const { boxName, props } = this;
      const zsBot = this.sink.resolveGlyphPoint(this.props.zsBot);
      const zsTop = this.sink.resolveGlyphPoint(this.props.zsTop);
      this.sink.addSegment(function* ($) {
        const spurBottom = Twilights.SpurLeft(boxName);
        const spurTop = Twilights.SpurRight(boxName);
        const strokeBottom = Twilights.StrokeLeft(boxName);
        const strokeTop = Twilights.StrokeRight(boxName);
        const spurBottomOrig = Twilights.SpurLeftOrig(boxName);
        const spurTopOrig = Twilights.SpurRightOrig(boxName);
        const strokeBottomOrig = Twilights.StrokeLeftOrig(boxName);
        const strokeTopOrig = Twilights.StrokeRightOrig(boxName);
        if (props.spur) {
          yield HintStrokeFreeAuto(
            DistinguishDist + Math.max(0, props.leavePixelsBelow),
            DistinguishDist + Math.max(0, props.leavePixelsAbove),
            spurBottom,
            spurTop,
            spurBottomOrig,
            spurTopOrig,
            zsBot,
            zsTop
          );
        } else if (props.atTop) {
          yield HintTopStroke(
            strokeBottom,
            strokeTop,
            strokeBottomOrig,
            strokeTopOrig,
            zsBot,
            zsTop
          );
        } else {
          yield HintBottomStroke(
            strokeBottom,
            strokeTop,
            strokeBottomOrig,
            strokeTopOrig,
            zsBot,
            zsTop
          );
        }
      });
    }
  }
})(EmBoxStroke || (EmBoxStroke = {}));

// packages/hint-multi-stroke/src/hint.ts
import { HlttProgramSink as HlttProgramSink5 } from "@chlorophytum/final-hint-format-hltt";
import { GlyphPoint as GlyphPoint13, TwilightPoint as TwilightPoint5 } from "@chlorophytum/hltt-next-type-system";
import * as _ from "lodash";

// packages/hint-multi-stroke/src/constants.ts
var PREFIX2 = "@chlorophytum/hint-multi-stroke";

// packages/hint-multi-stroke/src/hltt-programs/index.ts
import { Func as Func18, Template as Template14 } from "@chlorophytum/hltt-next";
import {
  add as add18,
  floor as floor3,
  i2f as i2f4,
  lteq as lteq5,
  max as max9,
  min as min4,
  mppem as mppem3,
  mul as mul13,
  round as round6,
  sub as sub15,
  unsafeCoerce
} from "@chlorophytum/hltt-next-expr";
import { VarArgs, While as While10 } from "@chlorophytum/hltt-next-stmt";
import { Bool as Bool5, Frac as Frac17, GlyphPoint as GlyphPoint12, Int as Int10, Store as Store11 } from "@chlorophytum/hltt-next-type-system";

// packages/hint-multi-stroke/src/hltt-programs/commons.ts
import { Func as Func7, Template as Template5 } from "@chlorophytum/hltt-next";
import { add as add8, div as div5, eq, lt as lt3, lteq, sub as sub7 } from "@chlorophytum/hltt-next-expr";
import { If as If5, While } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac7, GlyphPoint as GlyphPoint4, Int, Store } from "@chlorophytum/hltt-next-type-system";

// packages/hint-multi-stroke/src/hltt-programs/macros.ts
import { add as add7, mul as mul4 } from "@chlorophytum/hltt-next-expr";
var ConsideredDark = 3 / 4;
function midBot(zMids, index) {
  return zMids.part(mul4(index, 2));
}
function midTop(zMids, index) {
  return zMids.part(add7(mul4(index, 2), 1));
}

// packages/hint-multi-stroke/src/hltt-programs/commons.ts
var ConsideredDark2 = 4 / 5;
var GetFillRateT = Template5(
  (Tb, Tt) => Func7(Int, Tb, Tt, Store(GlyphPoint4)).returns(Frac7).def(function* ($, N, zBot, zTop, pZMids) {
    const ink = $.Local(Frac7);
    const gap = $.Local(Frac7);
    yield ink.set(0);
    yield gap.set(0);
    const j = $.Local(Int);
    const gapDist = $.Local(Frac7);
    yield j.set(0);
    yield gapDist.set(0);
    yield While(lteq(j, N), function* () {
      yield gapDist.set(FetchOrigGap(Tb, Tt)(N, j, zBot, zTop, pZMids));
      yield gap.set(add8(gap, gapDist));
      yield j.set(add8(j, 1));
    });
    yield j.set(0);
    yield While(lt3(j, N), function* () {
      yield ink.set(
        add8(
          ink,
          OctDistOrigT(GlyphPoint4, GlyphPoint4)(midBot(pZMids, j), midTop(pZMids, j))
        )
      );
      yield j.set(add8(j, 1));
    });
    yield $.Return(div5(gap, add8(gap, ink)));
  })
);
var FetchOrigGap = Template5(
  (Tb, Tt) => Func7(Int, Int, Tb, Tt, Store(GlyphPoint4)).returns(Frac7).def(function* ($, N, j, zBot, zTop, pZMids) {
    yield If5(eq(j, 0)).Then(
      $.Return(OctDistOrigT(Tb, GlyphPoint4)(zBot, midBot(pZMids, j)))
    );
    yield If5(eq(j, N)).Then(
      $.Return(OctDistOrigT(GlyphPoint4, Tt)(midTop(pZMids, sub7(j, 1)), zTop))
    );
    yield $.Return(
      OctDistOrigT(GlyphPoint4, GlyphPoint4)(midTop(pZMids, sub7(j, 1)), midBot(pZMids, j))
    );
  })
);

// packages/hint-multi-stroke/src/hltt-programs/middle-array.ts
import { Func as Func8, Template as Template6 } from "@chlorophytum/hltt-next";
import { arrayInit } from "@chlorophytum/hltt-next-stmt";
import { Store as Store2 } from "@chlorophytum/hltt-next-type-system";
function repeatN(n, x) {
  const a = [];
  for (let j = 0; j < n; j++) a.push(x);
  return a;
}
var TInitArr = Template6(
  (N, ty) => Func8(Store2(ty), ...repeatN(N, ty)).def(function* ($, pMD, ...arr) {
    if (arr.length !== N) throw new TypeError("TInitArr arity mismatch");
    yield arrayInit(pMD, ...arr);
  })
);
var TInitZMids = Template6(
  (N, ty) => Func8(Store2(ty), ...repeatN(2 * N, ty)).def(function* ($, pMD, ...arr) {
    if (arr.length !== 2 * N) throw new TypeError("TInitZMids arity mismatch");
    yield arrayInit(pMD, ...arr);
  })
);

// packages/hint-multi-stroke/src/hltt-programs/middle-main.ts
import { Func as Func17, Template as Template13 } from "@chlorophytum/hltt-next";
import {
  abs as abs5,
  add as add17,
  and as and5,
  eq as eq5,
  gc as gc11,
  gt as gt5,
  gteq as gteq5,
  lt as lt11,
  lteq as lteq4,
  max as max8,
  mul as mul12,
  neq,
  not as not4,
  or as or4,
  sub as sub14
} from "@chlorophytum/hltt-next-expr";
import { If as If10, Scfs as Scfs9, While as While9 } from "@chlorophytum/hltt-next-stmt";
import {
  Bool as Bool4,
  Frac as Frac16,
  GlyphPoint as GlyphPoint11,
  Int as Int9,
  Store as Store10
} from "@chlorophytum/hltt-next-type-system";

// packages/hint-multi-stroke/src/hltt-programs/give-up.ts
import { Func as Func9, Template as Template7 } from "@chlorophytum/hltt-next";
import { abs as abs3, add as add9, and, div as div6, eq as eq2, gc as gc6, gt as gt2, lt as lt4, mul as mul5, round as round3, sub as sub8 } from "@chlorophytum/hltt-next-expr";
import { If as If6, Ip, Mdap as Mdap3, Mdrp, Scfs as Scfs5, While as While2 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac8, GlyphPoint as GlyphPoint5, Int as Int2, Store as Store3 } from "@chlorophytum/hltt-next-type-system";
var kOddEven = 0.1;
var kSwBlend = 0.5;
var oddEvenAwareIp = Template7(
  (Tb, Tt) => Func9(Tb, Tt, GlyphPoint5).def(function* ($, zBot, zTop, zP) {
    const yAbsorb = $.Local(Frac8);
    const yCur = $.Local(Frac8);
    const syBotRef = VisCeilT(ConsideredDark2)(gc6.cur(zBot), 0);
    const syTopRef = VisFloorT(ConsideredDark2)(gc6.cur(zTop), 0);
    yield yCur.set(gc6.cur(zP));
    yield yAbsorb.set(
      sub8(syTopRef, add9(mul5(round3.gray(div6(sub8(sub8(syTopRef, yCur), 0.5), 2)), 2), 0.5))
    );
    yield If6(gt2(yAbsorb, syBotRef)).Then(function* () {
      yield yCur.set(add9(yAbsorb, mul5(1 - kOddEven, sub8(yCur, yAbsorb))));
      yield Scfs5(zP, yCur);
    });
  })
);
var IP2 = Template7(
  (Tb, Tt) => Func9(Tb, Tt, GlyphPoint5, GlyphPoint5).def(function* ($, zBot, zTop, zA, zB) {
    yield Ip(zBot, zTop, [zA, zB]);
    const y1o = $.Local(Frac8), y2o = $.Local(Frac8), yMo = $.Local(Frac8), y1c = $.Local(Frac8), y2c = $.Local(Frac8), yMc = $.Local(Frac8);
    yield If6(and(lt4(abs3(sub8(y1o, y2o)), 1), lt4(abs3(sub8(y1c, y2c)), abs3(sub8(y1o, y2o))))).Then(
      function* () {
        yield y1c.set(gc6.cur(zA));
        yield y2c.set(gc6.cur(zB));
        yield yMc.set(div6(add9(y1c, y2c), 2));
        yield y1o.set(gc6.orig(zA));
        yield y2o.set(gc6.orig(zB));
        yield yMo.set(div6(add9(y1o, y2o), 2));
        yield Scfs5(
          zA,
          add9(yMc, add9(sub8(y1c, yMc), mul5(kSwBlend, sub8(sub8(y1o, yMo), sub8(y1c, yMc)))))
        );
        yield Scfs5(
          zB,
          add9(yMc, add9(sub8(y2c, yMc), mul5(kSwBlend, sub8(sub8(y2o, yMo), sub8(y2c, yMc)))))
        );
      }
    );
  })
);
var IP2WithMode = Template7(
  (Tb, Tt) => Func9(Int2, Tb, Tt, GlyphPoint5, GlyphPoint5).def(function* ($, mode, zBot, zTop, zA, zB) {
    yield If6(eq2(mode, 0)).Then(function* () {
      yield IP2(Tb, Tt)(zBot, zTop, zA, zB);
      yield oddEvenAwareIp(Tb, Tt)(zBot, zTop, zA);
      yield oddEvenAwareIp(Tb, Tt)(zBot, zTop, zB);
    });
    yield If6(gt2(mode, 0)).Then(function* () {
      yield Ip(zBot, zTop, [zB]);
      yield Mdrp(zB, zA);
    });
    yield If6(lt4(mode, 0)).Then(function* () {
      yield Ip(zBot, zTop, [zA]);
      yield Mdrp(zA, zB);
    });
  })
);
var HintMultipleStrokesGiveUp = Template7(
  (Tb, Tt) => Func9(Int2, Tb, Tt, Store3(GlyphPoint5), Int2).def(function* ($, N, zBot, zTop, pZMids, giveUpMode) {
    yield Mdap3(zBot);
    yield Mdap3(zTop);
    const j = $.Local(Int2);
    yield j.set(0);
    yield While2(lt4(j, N), function* () {
      yield IP2WithMode(Tb, Tt)(
        giveUpMode,
        zBot,
        zTop,
        pZMids.part(mul5(2, j)),
        pZMids.part(add9(1, mul5(2, j)))
      );
      yield j.set(add9(j, 1));
    });
  })
);

// packages/hint-multi-stroke/src/hltt-programs/middle-midsize.ts
import { Func as Func14, Template as Template10 } from "@chlorophytum/hltt-next";
import { add as add14, div as div10, gc as gc8, lt as lt9, mul as mul9, sub as sub11 } from "@chlorophytum/hltt-next-expr";
import { While as While7 } from "@chlorophytum/hltt-next-stmt";
import { Bool as Bool2, Frac as Frac13, GlyphPoint as GlyphPoint8, Int as Int7, Store as Store8 } from "@chlorophytum/hltt-next-type-system";

// packages/hint-multi-stroke/src/hltt-programs/mid-size/balance.ts
import { Func as Func10 } from "@chlorophytum/hltt-next";
import {
  add as add10,
  and as and2,
  div as div7,
  eq as eq3,
  gt as gt3,
  lt as lt5,
  lteq as lteq2,
  max as max5,
  min as min2,
  mul as mul6,
  not,
  or,
  sub as sub9
} from "@chlorophytum/hltt-next-expr";
import { If as If7, While as While3 } from "@chlorophytum/hltt-next-stmt";
import { Bool, Frac as Frac9, Int as Int3, Store as Store4 } from "@chlorophytum/hltt-next-type-system";
var DARKNESS_DECIDING_ENTRY_TYPE = 1 / 4;
var DARKNESS_ADJUST_PIXELS_MAX = 2 / 5;
var DecideGapOcc = Func10(Int3, Int3, Frac9, Frac9, Frac9).returns(Int3);
DecideGapOcc.def(function* ($, N, strokeIndex, gap, bottomSeize, topSeize) {
  yield If7(eq3(0, strokeIndex)).Then($.Return(DecideGapOccBottom(gap, bottomSeize)));
  yield If7(eq3(N, strokeIndex)).Then($.Return(DecideGapOccTop(gap, topSeize)));
  yield $.Return(DecideGapOccMiddle(gap));
});
var DecideGapOccBottom = Func10(Frac9, Frac9).returns(Int3);
DecideGapOccBottom.def(function* ($, gap, bottomSeize) {
  yield If7(lt5(gap, 1 + DARKNESS_DECIDING_ENTRY_TYPE)).Then(
    If7(lt5(bottomSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(0 /* OneClear */)).Else($.Return(1 /* OneBlur */))
  );
  yield If7(lt5(gap, 2 + DARKNESS_DECIDING_ENTRY_TYPE)).Then(
    If7(lt5(bottomSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(2 /* TwoClear */)).Else($.Return(4 /* TwoDown */))
  );
  yield If7(lt5(bottomSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(5 /* MoreClear */)).Else($.Return(7 /* MoreDown */));
});
var DecideGapOccTop = Func10(Frac9, Frac9).returns(Int3);
DecideGapOccTop.def(function* ($, gap, topSeize) {
  yield If7(lt5(gap, 1 + DARKNESS_DECIDING_ENTRY_TYPE)).Then(
    If7(lt5(topSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(0 /* OneClear */)).Else($.Return(1 /* OneBlur */))
  );
  yield If7(lt5(gap, 2 + DARKNESS_DECIDING_ENTRY_TYPE)).Then(
    If7(lt5(topSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(2 /* TwoClear */)).Else($.Return(3 /* TwoUp */))
  );
  yield If7(lt5(topSeize, DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(5 /* MoreClear */)).Else($.Return(6 /* MoreUp */));
});
var DecideGapOccMiddle = Func10(Frac9).returns(Int3);
DecideGapOccMiddle.def(function* ($, gap) {
  yield If7(lt5(gap, 1 + DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(0 /* OneClear */));
  yield If7(lt5(gap, 2 + DARKNESS_DECIDING_ENTRY_TYPE)).Then($.Return(2 /* TwoClear */));
  yield $.Return(5 /* MoreClear */);
});
var InitBalanceMultiStrokeHints = Func10(
  Int3,
  Frac9,
  Frac9,
  Store4(Int3),
  Store4(Int3),
  Store4(Frac9),
  Store4(Bool)
).def(function* (e, N, bottomSeize, topSeize, pGapOcc, pInkOcc, pGaps, pfStrokeBalanced) {
  const j = e.Local(Int3);
  yield j.set(0);
  yield While3(lt5(j, N), function* () {
    yield pInkOcc.part(j).set(0 /* Clear */);
    yield pfStrokeBalanced.part(j).set(false);
    yield j.set(add10(j, 1));
  });
  yield j.set(0);
  yield While3(lteq2(j, N), function* () {
    yield pGapOcc.part(j).set(DecideGapOcc(N, j, pGaps.part(j), bottomSeize, topSeize));
    yield j.set(add10(j, 1));
  });
});
var ExtDownScore = Func10(Int3, Frac9, Frac9, Store4(Int3), Store4(Int3)).returns(Frac9).def(function* ($, j, aInk, cInk, pGapOcc, pInkOcc) {
  const occBelow = pGapOcc.part(j), occInk = pInkOcc.part(j);
  yield If7(lt5(aInk, cInk)).Then($.Return(0));
  yield If7(
    not(
      and2(
        or(eq3(0 /* Clear */, occInk), eq3(1 /* Up */, occInk)),
        or(
          or(eq3(0 /* OneClear */, occBelow), eq3(2 /* TwoClear */, occBelow)),
          or(eq3(5 /* MoreClear */, occBelow), eq3(7 /* MoreDown */, occBelow))
        )
      )
    )
  ).Then($.Return(0));
  yield If7(eq3(0 /* OneClear */, occBelow)).Then($.Return(min2(1 / 5, sub9(aInk, cInk)))).Else($.Return(min2(4 / 5, sub9(aInk, cInk))));
});
var ExtUpScore = Func10(Int3, Frac9, Frac9, Store4(Int3), Store4(Int3)).returns(Frac9).def(function* ($, j, aInk, cInk, pGapOcc, pInkOcc) {
  const occInk = pInkOcc.part(j), occAbove = pGapOcc.part(add10(j, 1));
  yield If7(lt5(aInk, cInk)).Then($.Return(0));
  yield If7(
    not(
      and2(
        or(eq3(0 /* Clear */, occInk), eq3(2 /* Down */, occInk)),
        or(
          or(eq3(0 /* OneClear */, occAbove), eq3(2 /* TwoClear */, occAbove)),
          or(eq3(5 /* MoreClear */, occAbove), eq3(6 /* MoreUp */, occAbove))
        )
      )
    )
  ).Then($.Return(0));
  yield If7(eq3(0 /* OneClear */, occAbove)).Then($.Return(min2(1 / 5, sub9(aInk, cInk)))).Else($.Return(min2(4 / 5, sub9(aInk, cInk))));
});
var ShrinkScore = Func10(Frac9, Frac9).returns(Frac9).def(function* ($, aInk, cInk) {
  yield $.Return(max5(sub9(cInk, aInk), 0));
});
var ExtDownExec = Func10(Int3, Frac9, Store4(Int3), Store4(Int3), Store4(Frac9), Store4(Frac9)).returns(Bool).def(function* ($, j, delta, pGapOcc, pInkOcc, pGaps, pInks) {
  const occBelow = pGapOcc.part(j), occInk = pInkOcc.part(j);
  yield pInks.part(j).set(add10(pInks.part(j), delta));
  yield pGaps.part(j).set(sub9(pGaps.part(j), delta));
  yield If7(eq3(0 /* Clear */, occInk)).Then(occInk.set(2 /* Down */));
  yield If7(eq3(1 /* Up */, occInk)).Then(occInk.set(3 /* Both */));
  yield If7(eq3(0 /* OneClear */, occBelow)).Then(occBelow.set(1 /* OneBlur */));
  yield If7(eq3(2 /* TwoClear */, occBelow)).Then(occBelow.set(3 /* TwoUp */));
  yield If7(eq3(5 /* MoreClear */, occBelow)).Then(occBelow.set(6 /* MoreUp */));
  yield If7(eq3(7 /* MoreDown */, occBelow)).Then(occBelow.set(8 /* MoreBoth */));
  yield $.Return(true);
});
var ExtUpExec = Func10(Int3, Frac9, Store4(Int3), Store4(Int3), Store4(Frac9), Store4(Frac9)).returns(Bool).def(function* ($, j, delta, pGapOcc, pInkOcc, pGaps, pInks) {
  const occInk = pInkOcc.part(j), occAbove = pGapOcc.part(add10(j, 1));
  yield pInks.part(j).set(add10(pInks.part(j), delta));
  yield pGaps.part(add10(1, j)).set(sub9(pGaps.part(add10(1, j)), delta));
  yield If7(eq3(0 /* Clear */, occInk)).Then(occInk.set(1 /* Up */));
  yield If7(eq3(2 /* Down */, occInk)).Then(occInk.set(3 /* Both */));
  yield If7(eq3(0 /* OneClear */, occAbove)).Then(occAbove.set(1 /* OneBlur */));
  yield If7(eq3(2 /* TwoClear */, occAbove)).Then(occAbove.set(4 /* TwoDown */));
  yield If7(eq3(5 /* MoreClear */, occAbove)).Then(occAbove.set(7 /* MoreDown */));
  yield If7(eq3(6 /* MoreUp */, occAbove)).Then(occAbove.set(8 /* MoreBoth */));
  yield $.Return(true);
});
var ShrinkDownExec = Func10(Int3, Frac9, Store4(Frac9), Store4(Frac9)).returns(Bool).def(function* ($, j, delta, pGaps, pInks) {
  yield pInks.part(j).set(sub9(pInks.part(j), delta));
  yield pGaps.part(j).set(add10(pGaps.part(j), delta));
  yield $.Return(true);
});
var ShrinkUpExec = Func10(Int3, Frac9, Store4(Frac9), Store4(Frac9)).returns(Bool).def(function* ($, j, delta, pGaps, pInks) {
  yield pInks.part(j).set(sub9(pInks.part(j), delta));
  yield pGaps.part(add10(1, j)).set(add10(pGaps.part(add10(1, j)), delta));
  yield $.Return(true);
});
var ComputeDarknessAdjustedStrokeWidth = Func10(Frac9, Frac9).returns(Frac9).def(function* ($, aInk, adjInk) {
  yield $.Return(
    min2(add10(aInk, div7(DARKNESS_ADJUST_PIXELS_MAX, max5(1, aInk))), max5(aInk, adjInk))
  );
});
var CompareAndMax = Func10(Bool, Store4(Frac9), Frac9, Store4(Int3), Int3);
CompareAndMax.def(function* ($, fForbidden, pMax, v, pIndex, i) {
  yield If7(and2(not(fForbidden), gt3(v, pMax.deRef))).Then(function* () {
    yield pMax.deRef.set(v);
    yield pIndex.deRef.set(i);
  });
});
var BalanceOneStroke = Func10(
  Int3,
  Bool,
  Bool,
  Store4(Int3),
  Store4(Int3),
  Store4(Frac9),
  Store4(Frac9),
  Store4(Frac9),
  Store4(Frac9)
).def(
  function* ($, j, forceRoundBottom, forceRoundTop, pGapOcc, pInkOcc, pCGaps, pCInks, pAGaps, pAInks) {
    const aInk = $.Local(Frac9), cInk = $.Local(Frac9), aGapBelow = $.Local(Frac9), cGapBelow = $.Local(Frac9), aGapAbove = $.Local(Frac9), cGapAbove = $.Local(Frac9);
    yield cInk.set(pCInks.part(j));
    yield aInk.set(pAInks.part(j));
    yield cGapBelow.set(pCGaps.part(j));
    yield aGapBelow.set(pAGaps.part(j));
    yield cGapAbove.set(pCGaps.part(add10(1, j)));
    yield aGapAbove.set(pAGaps.part(add10(1, j)));
    yield If7(lt5(aInk, 1 / 8)).Then($.Exit());
    const inkDownDesired = $.Local(Frac9), inkUpDesired = $.Local(Frac9);
    yield inkDownDesired.set(
      ComputeDarknessAdjustedStrokeWidth(
        aInk,
        div7(mul6(aInk, add10(cInk, cGapBelow)), add10(aInk, aGapBelow))
      )
    );
    yield inkUpDesired.set(
      ComputeDarknessAdjustedStrokeWidth(
        aInk,
        div7(mul6(aInk, add10(cInk, cGapAbove)), add10(aInk, aGapAbove))
      )
    );
    const planToExecute = $.Local(Int3);
    yield planToExecute.set(0 /* Unknown */);
    const deltaToApply = $.Local(Frac9);
    yield deltaToApply.set(0);
    yield CompareAndMax(
      forceRoundBottom,
      deltaToApply.ptr,
      ExtDownScore(j, inkDownDesired, cInk, pGapOcc, pInkOcc),
      planToExecute.ptr,
      1 /* ExtDown */
    );
    yield CompareAndMax(
      forceRoundTop,
      deltaToApply.ptr,
      ExtUpScore(j, inkUpDesired, cInk, pGapOcc, pInkOcc),
      planToExecute.ptr,
      2 /* ExtUp */
    );
    yield CompareAndMax(
      forceRoundBottom,
      deltaToApply.ptr,
      ShrinkScore(inkDownDesired, cInk),
      planToExecute.ptr,
      3 /* ShrinkDown */
    );
    yield CompareAndMax(
      forceRoundTop,
      deltaToApply.ptr,
      ShrinkScore(inkUpDesired, cInk),
      planToExecute.ptr,
      4 /* ShrinkUp */
    );
    yield If7(eq3(planToExecute, 1 /* ExtDown */)).Then(
      ExtDownExec(j, deltaToApply, pGapOcc, pInkOcc, pCGaps, pCInks)
    );
    yield If7(eq3(planToExecute, 2 /* ExtUp */)).Then(
      ExtUpExec(j, deltaToApply, pGapOcc, pInkOcc, pCGaps, pCInks)
    );
    yield If7(eq3(planToExecute, 3 /* ShrinkDown */)).Then(
      ShrinkDownExec(j, deltaToApply, pCGaps, pCInks)
    );
    yield If7(eq3(planToExecute, 4 /* ShrinkUp */)).Then(
      ShrinkUpExec(j, deltaToApply, pCGaps, pCInks)
    );
  }
);
var BalanceStrokes = Func10(
  Int3,
  Frac9,
  Frac9,
  Bool,
  Bool,
  Store4(Int3),
  Store4(Int3),
  Store4(Frac9),
  Store4(Frac9),
  Store4(Frac9),
  Store4(Frac9),
  Store4(Bool)
).def(
  function* ($, N, bottomSeize, topSeize, forceRoundBottom, forceRoundTop, pGapOcc, pInkOcc, pCGaps, pCInks, pAGaps, pAInks, pfStrokeBalanced) {
    const processStrokeIndex = $.Local(Int3);
    yield InitBalanceMultiStrokeHints(
      N,
      bottomSeize,
      topSeize,
      pGapOcc,
      pInkOcc,
      pCGaps,
      pfStrokeBalanced
    );
    const jj = $.Local(Int3);
    const found = $.Local(Bool);
    const rankT = $.Local(Int3);
    const maxRank = $.Local(Int3);
    const maxStrokeWidth = $.Local(Frac9);
    yield found.set(true);
    yield processStrokeIndex.set(0);
    yield While3(found, function* () {
      yield found.set(false);
      yield maxRank.set(0);
      yield jj.set(0);
      yield maxStrokeWidth.set(0);
      yield While3(lt5(jj, N), function* () {
        yield rankT.set(0);
        yield If7(eq3(jj, sub9(N, 1))).Then(rankT.set(1));
        yield If7(eq3(jj, 0)).Then(rankT.set(2));
        yield If7(
          and2(
            not(pfStrokeBalanced.part(jj)),
            or(
              gt3(rankT, maxRank),
              and2(eq3(rankT, maxRank), gt3(pAInks.part(jj), maxStrokeWidth))
            )
          )
        ).Then(function* () {
          yield found.set(true);
          yield processStrokeIndex.set(jj);
          yield maxRank.set(rankT);
          yield maxStrokeWidth.set(pAInks.part(jj));
        });
        yield jj.set(add10(jj, 1));
      });
      yield If7(found).Then(function* () {
        yield BalanceOneStroke(
          processStrokeIndex,
          and2(forceRoundBottom, eq3(processStrokeIndex, 0)),
          and2(forceRoundTop, eq3(processStrokeIndex, sub9(N, 1))),
          pGapOcc,
          pInkOcc,
          pCGaps,
          pCInks,
          pAGaps,
          pAInks
        );
        yield pfStrokeBalanced.part(processStrokeIndex).set(true);
      });
    });
  }
);

// packages/hint-multi-stroke/src/hltt-programs/mid-size/init.ts
import { Func as Func12, Template as Template8 } from "@chlorophytum/hltt-next";
import { add as add12, div as div9, lt as lt7, lteq as lteq3, max as max6, mul as mul8 } from "@chlorophytum/hltt-next-expr";
import { While as While5 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac11, GlyphPoint as GlyphPoint6, Int as Int5, Store as Store6 } from "@chlorophytum/hltt-next-type-system";

// packages/hint-multi-stroke/src/hltt-programs/mid-size/loop.ts
import { Func as Func11 } from "@chlorophytum/hltt-next";
import {
  add as add11,
  and as and3,
  div as div8,
  gt as gt4,
  gteq as gteq4,
  i2f as i2f3,
  lt as lt6,
  min as min3,
  mul as mul7,
  not as not2,
  odd,
  or as or2,
  sub as sub10
} from "@chlorophytum/hltt-next-expr";
import { If as If8, While as While4 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac10, Int as Int4, Store as Store5 } from "@chlorophytum/hltt-next-type-system";
var MaxAverageDivisorIncreaseStep = 2;
var HighestAverageLoop = Func11(
  Int4,
  Store5(Frac10),
  Store5(Frac10),
  Store5(Frac10),
  Store5(Frac10),
  Frac10,
  Frac10
).def(function* ($, N, pA, pC, pDiv, pAlloc, scalar, rest) {
  const restInk = $.Local(Frac10);
  const jOpt = $.Local(Int4);
  const jLoop = $.Local(Int4);
  const dOpt = $.Local(Frac10);
  yield restInk.set(rest);
  yield While4(gt4(restInk, 0), function* () {
    yield jOpt.set(-1);
    yield dOpt.set(-255);
    yield jLoop.set(0);
    yield While4(lt6(jLoop, N), function* () {
      yield If8(
        and3(
          lt6(pAlloc.part(jLoop), add11(2, mul7(scalar, pA.part(jLoop)))),
          or2(
            and3(odd(i2f3(jLoop)), gt4(pC.part(jLoop), dOpt)),
            and3(not2(odd(i2f3(jLoop))), gteq4(pC.part(jLoop), dOpt))
          )
        )
      ).Then(function* () {
        yield jOpt.set(jLoop);
        yield dOpt.set(pC.part(jLoop));
      });
      yield jLoop.set(add11(jLoop, 1));
    });
    yield If8(gteq4(jOpt, 0)).Then(function* () {
      yield pAlloc.part(jOpt).set(add11(pAlloc.part(jOpt), min3(restInk, 1)));
      yield pDiv.part(jOpt).set(add11(pDiv.part(jOpt), MaxAverageDivisorIncreaseStep));
      yield pC.part(jOpt).set(div8(pA.part(jOpt), pDiv.part(jOpt)));
    });
    yield restInk.set(sub10(restInk, 1));
  });
});

// packages/hint-multi-stroke/src/hltt-programs/mid-size/init.ts
var InitMSDGapEntries = Template8(
  (Tb, Tt) => Func12(
    Int5,
    Store6(Frac11),
    Store6(Frac11),
    Store6(Frac11),
    Store6(Frac11),
    Store6(Frac11),
    Tb,
    Tt,
    Store6(GlyphPoint6),
    Store6(Frac11)
  ).def(function* ($, N, pTotalDist, pA, pC, pDiv, pAlloc, zBot, zTop, pZMids, pGapMD) {
    const j = $.Local(Int5);
    const gapDist = $.Local(Frac11);
    yield j.set(0);
    yield gapDist.set(0);
    yield While5(lteq3(j, N), function* () {
      yield gapDist.set(FetchOrigGap(Tb, Tt)(N, j, zBot, zTop, pZMids));
      yield InitMSDistEntry(
        mul8(2, j),
        pTotalDist,
        pA,
        pC,
        pDiv,
        pAlloc,
        gapDist,
        pGapMD.part(j)
      );
      yield j.set(add12(j, 1));
    });
  })
);
var InitMSDInkEntries = Func12(
  Int5,
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Store6(GlyphPoint6),
  Store6(Frac11)
).def(function* ($, N, pTotalDist, pA, pC, pDiv, pAlloc, pZMids, pInkMD) {
  const j = $.Local(Int5);
  yield j.set(0);
  yield While5(lt7(j, N), function* () {
    yield InitMSDistEntry(
      add12(1, mul8(2, j)),
      pTotalDist,
      pA,
      pC,
      pDiv,
      pAlloc,
      AdjustStrokeDistT(2)(
        OctDistOrigT(GlyphPoint6, GlyphPoint6)(midBot(pZMids, j), midTop(pZMids, j))
      ),
      pInkMD.part(j)
    );
    yield j.set(add12(j, 1));
  });
});
var InitMSDistEntry = Func12(
  Int5,
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Store6(Frac11),
  Frac11,
  Frac11
).def(function* ($, j, pTotalDist, pA, pC, pDiv, pAlloc, origDist, pixelsAllocated) {
  const divisor = $.Local(Frac11);
  yield divisor.set(add12(1, mul8(MaxAverageDivisorIncreaseStep, pixelsAllocated)));
  yield pA.part(j).set(max6(0, origDist));
  yield pC.part(j).set(div9(pA.part(j), divisor));
  yield pDiv.part(j).set(divisor);
  yield pAlloc.part(j).set(pixelsAllocated);
  yield pTotalDist.deRef.set(add12(pTotalDist.deRef, pA.part(j)));
});

// packages/hint-multi-stroke/src/hltt-programs/mid-size/move.ts
import { Func as Func13, Template as Template9 } from "@chlorophytum/hltt-next";
import { add as add13, gc as gc7, lt as lt8 } from "@chlorophytum/hltt-next-expr";
import { Mdap as Mdap4, Scfs as Scfs6, While as While6 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac12, GlyphPoint as GlyphPoint7, Int as Int6, Store as Store7 } from "@chlorophytum/hltt-next-type-system";
var PlaceStrokeDist2 = Func13(Store7(Frac12), GlyphPoint7, GlyphPoint7, Frac12, Frac12);
PlaceStrokeDist2.def(function* ($, pY, zBot, zTop, gap, ink) {
  yield pY.deRef.set(add13(pY.deRef, gap));
  yield Mdap4(zBot);
  yield Scfs6(zBot, pY.deRef);
  yield pY.deRef.set(add13(pY.deRef, ink));
  yield Scfs6(zTop, pY.deRef);
});
var MovePointsForMiddleHintT = Template9(
  (Tb, Tt) => Func13(Int6, Tb, Tt, Frac12, Store7(Frac12), Store7(Frac12), Store7(GlyphPoint7)).def(
    function* ($, N, zBot, zTop, y0, pGaps, pInks, pZMids) {
      const j = $.Local(Int6);
      const y = $.Local(Frac12);
      const yBot = $.Local(Frac12);
      const yTop = $.Local(Frac12);
      yield j.set(0);
      yield y.set(y0);
      yield yBot.set(gc7.cur(zBot));
      yield yTop.set(gc7.cur(zTop));
      yield While6(lt8(j, N), function* () {
        yield PlaceStrokeDist2(
          y.ptr,
          midBot(pZMids, j),
          midTop(pZMids, j),
          pGaps.part(j),
          pInks.part(j)
        );
        yield j.set(add13(j, 1));
      });
      yield Scfs6(zBot, yBot);
      yield Scfs6(zTop, yTop);
    }
  )
);

// packages/hint-multi-stroke/src/hltt-programs/middle-midsize.ts
var DecideRequiredGap = Func14(Int7, Store8(Frac13)).returns(Frac13).def(function* (e, N, pGapMD) {
  const j = e.Local(Int7);
  const s = e.Local(Frac13);
  yield j.set(0);
  yield s.set(0);
  yield While7(lt9(j, N), function* () {
    yield s.set(add14(s, pGapMD.part(j)));
    yield j.set(add14(j, 1));
  });
  yield e.Return(s);
});
var THintMultipleStrokesMidSize = Template10(
  (NMax, Tb, Tt) => Func14(
    Int7,
    Frac13,
    Bool2,
    Bool2,
    Frac13,
    Frac13,
    Tb,
    Tt,
    Store8(GlyphPoint8),
    Store8(Frac13),
    Store8(Frac13)
  ).def(
    function* (e, N, dist, forceRoundBottom, forceRoundTop, frBot, frTop, zBot, zTop, pZMids, pGapMD, pInkMD) {
      const pxReqGap = e.Local(Frac13);
      const pxReqInk = e.Local(Frac13);
      yield pxReqGap.set(DecideRequiredGap(add14(1, N), pGapMD));
      yield pxReqInk.set(DecideRequiredGap(N, pInkMD));
      const totalInk = e.Local(Frac13);
      const totalGap = e.Local(Frac13);
      const aDist = e.LocalArray(Frac13, 2 * NMax + 1);
      const cDist = e.LocalArray(Frac13, 2 * NMax + 1);
      const divisor = e.LocalArray(Frac13, 2 * NMax + 1);
      const alloc = e.LocalArray(Frac13, 2 * NMax + 1);
      const scalar = e.Local(Frac13);
      yield scalar.set(div10(dist, sub11(gc8.orig(zTop), gc8.orig(zBot))));
      yield totalInk.set(0);
      yield totalGap.set(0);
      yield InitMSDGapEntries(Tb, Tt)(
        N,
        totalGap.ptr,
        aDist,
        cDist,
        divisor,
        alloc,
        zBot,
        zTop,
        pZMids,
        pGapMD
      );
      yield InitMSDInkEntries(N, totalInk.ptr, aDist, cDist, divisor, alloc, pZMids, pInkMD);
      yield HighestAverageLoop(
        add14(1, mul9(2, N)),
        aDist,
        cDist,
        divisor,
        alloc,
        scalar,
        sub11(sub11(dist, pxReqInk), pxReqGap)
      );
      const aGapDist = e.LocalArray(Frac13, NMax + 1);
      const gaps = e.LocalArray(Frac13, NMax + 1);
      const gapOcc = e.LocalArray(Int7, NMax + 1);
      const aInkDist = e.LocalArray(Frac13, NMax);
      const inks = e.LocalArray(Frac13, NMax);
      const inkOcc = e.LocalArray(Int7, NMax);
      const fStrokeBalanced = e.LocalArray(Bool2, NMax);
      yield splitGapInkArrayData(N, aDist, aGapDist, aInkDist);
      yield splitGapInkArrayData(N, alloc, gaps, inks);
      const visPosBottom = e.Local(Frac13);
      const visPosTop = e.Local(Frac13);
      const bottomSeize = e.Local(Frac13);
      const topSeize = e.Local(Frac13);
      yield visPosBottom.set(VisCeilT(ConsideredDark2)(gc8.cur(zBot), frBot));
      yield visPosTop.set(VisFloorT(ConsideredDark2)(gc8.cur(zTop), frTop));
      yield bottomSeize.set(sub11(gc8.cur(zBot), visPosBottom));
      yield topSeize.set(sub11(visPosTop, gc8.cur(zTop)));
      yield BalanceStrokes(
        N,
        bottomSeize,
        topSeize,
        forceRoundBottom,
        forceRoundTop,
        gapOcc,
        inkOcc,
        gaps,
        inks,
        aGapDist,
        aInkDist,
        fStrokeBalanced
      );
      yield MovePointsForMiddleHintT(Tb, Tt)(N, zBot, zTop, visPosBottom, gaps, inks, pZMids);
    }
  )
);
var splitGapInkArrayData = Func14(Int7, Store8(Frac13), Store8(Frac13), Store8(Frac13)).def(
  function* ($, N, p, pGap, pInk) {
    const j = $.Local(Int7);
    yield j.set(0);
    yield While7(lt9(j, N), function* () {
      yield pGap.part(j).set(midBot(p, j));
      yield pInk.part(j).set(midTop(p, j));
      yield j.set(add14(j, 1));
    });
    yield pGap.part(N).set(midBot(p, N));
  }
);

// packages/hint-multi-stroke/src/hltt-programs/simple.ts
import { Func as Func15, Template as Template11 } from "@chlorophytum/hltt-next";
import { abs as abs4, add as add15, and as and4, gc as gc9, lt as lt10, mul as mul10, not as not3, or as or3, round as round4, sub as sub12, eq as eq4 } from "@chlorophytum/hltt-next-expr";
import { If as If9, Ip as Ip2, Mdap as Mdap5, Scfs as Scfs7, While as While8 } from "@chlorophytum/hltt-next-stmt";
import { Bool as Bool3, Frac as Frac14, GlyphPoint as GlyphPoint9, Int as Int8, Store as Store9 } from "@chlorophytum/hltt-next-type-system";
var IpClose = Template11(
  (Tb, Tt) => Func15(Bool3, Bool3, Tb, Tt, GlyphPoint9, GlyphPoint9).def(
    function* ($, forceRoundBottom, forceRoundTop, zBot, zTop, z1, z2) {
      yield Ip2(zBot, zTop, [z1, z2]);
      const distOrig = $.Local(Frac14);
      const drTop = $.Local(Frac14);
      const drBot = $.Local(Frac14);
      yield distOrig.set(sub12(gc9.orig(z2), gc9.orig(z1)));
      yield drBot.set(abs4(sub12(gc9.cur(z1), round4.gray(gc9.cur(z1)))));
      yield drTop.set(abs4(sub12(gc9.cur(z2), round4.gray(gc9.cur(z2)))));
      yield If9(or3(forceRoundTop, and4(not3(forceRoundBottom), lt10(drTop, drBot)))).Then(function* () {
        yield Scfs7(z2, round4.gray(gc9.cur(z2)));
        yield Scfs7(z1, sub12(round4.gray(gc9.cur(z2)), distOrig));
      }).Else(function* () {
        yield Scfs7(z1, round4.gray(gc9.cur(z1)));
        yield Scfs7(z2, add15(round4.gray(gc9.cur(z1)), distOrig));
      });
    }
  )
);
var HintMultipleStrokesSimple = Template11(
  (Tb, Tt) => Func15(Int8, Bool3, Bool3, Tb, Tt, Store9(GlyphPoint9)).def(
    function* ($, N, forceRoundBottom, forceRoundTop, zBot, zTop, pZMids) {
      yield Mdap5(zBot);
      yield Mdap5(zTop);
      const j = $.Local(Int8);
      yield j.set(0);
      yield While8(lt10(j, N), function* () {
        yield IpClose(Tb, Tt)(
          and4(forceRoundBottom, eq4(j, 0)),
          and4(forceRoundTop, eq4(add15(j, 1), N)),
          zBot,
          zTop,
          pZMids.part(mul10(2, j)),
          pZMids.part(add15(1, mul10(2, j)))
        );
        yield j.set(add15(j, 1));
      });
    }
  )
);

// packages/hint-multi-stroke/src/hltt-programs/stroke-omit.ts
import { Func as Func16, Template as Template12 } from "@chlorophytum/hltt-next";
import { add as add16, gc as gc10, max as max7, mul as mul11, round as round5, sub as sub13 } from "@chlorophytum/hltt-next-expr";
import { Scfs as Scfs8 } from "@chlorophytum/hltt-next-stmt";
import { Frac as Frac15, GlyphPoint as GlyphPoint10 } from "@chlorophytum/hltt-next-type-system";
var ProcessCollidedStrokeWidth = Func16(Frac15).returns(Frac15).def(function* (e, w0) {
  yield e.Return(max7(2 / 5, mul11(1 / 2, w0)));
});
var CollideHangBottom = Template12(
  (Tb) => Func16(Tb, GlyphPoint10, GlyphPoint10).def(function* (e, botLim, botCur, topCur) {
    yield Scfs8(botCur, gc10.cur(botLim));
    yield Scfs8(
      topCur,
      add16(
        round5.gray(gc10.cur(botLim)),
        ProcessCollidedStrokeWidth(sub13(gc10.orig(topCur), gc10.orig(botCur)))
      )
    );
  })
);
var CollideHangTop = Template12(
  (Tb) => Func16(Tb, GlyphPoint10, GlyphPoint10).def(function* (e, topLim, botCur, topCur) {
    yield Scfs8(topCur, gc10.cur(topLim));
    yield Scfs8(
      botCur,
      sub13(
        round5.gray(gc10.cur(topLim)),
        ProcessCollidedStrokeWidth(sub13(gc10.orig(topCur), gc10.orig(botCur)))
      )
    );
  })
);
var AlignTwoStrokes = Func16(GlyphPoint10, GlyphPoint10, GlyphPoint10, GlyphPoint10);
AlignTwoStrokes.def(function* ($, a, b, c, d) {
  yield Scfs8(a, gc10.cur(c));
  yield Scfs8(b, gc10.cur(d));
});
var CollideDownTwoStrokes = Func16(GlyphPoint10, GlyphPoint10, GlyphPoint10, GlyphPoint10);
CollideDownTwoStrokes.def(function* (e, botCur, topCur, botBelow, topBelow) {
  yield Scfs8(botCur, add16(1, gc10.cur(botBelow)));
  yield Scfs8(
    topCur,
    add16(gc10.cur(botCur), ProcessCollidedStrokeWidth(sub13(gc10.cur(topBelow), gc10.cur(botBelow))))
  );
});
var CollideUpTwoStrokes = Func16(GlyphPoint10, GlyphPoint10, GlyphPoint10, GlyphPoint10);
CollideUpTwoStrokes.def(function* (e, botCur, topCur, botAbove, topAbove) {
  yield Scfs8(topCur, sub13(gc10.cur(topAbove), 1));
  yield Scfs8(
    botCur,
    sub13(gc10.cur(topCur), ProcessCollidedStrokeWidth(sub13(gc10.cur(topAbove), gc10.cur(botAbove))))
  );
});

// packages/hint-multi-stroke/src/hltt-programs/middle-main.ts
var TwoN = Func17(Int9).returns(Int9).def(function* ($, x) {
  yield $.Return(add17(x, x));
});
var TwoN_P1 = Func17(Int9).returns(Int9).def(function* ($, x) {
  yield $.Return(add17(1, add17(x, x)));
});
var TwoN_M1 = Func17(Int9).returns(Int9).def(function* ($, x) {
  yield $.Return(sub14(add17(x, x), 1));
});
var TwoN_M2 = Func17(Int9).returns(Int9).def(function* ($, x) {
  yield $.Return(sub14(add17(x, x), 2));
});
var DropArrayItemT = Template13(
  (ty) => Func17(Int9, Int9, Store10(ty), Store10(ty)).def(function* ($, N, i, pA, pB) {
    const j = $.Local(Int9);
    const k = $.Local(Int9);
    yield j.set(0);
    yield k.set(0);
    yield While9(lt11(j, N), function* () {
      yield If10(neq(j, i)).Then(function* () {
        yield pB.part(k).set(pA.part(j));
        yield k.set(add17(k, 1));
      });
      yield j.set(add17(j, 1));
    });
  })
);
var DropGapArrayItem = Func17(Int9, Int9, Store10(Frac16), Store10(Frac16), Int9);
DropGapArrayItem.def(function* ($, N, i, pA, pB, mode) {
  const j = $.Local(Int9);
  const k = $.Local(Int9);
  yield j.set(0);
  yield k.set(0);
  yield While9(lt11(j, N), function* () {
    yield If10(neq(j, i)).Then(function* () {
      yield If10(
        or4(
          and5(eq5(mode, GAP_DROP_MODE_UP), eq5(add17(j, 1), i)),
          and5(eq5(mode, GAP_DROP_MODE_DOWN), eq5(sub14(j, 1), i))
        )
      ).Then(function* () {
        yield pB.part(k).set(max8(pA.part(j), pA.part(i)));
      }).Else(function* () {
        yield pB.part(k).set(pA.part(j));
      });
      yield k.set(add17(k, 1));
    });
    yield j.set(add17(j, 1));
  });
});
var DropArrayItemX2T = Template13(
  (ty) => Func17(Int9, Int9, Store10(ty), Store10(ty)).def(function* ($, N, i, pA, pB) {
    const j = $.Local(Int9);
    const k = $.Local(Int9);
    yield j.set(0);
    yield k.set(0);
    yield While9(lt11(j, N), function* () {
      yield If10(neq(j, i)).Then(function* () {
        yield pB.part(TwoN(k)).set(pA.part(TwoN(j)));
        yield pB.part(TwoN_P1(k)).set(pA.part(TwoN_P1(j)));
        yield k.set(add17(k, 1));
      });
      yield j.set(add17(j, 1));
    });
  })
);
var GAP_DROP_MODE_DOWN = 0;
var GAP_DROP_MODE_UP = 1;
var UpdateNewProps = Func17(
  Int9,
  Bool4,
  Int9,
  Bool4,
  Store10(GlyphPoint11),
  Store10(Frac16),
  Store10(Frac16),
  Store10(Frac16),
  Store10(GlyphPoint11),
  Store10(Frac16),
  Store10(Frac16),
  Store10(Frac16)
).def(
  function* ($, N, collideMode, mergeIndex, mergeDown, pZMids, pOGapMD, pGapMD, pInkMD, pZMids1, pOGapMD1, pGapMD1, pInkMD1) {
    const dropGapIndex = $.Local(Int9);
    const dropInkIndex = $.Local(Int9);
    const gapDropMode = $.Local(Int9);
    yield If10(lteq4(mergeIndex, 0)).Then(function* () {
      yield dropGapIndex.set(0);
      yield dropInkIndex.set(0);
      yield gapDropMode.set(GAP_DROP_MODE_UP);
    }).Else(
      If10(gteq5(mergeIndex, N)).Then(function* () {
        yield dropGapIndex.set(N);
        yield dropInkIndex.set(sub14(N, 1));
        yield gapDropMode.set(GAP_DROP_MODE_DOWN);
      }).Else(
        If10(mergeDown).Then(function* () {
          yield dropGapIndex.set(mergeIndex);
          yield dropInkIndex.set(mergeIndex);
          yield gapDropMode.set(GAP_DROP_MODE_DOWN);
        }).Else(function* () {
          yield dropGapIndex.set(mergeIndex);
          yield dropInkIndex.set(sub14(mergeIndex, 1));
          yield gapDropMode.set(GAP_DROP_MODE_UP);
        })
      )
    );
    yield DropGapArrayItem(add17(1, N), dropGapIndex, pOGapMD, pOGapMD1, gapDropMode);
    yield DropGapArrayItem(add17(1, N), dropGapIndex, pGapMD, pGapMD1, gapDropMode);
    yield DropArrayItemT(Frac16)(N, dropInkIndex, pInkMD, pInkMD1);
    yield DropArrayItemX2T(GlyphPoint11)(N, dropInkIndex, pZMids, pZMids1);
    yield If10(collideMode).Then(function* () {
      yield pGapMD1.part(dropInkIndex).set(add17(1, pGapMD1.part(dropInkIndex)));
      yield pOGapMD1.part(dropInkIndex).set(add17(1, pOGapMD1.part(dropInkIndex)));
    });
  }
);
var THintMultipleStrokes_DoMerge_Consequence = Func17(Int9, Int9, Bool4, Store10(GlyphPoint11)).def(
  function* ($, N, mergeIndex, mergeDown, pZMids) {
    yield If10(and5(lt11(0, mergeIndex), lt11(mergeIndex, N))).Then(
      If10(mergeDown).Then(
        AlignTwoStrokes(
          pZMids.part(TwoN(mergeIndex)),
          pZMids.part(TwoN_P1(mergeIndex)),
          pZMids.part(TwoN_M2(mergeIndex)),
          pZMids.part(TwoN_M1(mergeIndex))
        )
      ).Else(
        AlignTwoStrokes(
          pZMids.part(TwoN_M2(mergeIndex)),
          pZMids.part(TwoN_M1(mergeIndex)),
          pZMids.part(TwoN(mergeIndex)),
          pZMids.part(TwoN_P1(mergeIndex))
        )
      )
    );
  }
);
var THintMultipleStrokes_DoMerge_ConsequenceEdge = Template13(
  (Tb, Tt) => Func17(Int9, Int9, Tb, Tt, Store10(GlyphPoint11)).def(function* ($, N, mergeIndex, zBot, zTop, pZMids) {
    yield If10(lteq4(mergeIndex, 0)).Then(function* () {
      yield Scfs9(pZMids.part(0), gc11.cur(zBot));
      yield Scfs9(pZMids.part(1), gc11.cur(zBot));
    });
    yield If10(gteq5(mergeIndex, N)).Then(function* () {
      yield Scfs9(pZMids.part(TwoN_M2(N)), gc11.cur(zTop));
      yield Scfs9(pZMids.part(TwoN_M1(N)), gc11.cur(zTop));
    });
  })
);
var THintMultipleStrokes_DoCollideMerge_Consequence = Func17(Int9, Int9, Bool4, Store10(GlyphPoint11)).def(
  function* ($, N, mergeIndex, mergeDown, pZMids) {
    yield If10(and5(lt11(0, mergeIndex), lt11(mergeIndex, N))).Then(
      If10(mergeDown).Then(
        CollideDownTwoStrokes(
          pZMids.part(TwoN(mergeIndex)),
          pZMids.part(TwoN_P1(mergeIndex)),
          pZMids.part(TwoN_M2(mergeIndex)),
          pZMids.part(TwoN_M1(mergeIndex))
        )
      ).Else(
        CollideUpTwoStrokes(
          pZMids.part(TwoN_M2(mergeIndex)),
          pZMids.part(TwoN_M1(mergeIndex)),
          pZMids.part(TwoN(mergeIndex)),
          pZMids.part(TwoN_P1(mergeIndex))
        )
      )
    );
  }
);
var THintMultipleStrokes_DoCollideMerge_ConsequenceEdge = Template13(
  (Tb, Tt) => Func17(Int9, Int9, Tb, Tt, Store10(GlyphPoint11)).def(function* ($, N, mergeIndex, zBot, zTop, pZMids) {
    yield If10(lteq4(mergeIndex, 0)).Then(
      CollideHangBottom(Tb)(zBot, pZMids.part(0), pZMids.part(1))
    );
    yield If10(gteq5(mergeIndex, N)).Then(
      CollideHangTop(Tt)(zTop, pZMids.part(TwoN_M2(N)), pZMids.part(TwoN_M1(N)))
    );
  })
);
var HasLargeGap = Func17(Int9, Store10(Frac16), Store10(Frac16)).returns(Bool4);
HasLargeGap.def(function* ($, N, pOGapMD, pGapMD) {
  const hasLargerGap = $.Local(Bool4);
  const jMaxExpandableGap = $.Local(Int9);
  const j = $.Local(Int9);
  yield hasLargerGap.set(false);
  yield j.set(0);
  yield While9(and5(not4(hasLargerGap), lteq4(j, N)), function* () {
    yield If10(gteq5(pOGapMD.part(j), 2)).Then(
      If10(not4(hasLargerGap)).Then(function* () {
        yield hasLargerGap.set(true);
        yield jMaxExpandableGap.set(j);
      }).Else(
        If10(gt5(pGapMD.part(j), pGapMD.part(jMaxExpandableGap))).Then(
          jMaxExpandableGap.set(j)
        )
      )
    );
    yield j.set(add17(j, 1));
  });
  yield If10(hasLargerGap).Then(
    pGapMD.part(jMaxExpandableGap).set(add17(pGapMD.part(jMaxExpandableGap), 1))
  );
  yield $.Return(hasLargerGap);
});
var TryShrinkGapMD = Func17(Int9, Store10(Frac16), Store10(Frac16)).returns(Bool4);
TryShrinkGapMD.def(function* ($, N, pOGapMD, pGapMD) {
  const hasShrinkableGap = $.Local(Bool4);
  const jShrinkableGap = $.Local(Int9);
  const j = $.Local(Int9);
  yield hasShrinkableGap.set(false);
  yield jShrinkableGap.set(0);
  yield j.set(0);
  yield While9(lteq4(j, N), function* () {
    yield If10(gteq5(pGapMD.part(j), add17(pOGapMD.part(j), 2))).Then(
      If10(not4(hasShrinkableGap)).Then(function* () {
        yield hasShrinkableGap.set(true);
        yield jShrinkableGap.set(j);
      }).Else(
        If10(gt5(pGapMD.part(j), pGapMD.part(jShrinkableGap))).Then(jShrinkableGap.set(j))
      )
    );
    yield j.set(add17(j, 1));
  });
  yield If10(hasShrinkableGap).Then(
    pGapMD.part(jShrinkableGap).set(add17(pGapMD.part(jShrinkableGap), 1))
  );
  yield $.Return(hasShrinkableGap);
});
var THintMultipleStrokes_OmitImpl = Template13(
  (NMax, Tb, Tt) => Func17(
    Int9,
    Bool4,
    Bool4,
    Int9,
    Frac16,
    Frac16,
    Tb,
    Tt,
    Store10(Frac16),
    Store10(GlyphPoint11),
    Store10(Frac16),
    Store10(Frac16),
    Store10(Int9),
    Store10(Int9)
  ).returns(Bool4).def(
    function* ($, N, forceRoundBottom, forceRoundTop, giveUpMode, dist, reqDist, zBot, zTop, pOGapMD, pZMids, pGapMD, pInkMD, pRecPath, pRecPathCollide) {
      yield If10(lteq4(N, 1)).Then(function* () {
        yield HintMultipleStrokesGiveUp(Tb, Tt)(N, zBot, zTop, pZMids, giveUpMode);
        yield $.Return(false);
      });
      const isCollision = $.Local(Bool4);
      const hasLargerGap = $.Local(Bool4);
      yield isCollision.set(gteq5(dist, sub14(reqDist, 1)));
      yield hasLargerGap.set(false);
      yield If10(isCollision).Then(hasLargerGap.set(HasLargeGap(N, pOGapMD, pGapMD)));
      yield isCollision.set(and5(isCollision, not4(hasLargerGap)));
      const pRecValue = $.Local(Int9);
      yield If10(isCollision).Then(pRecValue.set(pRecPathCollide.deRef)).Else(pRecValue.set(pRecPath.deRef));
      yield If10(eq5(pRecValue, 0)).Then(function* () {
        yield HintMultipleStrokesGiveUp(Tb, Tt)(N, zBot, zTop, pZMids, giveUpMode);
        yield $.Return(false);
      });
      const mergeIndex = $.Local(Int9);
      const mergeDown = $.Local(Bool4);
      yield mergeIndex.set(sub14(abs5(pRecValue), 1));
      yield mergeDown.set(lt11(pRecValue, 0));
      const pZMids1 = $.LocalArray(GlyphPoint11, 2 * NMax);
      const pOGapMD1 = $.LocalArray(Frac16, 1 + NMax);
      const pGapMD1 = $.LocalArray(Frac16, 1 + NMax);
      const pInkMD1 = $.LocalArray(Frac16, NMax);
      yield UpdateNewProps(
        N,
        isCollision,
        mergeIndex,
        mergeDown,
        pZMids,
        pOGapMD,
        pGapMD,
        pInkMD,
        pZMids1,
        pOGapMD1,
        pGapMD1,
        pInkMD1
      );
      yield If10(isCollision).Then(
        THintMultipleStrokes_DoCollideMerge_ConsequenceEdge(Tb, Tt)(
          N,
          mergeIndex,
          zBot,
          zTop,
          pZMids
        )
      ).Else(
        THintMultipleStrokes_DoMerge_ConsequenceEdge(Tb, Tt)(
          N,
          mergeIndex,
          zBot,
          zTop,
          pZMids
        )
      );
      yield If10(
        THintMultipleStrokesMainImpl(NMax, Tb, Tt)(
          sub14(N, 1),
          forceRoundBottom,
          forceRoundTop,
          giveUpMode,
          zBot,
          zTop,
          pZMids1,
          pOGapMD1,
          pGapMD1,
          pInkMD1,
          pRecPath.part(1).ptr,
          pRecPathCollide.part(1).ptr
        )
      ).Then(function* () {
        yield If10(isCollision).Then(
          THintMultipleStrokes_DoCollideMerge_Consequence(
            N,
            mergeIndex,
            mergeDown,
            pZMids
          )
        ).Else(
          THintMultipleStrokes_DoMerge_Consequence(
            N,
            mergeIndex,
            mergeDown,
            pZMids
          )
        );
        yield $.Return(true);
      }).Else(function* () {
        yield HintMultipleStrokesGiveUp(Tb, Tt)(N, zBot, zTop, pZMids, giveUpMode);
        yield $.Return(false);
      });
    }
  )
);
var THintMultipleStrokesMainImpl = Template13(
  (NMax, Tb, Tt) => Func17(
    Int9,
    Bool4,
    Bool4,
    Int9,
    Tb,
    Tt,
    Store10(GlyphPoint11),
    Store10(Frac16),
    Store10(Frac16),
    Store10(Frac16),
    Store10(Int9),
    Store10(Int9)
  ).returns(Bool4).def(
    function* ($, N, forceRoundBottom, forceRoundTop, giveUpMode, zBot, zTop, pZMids, pOGapMD, pGapMD, pInkMD, pRecPath, pRecPathCollide) {
      const dist = $.Local(Frac16);
      const frBot = $.Local(Frac16);
      const frTop = $.Local(Frac16);
      yield frBot.set(GetFillRateT(Tb, Tt)(N, zBot, zTop, pZMids));
      yield frTop.set(GetFillRateT(Tb, Tt)(N, zBot, zTop, pZMids));
      yield dist.set(VisDistT(ConsideredDark2, Tb, Tt)(zBot, zTop, frBot, frTop));
      const pxReqGap = $.Local(Frac16);
      const pxReqGapOrig = $.Local(Frac16);
      const pxReqInk = $.Local(Frac16);
      yield pxReqGap.set(DecideRequiredGap(add17(N, 1), pGapMD));
      yield pxReqGapOrig.set(DecideRequiredGap(add17(N, 1), pOGapMD));
      yield pxReqInk.set(DecideRequiredGap(N, pInkMD));
      yield If10(lt11(dist, add17(pxReqGap, pxReqInk))).Then(function* () {
        yield If10(and5(eq5(pRecPath.deRef, 0), eq5(pRecPathCollide.deRef, 0))).Then(
          function* () {
            yield TryShrinkGapMD(N, pOGapMD, pGapMD);
            yield pxReqGap.set(DecideRequiredGap(add17(N, 1), pGapMD));
          }
        );
      });
      yield If10(lt11(dist, add17(pxReqGap, pxReqInk))).Then(
        $.Return(
          THintMultipleStrokes_OmitImpl(NMax, Tb, Tt)(
            N,
            forceRoundBottom,
            forceRoundTop,
            giveUpMode,
            dist,
            add17(pxReqGap, pxReqInk),
            zBot,
            zTop,
            pOGapMD,
            pZMids,
            pGapMD,
            pInkMD,
            pRecPath,
            pRecPathCollide
          )
        )
      );
      yield If10(gteq5(dist, mul12(4, add17(pxReqGapOrig, pxReqInk)))).Then(function* () {
        yield HintMultipleStrokesSimple(Tb, Tt)(
          N,
          forceRoundBottom,
          forceRoundTop,
          zBot,
          zTop,
          pZMids
        );
        yield $.Return(true);
      });
      yield THintMultipleStrokesMidSize(NMax, Tb, Tt)(
        N,
        dist,
        forceRoundBottom,
        forceRoundTop,
        frBot,
        frTop,
        zBot,
        zTop,
        pZMids,
        pGapMD,
        pInkMD
      );
      yield $.Return(true);
    }
  )
);

// packages/hint-multi-stroke/src/hltt-programs/index.ts
var AmendMinGapDistT = Template14(
  (Tb, Tt) => Func18(Int10, Tb, Tt, Store11(GlyphPoint12), Store11(Frac17)).def(
    function* ($, N, zBot, zTop, pZMids, pGapMD) {
      const j = $.Local(Int10);
      const gapDist = $.Local(Frac17);
      const gapMinDistOld = $.Local(Frac17);
      yield j.set(0);
      yield gapDist.set(0);
      yield gapMinDistOld.set(0);
      yield While10(lteq5(j, N), function* () {
        yield gapDist.set(FetchOrigGap(Tb, Tt)(N, j, zBot, zTop, pZMids));
        yield gapMinDistOld.set(pGapMD.part(j));
        yield pGapMD.part(j).set(
          max9(
            floor3(gapMinDistOld),
            mul13(
              min4(1, floor3(gapMinDistOld)),
              max9(0, round6.white(sub15(gapDist, add18(1, mul13(1 / 32, i2f4(mppem3()))))))
            )
          )
        );
        yield j.set(add18(j, 1));
      });
    }
  )
);
var THintMultipleStrokesExplicit = Template14(
  (N, Tb, Tt) => Func18(
    ...repeatN(N + 1, Frac17),
    ...repeatN(N, Frac17),
    ...repeatN(N, Int10),
    ...repeatN(N, Int10),
    Bool5,
    Bool5,
    Tb,
    Tt,
    ...repeatN(2 * N, GlyphPoint12),
    Int10
  ).def(function* ($, ...args) {
    const va = VarArgs.from(args);
    const ixGapMinDist = va.take(Frac17, N + 1);
    const ixInkMinDist = va.take(Frac17, N);
    const ixRecPath = va.take(Int10, N);
    const ixRecPathCollide = va.take(Int10, N);
    const [iBotFree] = va.take(Bool5, 1);
    const [iTopFree] = va.take(Bool5, 1);
    const [zBot] = va.take(Tb, 1);
    const [zTop] = va.take(Tt, 1);
    const zMids = va.take(GlyphPoint12, 2 * N);
    const [giveUpMode] = va.take(Int10, 1);
    const oGapMD = $.LocalArray(Frac17, N + 1);
    const aGapMD = $.LocalArray(Frac17, N + 1);
    const aInkMD = $.LocalArray(Frac17, N);
    const aRecPath = $.LocalArray(Int10, N);
    const aRecPathCollide = $.LocalArray(Int10, N);
    const aZMids = $.LocalArray(GlyphPoint12, N * 2);
    yield TInitArr(N + 1, Frac17)(oGapMD, ...ixGapMinDist);
    yield TInitArr(N + 1, Frac17)(aGapMD, ...ixGapMinDist);
    yield TInitArr(N, Frac17)(aInkMD, ...ixInkMinDist);
    yield TInitArr(N, Int10)(aRecPath, ...ixRecPath);
    yield TInitArr(N, Int10)(aRecPathCollide, ...ixRecPathCollide);
    yield TInitZMids(N, GlyphPoint12)(aZMids, ...zMids);
    yield AmendMinGapDistT(Tb, Tt)(
      N,
      unsafeCoerce(Tb, zBot),
      unsafeCoerce(Tt, zTop),
      aZMids,
      aGapMD
    );
    yield THintMultipleStrokesMainImpl(8 * Math.ceil(N / 8), Tb, Tt)(
      N,
      iBotFree,
      iTopFree,
      giveUpMode,
      zBot,
      zTop,
      aZMids,
      oGapMD,
      aGapMD,
      aInkMD,
      aRecPath,
      aRecPathCollide
    );
  })
);

// packages/hint-multi-stroke/src/props.ts
function drop(a, index) {
  const a1 = [];
  for (let j = 0; j < a.length; j++) if (j !== index) a1.push(a[j]);
  return a1;
}
function decideMerge(allowMerge, N) {
  let mergeIndex = -1;
  let mergePri = 0;
  for (let j = 0; j <= N; j++) {
    const a = allowMerge[j] || 0;
    if (Math.abs(a) > Math.abs(mergePri)) {
      mergeIndex = j;
      mergePri = a;
    }
  }
  const mergeDown = mergePri < 0 ? 1 : 0;
  return { mergeIndex, mergeDown };
}
function getRecPathImpl(a, b, N) {
  const ma = decideMerge(a, N);
  const mb = decideMerge(b, N);
  const pri = (1 + mb.mergeIndex) * (mb.mergeDown ? -1 : 1);
  if (ma.mergeIndex < 0) {
    return [];
  } else if (ma.mergeIndex === 0) {
    return [pri, ...getRecPathImpl(drop(a, 0), drop(b, 0), N - 1)];
  } else if (ma.mergeIndex === N) {
    return [pri, ...getRecPathImpl(drop(a, N), drop(b, N), N - 1)];
  } else {
    return [pri, ...getRecPathImpl(drop(a, ma.mergeIndex), drop(b, ma.mergeIndex), N - 1)];
  }
}
function getRecPath(a, b, N) {
  const path = getRecPathImpl(a, b, N);
  while (path.length < N) path.push(0);
  path.length = N;
  return path;
}

// packages/hint-multi-stroke/src/hint.ts
var MultiStrokeHint;
((MultiStrokeHint2) => {
  const TAG = `${PREFIX2}::MultiStrokeHint`;
  class Hint {
    constructor(props) {
      this.props = props;
      const N = props.middleStrokes.length;
      this.N = N;
      if (props.mergePriority.length !== N + 1) {
        throw new TypeError("mergePriority length mismatch");
      }
      if (props.allowCollide.length !== N + 1) {
        throw new TypeError("allowCollide length mismatch");
      }
      if (props.gapMinDist.length !== N + 1) {
        throw new TypeError("gapMinDist length mismatch");
      }
      if (props.inkMinDist.length !== N) {
        throw new TypeError("inkMinDist length mismatch");
      }
    }
    toJSON() {
      return { type: TAG, props: this.props };
    }
    createCompiler(bag, sink) {
      const hlttSink = sink.dynamicCast(HlttProgramSink5);
      if (hlttSink) return new HlttCompiler(hlttSink, this.props);
      return null;
    }
    traverse() {
    }
  }
  MultiStrokeHint2.Hint = Hint;
  class HintFactory {
    constructor() {
      this.type = TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAG) return new Hint(json.props);
      return null;
    }
  }
  MultiStrokeHint2.HintFactory = HintFactory;
  class HlttCompiler {
    constructor(sink, props) {
      this.sink = sink;
      this.props = props;
    }
    doCompile() {
      const { props } = this;
      const N = props.middleStrokes.length;
      const recPath = getRecPath(props.mergePriority, props.mergePriority, N);
      const collidePriority = props.mergePriority.map(
        (c, j) => c * (props.allowCollide[j] ? 1 : 0)
      );
      const recPathCollide = getRecPath(props.mergePriority, collidePriority, N);
      const sink = this.sink;
      this.sink.addSegment(function* ($) {
        const spurBottom = Twilights.SpurBottom(props.emBoxName);
        const spurTop = Twilights.SpurTop(props.emBoxName);
        const bottomPoint = !props.bottomPoint ? spurBottom : sink.resolveGlyphPoint(props.bottomPoint);
        const topPoint = !props.topPoint ? spurTop : sink.resolveGlyphPoint(props.topPoint);
        yield THintMultipleStrokesExplicit(
          N,
          !props.bottomPoint ? TwilightPoint5 : GlyphPoint13,
          !props.topPoint ? TwilightPoint5 : GlyphPoint13
        )(
          ...props.gapMinDist,
          ...props.inkMinDist,
          ...recPath,
          ...recPathCollide,
          !!props.bottomBalanceForbidden,
          !!props.topBalanceForbidden,
          bottomPoint,
          topPoint,
          ..._.flatten(props.middleStrokes).map((z) => sink.resolveGlyphPoint(z)),
          props.giveUpMode || 0
        );
      });
    }
  }
  MultiStrokeHint2.HlttCompiler = HlttCompiler;
  const TAGH = `${PREFIX2}::MultiStrokeHintH`;
  class HintH {
    constructor(props) {
      this.props = props;
      const N = props.middleStrokes.length;
      this.N = N;
      if (props.mergePriority.length !== N + 1) {
        throw new TypeError("mergePriority length mismatch");
      }
      if (props.allowCollide.length !== N + 1) {
        throw new TypeError("allowCollide length mismatch");
      }
      if (props.gapMinDist.length !== N + 1) {
        throw new TypeError("gapMinDist length mismatch");
      }
      if (props.inkMinDist.length !== N) {
        throw new TypeError("inkMinDist length mismatch");
      }
    }
    toJSON() {
      return { type: TAGH, props: this.props };
    }
    createCompiler(bag, sink) {
      const hlttSink = sink.dynamicCast(HlttProgramSink5);
      if (hlttSink) return new HlttCompilerH(hlttSink, this.props);
      return null;
    }
    traverse() {
    }
  }
  MultiStrokeHint2.HintH = HintH;
  class HintHFactory {
    constructor() {
      this.type = TAGH;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readJson(json) {
      if (json && json.type === TAGH) return new HintH(json.props);
      return null;
    }
  }
  MultiStrokeHint2.HintHFactory = HintHFactory;
  class HlttCompilerH {
    constructor(sink, props) {
      this.sink = sink;
      this.props = props;
    }
    doCompile() {
      const { props } = this;
      const N = props.middleStrokes.length;
      const recPath = getRecPath(props.mergePriority, props.mergePriority, N);
      const collidePriority = props.mergePriority.map(
        (c, j) => c * (props.allowCollide[j] ? 1 : 0)
      );
      const recPathCollide = getRecPath(props.mergePriority, collidePriority, N);
      const sink = this.sink;
      this.sink.addSegment(function* ($) {
        const spurBottom = Twilights.SpurLeft(props.emBoxName);
        const spurTop = Twilights.SpurRight(props.emBoxName);
        const bottomPoint = !props.bottomPoint ? spurBottom : sink.resolveGlyphPoint(props.bottomPoint);
        const topPoint = !props.topPoint ? spurTop : sink.resolveGlyphPoint(props.topPoint);
        yield THintMultipleStrokesExplicit(
          N,
          !props.bottomPoint ? TwilightPoint5 : GlyphPoint13,
          !props.topPoint ? TwilightPoint5 : GlyphPoint13
        )(
          ...props.gapMinDist,
          ...props.inkMinDist,
          ...recPath,
          ...recPathCollide,
          !!props.bottomBalanceForbidden,
          !!props.topBalanceForbidden,
          bottomPoint,
          topPoint,
          ..._.flatten(props.middleStrokes).map((z) => sink.resolveGlyphPoint(z)),
          props.giveUpMode || 0
        );
      });
    }
  }
  MultiStrokeHint2.HlttCompilerH = HlttCompilerH;
})(MultiStrokeHint || (MultiStrokeHint = {}));

// packages/ideograph-hint-generator-1/src/glyph-back-end.ts
import * as util2 from "util";
import { Support as Support7 } from "@chlorophytum/arch";
import { Interpolate, LinkChain, Sequence, Smooth, WithDirection } from "@chlorophytum/hint-common";

// packages/ideograph-shape-analyzer-shared/src/interfaces/params.ts
var DefaultIdeographHintingParams = {
  groupName: "Ideograph"
};

// packages/ideograph-shape-analyzer-shared/src/types/contour.ts
import { Geometry as Geometry2, Support } from "@chlorophytum/arch";

// packages/ideograph-shape-analyzer-shared/src/types/point.ts
import * as Util from "util";
import { Geometry } from "@chlorophytum/arch";
var CPoint = class _CPoint {
  constructor(x, y, type = Geometry.GlyphPointType.Corner, rawReferences = null) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.rawReferences = rawReferences;
    this.xExtrema = false;
    this.xStrongExtrema = false;
    this.yExtrema = false;
    this.yStrongExtrema = false;
    this.atLeft = false;
    this.isTurnAround = false;
    this.touched = false;
    this.dontTouch = false;
    this.isKeyPoint = false;
    this.references = type === Geometry.GlyphPointType.Corner ? rawReferences : null;
  }
  static from(gz) {
    return new _CPoint(gz.x, gz.y, gz.type, gz.references);
  }
  static cornerFrom(gz) {
    return new _CPoint(gz.x, gz.y, Geometry.GlyphPointType.Corner, gz.references);
  }
  queryReference() {
    return this.references && this.references.length > 0 ? this.references[0] : null;
  }
  isCorner() {
    return this.type === Geometry.GlyphPointType.Corner;
  }
  static adjacentZ(p, q) {
    return p.nextZ === q || p.prevZ === q || q.nextZ === p || q.prevZ === p;
  }
  static adjacent(p, q) {
    return p.next === q || p.prev === q || q.next === p || q.prev === p;
  }
  [Util.inspect.custom](depth, options) {
    const posStr = `(${options.stylize(this.formatCoord(this.x), "number")}, ${options.stylize(this.formatCoord(this.y), "number")})`;
    if (this.references && this.references.length) {
      return `${posStr}${options.stylize("#" + this.references[0].id, "special")}`;
    } else if (this.rawReferences && this.rawReferences.length) {
      return `${posStr}${options.stylize(`(#${this.rawReferences[0].id})`, "special")}`;
    } else {
      return posStr;
    }
  }
  formatCoord(x) {
    return x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }
};

// packages/ideograph-shape-analyzer-shared/src/types/stat.ts
function createStat() {
  return {
    xMin: 65535,
    xMax: -65535,
    yMin: 65535,
    yMax: -65535
  };
}

// packages/ideograph-shape-analyzer-shared/src/types/contour.ts
var Contour = class {
  constructor() {
    this.points = [];
    this.ccw = false;
    this.stats = createStat();
    this.outline = false;
  }
  checkYExtrema(prev, z, next) {
    if (z.y > prev.y && z.y >= next.y || z.y < prev.y && z.y <= next.y) {
      z.yExtrema = true;
      z.yStrongExtrema = z.y > prev.y + 1 && z.y > next.y + 1 || z.y < prev.y - 1 && z.y < next.y - 1;
    }
  }
  checkXExtrema(prev, z, next) {
    if (z.x > prev.x && z.x >= next.x || z.x < prev.x && z.x <= next.x) {
      z.xExtrema = true;
      z.xStrongExtrema = z.x > prev.x + 1 && z.x > next.x + 1 || z.x < prev.x - 1 && z.x < next.x - 1 || z.isCorner() && !prev.isCorner() && !next.isCorner() && z.x === prev.x && z.x === next.x;
      if (z.xStrongExtrema) {
        z.atLeft = z.x < prev.x - 1 && z.x < next.x - 1;
      }
    }
  }
  checkExtrema(k) {
    const z = this.points[k], prev = this.points[this.cyc(k - 1)], next = this.points[this.cyc(k + 1)];
    this.checkYExtrema(prev, z, next);
    this.checkXExtrema(prev, z, next);
    const cross = (z.x - prev.x) * (next.y - z.y) - (z.y - prev.y) * (next.x - z.x);
    z.isTurnAround = cross > 0;
  }
  amendExtrema(k) {
    const z = this.points[k], prev = this.points[this.cyc(k - 1)], next = this.points[this.cyc(k + 1)];
    if (!(z.isCorner() && !prev.isCorner() && !next.isCorner())) return;
    if (z.y === prev.y && z.y === next.y && !z.yExtrema) {
      z.yExtrema = prev.yExtrema || next.yExtrema;
      z.yStrongExtrema = prev.yStrongExtrema || next.yStrongExtrema;
      prev.yExtrema = next.yExtrema = false;
      prev.yStrongExtrema = next.yStrongExtrema = false;
    }
    if (z.x === prev.x && z.x === next.x && !z.xExtrema) {
      z.xExtrema = prev.xExtrema || next.xExtrema;
      z.xStrongExtrema = prev.xStrongExtrema || next.xStrongExtrema;
      prev.xExtrema = next.xExtrema = false;
      prev.xStrongExtrema = next.xStrongExtrema = false;
    }
  }
  cyc(n) {
    return (n + this.points.length) % this.points.length;
  }
  stat() {
    this.markAdj();
    this.markAdjZ();
    for (let j = 0; j < this.points.length; j++) this.checkExtrema(j);
    for (let j = 0; j < this.points.length; j++) this.amendExtrema(j);
    const xs = this.points.map((p) => p.x);
    const ys = this.points.map((p) => p.y);
    this.stats.xMax = Math.max(...xs);
    this.stats.yMax = Math.max(...ys);
    this.stats.xMin = Math.min(...xs);
    this.stats.yMin = Math.min(...ys);
    this.orient();
  }
  markAdj() {
    const corners = this.points.filter((z) => z.queryReference());
    for (let m = 0; m < corners.length; m++) {
      const prev = corners[(m - 1 + corners.length) % corners.length];
      const curr = corners[m];
      const next = corners[(m + 1 + corners.length) % corners.length];
      curr.prev = prev;
      curr.next = next;
    }
  }
  markAdjZ() {
    const points = this.points;
    for (let m = 0; m < points.length; m++) {
      const prev = points[(m - 1 + points.length) % points.length];
      const curr = points[m];
      const next = points[(m + 1 + points.length) % points.length];
      curr.prevZ = prev;
      curr.nextZ = next;
    }
  }
  orient() {
    let jm = 0, ym = this.points[0].y;
    for (let j = 1; j < this.points.length; j++) {
      if (this.points[j].y < ym) {
        jm = j;
        ym = this.points[j].y;
      }
    }
    const p0 = this.points[this.cyc(jm - 1)], p1 = this.points[jm], p2 = this.points[this.cyc(jm + 1)];
    const x = (p0.x - p1.x) * (p2.y - p1.y) - (p0.y - p1.y) * (p2.x - p1.x);
    if (x < 0) {
      this.ccw = true;
    } else if (x === 0) {
      this.ccw = p2.x > p1.x;
    }
  }
  includesPoint(z) {
    return inPoly(z, this.points);
  }
  includes(that) {
    for (let j = 0; j < that.points.length; j++) {
      if (!inPoly(that.points[j], this.points)) return false;
    }
    return true;
  }
};
function inPoly(point, vs) {
  const x = point.x, y = point.y;
  let inside = 0;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i].x, yi = vs[i].y;
    const xj = vs[j].x, yj = vs[j].y;
    if (xi === x && yi === y) return true;
    const intersect = yi > y !== yj > y && (yj > yi ? (x - xi) * (yj - yi) < (xj - xi) * (y - yi) : (x - xi) * (yj - yi) > (xj - xi) * (y - yi));
    if (intersect) {
      if (yi > yj) inside += 1;
      else inside -= 1;
    }
  }
  return !!inside;
}
var ContourMaker = class _ContourMaker {
  constructor(options) {
    this.options = options;
    this.cResult = [];
    this.zPending = [];
  }
  static processPoints(contour, options) {
    const st = new _ContourMaker(options);
    const jStart = this.findCornerIndex(contour);
    if (jStart < 0) return null;
    const zStart = CPoint.from(contour[jStart]);
    st.zPending.push(zStart);
    for (let k = 1; k < contour.length; k++) {
      const z = CPoint.from(contour[(jStart + k) % contour.length]);
      switch (z.type) {
        case Geometry2.GlyphPointType.Quadratic:
          st.introduceQuadratic(z);
          break;
        default:
          st.flush(CPoint.cornerFrom(z));
          break;
      }
    }
    st.flush(zStart);
    const ret = new Contour();
    ret.points = st.cResult;
    return ret;
  }
  static findCornerIndex(contour) {
    for (let j = 0; j < contour.length; j++) {
      if (contour[j].type === Geometry2.GlyphPointType.Corner) return j;
    }
    return -1;
  }
  isPendingLine() {
    return this.zPending.length === 1;
  }
  isPendingQuadratic() {
    return this.zPending.length === 2 && this.zPending[1].type === Geometry2.GlyphPointType.Quadratic;
  }
  introduceQuadratic(z) {
    if (this.isPendingQuadratic()) {
      const mid = new CPoint(
        (this.zPending[1].x + z.x) / 2,
        (this.zPending[1].y + z.y) / 2,
        Geometry2.GlyphPointType.OnCurvePhantom
      );
      this.flush(mid);
      this.zPending.push(z);
    } else {
      this.zPending.push(z);
    }
  }
  flush(z) {
    if (this.isPendingQuadratic()) {
      this.cResult.push(this.zPending[0]);
      this.flushQuadraticInners(this.zPending[0], this.zPending[1], z);
    } else if (this.isPendingLine()) {
      const a = this.zPending[0];
      this.cResult.push(a);
      this.flushLineInners(a, z);
    } else {
      for (const z1 of this.zPending) this.cResult.push(z1);
    }
    this.zPending.length = 1;
    this.zPending[0] = z;
  }
  flushLineInners(a, b) {
    if (!this.options.dicingLength) return;
    const arcLength = Math.hypot(a.x - b.x, a.y - b.y);
    const stops = Math.round(arcLength / this.options.dicingLength);
    for (let k = 1; k < stops; k++) {
      const mid = new CPoint(
        Support.mix(a.x, b.x, k / stops),
        Support.mix(a.y, b.y, k / stops),
        Geometry2.GlyphPointType.OnCurvePhantom
      );
      this.cResult.push(mid);
    }
  }
  flushQuadraticInners(a, b, c) {
    if (!this.options.dicingLength) {
      this.cResult.push(b);
    } else {
      const mockArcLength = Math.hypot(a.x - b.x, a.y - b.y) + Math.hypot(b.x - c.x, b.y - c.y);
      const stops = Math.max(1, Math.round(mockArcLength / this.options.dicingLength));
      if (stops > 1) {
        for (let k = 0; k < stops; k++) {
          const [p, q, r] = this.quadSplit(a, b, c, 1 / (stops - k));
          if (k) this.cResult.push(a);
          this.cResult.push(p);
          a = q, b = r;
        }
      } else {
        this.cResult.push(b);
      }
    }
  }
  quadSplit(a, b, c, t) {
    const p = new CPoint(
      (1 - t) * a.x + t * b.x,
      (1 - t) * a.y + t * b.y,
      Geometry2.GlyphPointType.Quadratic
    );
    const q = new CPoint(
      (1 - t) * (1 - t) * a.x + 2 * t * (1 - t) * b.x + t * t * c.x,
      (1 - t) * (1 - t) * a.y + 2 * t * (1 - t) * b.y + t * t * c.y,
      Geometry2.GlyphPointType.OnCurvePhantom
    );
    const r = new CPoint(
      (1 - t) * b.x + t * c.x,
      (1 - t) * b.y + t * c.y,
      Geometry2.GlyphPointType.Quadratic
    );
    return [p, q, r];
  }
};

// packages/ideograph-shape-analyzer-shared/src/types/glyph.ts
var CGlyph = class {
  constructor(contours = []) {
    this.contours = contours;
    this.stats = createStat();
  }
  containsPoint(z) {
    let nCW = 0, nCCW = 0;
    for (let j = 0; j < this.contours.length; j++) {
      if (this.contours[j].includesPoint(z)) {
        if (this.contours[j].ccw) nCCW += 1;
        else nCW += 1;
      }
    }
    return nCCW !== nCW;
  }
  stat() {
    for (const c of this.contours) {
      c.stat();
      if (c.stats.xMin < this.stats.xMin) this.stats.xMin = c.stats.xMin;
      if (c.stats.yMin < this.stats.yMin) this.stats.yMin = c.stats.yMin;
      if (c.stats.xMax > this.stats.xMax) this.stats.xMax = c.stats.xMax;
      if (c.stats.yMax > this.stats.yMax) this.stats.yMax = c.stats.yMax;
    }
  }
};

// packages/ideograph-shape-analyzer-shared/src/types/hash.ts
import { createHash } from "crypto";
var crypto = { createHash };
function simpleHash(text) {
  const hash = crypto.createHash("sha1");
  hash.update(text);
  return hash.digest("hex");
}
function combineHash(...texts) {
  const hash = crypto.createHash("sha1");
  for (const text of texts) hash.update(simpleHash(text));
  return hash.digest("hex");
}
function hashGlyphContours(glyph) {
  const input = glyph.contours;
  let buf = "";
  for (let j = 0; j < input.length; j++) {
    buf += "a";
    const c = input[j];
    for (let k = 0; k < c.points.length; k++) {
      buf += "z" + c.points[k].type + " ";
      buf += roundC(c.points[k].x) + " " + roundC(c.points[k].y);
    }
  }
  return combineHash(buf);
}
function roundC(x) {
  return Math.round(x * 256);
}

// packages/ideograph-shape-analyzer-1/src/geometry-intro/create-glyph.ts
async function fetchGeometry(font, params, gid) {
  const inst = params.instanceForAnalysis ? await font.convertUserInstanceToNormalized({ user: params.instanceForAnalysis }) || null : null;
  return await font.getGeometry(gid, inst);
}
function createGlyph(input, params) {
  const contours = [];
  const dicingParams = {
    dicingLength: params.DoOutlineDicing || params.instanceForAnalysis ? params.UPM * (params.OutlineDicingStepLength ?? 0.5 * params.CANONICAL_STEM_WIDTH) : void 0
  };
  for (let j = 0; j < input.length; j++) {
    const c = ContourMaker.processPoints(input[j], dicingParams);
    if (c) contours.push(c);
  }
  const glyph = new CGlyph(contours);
  glyph.stat();
  return glyph;
}

// packages/ideograph-shape-analyzer-1/src/hint-analyze/index.ts
import * as _3 from "lodash";

// packages/ideograph-shape-analyzer-1/src/shape-analyze/analysis.ts
import * as util from "util";
var Interpolation = class {
  constructor(ref1, ref2, subject, priority) {
    this.ref1 = ref1;
    this.ref2 = ref2;
    this.subject = subject;
    this.priority = priority;
    if (!ref1.queryReference() || !ref2.queryReference() || !subject.queryReference())
      throw new Error(
        `UNREF! ${util.inspect(ref1)} -- ${util.inspect(subject)} -- ${util.inspect(ref2)}`
      );
  }
};
var ShortAbsorption = class {
  constructor(ref1, subject, priority) {
    this.ref1 = ref1;
    this.subject = subject;
    this.priority = priority;
    this.ref2 = null;
    if (!ref1.queryReference() || !subject.queryReference())
      throw new Error(`UNREF! ${util.inspect(ref1)} -- ${util.inspect(subject)}`);
  }
};
var BlueZone = class {
  constructor() {
    this.topZs = [];
    this.bottomZs = [];
  }
};
var ColMats = class {
  constructor() {
    this.annexation = [];
    this.darkness = [];
    this.flips = [];
    this.flipsSig = [];
    this.proximity = [];
    this.spatialProximity = [];
  }
};
var ShapeAnalysisResult = class {
  constructor() {
    this.radicals = [];
    this.stems = [];
    this.stemOverlaps = [];
    this.stemOverlapLengths = [];
    this.slopeDifference = [];
    this.directOverlaps = [];
    this.symmetry = [];
    this.collisionMatrices = new ColMats();
    this.blueZone = new BlueZone();
    this.nonBlueTopBottom = new BlueZone();
    this.interpolations = [];
    this.shortAbsorptions = [];
  }
};

// packages/ideograph-shape-analyzer-1/src/shape-analyze/post-stem/blue-zone-points.ts
function analyzeBlueZonePoints(glyph, stems, strategy) {
  const topBluePoints = /* @__PURE__ */ new Set();
  const bottomBluePoints = /* @__PURE__ */ new Set();
  const glyphTopMostPoint = /* @__PURE__ */ new Set();
  const glyphBottomMostPoint = /* @__PURE__ */ new Set();
  const decoSet = /* @__PURE__ */ new Set();
  for (const point of OrderedContourPoints(glyph)) {
    if (!point.yExtrema) continue;
    considerPoint(
      glyph,
      strategy,
      stems,
      point,
      strategy.EmBox.StrokeBottom * strategy.UPM,
      strategy.EmBox.StrokeTop * strategy.UPM,
      bottomBluePoints,
      topBluePoints,
      decoSet
    );
  }
  markTouchProps(bottomBluePoints, decoSet);
  markTouchProps(topBluePoints, decoSet);
  for (const point of OrderedContourPoints(glyph)) {
    considerPoint(
      glyph,
      strategy,
      stems,
      point,
      strategy.EmBox.StrokeBottom * strategy.UPM,
      strategy.EmBox.StrokeTop * strategy.UPM,
      bottomBluePoints,
      topBluePoints,
      decoSet
    );
  }
  markTouchProps(bottomBluePoints, decoSet);
  markTouchProps(topBluePoints, decoSet);
  for (const point of OrderedContourPoints(glyph)) {
    if (!point.yExtrema) continue;
    considerPoint(
      glyph,
      strategy,
      stems,
      point,
      glyph.stats.yMin - (bottomBluePoints.size ? 65535 : -1),
      glyph.stats.yMax + (topBluePoints.size ? 65535 : -1),
      glyphBottomMostPoint,
      glyphTopMostPoint,
      decoSet
    );
  }
  markTouchProps(glyphBottomMostPoint, decoSet);
  markTouchProps(glyphTopMostPoint, decoSet);
  markDecoProps(decoSet);
  return {
    topBluePoints: Array.from(topBluePoints).sort((a, b) => b.y - a.y),
    bottomBluePoints: Array.from(bottomBluePoints).sort((a, b) => b.y - a.y),
    glyphTopMostPoint: Array.from(glyphTopMostPoint),
    glyphBottomMostPoint: Array.from(glyphBottomMostPoint)
  };
}
function markTouchProps(blue, deco) {
  for (const z of blue) if (!deco.has(z)) z.touched = z.isKeyPoint = z.blued = true;
}
function markDecoProps(deco) {
  for (const z of deco) {
    z.touched = z.isKeyPoint = z.blued = false;
    z.dontTouch = true;
  }
}
function nearTop(z1, z2, d) {
  return Math.hypot(z1.x - z2.x, z1.y - z2.y) < d;
}
function nearBot(z1, z2, d) {
  return Math.abs(z1.y - z2.y) <= d;
}
function considerPoint(glyph, strategy, stems, point, yBottom, yTop, bottomBluePoints, topBluePoints, decoSet) {
  if (!point.queryReference()) return;
  const possibleTop = point.y >= yTop && point.yExtrema && !point.touched && !point.dontTouch;
  const possibleBottom = point.y <= yBottom && point.yExtrema && !point.touched && !point.dontTouch;
  for (let j = 0; j < glyph.contours.length; j++) {
    for (let m = 0; m < glyph.contours[j].points.length; m++) {
      const zm = glyph.contours[j].points[m];
      if (!(CPoint.adjacent(point, zm) || CPoint.adjacentZ(point, zm))) continue;
      if (!(zm.touched || zm.dontTouch)) continue;
      if (zm.y <= point.y && nearTop(point, zm, strategy.STEM_SIDE_MIN_RISE * strategy.UPM)) {
        decoSet.add(point);
        return;
      }
      if (zm.y >= point.y && nearBot(point, zm, strategy.STEM_SIDE_MIN_DIST_DESCENT * strategy.UPM / 3)) {
        decoSet.add(point);
        return;
      }
    }
  }
  for (const stem of stems) {
    if (point.y < stem.y + strategy.Y_FUZZ && point.y > stem.y - stem.width - strategy.Y_FUZZ && point.x > stem.xMin - strategy.X_FUZZ && point.x < stem.xMax + strategy.X_FUZZ) {
      return;
    }
  }
  if (possibleBottom) {
    bottomBluePoints.add(point);
  } else if (possibleTop) {
    topBluePoints.add(point);
  }
}
function* OrderedContourPoints(g) {
  for (const c of g.contours) {
    yield* c.points.sort((a, b) => a.y - b.y);
  }
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/post-stem/ipsa.ts
import * as _2 from "lodash";
function byPointY(p, q) {
  return p.y - q.y;
}
var STEPS = 64;
function shortAbsorptionPointByKeys(targets, strategy, pt, keys, accept, priority) {
  if (pt.touched || pt.dontTouch || !pt.isCorner()) return;
  let minDist = 65535, minKey = null;
  for (let m = 0; m < keys.length; m++) {
    const key = keys[m];
    const dist = Math.hypot(pt.y - key.y, pt.x - key.x);
    if (key.yStrongExtrema && dist <= strategy.ABSORPTION_LIMIT * strategy.UPM && key !== pt) {
      if (dist < minDist) {
        minDist = dist;
        minKey = key;
      }
    }
  }
  if (minKey) {
    while (minKey.linkedKey) minKey = minKey.linkedKey;
    if (accept.ip) {
      if (minKey.ipKeys && pt.y >= minKey.ipKeys.lowerK0.y && pt.y <= minKey.ipKeys.upperK0.y) {
        targets.interpolations.push(
          new Interpolation(
            minKey.ipKeys.upperK,
            minKey.ipKeys.lowerK,
            pt,
            minKey.ipKeys.ipPri
          )
        );
        pt.touched = true;
        return;
      }
    }
    if (accept.direct) {
      targets.shortAbsorptions.push(
        new ShortAbsorption(minKey, pt, priority + (pt.yExtrema ? 1 : 0))
      );
      pt.touched = true;
      return;
    }
  }
}
function shortAbsorptionByKeys(targets, strategy, pts, keys, accept, priority) {
  for (let k = 0; k < pts.length; k++) {
    shortAbsorptionPointByKeys(targets, strategy, pts[k], keys, accept, priority);
  }
}
function compareZ(key, pt, aux, f) {
  if (!f(key, pt, aux)) return false;
  while (key.linkedKey) key = key.linkedKey;
  return f(key, pt, aux);
}
function cLT(key, pt, aux) {
  return key.y + aux < pt.y;
}
function cGT(key, pt, aux) {
  return key.y - aux > pt.y;
}
function cEq(key, pt, aux) {
  return Math.abs(pt.y - key.y) < aux;
}
var IpKnotTB = { inRangWeight: 1 / 4 };
var IpKnotInner = { inRangWeight: 1 / 4 };
function ipWeight(kind, key, pt) {
  const inRange = key.isPhantom && pt.x >= key.isPhantom.xMin && pt.x <= key.isPhantom.xMax;
  return Math.hypot(key.x - pt.x, (inRange ? kind.inRangWeight : 1) * (key.y - pt.y));
}
function interpolateByKeys(kind, targets, pts, keys, priority, fuzz) {
  for (let k = 0; k < pts.length; k++) {
    const pt = pts[k];
    if (pt.touched || pt.dontTouch) continue;
    let upperK = null, upperDist = 65535;
    let lowerK = null, lowerDist = 65535;
    for (let m = keys.length - 1; m >= 0; m--) {
      if (!compareZ(keys[m], pt, fuzz, cEq)) continue;
      if (!CPoint.adjacent(keys[m], pt) && !CPoint.adjacentZ(keys[m], pt)) continue;
      pt.dontTouch = true;
    }
    if (pt.touched || pt.dontTouch) continue;
    for (let m = keys.length - 1; m >= 0; m--) {
      if (compareZ(keys[m], pt, fuzz, cLT)) {
        if (!lowerK || ipWeight(kind, keys[m], pt) < lowerDist) {
          lowerK = keys[m];
          lowerDist = ipWeight(kind, keys[m], pt);
        }
      }
    }
    for (let m = keys.length - 1; m >= 0; m--) {
      if (compareZ(keys[m], pt, fuzz, cGT)) {
        if (!upperK || ipWeight(kind, keys[m], pt) < upperDist) {
          upperK = keys[m];
          upperDist = ipWeight(kind, keys[m], pt);
        }
      }
    }
    if (!lowerK || !upperK) continue;
    const upperK0 = upperK, lowerK0 = lowerK;
    while (upperK.linkedKey) upperK = upperK.linkedKey;
    while (lowerK.linkedKey) lowerK = lowerK.linkedKey;
    if (!upperK.isPhantom && !lowerK.isPhantom) {
      if (upperK.y > lowerK.y + fuzz) {
        pt.ipKeys = { upperK0, lowerK0, upperK, lowerK, ipPri: priority };
        targets.interpolations.push(new Interpolation(upperK, lowerK, pt, priority));
      } else if (upperK !== pt) {
        targets.shortAbsorptions.push(new ShortAbsorption(upperK, pt, priority));
      }
    }
    pt.touched = true;
  }
}
function linkRadicalSoleStemPoints(shortAbsorptions, strategy, radical, radicalStems, priority) {
  const radicalParts = Array.from(radical.contours());
  const radicalPoints = _2.flatten(radicalParts.map((c) => c.points));
  for (let k = 0; k < radicalPoints.length; k++) {
    const z = radicalPoints[k];
    if (z.isKeyPoint || z.touched || z.dontTouch || !z.queryReference()) continue;
    if (!z.xExtrema && !z.yExtrema) continue;
    let candidate = null;
    for (const stem of radicalStems) {
      let reject = false;
      let sc = null;
      const highPoints = _2.flatten(stem.high);
      const lowPoints = _2.flatten(stem.low);
      const keyPoints = highPoints.concat(lowPoints);
      for (let j = 0; j < keyPoints.length; j++) {
        const zKey = keyPoints[j];
        if (zKey === z || !zKey.queryReference() || zKey.dontTouch) continue;
        if (CPoint.adjacent(zKey, z) || CPoint.adjacentZ(zKey, z)) {
          reject = true;
          continue;
        }
        if (Math.abs(z.y - zKey.y) <= strategy.Y_FUZZ * strategy.UPM && Math.abs(z.x - zKey.x) <= strategy.Y_FUZZ * strategy.UPM) {
          continue;
        }
        if (stem.atLeft && z.x > zKey.x) continue;
        if (stem.atRight && z.x < zKey.x) continue;
        const yDifference = z.y - (zKey.y + (z.x - zKey.x) * (zKey.associatedStemSlope || 0));
        if (!(yDifference > 0 ? yDifference < strategy.Y_FUZZ * strategy.UPM * 2 : -yDifference < strategy.Y_FUZZ * strategy.UPM)) {
          continue;
        }
        if (sc && Math.hypot(z.y - sc.y, z.x - sc.x) <= Math.hypot(z.y - zKey.y, z.x - zKey.x)) {
          continue;
        }
        if (!radical.includesSegmentEdge(z, zKey, 1, strategy.SLOPE_FUZZ_K, 1, 1)) continue;
        sc = zKey;
      }
      if (!reject && sc && sc.queryReference() && (!candidate || Math.hypot(z.y - candidate.y, z.x - candidate.x) >= Math.hypot(z.y - sc.y, z.x - sc.x))) {
        candidate = sc;
      }
    }
    if (candidate) {
      let key = candidate;
      while (key.linkedKey) key = key.linkedKey;
      shortAbsorptions.push(new ShortAbsorption(key, z, priority + (z.yExtrema ? 1 : 0)));
      z.touched = true;
    }
  }
}
function linkSoleStemPoints(shortAbsorptions, strategy, analysis, priority) {
  for (let j = 0; j < analysis.radicals.length; j++) {
    const radical = analysis.radicals[j];
    const radicalStems = analysis.stems.filter(function(s) {
      return s.belongRadical === j;
    });
    linkRadicalSoleStemPoints(shortAbsorptions, strategy, radical, radicalStems, priority);
  }
}
function convertDiagStemIp(target, s) {
  if (s.ipHigh) {
    for (const g of s.ipHigh) {
      const [z1, z2, z] = g;
      if (z.touched || z.dontTouch || !z.queryReference()) continue;
      target.interpolations.push(new Interpolation(z1, z2, z, 20));
      z.touched = true;
      z.isKeyPoint = true;
    }
  }
  if (s.ipLow) {
    for (const g of s.ipLow) {
      const [z1, z2, z] = g;
      if (z.touched || z.dontTouch || !z.queryReference()) continue;
      target.interpolations.push(new Interpolation(z1, z2, z, 20));
      z.touched = true;
      z.isKeyPoint = true;
    }
  }
}
function createBlueZonePhantoms(glyphKeyPoints, blues, strategy) {
  for (const zone of [blues.topZs, blues.bottomZs]) {
    if (!zone.length) continue;
    for (const z of zone) {
      for (let step = -STEPS; step <= 2 * STEPS; step++) {
        const p = new CPoint(strategy.UPM * step / STEPS, z.y);
        p.isPhantom = {
          xMin: strategy.UPM * (step - 1 / 2) / STEPS,
          xMax: strategy.UPM * (step - 1 / 2) / STEPS
        };
        p.linkedKey = z;
        glyphKeyPoints.push(p);
      }
    }
  }
}
function createLRPhantom(l, r, step) {
  const p = new CPoint(l.x + step / STEPS * (r.x - l.x), l.y + step / STEPS * (r.y - l.y));
  p.linkedKey = step * 2 <= STEPS ? l : r;
  p.isPhantom = {
    xMin: l.x + (step - 1 / 2) / STEPS * (r.x - l.x),
    xMax: l.x + (step + 1 / 2) / STEPS * (r.x - l.x)
  };
  return p;
}
function createLRYPhantom(z, xMin, xMax, step) {
  const p = new CPoint(xMin + step / STEPS * xMax - xMin, z.y);
  p.linkedKey = z;
  p.isPhantom = {
    xMin: xMin + (step - 1 / 2) / STEPS * (xMax - xMin),
    xMax: xMin + (step + 1 / 2) / STEPS * (xMax - xMin)
  };
  return p;
}
function createStemPhantoms(glyphKeyPoints, stem, strategy) {
  for (let j = 0; j < stem.high.length; j++) {
    const l = stem.high[j][0];
    const r = stem.high[j][stem.high[j].length - 1];
    for (let step = 0; step <= STEPS; step++) {
      if (l.x <= r.x) glyphKeyPoints.push(createLRPhantom(l, r, step));
      else glyphKeyPoints.push(createLRPhantom(r, l, step));
    }
  }
  for (let j = 0; j < stem.low.length; j++) {
    const l = stem.low[j][0];
    const r = stem.low[j][stem.low[j].length - 1];
    for (let step = 0; step <= STEPS; step++) {
      if (l.x <= r.x) glyphKeyPoints.push(createLRPhantom(l, r, step));
      else glyphKeyPoints.push(createLRPhantom(r, l, step));
    }
  }
}
function isIpSaPointExtrema(z, pMin, pMax) {
  return z !== pMin && z !== pMax && !z.touched && !z.dontTouch && (z.yExtrema || z.xStrongExtrema && z.isTurnAround);
}
function analyzeIpSaRecords(contours, shortAbsorptions) {
  const records = [];
  for (let j = 0; j < contours.length; j++) {
    const contourPoints = contours[j].points;
    if (!contourPoints.length) continue;
    const contourAlignPoints = contourPoints.filter((p) => p.touched).sort(byPointY);
    const contourExtrema = contourPoints.filter((p) => p.xExtrema || p.yExtrema).sort(byPointY);
    let pMin = contourPoints[0], pMax = contourPoints[0];
    for (const z of contourPoints) {
      if (!z.queryReference()) continue;
      if (!pMin.queryReference() || z.y < pMin.y) pMin = z;
      if (!pMax.queryReference() || z.y > pMax.y) pMax = z;
    }
    if (contourExtrema.length > 1) {
      const extrema = contourExtrema.filter((z) => isIpSaPointExtrema(z, pMin, pMax));
      const middlePoints = [];
      for (let m = 0; m < extrema.length; m++) {
        if (!extrema[m].queryReference()) continue;
        if (extrema[m].y === pMin.y) {
          if (!CPoint.adjacent(pMin, extrema[m])) {
            shortAbsorptions.push(new ShortAbsorption(pMin, extrema[m], 1));
          }
          extrema[m].touched = true;
          extrema[m].dontTouch = true;
        } else if (extrema[m].y === pMax.y) {
          if (!CPoint.adjacent(pMax, extrema[m])) {
            shortAbsorptions.push(new ShortAbsorption(pMax, extrema[m], 1));
          }
          extrema[m].touched = true;
          extrema[m].dontTouch = true;
        } else if (extrema[m] !== pMin) {
          middlePoints.push(extrema[m]);
        }
      }
      const blues = contourPoints.filter((p) => p.blued);
      const middlePointsL = contourExtrema.filter(
        (p) => p.queryReference() && (p.xExtrema || p.yExtrema)
      );
      records.push({
        topBot: [pMin, pMax],
        middlePoints,
        middlePointsL,
        blues,
        cka: contourAlignPoints
      });
    } else {
      records.push({
        topBot: [pMin, pMax],
        middlePoints: [],
        middlePointsL: [],
        blues: [],
        cka: contourAlignPoints
      });
    }
  }
  return records;
}
function AnalyzeIpSa(glyph, analysis, strategy) {
  let interpolations = [];
  const shortAbsorptions = [];
  const targets = { interpolations, shortAbsorptions };
  const contours = glyph.contours;
  let glyphKeyPoints = [];
  for (let j = 0; j < contours.length; j++) {
    for (let k = 0; k < contours[j].points.length; k++) {
      const z = contours[j].points[k];
      if (z.touched && z.isKeyPoint || z.linkedKey) {
        glyphKeyPoints.push(z);
      }
    }
  }
  for (const s of analysis.stems) convertDiagStemIp(targets, s);
  createBlueZonePhantoms(glyphKeyPoints, analysis.blueZone, strategy);
  for (let s = 0; s < analysis.stems.length; s++) {
    const stem = analysis.stems[s];
    createStemPhantoms(glyphKeyPoints, stem, strategy);
  }
  glyphKeyPoints = glyphKeyPoints.sort(byPointY);
  const records = analyzeIpSaRecords(contours, shortAbsorptions);
  for (let j = 0; j < contours.length; j++) {
    shortAbsorptionByKeys(
      targets,
      strategy,
      records[j].topBot.filter((pt) => pt.xStrongExtrema),
      records[j].cka.filter((k) => k.blued),
      { direct: true },
      13
    );
    shortAbsorptionByKeys(
      targets,
      strategy,
      records[j].middlePointsL.filter((pt) => pt.xStrongExtrema),
      records[j].blues.filter((k) => k.blued),
      { direct: true },
      11
    );
  }
  linkSoleStemPoints(shortAbsorptions, strategy, analysis, 9);
  const IP_STRICT = strategy.Y_FUZZ * strategy.UPM;
  const IP_LOOSE = 0.5;
  for (const radical of analysis.radicals) {
    const radicalContours = Array.from(radical.contours());
    const radicalContourIndexes = radicalContours.map((c) => contours.indexOf(c));
    const radicalOutlines = Array.from(radical.outlineContours());
    const radicalOutlineIndexes = radicalOutlines.map((c) => contours.indexOf(c));
    let xMin = 65535, xMax = -65535;
    const radicalPoints = /* @__PURE__ */ new Set();
    for (const c of radicalContours) {
      for (const z of c.points) {
        radicalPoints.add(z);
        if (z.x < xMin) xMin = z.x;
        if (z.x > xMax) xMax = z.x;
      }
    }
    let b = [];
    {
      let globalTop = null, globalBot = null;
      for (const j of radicalOutlineIndexes) {
        const [b2, t] = records[j].topBot;
        if (!globalBot || b2.y < globalBot.y) globalBot = b2;
        if (!globalTop || t.y > globalTop.y) globalTop = t;
      }
      const pts = [];
      if (globalBot) pts.push(globalBot);
      if (globalTop) pts.push(globalTop);
      interpolateByKeys(IpKnotTB, targets, pts, glyphKeyPoints, 7, IP_STRICT);
      interpolateByKeys(IpKnotTB, targets, pts, glyphKeyPoints, 7, IP_LOOSE);
      b = b.concat(pts.filter((z) => z.touched));
    }
    {
      const radicalKeyPoints = [...glyphKeyPoints, ...b].filter((z) => {
        while (z.linkedKey) z = z.linkedKey;
        return radicalPoints.has(z);
      });
      let yMin = 65535, yMax = -65535, zyMin = null, zyMax = null;
      for (const z of radicalKeyPoints) {
        if (z.y < yMin) {
          yMin = z.y;
          zyMin = z;
        }
        if (z.y > yMax) {
          yMax = z.y;
          zyMax = z;
        }
      }
      for (let step = 1; step < STEPS; step++) {
        if (zyMin) b.push(createLRYPhantom(zyMin, xMin, xMax, step));
        if (zyMax) b.push(createLRYPhantom(zyMax, xMin, xMax, step));
      }
    }
    {
      const radicalKeyPoints = [...glyphKeyPoints, ...b].filter((z) => {
        while (z.linkedKey) z = z.linkedKey;
        return radicalPoints.has(z);
      });
      for (let jr = 1; jr < radicalContours.length; jr++) {
        const j = radicalContourIndexes[jr];
        if (j < 0) continue;
        interpolateByKeys(
          IpKnotInner,
          targets,
          records[j].topBot,
          radicalKeyPoints,
          5,
          IP_STRICT
        );
        interpolateByKeys(
          IpKnotInner,
          targets,
          records[j].topBot,
          radicalKeyPoints,
          5,
          IP_LOOSE
        );
        b = b.concat(records[j].topBot.filter((z) => z.touched));
      }
    }
    {
      const radicalKeyPoints = [...glyphKeyPoints, ...b].filter((z) => {
        while (z.linkedKey) z = z.linkedKey;
        return radicalPoints.has(z);
      });
      for (let jr = 0; jr < radicalContours.length; jr++) {
        const j = radicalContourIndexes[jr];
        if (j < 0) continue;
        interpolateByKeys(
          IpKnotInner,
          targets,
          records[j].middlePoints,
          radicalKeyPoints,
          3,
          IP_STRICT
        );
        interpolateByKeys(
          IpKnotInner,
          targets,
          records[j].middlePoints,
          radicalKeyPoints,
          3,
          IP_LOOSE
        );
        shortAbsorptionByKeys(
          targets,
          strategy,
          records[j].middlePointsL,
          records[j].middlePoints.filter((z) => z.touched || z.isKeyPoint),
          { ip: true },
          1
        );
      }
    }
  }
  interpolations = interpolations.sort((u, v) => u && v ? u.subject.x - v.subject.x : 0);
  return cleanupInterpolations(glyph, strategy, interpolations, shortAbsorptions);
}
function cleanupInterpolations(glyph, strategy, interpolations, shortAbsorptions) {
  for (let j = 0; j < interpolations.length; j++) {
    const ipJ = interpolations[j];
    if (!ipJ) continue;
    for (let k = j + 1; k < interpolations.length; k++) {
      const ipK = interpolations[k];
      if (ipK && ipJ.ref1 === ipK.ref1 && ipJ.ref2 === ipK.ref2 && ipJ.subject === ipK.subject && ipJ.priority !== 9 && Math.abs(ipJ.subject.y - ipJ.subject.y) <= strategy.Y_FUZZ * strategy.UPM) {
        shortAbsorptions.push(
          new ShortAbsorption(ipJ.subject, ipK.subject, ipJ.priority - 1)
        );
        interpolations[k] = null;
      }
    }
  }
  const ip = [];
  for (const t of interpolations) if (t) ip.push(t);
  return { interpolations: ip, shortAbsorptions };
}

// packages/ideograph-shape-analyzer-1/src/si-common/stem-spatial.ts
function atRadicalBottom(s, strategy) {
  return !s.hasSameRadicalStemBelow && !(s.hasRadicalPointBelow && s.radicalCenterDescent > strategy.STEM_CENTER_MIN_DESCENT * strategy.UPM) && !(s.hasRadicalLeftAdjacentPointBelow && s.radicalLeftAdjacentDescent > strategy.STEM_SIDE_MIN_DESCENT * strategy.UPM) && !(s.hasRadicalRightAdjacentPointBelow && s.radicalRightAdjacentDescent > strategy.STEM_SIDE_MIN_DESCENT * strategy.UPM);
}
function atGlyphBottom(stem, strategy) {
  return atRadicalBottom(stem, strategy) && !stem.hasGlyphStemBelow && !(stem.hasGlyphPointBelow && stem.glyphCenterDescent > strategy.STEM_CENTER_MIN_DESCENT * strategy.UPM) && !(stem.hasGlyphLeftAdjacentPointBelow && stem.glyphLeftAdjacentDescent > strategy.STEM_SIDE_MIN_DESCENT * strategy.UPM) && !(stem.hasGlyphRightAdjacentPointBelow && stem.glyphRightAdjacentDescent > strategy.STEM_SIDE_MIN_DESCENT * strategy.UPM);
}
function isHangingHookShape(stem, strategy) {
  return stem.xMaxExP - stem.xMinExP < strategy.UPM / 4 && (stem.hasRadicalLeftDistancedPointBelow && stem.radicalLeftDistancedDescent > strategy.CANONICAL_STEM_WIDTH * strategy.UPM || stem.hasRadicalRightDistancedPointBelow && stem.radicalRightDistancedDescent > strategy.CANONICAL_STEM_WIDTH * strategy.UPM);
}
function isCapShape(stem, strategy) {
  return atRadicalBottom(stem, strategy) && (stem.hasRadicalLeftDistancedPointBelow && stem.radicalLeftDistancedDescent > strategy.STEM_SIDE_MIN_DIST_DESCENT * strategy.UPM || stem.hasRadicalRightDistancedPointBelow && stem.radicalRightDistancedDescent > strategy.STEM_SIDE_MIN_DIST_DESCENT * strategy.UPM);
}
function atRadicalTop(stem, strategy) {
  return !stem.hasSameRadicalStemAbove && !(stem.hasRadicalPointAbove && stem.radicalCenterRise > strategy.STEM_CENTER_MIN_RISE * strategy.UPM) && !(stem.hasRadicalLeftAdjacentPointAbove && stem.radicalLeftAdjacentRise > strategy.STEM_SIDE_MIN_RISE * strategy.UPM) && !(stem.hasRadicalRightAdjacentPointAbove && stem.radicalRightAdjacentRise > strategy.STEM_SIDE_MIN_RISE * strategy.UPM) && !(stem.hasRadicalLeftDistancedPointAbove && stem.radicalLeftDistancedRise > strategy.STEM_SIDE_MIN_DIST_RISE * strategy.UPM) && !(stem.hasRadicalRightDistancedPointAbove && stem.radicalRightDistancedRise > strategy.STEM_SIDE_MIN_DIST_RISE * strategy.UPM);
}
function atGlyphTop(stem, strategy) {
  return atRadicalTop(stem, strategy) && !stem.hasGlyphStemAbove && !(stem.hasGlyphPointAbove && stem.glyphCenterRise > strategy.STEM_CENTER_MIN_RISE * strategy.UPM) && !(stem.hasGlyphLeftAdjacentPointAbove && stem.glyphLeftAdjacentRise > strategy.STEM_SIDE_MIN_RISE * strategy.UPM) && !(stem.hasGlyphRightAdjacentPointAbove && stem.glyphRightAdjacentRise > strategy.STEM_SIDE_MIN_RISE * strategy.UPM);
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/post-stem/symmetry.ts
function analyzeSymmetry(stems, directOverlaps, strategy) {
  const sym = [];
  const limitX = strategy.UPM / strategy.SYMMETRY_TEST_PPEM;
  const limitY = strategy.UPM / (strategy.SYMMETRY_TEST_PPEM * 2);
  for (let j = 0; j < stems.length; j++) {
    sym[j] = [];
    for (let k = 0; k < j; k++) {
      const yTopDiff = Math.abs(stems[j].y - stems[k].y);
      const yBotDiff = Math.abs(stems[j].y - stems[j].width - stems[k].y + stems[k].width);
      const xMinDiff = Math.abs(stems[j].xMinEx - stems[k].xMinEx);
      const xMaxDiff = Math.abs(stems[j].xMaxEx - stems[k].xMaxEx);
      const lengthDiff = Math.abs(
        stems[j].xMaxExP - stems[j].xMinExP - (stems[k].xMaxExP - stems[k].xMinExP)
      );
      const topologicalSimilar = !directOverlaps[j][k] || xMinDiff < limitX && xMaxDiff < limitX;
      const notDiagonal = !stems[j].diagHigh && !stems[k].diagHigh;
      const positionalSimilar = yTopDiff < limitY && yBotDiff < limitY && Math.max(limitY / 4, yTopDiff, yBotDiff) * lengthDiff < limitY * limitX;
      const spatialRelationshipSimilar = (stems[j].hasSameRadicalStemAbove === stems[k].hasSameRadicalStemAbove || stems[j].hasSameRadicalStemBelow === stems[k].hasSameRadicalStemBelow) && (stems[j].hasGlyphStemAbove === stems[k].hasGlyphStemAbove || stems[j].hasGlyphStemBelow === stems[k].hasGlyphStemBelow) && (atGlyphTop(stems[j], strategy) === atGlyphTop(stems[k], strategy) || atGlyphBottom(stems[j], strategy) === atGlyphBottom(stems[k], strategy));
      sym[j][k] = topologicalSimilar && notDiagonal && positionalSimilar && spatialRelationshipSimilar;
    }
  }
  return sym;
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/post-stem/index.ts
function analyzePostStemHints(glyph, strategy, analysis) {
  const bz = analyzeBlueZonePoints(glyph, analysis.stems, strategy);
  analysis.blueZone.bottomZs = bz.bottomBluePoints;
  analysis.blueZone.topZs = bz.topBluePoints;
  analysis.nonBlueTopBottom.bottomZs = bz.glyphBottomMostPoint;
  analysis.nonBlueTopBottom.topZs = bz.glyphTopMostPoint;
  const iss = AnalyzeIpSa(glyph, analysis, strategy);
  analysis.interpolations = iss.interpolations;
  analysis.shortAbsorptions = iss.shortAbsorptions;
  analysis.symmetry = analyzeSymmetry(analysis.stems, analysis.directOverlaps, strategy);
}

// packages/ideograph-shape-analyzer-1/src/si-common/seg.ts
function minMaxOfSeg(u) {
  let min5 = 65535, max10 = -65535;
  for (let s = 0; s < u.length; s++) {
    for (let k = 0; k < u[s].length; k++) {
      if (u[s][k].x < min5) min5 = u[s][k].x;
      if (u[s][k].x > max10) max10 = u[s][k].x;
    }
  }
  return { min: min5, max: max10 };
}
function segmentsProximity(s1, s2) {
  let count = 0;
  for (let j = 0; j < s1.length; j++) {
    for (let k = 0; k < s2.length; k++) {
      if (CPoint.adjacent(s1[j][0], s2[k][0])) count += 1;
      if (CPoint.adjacent(s1[j][0], s2[k][1])) count += 1;
      if (CPoint.adjacent(s1[j][1], s2[k][0])) count += 1;
      if (CPoint.adjacent(s1[j][1], s2[k][1])) count += 1;
    }
  }
  return 2 * count / (s1.length + s2.length);
}
function leftmostZ_S(seg) {
  let m = seg[0];
  for (const z of seg) if (!m || z && z.x < m.x) m = z;
  return m;
}
function rightmostZ_S(seg) {
  let m = seg[0];
  for (const z of seg) if (!m || z && z.x > m.x) m = z;
  return m;
}
function leftmostZ_SS(s) {
  let m = s[0][0];
  for (const seg of s) for (const z of seg) if (!m || z && z.x < m.x) m = z;
  return m;
}
function rightmostZ_SS(s) {
  let m = s[0][0];
  for (const seg of s) for (const z of seg) if (!m || z && z.x > m.x) m = z;
  return m;
}
function leftmostZ_SS_Ref(s) {
  let m = null;
  for (const seg of s)
    for (const z of seg) if (z.queryReference() && (!m || z && z.x < m.x)) m = z;
  return m;
}
function rightmostZ_SS_Ref(s) {
  let m = null;
  for (const seg of s)
    for (const z of seg) if (z.queryReference() && (!m || z && z.x > m.x)) m = z;
  return m;
}
function expandZ(radical, z, dx, dy, maxTicks) {
  const z1 = { x: z.x + dx, y: z.y + dy };
  let steps = 0;
  while (radical.includesEdge(z1, 0, 2) && steps < maxTicks) {
    z1.x += dx;
    z1.y += dy;
    steps++;
  }
  z1.x -= dx;
  z1.y -= dy;
  return new CPoint(z1.x, z1.y);
}
function slopeOf(s) {
  let sy = 0, sx = 0, n = 0;
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < s[j].length; k++) {
      sy += s[j][k].y;
      sx += s[j][k].x;
      n += 1;
    }
  }
  const ax = sx / n, ay = sy / n;
  let b1num = 0, b1den = 0;
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < s[j].length; k++) {
      b1num += (s[j][k].x - ax) * (s[j][k].y - ay);
      b1den += (s[j][k].x - ax) * (s[j][k].x - ax);
    }
  }
  return b1num / b1den;
}

// packages/ideograph-shape-analyzer-1/src/si-common/overlap.ts
function byAt(p, q) {
  return p.at - q.at;
}
function pushEvents(events, seg, s, isA, radical) {
  let z0 = leftmostZ_S(seg), zm = rightmostZ_S(seg);
  if (radical) {
    z0 = expandZ(radical, z0, -1, -s, 1e3);
    zm = expandZ(radical, zm, 1, s, 1e3);
  }
  if (z0.x < zm.x) {
    events.push({ at: z0.x, on: true, a: isA });
    events.push({ at: zm.x, on: false, a: isA });
  }
}
function overlapInfo(a, b, ra, rb) {
  const slopeA = slopeOf(a), slopeB = slopeOf(b);
  const events = [];
  for (let j = 0; j < a.length; j++) {
    pushEvents(events, a[j], slopeA, true, ra);
  }
  for (let j = 0; j < b.length; j++) {
    pushEvents(events, b[j], slopeB, false, rb);
  }
  events.sort(byAt);
  let len = 0, la = 0, lb = 0;
  let st = 0, sa = 0, sb = 0;
  let ac = 0;
  let bc = 0;
  for (let j = 0; j < events.length; j++) {
    const e = events[j];
    const intersectBefore = ac * bc;
    const ab = ac, bb = bc;
    if (e.a) {
      if (e.on) ac += 1;
      else ac -= 1;
    } else {
      if (e.on) bc += 1;
      else bc -= 1;
    }
    if (ac * bc && !intersectBefore) st = e.at;
    if (!(ac * bc) && intersectBefore) len += e.at - st;
    if (ac && !ab) sa = e.at;
    if (!ac && ab) la += e.at - sa;
    if (bc && !bb) sb = e.at;
    if (!bc && bb) lb += e.at - sb;
  }
  return {
    len,
    la,
    lb
  };
}
function overlapRatio(a, b, op) {
  const i = overlapInfo(a, b);
  return op(i.len / i.la, i.len / i.lb);
}
function stemOverlapRatio(a, b, op) {
  const ovr = Math.max(
    overlapRatio(a.lowExp, b.lowExp, op),
    overlapRatio(a.highExp, b.lowExp, op),
    overlapRatio(a.lowExp, b.highExp, op),
    overlapRatio(a.highExp, b.highExp, op)
  );
  const lenRaw = Math.max(
    overlapInfo(a.low, b.low).len,
    overlapInfo(a.high, b.low).len,
    overlapInfo(a.low, b.high).len,
    overlapInfo(a.high, b.high).len
  );
  if (!lenRaw) {
    return 0;
  } else {
    return ovr;
  }
}
function stemOverlapLength(a, b) {
  const len = Math.max(
    overlapInfo(a.lowExp, b.lowExp).len,
    overlapInfo(a.highExp, b.lowExp).len,
    overlapInfo(a.lowExp, b.highExp).len,
    overlapInfo(a.highExp, b.highExp).len
  );
  const lenRaw = Math.max(
    overlapInfo(a.low, b.low).len,
    overlapInfo(a.high, b.low).len,
    overlapInfo(a.low, b.high).len,
    overlapInfo(a.high, b.high).len
  );
  if (!lenRaw) {
    return 0;
  } else {
    return len;
  }
}
function transitiveReduce(g) {
  const o = [];
  for (let j = 0; j < g.length; j++) {
    o[j] = g[j].slice(0);
  }
  for (let m = 0; m < o.length; m++) {
    for (let j = 0; j < o.length; j++) {
      for (let k = 0; k < o.length; k++) o[j][k] = o[j][k] || o[j][m] && o[m][k];
    }
  }
  for (let x = 0; x < g.length; x++) {
    g[x][x] = false;
  }
  for (let x = 0; x < g.length; x++) {
    for (let y = 0; y < g.length; y++) {
      for (let z = 0; z < g.length; z++) {
        if (g[x][y] && o[y][z]) g[x][z] = false;
      }
    }
  }
}
function isSideTouch(a, b) {
  return a.xMin < b.xMin && a.xMax < b.xMax || a.xMin > b.xMin && a.xMax > b.xMax;
}

// packages/ideograph-shape-analyzer-1/src/types/radical.ts
import { mixZ } from "@chlorophytum/arch/lib/support";
var ContourIsland = class {
  constructor(boundary) {
    this.boundary = boundary;
    this.holes = [];
  }
  includes(z) {
    if (!this.boundary.includesPoint(z)) return false;
    for (let j = 0; j < this.holes.length; j++) {
      if (this.holes[j].includesPoint(z)) return false;
    }
    return true;
  }
  *contours() {
    yield this.boundary;
    yield* this.holes;
  }
};
var Radical = class {
  constructor(isTopLevel, islands) {
    this.isTopLevel = isTopLevel;
    this.islands = islands;
    this.subs = [];
    this.segments = [];
    this.stems = [];
  }
  get outlineCcw() {
    return this.islands[0].boundary.ccw;
  }
  *contours() {
    for (const island of this.islands) yield* island.contours();
  }
  *outlineContours() {
    for (const island of this.islands) yield island.boundary;
  }
  *points() {
    for (const c of this.contours()) for (const z of c.points) yield z;
  }
  includes(z) {
    for (const island of this.islands) if (island.includes(z)) return true;
    return false;
  }
  includesEdge(z, mu, mv) {
    if (this.includes(z)) return true;
    for (let u = -mu; u <= mu; u++) {
      for (let v = -mv; v <= mv; v++) {
        if (this.includes({ x: z.x + u, y: z.y + v })) return true;
      }
    }
    return false;
  }
  includesSegment(z1, z2) {
    const SEGMENTS = 64;
    for (let s = 1; s < SEGMENTS; s++) {
      const test = {
        x: z2.x + (z1.x - z2.x) * (s / SEGMENTS),
        y: z2.y + (z1.y - z2.y) * (s / SEGMENTS)
      };
      if (!this.includes(test)) return false;
    }
    return true;
  }
  includesSegmentEdge(z1, z2, umx, umy, deltaX, deltaY) {
    if (this.includesSegment(z1, z2)) {
      return true;
    }
    for (let u1 = -umx; u1 <= umx; u1++) {
      for (let u2 = -umy; u2 <= umy; u2++) {
        for (let u3 = -umx; u3 <= umx; u3++) {
          for (let u4 = -umy; u4 <= umy; u4++) {
            const z1a = { x: z1.x + u1 * deltaX, y: z1.y + u2 * deltaY };
            const z2a = { x: z2.x + u3 * deltaX, y: z2.y + u4 * deltaY };
            if (this.includesSegment(z1a, z2a)) return true;
          }
        }
      }
    }
    return false;
  }
  // eslint-disable-next-line complexity
  includesDiSegment(s1, s2) {
    for (let k = 0; k < s1.length; k++) {
      const zTopic = s1[k];
      let zClose = s2[0], dClose = Math.hypot(zTopic.x - zClose.x, zTopic.y - zClose.y);
      for (let m = 1; m < s2.length; m++) {
        const zTest = s2[m];
        const dTest = Math.hypot(zTopic.x - zTest.x, zTopic.y - zTest.y);
        if (dTest < dClose) {
          zClose = zTest;
          dClose = dTest;
        }
      }
      if (k > 0 && !this.includeTriangleImpl(zTopic, s1[k - 1], zClose)) return false;
      if (k + 1 < s1.length && !this.includeTriangleImpl(zTopic, s1[k + 1], zClose))
        return false;
    }
    return true;
  }
  includeTriangleImpl(a, b, c) {
    const midAB = mixZ(a, b, 0.5);
    let n = 0;
    if (this.includesSegmentEdge(a, c, 1, 1, 1, 1)) n++;
    if (this.includesSegmentEdge(midAB, c, 1, 1, 1, 1)) n++;
    if (this.includesSegmentEdge(b, c, 1, 1, 1, 1)) n++;
    return n > 1;
  }
};

// packages/ideograph-shape-analyzer-1/src/shape-analyze/radicals/index.ts
function analyzeRadicals(contours) {
  const inclusions = [];
  const radicals = [];
  for (let j = 0; j < contours.length; j++) {
    inclusions[j] = [];
    contours[j].outline = true;
  }
  for (let j = 0; j < contours.length; j++) {
    for (let k = 0; k < contours.length; k++) {
      if (j !== k && contours[j].ccw !== contours[k].ccw && contours[j].includes(contours[k])) {
        inclusions[j][k] = true;
        contours[k].outline = false;
      }
    }
  }
  transitiveReduce(inclusions);
  for (let j = 0; j < contours.length; j++) {
    if (contours[j].outline)
      analyzeIsland(inclusions, contours, j, contours[j].ccw, null, radicals);
  }
  return glueRadicals(radicals);
}
function analyzeHole(inclusions, contours, j, orient, parent, sink) {
  for (let k = 0; k < contours.length; k++) {
    if (inclusions[j][k] && contours[k].ccw !== orient) {
      analyzeIsland(inclusions, contours, k, !orient, parent, sink);
    }
  }
}
function analyzeIsland(inclusions, contours, j, orient, parent, sink) {
  const island = new ContourIsland(contours[j]);
  const radical = new Radical(!parent, [island]);
  if (parent) parent.subs.push(radical);
  sink.push(radical);
  for (let k = 0; k < contours.length; k++) {
    if (inclusions[j][k] && contours[k].ccw !== orient) {
      island.holes.push(contours[k]);
      analyzeHole(inclusions, contours, k, !orient, radical, sink);
    }
  }
}
function glueRadicals(src) {
  const dt = new DisjointSet(src.length);
  for (let j = 0; j < src.length; j++) {
    if (!src[j].isTopLevel) continue;
    inner: for (let k = 0; k < src.length; k++) {
      if (j === k || !src[k].isTopLevel || src[j].outlineCcw !== src[k].outlineCcw) continue;
      for (const z of src[k].points()) {
        if (src[j].includes(z)) {
          dt.union(j, k);
          continue inner;
        }
      }
    }
  }
  const dst = [];
  for (let i = 0; i < src.length; i++) {
    const top = dt.query(i);
    if (top !== i) {
      for (const island of src[i].islands) src[top].islands.push(island);
      for (const sub16 of src[i].subs) src[top].subs.push(sub16);
    } else {
      dst.push(src[i]);
    }
  }
  return dst;
}
var DisjointSet = class {
  constructor(size) {
    this.up = Array(size);
    for (let j = 0; j < size; j++) {
      this.up[j] = j;
    }
  }
  query(x) {
    if (this.up[x] === x) return x;
    const u = this.query(this.up[x]);
    this.up[x] = u;
    return u;
  }
  union(x, y) {
    x = this.query(x);
    y = this.query(y);
    if (x === y) return;
    this.up[y] = x;
  }
};

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/annex-matrix.ts
import { Support as Support2 } from "@chlorophytum/arch";
function computePQMatrices(strategy, stems, flipMatrix) {
  const P = [], Q = [], n = stems.length;
  for (let j = 0; j < n; j++) {
    P[j] = [];
    Q[j] = [];
    for (let k = 0; k < n; k++) {
      P[j][k] = Q[j][k] = 0;
    }
  }
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < j; k++) {
      const nothingInBetween = flipMatrix[j][k] <= 3;
      const tb = atGlyphTop(stems[j], strategy) && !stems[j].diagLow || atGlyphBottom(stems[k], strategy) && !stems[j].diagHigh;
      let structuralProximity = segmentsProximity(stems[j].low, stems[k].high) + segmentsProximity(stems[j].high, stems[k].low) + segmentsProximity(stems[j].low, stems[k].low) + segmentsProximity(stems[j].high, stems[k].high);
      let spatialProximity = structuralProximity;
      if ((!nothingInBetween || !stems[j].hasGlyphStemAbove || !stems[k].hasGlyphStemBelow) && spatialProximity < strategy.COEFF_PROXIMITY_SQUASH_HAPPENED) {
        spatialProximity = strategy.COEFF_PROXIMITY_SQUASH_HAPPENED;
      }
      if (!nothingInBetween && spatialProximity < strategy.COEFF_PROXIMITY_SQUASH_HAPPENED) {
        structuralProximity = strategy.COEFF_PROXIMITY_SQUASH_HAPPENED;
      }
      if (tb) {
        spatialProximity *= strategy.COEFF_STRICT_TOP_BOT_PROXIMITY;
      } else if (!stems[j].hasGlyphStemAbove || !stems[k].hasGlyphStemBelow) {
        spatialProximity *= strategy.COEFF_TOP_BOT_PROXIMITY;
      }
      P[j][k] = Math.round(structuralProximity + (!nothingInBetween ? 1 : 0));
      Q[j][k] = spatialProximity;
    }
  }
  return { P, Q };
}
var ACSComputer = class {
  constructor(strategy, stems, overlapLengths, Q, F, S, dov) {
    this.strategy = strategy;
    this.stems = stems;
    this.overlapLengths = overlapLengths;
    this.Q = Q;
    this.F = F;
    this.S = S;
    this.dov = dov;
    this.slopes = stems.map((s) => (slopeOf(s.high) + slopeOf(s.low)) / 2);
  }
  computeTB(j, k) {
    const sj = this.stems[j];
    const sk = this.stems[k];
    return atGlyphTop(sj, this.strategy) && !sj.diagLow || atGlyphBottom(sk, this.strategy) && !sj.diagHigh;
  }
  isSideTouch(_sj, _sk) {
    const sj = _sj.linkedWholeStem || _sj;
    const sk = _sk.linkedWholeStem || _sk;
    return sj.xMin < sk.xMin && sj.xMax < sk.xMax || sj.xMin > sk.xMin && sj.xMax > sk.xMax;
  }
  offCenterTouchType(j, k) {
    const sj = this.stems[j];
    const sk = this.stems[k];
    if (sk.xMaxP <= Support2.mix(sj.xMinP, sj.xMaxP, 3 / 5)) return 1;
    if (sk.xMinP >= Support2.mix(sj.xMinP, sj.xMaxP, 2 / 5)) return 2;
    if (sj.xMaxP <= Support2.mix(sk.xMinP, sk.xMaxP, 3 / 5)) return 3;
    if (sj.xMinP >= Support2.mix(sk.xMinP, sk.xMaxP, 2 / 5)) return 4;
    return 0;
  }
  isOffCenterEdge(j, k) {
    const sj = this.stems[j];
    const sk = this.stems[k];
    if (sk.xMinP < sj.xMinP - this.strategy.X_FUZZ && sk.xMaxP > sj.xMinP - this.strategy.X_FUZZ && sk.xMaxP <= Support2.mix(sj.xMinP, sj.xMaxP, 3 / 5))
      return 1;
    if (sk.xMaxP > sj.xMaxP + this.strategy.X_FUZZ && sk.xMinP < sj.xMaxP + this.strategy.X_FUZZ && sk.xMinP >= Support2.mix(sj.xMinP, sj.xMaxP, 2 / 5))
      return 2;
    if (sj.xMinP < sk.xMinP - this.strategy.X_FUZZ && sj.xMaxP > sk.xMinP - this.strategy.X_FUZZ && sj.xMaxP <= Support2.mix(sk.xMinP, sk.xMaxP, 3 / 5))
      return 3;
    if (sj.xMaxP > sk.xMaxP + this.strategy.X_FUZZ && sj.xMinP < sk.xMaxP + this.strategy.X_FUZZ && sj.xMinP >= Support2.mix(sk.xMinP, sk.xMaxP, 2 / 5))
      return 4;
    return 0;
  }
  isOffCenterTouch(j, k) {
    const tt = this.offCenterTouchType(j, k);
    if (!tt) return false;
    if (!this.dov || !this.dov[j][k]) return true;
    if (tt === 1 || tt === 2) {
      for (let m = 0; m < j; m++) {
        if (this.dov[j][m]) {
          const ttm = this.offCenterTouchType(j, m);
          if (tt === 1 && ttm === 2 || tt === 2 && ttm === 1) return false;
        }
      }
      return true;
    } else {
      for (let m = k + 1; m < this.stems.length; m++) {
        if (this.dov[m][k]) {
          const ttm = this.offCenterTouchType(m, k);
          if (tt === 3 && ttm === 4 || tt === 4 && ttm === 3) return false;
        }
      }
      return true;
    }
  }
  compute(j, k) {
    const sj = this.stems[j];
    const sjRadBot = atRadicalBottom(sj, this.strategy) && !isCapShape(sj, this.strategy);
    const sk = this.stems[k];
    const skRadTop = atRadicalTop(sk, this.strategy);
    const nothingInBetween = this.F[j][k] <= 1 || this.dov && !this.dov[j][k];
    let ovr = this.overlapLengths[j][k];
    const tb = this.computeTB(j, k);
    const isSideTouch2 = this.isSideTouch(sj, sk);
    if (ovr < this.strategy.SIDE_TOUCH_LIMIT && isSideTouch2) ovr = 0;
    const slopesCoefficient = nothingInBetween && sj.belongRadical !== sk.belongRadical ? Math.max(0.25, 1 - Math.abs(this.slopes[j] - this.slopes[k]) * 10) : 1;
    const proximityCoefficient = 1 + (this.Q[j][k] > 2 ? 5 : 1) * this.Q[j][k];
    const coefficientA = this.computeCoefficientA(
      j,
      k,
      nothingInBetween,
      tb,
      sj,
      sk,
      sjRadBot,
      skRadTop,
      this.isOffCenterTouch(j, k),
      this.isOffCenterEdge(j, k) > 0
    );
    let a = ovr * coefficientA * proximityCoefficient * slopesCoefficient;
    if (!isFinite(a)) a = 0;
    if (coefficientA >= this.strategy.COEFF_A_SHAPE_LOST_XX)
      a = Math.max(a, this.strategy.COEFF_A_SHAPE_LOST_XX);
    return { a, d: ovr };
  }
  computeCoefficientA(j, k, nothingInBetween, tb, sj, sk, sjRadBot, skRadTop, offCenter, offCenterEdge) {
    let coefficientA = 1 + this.strategy.COEFF_S * this.S[j][k];
    if (!nothingInBetween || tb) {
      coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XX;
    }
    if (!sj.hasGlyphStemAbove || !sk.hasGlyphStemBelow) {
      if (sj.belongRadical === sk.belongRadical) {
        coefficientA *= this.strategy.COEFF_A_TOP_BOT_MERGED_SR;
      } else {
        coefficientA *= this.strategy.COEFF_A_TOP_BOT_MERGED;
      }
      if (this.isGlyphSevereShapeLoss(sj, sk)) {
        coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XX;
      }
    }
    if (sj.belongRadical === sk.belongRadical) {
      coefficientA *= this.strategy.COEFF_A_SAME_RADICAL;
      if (!sj.hasSameRadicalStemAbove && !sk.hasSameRadicalStemBelow) {
        coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XX;
      } else if (!sj.hasSameRadicalStemAbove) {
        if (sj.xMinEx > sk.xMinEx + this.strategy.X_FUZZ && sj.xMaxEx < sk.xMaxEx - this.strategy.X_FUZZ) {
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_B;
        } else {
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST;
        }
      } else if (!sk.hasSameRadicalStemBelow) {
        if (sk.xMinEx > sj.xMinEx + this.strategy.X_FUZZ && sk.xMaxEx < sj.xMaxEx - this.strategy.X_FUZZ) {
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_B;
        } else {
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST;
        }
      } else if (this.isInRadicalTolerableShapeLoss(sj, sk)) {
        coefficientA /= this.strategy.COEFF_A_SAME_RADICAL * this.strategy.COEFF_A_SHAPE_LOST;
      }
    } else {
      coefficientA *= this.strategy.COEFF_A_RADICAL_MERGE;
      if (sjRadBot && skRadTop) {
      } else if (skRadTop) {
        if (offCenter || atRadicalBottom(sk, this.strategy))
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XR;
      } else if (sjRadBot) {
        if (offCenter || atRadicalTop(sj, this.strategy))
          coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XR;
      }
    }
    if (offCenterEdge) coefficientA *= this.strategy.COEFF_A_SHAPE_LOST_XR;
    return coefficientA;
  }
  isGlyphSevereShapeLoss(sj, sk) {
    return !sj.hasGlyphStemAbove && !atRadicalBottom(sj, this.strategy) || !sk.hasGlyphStemBelow && !atRadicalTop(sk, this.strategy);
  }
  isInRadicalTolerableShapeLoss(sj, sk) {
    return Math.abs(sj.xMin - sk.xMin) < this.strategy.Y_FUZZ * this.strategy.UPM && Math.abs(sj.xMax - sk.xMax) < this.strategy.Y_FUZZ * this.strategy.UPM && !(sj.proximityDown > sj.proximityUp && sk.proximityUp >= sk.proximityDown || sj.proximityDown >= sj.proximityUp && sk.proximityUp > sk.proximityDown);
  }
};
function computeACSMatrices(strategy, stems, overlapLengths, Q, F, S, dov) {
  const A = [], D = [], n = stems.length;
  for (let j = 0; j < n; j++) {
    A[j] = [];
    D[j] = [];
    for (let k = 0; k < n; k++) {
      A[j][k] = D[j][k] = 0;
    }
  }
  const comp = new ACSComputer(strategy, stems, overlapLengths, Q, F, S, dov);
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < j; k++) {
      const { a, d } = comp.compute(j, k);
      A[j][k] = a;
      D[j][k] = D[k][j] = d;
    }
  }
  cleanupTB(D, A, stems, strategy);
  closure(n, A);
  return {
    annexation: A,
    darkness: D
  };
}
function cleanupTB(D, A, stems, strategy) {
  const n = stems.length;
  for (let j = 0; j < n; j++) {
    let isBottomMost = true;
    for (let k = 0; k < j; k++) {
      if (D[j][k] > 0) isBottomMost = false;
    }
    if (!isBottomMost) continue;
    for (let k = j + 1; k < n; k++) {
      const minDiff = Math.abs(stems[j].xMax - stems[k].xMin);
      const maxDiff = Math.abs(stems[j].xMin - stems[k].xMax);
      const unbalance = minDiff + maxDiff <= 0 ? 0 : Math.abs(minDiff - maxDiff) / (minDiff + maxDiff);
      if (!isSideTouch(stems[j], stems[k]) && unbalance >= strategy.TOP_BOT_MIN_UNBALANCE_AS_SHAPE_LOSS) {
        A[k][j] *= strategy.COEFF_A_FEATURE_LOSS;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    let isTopMost = true;
    for (let k = j + 1; k < n; k++) {
      if (D[k][j] > 0) isTopMost = false;
    }
    if (!isTopMost) continue;
    for (let k = 0; k < j; k++) {
      const minDiff = Math.abs(stems[j].xMax - stems[k].xMin);
      const maxDiff = Math.abs(stems[j].xMin - stems[k].xMax);
      const unbalance = minDiff + maxDiff <= 0 ? 0 : Math.abs(minDiff - maxDiff) / (minDiff + maxDiff);
      if (!isSideTouch(stems[j], stems[k]) && unbalance >= strategy.TOP_BOT_MIN_UNBALANCE_AS_SHAPE_LOSS) {
        A[j][k] *= strategy.COEFF_A_FEATURE_LOSS;
      }
    }
  }
}
function closure(n, A) {
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      A[j][k] = A[k][j] = Math.max(A[j][k], A[k][j]);
    }
  }
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/direct-overlap.ts
function edgeTouch(s, t) {
  if (s.xMax - s.xMin < t.xMax - t.xMin) return edgeTouch(t, s);
  return s.xMin < t.xMin && t.xMin < s.xMax && s.xMax < t.xMax && (s.xMax - t.xMin) / (s.xMax - s.xMin) <= 0.2 || t.xMin < s.xMin && s.xMin < t.xMax && t.xMax < s.xMax && (t.xMax - s.xMin) / (s.xMax - s.xMin) <= 0.2;
}
function stemYOverlapRatio(sj, sk) {
  const overlapLength = Math.max(
    0,
    Math.min(sj.highKey.y, sk.highKey.y) - Math.max(sj.lowKey.y, sk.lowKey.y)
  );
  const unionLength = Math.max(
    0,
    Math.max(sj.highKey.y, sk.highKey.y) - Math.min(sj.lowKey.y, sk.lowKey.y)
  );
  return overlapLength / unionLength || 0;
}
function analyzeDirectOverlaps(stems, stemOverlaps, C, strategy, loose) {
  const d = [];
  for (let j = 0; j < stemOverlaps.length; j++) {
    d[j] = [];
    for (let k = 0; k < j; k++) {
      d[j][k] = stemOverlaps[j][k] > strategy.COLLISION_MIN_OVERLAP_RATIO && !edgeTouch(stems[j], stems[k]);
      if (loose && C[j][k] <= 0) d[j][k] = false;
      if (stems[j].rid && stems[j].rid === stems[k].rid) d[j][k] = false;
      else if (stemOverlaps[j][k] > strategy.BOTH_OVERLAP_H && stemYOverlapRatio(stems[j], stems[k]) > strategy.BOTH_OVERLAP_V) {
        d[j][k] = false;
      }
    }
  }
  transitiveReduce(d);
  return d;
}

// packages/ideograph-shape-analyzer-1/src/types/stem.ts
import * as Util2 from "util";
var Stem = class {
  constructor(high, low, r) {
    this.high = high;
    this.low = low;
    // X min/max of all kinds
    this.xMinTop = 65535;
    this.xMaxTop = -65535;
    this.xMinBot = 65535;
    this.xMaxBot = -65535;
    this.xMin = 65535;
    this.xMax = -65535;
    this.xMinP = 65535;
    this.xMaxP = -65535;
    this.xMinEx = 65535;
    this.xMaxEx = -65535;
    this.xMinExP = 65535;
    this.xMaxExP = -65535;
    this.highKey = new CPoint(0, 0);
    this.lowKey = new CPoint(0, 0);
    this.highAlign = [];
    this.lowAlign = [];
    this.turnsBelow = 0;
    this.turnsAbove = 0;
    this.proximityUp = 0;
    this.proximityDown = 0;
    this.hasGlyphStemAbove = false;
    this.hasSameRadicalStemAbove = false;
    this.hasRadicalPointAbove = false;
    this.hasGlyphPointAbove = false;
    this.hasRadicalLeftAdjacentPointAbove = false;
    this.hasRadicalRightAdjacentPointAbove = false;
    this.hasGlyphLeftAdjacentPointAbove = false;
    this.hasGlyphRightAdjacentPointAbove = false;
    this.hasRadicalLeftDistancedPointAbove = false;
    this.hasRadicalRightDistancedPointAbove = false;
    this.hasGlyphLeftDistancedPointAbove = false;
    this.hasGlyphRightDistancedPointAbove = false;
    this.hasGlyphStemBelow = false;
    this.hasSameRadicalStemBelow = false;
    this.hasRadicalPointBelow = false;
    this.hasGlyphPointBelow = false;
    this.hasRadicalLeftAdjacentPointBelow = false;
    this.hasRadicalRightAdjacentPointBelow = false;
    this.hasGlyphLeftAdjacentPointBelow = false;
    this.hasGlyphRightAdjacentPointBelow = false;
    this.hasRadicalLeftDistancedPointBelow = false;
    this.hasRadicalRightDistancedPointBelow = false;
    this.hasGlyphLeftDistancedPointBelow = false;
    this.hasGlyphRightDistancedPointBelow = false;
    this.hasGlyphFoldAbove = false;
    this.hasRadicalFoldAbove = false;
    this.hasGlyphSideFoldAbove = false;
    this.hasRadicalSideFoldAbove = false;
    this.hasGlyphFoldBelow = false;
    this.hasRadicalFoldBelow = false;
    this.hasGlyphSideFoldBelow = false;
    this.hasRadicalSideFoldBelow = false;
    this.hasGlyphVFoldBelow = false;
    this.hasRadicalVFoldBelow = false;
    this.hasEntireContourAbove = false;
    this.hasEntireContourBelow = false;
    this.radicalCenterRise = 0;
    this.glyphCenterRise = 0;
    this.radicalRightAdjacentRise = 0;
    this.radicalLeftAdjacentRise = 0;
    this.glyphRightAdjacentRise = 0;
    this.glyphLeftAdjacentRise = 0;
    this.radicalRightDistancedRise = 0;
    this.radicalLeftDistancedRise = 0;
    this.glyphRightDistancedRise = 0;
    this.glyphLeftDistancedRise = 0;
    this.radicalCenterDescent = 0;
    this.glyphCenterDescent = 0;
    this.radicalLeftAdjacentDescent = 0;
    this.radicalRightAdjacentDescent = 0;
    this.glyphLeftAdjacentDescent = 0;
    this.glyphRightAdjacentDescent = 0;
    this.radicalLeftDistancedDescent = 0;
    this.radicalRightDistancedDescent = 0;
    this.glyphLeftDistancedDescent = 0;
    this.glyphRightDistancedDescent = 0;
    this.high = high;
    this.low = low;
    this.highExp = high;
    this.lowExp = low;
    this.y = high[0][0].y;
    this.width = Math.abs(high[0][0].y - low[0][0].y);
    this.slope = 0;
    this.belongRadical = r;
  }
  [Util2.inspect.custom](depth, options) {
    let s = this.inspectKeysImpl(depth, options);
    if (this.atLeft && this.linkedWholeStem) {
      s += `@<${this.linkedWholeStem.inspectKeysImpl(depth, options)}`;
    }
    if (this.atRight && this.linkedWholeStem) {
      s += `@>${this.linkedWholeStem.inspectKeysImpl(depth, options)}`;
    }
    return s;
  }
  inspectKeysImpl(depth, options) {
    return `[${Util2.inspect(this.lowKey, options)} -- ${Util2.inspect(this.highKey, options)}]`;
  }
};
var StemSharedBoolKeys = [
  "hasGlyphStemAbove",
  "hasSameRadicalStemAbove",
  "hasRadicalPointAbove",
  "hasGlyphPointAbove",
  "hasRadicalLeftAdjacentPointAbove",
  "hasRadicalRightAdjacentPointAbove",
  "hasGlyphLeftAdjacentPointAbove",
  "hasGlyphRightAdjacentPointAbove",
  "hasGlyphStemBelow",
  "hasSameRadicalStemBelow",
  "hasRadicalPointBelow",
  "hasGlyphPointBelow",
  "hasRadicalLeftAdjacentPointBelow",
  "hasRadicalRightAdjacentPointBelow",
  "hasGlyphLeftAdjacentPointBelow",
  "hasGlyphRightAdjacentPointBelow",
  "hasGlyphFoldAbove",
  "hasRadicalFoldAbove",
  "hasGlyphSideFoldAbove",
  "hasRadicalSideFoldAbove",
  "hasGlyphFoldBelow",
  "hasRadicalFoldBelow",
  "hasGlyphSideFoldBelow",
  "hasRadicalSideFoldBelow",
  "hasGlyphVFoldBelow",
  "hasRadicalVFoldBelow",
  "hasEntireContourAbove",
  "hasEntireContourBelow"
];
var StemSharedNumberKeys = [
  "radicalCenterRise",
  "glyphCenterRise",
  "radicalRightAdjacentRise",
  "radicalLeftAdjacentRise",
  "glyphRightAdjacentRise",
  "glyphLeftAdjacentRise",
  "radicalCenterDescent",
  "glyphCenterDescent",
  "radicalLeftAdjacentDescent",
  "radicalRightAdjacentDescent",
  "glyphLeftAdjacentDescent",
  "glyphRightAdjacentDescent"
];

// packages/ideograph-shape-analyzer-1/src/si-common/hlkey.ts
import { Support as Support3 } from "@chlorophytum/arch";
function keyPointPriority(incoming, current, atl, atr) {
  if (atl) {
    return incoming.x < current.x;
  } else if (atr) {
    return incoming.x > current.x;
  } else {
    if (current.y === incoming.y) {
      return incoming.x < current.x;
    } else {
      return incoming.y < current.y;
    }
  }
}
function findHighLowKeys(s) {
  let highKey = null, lowKey = null;
  const mmHigh = minMaxOfSeg(s.high);
  const mmLow = minMaxOfSeg(s.low);
  const atLeft = s.atLeft || mmHigh.max < Support3.mix(mmLow.min, mmLow.max, 2 / 3) || mmLow.max < Support3.mix(mmHigh.min, mmHigh.max, 2 / 3);
  const atRight = s.atRight || mmHigh.min > Support3.mix(mmLow.min, mmLow.max, 1 / 3) || mmLow.min > Support3.mix(mmHigh.min, mmHigh.max, 1 / 3);
  for (let j = 0; j < s.high.length; j++) {
    for (let k = 0; k < s.high[j].length; k++) {
      if (!s.high[j][k].queryReference()) continue;
      if (!highKey || keyPointPriority(s.high[j][k], highKey, atLeft, atRight)) {
        highKey = s.high[j][k];
      }
    }
  }
  for (let j = 0; j < s.low.length; j++) {
    for (let k = 0; k < s.low[j].length; k++) {
      if (!s.low[j][k].queryReference()) continue;
      if (!lowKey || keyPointPriority(s.low[j][k], lowKey, atLeft, atRight)) {
        lowKey = s.low[j][k];
      }
    }
  }
  if (!highKey || !lowKey) {
    console.error(s);
    throw new Error("Stem built with irregular geometry.");
  }
  return { highKey, lowKey };
}
function correctYWForStem(s) {
  const slope = (slopeOf(s.high) + slopeOf(s.low)) / 2;
  const { highKey, lowKey } = findHighLowKeys(s);
  s.highKey = highKey;
  s.lowKey = lowKey;
  s.slope = slope;
  s.y = highKey.y;
  s.width = highKey.y - lowKey.y + (lowKey.x - highKey.x) * slope;
  return { highKey, lowKey, slope };
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/calc.ts
function calculateYW(stem) {
  correctYWForStem(stem);
}
function calculateMinMax(stem, radicals, strategy) {
  const p = expandZ(
    radicals[stem.belongRadical],
    leftmostZ_SS(stem.high),
    -1,
    -(stem.slope || 0),
    strategy.UPM
  );
  const q = expandZ(
    radicals[stem.belongRadical],
    leftmostZ_SS(stem.low),
    -1,
    -(stem.slope || 0),
    strategy.UPM
  );
  const coP = expandZ(
    radicals[stem.belongRadical],
    rightmostZ_SS(stem.high),
    1,
    stem.slope || 0,
    strategy.UPM
  );
  const coQ = expandZ(
    radicals[stem.belongRadical],
    rightmostZ_SS(stem.low),
    1,
    stem.slope || 0,
    strategy.UPM
  );
  stem.xMinExP = stem.xMinEx = Math.min(p.x, q.x);
  stem.xMaxExP = stem.xMaxEx = Math.max(coP.x, coQ.x);
  stem.xMinTop = leftmostZ_SS(stem.high).x;
  stem.xMaxTop = rightmostZ_SS(stem.high).x;
  stem.xMinBot = leftmostZ_SS(stem.low).x;
  stem.xMaxBot = rightmostZ_SS(stem.low).x;
  stem.xMinP = stem.xMin = Math.min(stem.xMinTop, stem.xMinBot);
  stem.xMaxP = stem.xMax = Math.max(stem.xMaxTop, stem.xMaxBot);
}
function _expandSeg(seg, radical, slope) {
  let z0 = leftmostZ_S(seg), zm = rightmostZ_S(seg);
  if (radical) {
    z0 = expandZ(radical, z0, -1, -slope, 1e3);
    zm = expandZ(radical, zm, 1, slope, 1e3);
  }
  return [z0, zm];
}
function calculateExp(stem, radical) {
  const slopeH = slopeOf(stem.high);
  const slopeL = slopeOf(stem.low);
  stem.highExp = [];
  stem.lowExp = [];
  for (const seg of stem.high) {
    stem.highExp.push(_expandSeg(seg, radical, slopeH));
  }
  for (const seg of stem.low) {
    stem.lowExp.push(_expandSeg(seg, radical, slopeL));
  }
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/rel.ts
function pointAboveStemDist(point, stem) {
  return point.y - (stem.y + (point.x - stem.highKey.x) * stem.slope);
}
function pointBelowStemDist(point, stem) {
  return stem.y + (point.x - stem.highKey.x) * stem.slope - stem.width - point.y;
}
function pointBelowStem(point, stem, fuzz) {
  return point.y < stem.y - stem.width - fuzz;
}
function PtAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointAboveStemDist(point, stem);
  if (dy > yFuzz && point.x < xMax - yFuzz && point.x > xMin + yFuzz) {
    stem.hasGlyphPointAbove = true;
    stem.glyphCenterRise = Math.max(stem.glyphCenterRise || 0, dy);
    if (sameRadical) {
      stem.hasRadicalPointAbove = true;
      stem.radicalCenterRise = Math.max(stem.radicalCenterRise || 0, dy);
    }
  }
}
function PtRightAdjAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointAboveStemDist(point, stem);
  if (dy > yFuzz && point.x >= xMax - yFuzz && point.x <= xMax + yFuzz) {
    stem.hasGlyphRightAdjacentPointAbove = true;
    stem.glyphRightAdjacentRise = Math.max(stem.glyphRightAdjacentRise || 0, dy);
    if (sameRadical) {
      stem.hasRadicalRightAdjacentPointAbove = true;
      stem.radicalRightAdjacentRise = Math.max(stem.radicalRightAdjacentRise || 0, dy);
    }
  }
}
function PtLeftAdjAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointAboveStemDist(point, stem);
  if (dy > yFuzz && point.x <= xMin + yFuzz && point.x >= xMin - yFuzz) {
    stem.hasGlyphLeftAdjacentPointAbove = true;
    stem.glyphLeftAdjacentRise = Math.max(stem.glyphLeftAdjacentRise || 0, dy);
    if (sameRadical) {
      stem.hasRadicalLeftAdjacentPointAbove = true;
      stem.radicalLeftAdjacentRise = Math.max(stem.radicalLeftAdjacentRise || 0, dy);
    }
  }
}
function PtRightDistAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointAboveStemDist(point, stem);
  if (dy > yFuzz && point.x >= xMax + yFuzz) {
    stem.hasGlyphRightDistancedPointAbove = true;
    stem.glyphRightDistancedRise = Math.max(stem.glyphRightDistancedRise || 0, dy);
    if (sameRadical) {
      stem.hasRadicalRightDistancedPointAbove = true;
      stem.radicalRightDistancedRise = Math.max(stem.radicalRightDistancedRise || 0, dy);
    }
  }
}
function PtLeftDistAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointAboveStemDist(point, stem);
  if (dy > yFuzz && point.x <= xMin - yFuzz) {
    stem.hasGlyphLeftDistancedPointAbove = true;
    stem.glyphLeftDistancedRise = Math.max(stem.glyphLeftDistancedRise || 0, dy);
    if (sameRadical) {
      stem.hasRadicalLeftDistancedPointAbove = true;
      stem.radicalLeftDistancedRise = Math.max(stem.radicalLeftDistancedRise || 0, dy);
    }
  }
}
function FoldAbove(point, stem, xMin, xMax, yFuzz, sameRadical) {
  if (point.prev && point.prev.prev && point.prev.prev.prev) {
    const z1 = point, z2 = point.prev, z3 = point.prev.prev, z4 = point.prev.prev.prev;
    if (z2.x === z3.x && z1.x < z2.x === z4.x < z3.x && (z2.y > stem.y + yFuzz && z3.y >= stem.y && z2.x < xMax && z2.x > xMin || z3.y > stem.y + yFuzz && z2.y >= stem.y && z3.x < xMax && z3.x > xMin)) {
      if (!z2.atLeft && z2.x > xMin + (xMax - xMin) * 0.2 || z2.atLeft && z2.x < xMax - (xMax - xMin) * 0.2) {
        stem.hasGlyphFoldAbove = true;
        if (sameRadical) {
          stem.hasRadicalFoldAbove = true;
        }
      } else if (z2.x < xMax - (xMax - xMin) * 0.2 && z2.x > xMin + (xMax - xMin) * 0.2) {
        stem.hasGlyphSideFoldAbove = true;
        if (sameRadical) {
          stem.hasRadicalSideFoldAbove = true;
        }
      }
    }
  }
}
function PtBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointBelowStemDist(point, stem);
  if (dy > yFuzz && point.x < xMax - yFuzz && point.x > xMin + yFuzz) {
    stem.hasGlyphPointBelow = true;
    stem.glyphCenterDescent = Math.max(stem.glyphCenterDescent || 0, dy);
    if (sameRadical) {
      stem.hasRadicalPointBelow = true;
      stem.radicalCenterDescent = Math.max(stem.radicalCenterDescent || 0, dy);
    }
    if (point.yStrongExtrema) {
      stem.hasGlyphVFoldBelow = true;
      if (sameRadical) {
        stem.hasRadicalVFoldBelow = true;
      }
    }
  }
}
function PtRightAdjBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointBelowStemDist(point, stem);
  if (dy > yFuzz && point.x >= xMax - yFuzz && point.x <= xMax + yFuzz) {
    stem.hasGlyphRightAdjacentPointBelow = true;
    stem.glyphRightAdjacentDescent = Math.max(stem.glyphRightAdjacentDescent || 0, dy);
    if (sameRadical) {
      stem.hasRadicalRightAdjacentPointBelow = true;
      stem.radicalRightAdjacentDescent = Math.max(stem.radicalRightAdjacentDescent || 0, dy);
    }
  }
}
function PtLeftAdjBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointBelowStemDist(point, stem);
  if (dy > yFuzz && point.x <= xMin + yFuzz && point.x >= xMin - yFuzz) {
    stem.hasGlyphLeftAdjacentPointBelow = true;
    stem.glyphLeftAdjacentDescent = Math.max(stem.glyphLeftAdjacentDescent || 0, dy);
    if (sameRadical) {
      stem.hasRadicalLeftAdjacentPointBelow = true;
      stem.radicalLeftAdjacentDescent = Math.max(stem.radicalLeftAdjacentDescent || 0, dy);
    }
  }
}
function PtRightDistBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointBelowStemDist(point, stem);
  if (dy > yFuzz && point.x >= xMax + yFuzz) {
    stem.hasGlyphRightDistancedPointBelow = true;
    stem.glyphRightDistancedDescent = Math.max(stem.glyphRightDistancedDescent || 0, dy);
    if (sameRadical) {
      stem.hasRadicalRightDistancedPointBelow = true;
      stem.radicalRightDistancedDescent = Math.max(
        stem.radicalRightDistancedDescent || 0,
        dy
      );
    }
  }
}
function PtLeftDistBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  const dy = pointBelowStemDist(point, stem);
  if (dy > yFuzz && point.x <= xMin - yFuzz) {
    stem.hasGlyphLeftDistancedPointBelow = true;
    stem.glyphLeftDistancedDescent = Math.max(stem.glyphLeftDistancedDescent || 0, dy);
    if (sameRadical) {
      stem.hasRadicalLeftDistancedPointBelow = true;
      stem.radicalLeftDistancedDescent = Math.max(stem.radicalLeftDistancedDescent || 0, dy);
    }
  }
}
function FoldBelow(point, stem, xMin, xMax, yFuzz, sameRadical) {
  if (pointBelowStem(point, stem, yFuzz) && point.xStrongExtrema && !(point.yExtrema && !point.yStrongExtrema) && point.x < xMax + Math.min((xMax - xMin) / 3, stem.width) && point.x > xMin - Math.min((xMax - xMin) / 3, stem.width)) {
    if (!point.atLeft && point.x > xMin + (xMax - xMin) * 0.2 || point.atLeft && point.x < xMax - (xMax - xMin) * 0.2) {
      stem.hasGlyphFoldBelow = true;
      if (sameRadical) {
        stem.hasRadicalFoldBelow = true;
      }
    } else if (point.x < xMax - (xMax - xMin) * 0.2 && point.x > xMin + (xMax - xMin) * 0.2) {
      stem.hasGlyphSideFoldBelow = true;
      if (sameRadical) {
        stem.hasRadicalSideFoldBelow = true;
      }
    }
  }
}
function analyzeRadicalPointsToStemRelationships(radical, stem, sameRadical, strategy) {
  stem.proximityUp = 0;
  stem.proximityDown = 0;
  const yFuzz = strategy.Y_FUZZ * strategy.UPM || 15;
  const a0 = stem.low[0][0].x, az = stem.low[stem.low.length - 1][stem.low[stem.low.length - 1].length - 1].x;
  const b0 = stem.high[0][0].x, bz = stem.high[stem.high.length - 1][stem.high[stem.high.length - 1].length - 1].x;
  const xMin = Math.min(a0, b0, az, bz), xMax = Math.max(a0, b0, az, bz);
  const radicalParts = Array.from(radical.contours());
  for (let j = 0; j < radicalParts.length; j++) {
    for (let k = 0; k < radicalParts[j].points.length; k++) {
      const point = radicalParts[j].points[k];
      if (!point.queryReference()) continue;
      PtAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtRightAdjAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtLeftAdjAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtRightDistAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtLeftDistAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      FoldAbove(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtRightAdjBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtLeftAdjBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtRightDistBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
      PtLeftDistBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
      FoldBelow(point, stem, xMin, xMax, yFuzz, sameRadical);
    }
  }
}
function analyzePointToStemSpatialRelationships(stem, radicals, strategy) {
  for (let rad = 0; rad < radicals.length; rad++) {
    const radical = radicals[rad];
    const sameRadical = radical === radicals[stem.belongRadical];
    analyzeRadicalPointsToStemRelationships(radical, stem, sameRadical, strategy);
  }
  calculateMinMax(stem, radicals, strategy);
}
function analyzeStemSpatialRelationships(stems, radicals, overlaps, strategy) {
  for (let k = 0; k < stems.length; k++) {
    analyzePointToStemSpatialRelationships(stems[k], radicals, strategy);
    for (let j = 0; j < stems.length; j++) {
      if (overlaps[j][k] > strategy.COLLISION_MIN_OVERLAP_RATIO && stems[j].y > stems[k].y && !(stems[j].rid && stems[j].rid === stems[k].rid)) {
        stems[k].hasGlyphStemAbove = true;
        stems[j].hasGlyphStemBelow = true;
        if (stems[j].belongRadical === stems[k].belongRadical) {
          stems[j].hasSameRadicalStemBelow = true;
          stems[k].hasSameRadicalStemAbove = true;
        }
      }
    }
  }
  for (let j = 0; j < stems.length; j++) {
    for (let k = 0; k < j; k++) {
      const sR = stems[j], sL = stems[k];
      if (!(sR.rid && sR.rid === sL.rid && sR.atRight && sL.atLeft)) continue;
      for (const p of StemSharedBoolKeys) sR[p] = sL[p] = !!sR[p] || !!sL[p];
      for (const p of StemSharedNumberKeys) sR[p] = sL[p] = Math.max(sR[p] || 0, sL[p] || 0);
      sR.xMinP = sL.xMinP = Math.min(sR.xMin, sL.xMin);
      sR.xMaxP = sL.xMaxP = Math.max(sR.xMax, sL.xMax);
      sR.xMinExP = sL.xMinExP = Math.min(sR.xMinEx, sL.xMinEx);
      sR.xMaxExP = sL.xMaxExP = Math.max(sR.xMaxEx, sL.xMaxEx);
    }
  }
}
function analyzeEntireContourAboveBelow(glyph, stems) {
  for (let j = 0; j < stems.length; j++) {
    const sj = stems[j];
    for (let c = 0; c < glyph.contours.length; c++) {
      const cr = glyph.contours[c];
      if (cr.stats.xMin >= sj.xMin && cr.stats.xMax <= sj.xMax && cr.stats.yMin >= sj.y) {
        sj.hasEntireContourAbove = true;
      }
      if (cr.stats.xMin >= sj.xMin && cr.stats.xMax <= sj.xMax && cr.stats.yMax <= sj.y - sj.width) {
        sj.hasEntireContourBelow = true;
      }
    }
  }
}
function stemsAreSimilar(strategy, last, current) {
  return (current.belongRadical === last.belongRadical && current.hasSameRadicalStemBelow && last.hasSameRadicalStemAbove || !current.hasSameRadicalStemBelow && !current.hasSameRadicalStemAbove && !last.hasSameRadicalStemBelow && !last.hasSameRadicalStemAbove) && Math.abs(last.xMinEx - current.xMinEx) < strategy.UPM * strategy.X_FUZZ && Math.abs(last.xMaxEx - current.xMaxEx) < strategy.UPM * strategy.X_FUZZ && Math.abs(last.width - current.width) < strategy.UPM * strategy.Y_FUZZ;
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/stem-keypoint.ts
function analyzeStemKeyPoints(stems) {
  for (const stem of stems) {
    const { highKey, lowKey } = correctYWForStem(stem);
    highKey.touched = lowKey.touched = true;
    const highNonKey = [], lowNonKey = [];
    let jh = -1, jl = -1;
    for (let j = 0; j < stem.high.length; j++) {
      for (let k = 0; k < stem.high[j].length; k++) {
        if (stem.high[j][k] === highKey) {
          jh = j;
          continue;
        }
        stem.high[j][k].linkedKey = highKey;
        if (!stem.high[j][k].queryReference()) {
          continue;
        }
        if (k === 0 || k === stem.high[j].length - 1) {
          highNonKey.push(stem.high[j][k]);
          stem.high[j][k].touched = true;
        } else {
          stem.high[j][k].dontTouch = true;
        }
      }
    }
    for (let j = 0; j < stem.low.length; j++) {
      for (let k = 0; k < stem.low[j].length; k++) {
        if (stem.low[j][k] === lowKey) {
          jl = j;
          continue;
        }
        stem.low[j][k].linkedKey = lowKey;
        if (!stem.low[j][k].queryReference()) {
          continue;
        }
        if (k === 0 || k === stem.low[j].length - 1) {
          lowNonKey.push(stem.low[j][k]);
          stem.low[j][k].touched = true;
        } else {
          stem.low[j][k].dontTouch = true;
        }
      }
    }
    stem.highKey = highKey;
    stem.lowKey = lowKey;
    stem.highAlign = highNonKey;
    stem.lowAlign = lowNonKey;
    stem.highKey.isKeyPoint = true;
    stem.lowKey.isKeyPoint = true;
    stem.highKey.associatedStemSlope = stem.lowKey.associatedStemSlope = stem.slope;
  }
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/stems.ts
import { Support as Support4 } from "@chlorophytum/arch";

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/segments.ts
function findHorizontalSegments(radicals, strategy) {
  for (const radical of radicals) {
    const radicalParts = Array.from(radical.contours());
    const segments = [];
    for (let j = 0; j < radicalParts.length; j++) {
      const coupled = /* @__PURE__ */ new Set();
      findHSegInContour2(segments, radicalParts[j], strategy, coupled);
      findHTangents(segments, radicalParts[j], strategy, coupled);
    }
    radical.segments = segments.sort((p, q) => p[0].x - q[0].x);
  }
}
function approSlope(z2, z1, strategy) {
  if (z1.nextZ && z2.prevZ && z1.nextZ !== z2) {
    return approSlopeImpl(z1, z1.nextZ, strategy) && approSlopeImpl(z2.prevZ, z2, strategy);
  } else {
    return approSlopeImpl(z1, z2, strategy);
  }
}
function eqSlopeA(z2, z1, _strategy) {
  return z1.y === z2.y && z1.isCorner() === z2.isCorner();
}
function approSlopeA(z1, z2, strategy) {
  const slope = (z1.y - z2.y) / (z1.x - z2.x);
  return Math.abs(z2.x - z1.x) >= strategy.Y_FUZZ * strategy.UPM * 2 && (slope >= 0 ? slope <= strategy.SLOPE_FUZZ : slope >= -strategy.SLOPE_FUZZ_NEG);
}
function approSlopeT(z2, z1, strategy) {
  if (z1.nextZ && z2.prevZ && z1.nextZ !== z2) {
    return approSlopeImpl(z1, z1.nextZ, strategy) && approSlopeTImpl(z2.prevZ, z2, strategy) || approSlopeTImpl(z1, z1.nextZ, strategy) && approSlopeImpl(z2.prevZ, z2, strategy);
  } else {
    return approSlopeTImpl(z1, z2, strategy);
  }
}
function approSlopeTImpl(z2, z1, strategy) {
  const slope = (z1.y - z2.y) / (z1.x - z2.x);
  return slope >= 0 ? slope <= strategy.SLOPE_FUZZ_POST : slope >= -strategy.SLOPE_FUZZ_NEG;
}
function approSlopeImpl(z2, z1, strategy) {
  const slope = (z1.y - z2.y) / (z1.x - z2.x);
  return slope >= 0 ? slope <= strategy.SLOPE_FUZZ_POS : slope >= -strategy.SLOPE_FUZZ_NEG;
}
function tryPushSegment(s, ss, approSlopeA2, coupled, strategy) {
  while (s.length > 1) {
    if (approSlopeSegmentT(s, approSlopeA2, strategy)) {
      const s1 = [s[0]];
      for (let k = 1; k < s.length; k++) linkSegment(s1, s[k]);
      for (const z of s1) coupled.add(z);
      ss.push(s1);
      return;
    } else {
      s.shift();
    }
  }
}
function approSlopeSegmentT(s, approSlopeA2, strategy) {
  return s.length > 2 ? approSlopeA2(s[0], s[s.length - 2], strategy) || approSlopeA2(s[1], s[s.length - 1], strategy) : approSlopeA2(s[0], s[s.length - 1], strategy);
}
var SEGMENT_STRATEGIES = [
  [eqSlopeA, eqSlopeA, eqSlopeA],
  [approSlope, approSlopeT, approSlopeA]
];
function findStart(contour) {
  let m = null;
  for (const z of contour.points) if (z.queryReference()) {
    if (!m || z.x < m.x) m = z;
  }
  return m;
}
function linkSegment(segment, z) {
  const last = segment[segment.length - 1];
  let subject = last.nextZ;
  while (subject && subject !== z && subject !== last) {
    segment.push(subject);
    subject = subject.nextZ;
  }
  segment.push(z);
}
function findHSegInContour2(segments, contour, strategy, coupled) {
  const zStart = findStart(contour);
  if (!zStart) return;
  let zLast = zStart;
  let segment = [zLast];
  function restart(z) {
    zLast = z;
    segment = [zLast];
  }
  for (const [as1, as1t, as2] of SEGMENT_STRATEGIES) {
    let tores = false;
    restart(zStart);
    let z = zLast.next;
    while (z && z !== zStart) {
      if (tores || !z.queryReference() || coupled.has(zLast)) {
        restart(z);
        tores = false;
      } else if (!coupled.has(z) && as1t(z, zLast, strategy)) {
        segment.push(z);
        if (segment.length > 2 && !as1(z, zLast, strategy)) {
          tryPushSegment(segment, segments, as2, coupled, strategy);
          tores = true;
        } else {
          zLast = z;
          tores = false;
        }
      } else {
        tryPushSegment(segment, segments, as2, coupled, strategy);
        restart(z);
        tores = false;
      }
      z = z.next;
    }
    if (z && !coupled.has(z) && as1t(z, zLast, strategy)) {
      if (segments[0] && segments[0][0] === z) {
        const firstSeg = [...segment, ...segments[0]];
        segment.shift();
        tryPushSegment(firstSeg, segments, as2, coupled, strategy);
        segment = [z];
      } else {
        segment.push(z);
      }
    }
    tryPushSegment(segment, segments, as2, coupled, strategy);
  }
}
function findHTangents(segments, contour, strategy, coupled) {
  for (const z of contour.points) {
    if (z.queryReference() && z.prevZ && z.nextZ && !coupled.has(z) && !coupled.has(z.prevZ) && !coupled.has(z.nextZ) && !z.prevZ.queryReference() && !z.nextZ.queryReference()) {
      if (approSlopeImpl(z.prevZ, z, strategy) && approSlopeImpl(z.nextZ, z, strategy)) {
        segments.push([z.prevZ, z, z.nextZ]);
        coupled.add(z);
      }
    }
    if (z.queryReference() && z.prevZ && !coupled.has(z) && !coupled.has(z.prevZ) && !z.prevZ.queryReference()) {
      if (approSlopeImpl(z.prevZ, z, strategy)) {
        segments.push([z.prevZ, z]);
        coupled.add(z);
      }
    }
    if (z.queryReference() && z.nextZ && !coupled.has(z) && !coupled.has(z.nextZ) && !z.nextZ.queryReference()) {
      if (approSlopeImpl(z.nextZ, z, strategy)) {
        segments.push([z, z.nextZ]);
        coupled.add(z);
      }
    }
  }
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/split.ts
function splitDiagonalStems(ss, strategy) {
  const ans = [];
  let rid = 1;
  for (const s of ss) {
    splitDiagonalStem(s, strategy, rid, ans);
    rid += 1;
  }
  return ans;
}
function splitDiagonalStem(s, strategy, rid, results) {
  const hl = leftmostZ_SS_Ref(s.high);
  const ll = leftmostZ_SS_Ref(s.low);
  const hr = rightmostZ_SS_Ref(s.high);
  const lr = rightmostZ_SS_Ref(s.low);
  if (!hl || !hr || !ll || !lr) return;
  if (shouldSplit(hl, ll, hr, lr, strategy) && contained(ll, lr, s.low, strategy.Y_FUZZ * strategy.UPM) && contained(hl, hr, s.high, strategy.Y_FUZZ * strategy.UPM)) {
    const hmx = (hl.x + hr.x) / 2;
    const lmx = (ll.x + lr.x) / 2;
    const hmy = (hl.y + hr.y) / 2;
    const lmy = (ll.y + lr.y) / 2;
    const sLeft = new Stem(
      [[hl, new CPoint(hmx - 1, hmy)]],
      [[ll, new CPoint(lmx - 1, lmy)]],
      s.belongRadical
    );
    sLeft.atLeft = true;
    sLeft.rid = rid;
    const sRight = new Stem(
      [[new CPoint(hmx + 1, hmy), hr]],
      [[new CPoint(lmx + 1, lmy), lr]],
      s.belongRadical
    );
    sRight.atRight = true;
    sRight.rid = rid;
    if (hl.y > hr.y) {
      sLeft.diagHigh = true;
      sRight.diagLow = true;
    } else {
      sRight.diagHigh = true;
      sLeft.diagLow = true;
    }
    addIp(s, sLeft, sRight);
    sLeft.linkedWholeStem = sRight.linkedWholeStem = s;
    results.push(sLeft, sRight);
  } else {
    results.push(s);
  }
}
function shouldSplit(hl, ll, hr, lr, strategy) {
  if (hl === hr || ll === lr) return false;
  if (hl.y === hr.y || ll.y === lr.y) return false;
  if (hl.isCorner() && ll.isCorner() && !hr.isCorner() && !lr.isCorner() || !hl.isCorner() && !ll.isCorner() && hr.isCorner() && lr.isCorner()) {
    if (CPoint.adjacentZ(hl, hr) && CPoint.adjacentZ(ll, lr)) return false;
  }
  return Math.abs(hr.y - hl.y) >= Math.abs(hr.x - hl.x) * strategy.SLOPE_FUZZ_R && Math.abs(lr.y - ll.y) >= Math.abs(lr.x - ll.x) * strategy.SLOPE_FUZZ_R && Math.abs(Math.min(hl.x, ll.x) - Math.max(hr.x, lr.x)) >= 2 * Math.max(Math.abs(hl.y - ll.y), Math.abs(hr.y - lr.y)) && Math.abs(Math.max(hl.x, ll.x) - Math.min(hr.x, lr.x)) >= Math.max(Math.abs(hl.y - ll.y), Math.abs(hr.y - lr.y)) && Math.abs(hl.x - ll.x) * 2.25 < Math.max(Math.abs(hl.x - hr.x), Math.abs(ll.x - lr.x)) && Math.abs(hr.x - lr.x) * 2.25 < Math.max(Math.abs(hl.x - hr.x), Math.abs(ll.x - lr.x)) && (Math.abs(hl.y - hr.y) >= strategy.Y_FUZZ_DIAG * strategy.UPM || Math.abs(ll.y - lr.y) >= strategy.Y_FUZZ_DIAG * strategy.UPM);
}
function contained(z1, z2, segments, fuzz) {
  for (const seg of segments) {
    for (const z of seg) {
      if (z.y > z1.y + fuzz && z.y > z2.y + fuzz || z.y < z1.y - fuzz && z.y < z2.y - fuzz) {
        return false;
      }
    }
  }
  return true;
}
function addIp(s, sLeft, sRight) {
  const hlkLeft = findHighLowKeys(sLeft);
  const hlkRight = findHighLowKeys(sRight);
  const ipHigh = [];
  const ipLow = [];
  for (const sg of s.high) {
    for (const z of [sg[0], sg[sg.length - 1]]) {
      if (!z.queryReference()) continue;
      if (z === hlkLeft.highKey || z === hlkRight.highKey) continue;
      ipHigh.push([hlkLeft.highKey, hlkRight.highKey, z]);
    }
  }
  for (const sg of s.low) {
    for (const z of [sg[0], sg[sg.length - 1]]) {
      if (!z.queryReference()) continue;
      if (z === hlkLeft.lowKey || z === hlkRight.lowKey) continue;
      ipLow.push([hlkLeft.lowKey, hlkRight.lowKey, z]);
    }
  }
  sLeft.ipHigh = ipHigh;
  sLeft.ipLow = ipLow;
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/stems.ts
function byPointY2(a, b) {
  if (a[0].y !== b[0].y) return a[0].y - b[0].y;
  return a[0].x - b[0].x;
}
function byPointX(a, b) {
  if (a[0].x !== b[0].x) return a[0].x - b[0].x;
  return a[0].y - b[0].y;
}
var PROPORTION = 1.25;
var PROBES = 8;
var MATCH_OPPOSITE = 1;
var MATCH_SAME_SIDE = 2;
function testExpandRho(rho, p, q, coP, coQ, slope1, slope2, radical, upm) {
  const left = expandZ(
    radical,
    Support4.mixZ(p, q, rho),
    -1,
    -Support4.mix(slope1, slope2, rho),
    upm
  );
  const right = expandZ(
    radical,
    Support4.mixZ(coP, coQ, rho),
    1,
    Support4.mix(slope1, slope2, rho),
    upm
  );
  return right.x - left.x < Math.abs(p.y - q.y) * PROPORTION;
}
function stemShapeIsIncorrect(radical, strategy, u, v, mh) {
  const p = leftmostZ_SS(u);
  const q = leftmostZ_SS(v);
  const coP = rightmostZ_SS(u);
  const coQ = rightmostZ_SS(v);
  const upm = strategy.UPM;
  const sProp = Support4.clamp(0, Math.max(coP.x - p.x, coQ.x - q.x) / strategy.UPM * 2, 1);
  const slope1 = slopeOf(u), slope2 = slopeOf(v), slope = (slope1 + slope2) / 2;
  if (slope >= 0 ? slope1 > strategy.SLOPE_FUZZ * sProp && slope2 > strategy.SLOPE_FUZZ * sProp : slope1 < -strategy.SLOPE_FUZZ_NEG * sProp && slope2 < -strategy.SLOPE_FUZZ_NEG * sProp) {
    return true;
  }
  if (Math.abs(p.y - q.y) > mh) {
    return true;
  }
  if (coP.x - p.x >= Math.abs(p.y - q.y) * PROPORTION && coQ.x - q.x >= Math.abs(p.y - q.y) * PROPORTION) {
    return false;
  }
  if (testExpandRho(0, p, q, coP, coQ, slope1, slope2, radical, upm)) return true;
  if (testExpandRho(1, p, q, coP, coQ, slope1, slope2, radical, upm)) return true;
  for (let rho = 1; rho < PROBES; rho++) {
    if (testExpandRho(rho / PROBES, p, q, coP, coQ, slope1, slope2, radical, upm)) return true;
  }
  return false;
}
function uuMatchable(sj, sk, radical, strategy) {
  if (leftmostZ_S(sj).x > leftmostZ_S(sk).x) {
    return uuMatchableImpl(sk, sj, radical, strategy);
  } else {
    return uuMatchableImpl(sj, sk, radical, strategy);
  }
}
function uuMatchableImpl(sj, sk, radical, strategy) {
  const focus = leftmostZ_S(sk);
  const ref2 = rightmostZ_S(sj);
  const slope = (slopeOf([sj]) + slopeOf([sk])) / 2;
  const desired = ref2.y + (focus.x - ref2.x) * slope;
  const delta = Math.abs(focus.x - ref2.x) * strategy.SLOPE_FUZZ_P + strategy.Y_FUZZ * strategy.UPM;
  return Math.abs(focus.y - desired) <= delta && segmentJoinable(sj, sk, radical);
}
function segmentJoinable(pivot, segment, radical) {
  for (let k = 0; k < pivot.length; k++) {
    for (let j = 0; j < segment.length; j++) {
      if (!radical.includesSegmentEdge(segment[j], pivot[k], 2, 2, 1, 1)) continue;
      return true;
    }
  }
  return false;
}
function udMatchable(sj, sk, radical, strategy) {
  if (!radical.includesDiSegment(sj, sk) || !radical.includesDiSegment(sk, sj)) return false;
  const slopeJ = slopeOf([sj]);
  const slopeK = slopeOf([sk]);
  if (!!slopeJ !== !!slopeK && Math.abs(slopeJ - slopeK) >= strategy.SLOPE_FUZZ / 2) return false;
  return true;
}
function segOverlapIsValid(highEdge, lowEdge, strategy, radical) {
  const segOverlap = overlapInfo(highEdge, lowEdge, radical, radical);
  const segOverlap0 = overlapInfo(highEdge, lowEdge);
  const ovlExt = Math.min(segOverlap.len / segOverlap.la, segOverlap.len / segOverlap.lb);
  const ovlOri = Math.min(segOverlap0.len / segOverlap0.la, segOverlap0.len / segOverlap0.lb);
  return ovlExt * ovlOri >= strategy.STROKE_SEGMENTS_MIN_OVERLAP;
}
function identifyStem(radical, _used, segments, graph, ove, up, j, strategy) {
  const candidate = { high: [], low: [] };
  const maxStemWidth = strategy.UPM * strategy.CANONICAL_STEM_WIDTH * strategy.MAX_STEM_WDTH_X;
  if (up[j]) {
    candidate.high.push(j);
  } else {
    candidate.low.push(j);
  }
  const used = [..._used];
  used[j] = 1;
  let rounds = 0;
  while (rounds < 3) {
    rounds += 1;
    let expandingU = false;
    let expandingD = true;
    let pass = 0;
    while (expandingU || expandingD) {
      pass += 1;
      if (pass % 2) {
        expandingD = false;
      } else {
        expandingU = false;
      }
      let maxOve = -1;
      let sk = null;
      for (let k = 0; k < segments.length; k++) {
        if (used[k] && used[k] <= pass || up[k] !== up[j] !== !!(pass % 2)) {
          continue;
        }
        let sameSide, otherSide;
        if (up[k]) {
          sameSide = candidate.high;
          otherSide = candidate.low;
        } else {
          sameSide = candidate.low;
          otherSide = candidate.high;
        }
        let matchD = true;
        let matchU = !sameSide.length;
        for (let s = 0; s < sameSide.length; s++) {
          const hj = sameSide[s];
          if (graph[k][hj] === MATCH_SAME_SIDE || graph[hj][k] === MATCH_SAME_SIDE) {
            matchU = true;
          }
        }
        for (let s = 0; s < otherSide.length; s++) {
          const hj = otherSide[s];
          if (graph[k][hj] !== MATCH_OPPOSITE && graph[hj][k] !== MATCH_OPPOSITE) {
            matchD = false;
          }
        }
        if (matchU && matchD) {
          let oveK = 0;
          for (const j2 of otherSide) oveK = Math.max(oveK, ove[j2][k]);
          if (oveK > maxOve) {
            sk = { sid: k, ove: oveK, sameSide, otherSide };
            maxOve = oveK;
          }
        }
      }
      if (sk) {
        sk.sameSide.push(sk.sid);
        if (pass % 2) {
          expandingD = true;
        } else {
          expandingU = true;
        }
        used[sk.sid] = pass;
      }
    }
    if (candidate.high.length && candidate.low.length) {
      let highEdge = [];
      let lowEdge = [];
      for (let m = 0; m < candidate.high.length; m++) {
        highEdge[m] = segments[candidate.high[m]];
      }
      for (let m = 0; m < candidate.low.length; m++) {
        lowEdge[m] = segments[candidate.low[m]];
      }
      highEdge = highEdge.sort(byPointX);
      lowEdge = lowEdge.sort(byPointX).reverse();
      if (!segOverlapIsValid(highEdge, lowEdge, strategy, radical)) continue;
      if (stemShapeIsIncorrect(radical, strategy, highEdge, lowEdge, maxStemWidth)) continue;
      for (const s of candidate.high) _used[s] = 1;
      for (const s of candidate.low) _used[s] = 1;
      return { high: highEdge, low: lowEdge };
    }
  }
  return null;
}
function pairSegmentsForRadical(radicals, r, strategy) {
  const radical = radicals[r];
  const graph = [], ove = [], up = [];
  const segments = radical.segments.sort(byPointY2);
  for (let j = 0; j < segments.length; j++) {
    graph[j] = [];
    ove[j] = [];
    for (let k = 0; k < segments.length; k++) {
      graph[j][k] = 0;
      ove[j][k] = 0;
    }
  }
  for (let j = 0; j < segments.length; j++) {
    const sj = segments[j];
    const upperEdgeJ = radical.outlineCcw !== sj[0].x < sj[sj.length - 1].x;
    up[j] = upperEdgeJ;
    for (let k = 0; k < j; k++) {
      const sk = segments[k];
      const upperEdgeK = radical.outlineCcw !== sk[0].x < sk[sk.length - 1].x;
      if (upperEdgeJ === upperEdgeK) {
        graph[j][k] = graph[k][j] = uuMatchable(sj, sk, radical, strategy) ? MATCH_SAME_SIDE : 0;
      } else {
        graph[j][k] = graph[k][j] = udMatchable(sj, sk, radical, strategy) ? MATCH_OPPOSITE : 0;
      }
      ove[j][k] = ove[k][j] = overlapRatio([sj], [sk], Math.min);
    }
  }
  const candidates = [];
  const used = [];
  for (let j = 0; j < segments.length; j++) {
    if (used[j]) continue;
    const stroke = identifyStem(radical, used, segments, graph, ove, up, j, strategy);
    if (stroke) candidates.push(stroke);
  }
  return candidates.map((s) => {
    const stem = new Stem(s.high, s.low, r);
    calculateMinMax(stem, radicals, strategy);
    return stem;
  });
}
function pairSegments(radicals, strategy) {
  let stems = [];
  for (let r = 0; r < radicals.length; r++) {
    const radicalStems = pairSegmentsForRadical(radicals, r, strategy);
    stems = stems.concat(radicalStems);
    radicals[r].stems = radicalStems;
  }
  return stems;
}
function byY(a, b) {
  if (a.y < b.y) return -1;
  if (a.y > b.y) return 1;
  if (a.width > b.width) return -1;
  if (a.width < b.width) return 1;
  return 0;
}
function findStems(radicals, strategy) {
  findHorizontalSegments(radicals, strategy);
  let ss = pairSegments(radicals, strategy).sort(byY);
  ss = splitDiagonalStems(ss, strategy);
  for (const s of ss) {
    calculateYW(s);
    calculateMinMax(s, radicals, strategy);
    calculateExp(s, radicals[s.belongRadical]);
    if (s.linkedWholeStem) {
      calculateYW(s.linkedWholeStem);
      calculateMinMax(s.linkedWholeStem, radicals, strategy);
      calculateExp(s.linkedWholeStem, radicals[s.belongRadical]);
    }
  }
  return ss.sort(byY);
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/turn.ts
import { Support as Support5 } from "@chlorophytum/arch";
var SIZE = 256;
var Bitmap = class {
  constructor(strategy, array) {
    this.array = array;
    const scale = strategy.UPM / SIZE;
    const yMin = Math.floor(strategy.EmBox.Bottom * strategy.UPM / scale);
    const yMax = Math.ceil(strategy.EmBox.Top * strategy.UPM / scale);
    this.scale = scale;
    this.yMin = yMin;
    this.yMax = yMax;
    this.array = array;
  }
  transform(x, y) {
    return {
      x: Math.round(x / this.scale),
      y: Math.round(y / this.scale) - this.yMin
    };
  }
  access(x, y) {
    if (x < 0 || x > SIZE * this.scale) return false;
    if (y < this.yMin * this.scale || y > this.yMax * this.scale) return false;
    return this.array[Math.round(x / this.scale)][Math.round(y / this.scale) - this.yMin];
  }
  accessRaw(x, y) {
    if (x < 0 || x > SIZE) return false;
    if (y < 0 || y > SIZE) return false;
    return this.array[Math.round(x)][Math.round(y) - this.yMin];
  }
};
function createImageBitmap(g, strategy) {
  const scale = strategy.UPM / SIZE;
  const yMin = Math.floor(strategy.EmBox.Bottom * strategy.UPM / scale);
  const yMax = Math.ceil(strategy.EmBox.Top * strategy.UPM / scale);
  const bitmap = new Array(SIZE + 1);
  for (let x = 0; x <= SIZE; x++) {
    bitmap[x] = new Array(yMax - yMin + 1);
    for (let y = yMin; y <= yMax; y++) {
      bitmap[x][y - yMin] = g.containsPoint({ x: x * scale, y: y * scale });
    }
  }
  return new Bitmap(strategy, bitmap);
}
var FlipAnalyzer = class {
  constructor(vLimit) {
    this.vLimit = vLimit;
    this.lifetime = [];
  }
  enter(clrBefore, a, clrAfter) {
    const turns = this.analyzeBands(clrBefore, a, clrAfter);
    for (let t = 0; t <= turns; t++) {
      this.lifetime[t] = (this.lifetime[t] || 0) + 1;
    }
  }
  analyzeBands(clrBefore, a, clrAfter) {
    if (!a || !a.length) return 0;
    let start = 0, end = a.length - 1;
    while (a[start] === clrBefore && start + 1 < a.length) start++;
    while (a[end] === clrAfter && end > 0) end--;
    let v0 = a[start], bandLength = 0, turns = 0;
    for (let j = start; j <= end; j++) {
      const v = a[j];
      if (v !== v0) {
        if (!v) {
          if (bandLength > this.vLimit) turns += 1;
          bandLength = 0;
        } else {
          bandLength = 1;
        }
        v0 = v;
      } else if (bandLength > 0) {
        bandLength += 1;
      }
    }
    return turns;
  }
  computeFlips(hLimit) {
    let turns = 0;
    while (this.lifetime[turns] >= hLimit) turns++;
    return turns;
  }
};
function analyzeTurns(g, strategy, stems) {
  const bitmap = createImageBitmap(g, strategy);
  const HLimit = bitmap.transform(strategy.UPM / 16, 0).x;
  const HLimitSig = bitmap.transform(strategy.UPM / 4, 0).x;
  const VLimit = 0;
  for (const s of stems) {
    const x1 = bitmap.transform(s.xMin, 0).x;
    const x2 = bitmap.transform(s.xMax, 0).x;
    const yBot = bitmap.transform(0, s.y - s.width).y - 1;
    const yTop = bitmap.transform(0, s.y).y + 1;
    if (!bitmap.array[x1] || !bitmap.array[x2]) continue;
    if (yBot > 0) {
      const fa = new FlipAnalyzer(VLimit);
      for (let x = x1; x <= x2; x++) {
        if (!bitmap.array[x]) continue;
        fa.enter(0, bitmap.array[x].slice(0, yBot), 1);
      }
      s.turnsBelow = fa.computeFlips(HLimitSig / 6);
    }
    if (yTop > 0) {
      const fa = new FlipAnalyzer(VLimit);
      for (let x = x1; x <= x2; x++) {
        if (!bitmap.array[x]) continue;
        fa.enter(1, bitmap.array[x].slice(yTop), 0);
      }
      s.turnsAbove = fa.computeFlips(HLimitSig / 6);
    }
  }
  const turnMatrix = [];
  const turnMatrixSig = [];
  for (let j = 0; j < stems.length; j++) {
    turnMatrix[j] = [];
    turnMatrixSig[j] = [];
    turnMatrix[j][j] = turnMatrixSig[j][j] = 0;
    const sj = stems[j];
    for (let k = 0; k < j; k++) {
      turnMatrix[j][k] = turnMatrix[k][j] = 0;
      turnMatrixSig[j][k] = turnMatrixSig[k][j] = 0;
      const fa = new FlipAnalyzer(VLimit);
      const sk = stems[k];
      const xj1 = bitmap.transform(sj.xMinEx, 0).x;
      const xj2 = bitmap.transform(sj.xMaxEx, 0).x;
      const xk1 = bitmap.transform(sk.xMinEx, 0).x;
      const xk2 = bitmap.transform(sk.xMaxEx, 0).x;
      const yBot = bitmap.transform(0, sj.y - sj.width).y - 2;
      const yTop = bitmap.transform(0, sk.y).y + 2;
      if (yBot <= yTop) continue;
      if (xk1 > xj2 || xj1 > xk2) continue;
      if (yBot < 0 || yTop < 0) continue;
      for (let x = Math.max(xj1, xk1); x <= Math.min(xj2, xk2); x++) {
        if (!bitmap.array[x]) continue;
        fa.enter(1, bitmap.array[x].slice(yTop, yBot), 1);
      }
      turnMatrix[j][k] = turnMatrix[k][j] = fa.computeFlips(HLimit);
      turnMatrixSig[j][k] = turnMatrixSig[k][j] = fa.computeFlips(HLimitSig);
    }
  }
  return [turnMatrix, turnMatrixSig];
}
function analyzeSquash(g, strategy, stems) {
  const bitmap = createImageBitmap(g, strategy);
  const squashMatrix = [];
  for (let j = 0; j < stems.length; j++) {
    squashMatrix[j] = [];
    squashMatrix[j][j] = 0;
    const sj = stems[j];
    for (let k = 0; k < j; k++) {
      squashMatrix[j][k] = squashMatrix[k][j] = 0;
      const sk = stems[k];
      const xj1 = bitmap.transform(sj.xMinEx, 0).x;
      const xj2 = bitmap.transform(sj.xMaxEx, 0).x;
      const xk1 = bitmap.transform(sk.xMinEx, 0).x;
      const xk2 = bitmap.transform(sk.xMaxEx, 0).x;
      const yBot = bitmap.transform(0, sj.y - sj.width).y - 2;
      const yTop = bitmap.transform(0, sk.y).y + 2;
      if (yBot <= yTop) continue;
      if (yBot < 0 || yTop < 0) continue;
      const NU = Math.max(4, Math.ceil(Math.abs(xj2 - xj1)), Math.ceil(Math.abs(xk2 - xk1)));
      const NV = Math.max(4, Math.ceil(Math.abs(yTop - yBot)));
      let a = 0;
      for (let v = 0; v <= NV; v++) {
        let s = 0;
        const y = Support5.mix(yBot, yTop, v / NV);
        const xLeft = Support5.mix(xj1, xk1, v / NV);
        const xRight = Support5.mix(xj2, xk2, v / NV);
        for (let u = 0; u <= NU; u++) {
          const x = Support5.mix(xLeft, xRight, u / NU);
          if (bitmap.accessRaw(x, y)) s += 1;
        }
        a += s / NV * Math.abs(xRight - xLeft);
      }
      squashMatrix[j][k] = squashMatrix[k][j] = a / NU * Math.abs(yBot - yTop) / (SIZE * SIZE);
    }
  }
  return squashMatrix;
}

// packages/ideograph-shape-analyzer-1/src/shape-analyze/stems/index.ts
function OverlapMatrix(stems, fn) {
  const transitions = [];
  for (let j = 0; j < stems.length; j++) {
    transitions[j] = [];
    for (let k = 0; k < stems.length; k++) {
      transitions[j][k] = fn(stems[j], stems[k]);
    }
  }
  return transitions;
}
function updateProximity(stems, dov, P, F) {
  for (let js = 0; js < stems.length; js++) {
    let promUp = 0;
    let promDown = 0;
    for (let j = 0; j < stems.length; j++) {
      if (dov[j][js]) promUp += P[j][js] + F[j][js];
      if (dov[js][j]) promDown += P[js][j] + F[js][j];
    }
    stems[js].proximityUp = promUp;
    stems[js].proximityDown = promDown;
  }
}
function analyzeStems(glyph, strategy, sa) {
  const radicals = sa.radicals;
  const stems = findStems(radicals, strategy);
  const stemOverlaps = OverlapMatrix(stems, (p, q) => stemOverlapRatio(p, q, Math.min));
  const stemOverlapLengths = OverlapMatrix(
    stems,
    (p, q) => stemOverlapLength(p, q) / strategy.UPM
  );
  const slopeDifference = OverlapMatrix(stems, (p, q) => Math.abs(p.slope - q.slope));
  analyzeStemSpatialRelationships(stems, radicals, stemOverlaps, strategy);
  analyzeEntireContourAboveBelow(glyph, stems);
  const [F, FSig] = analyzeTurns(glyph, strategy, stems);
  const S = analyzeSquash(glyph, strategy, stems);
  const { P, Q } = computePQMatrices(strategy, stems, F);
  const collisionMatrices = computeACSMatrices(strategy, stems, stemOverlapLengths, Q, F, S);
  const dov = analyzeDirectOverlaps(
    stems,
    stemOverlaps,
    collisionMatrices.darkness,
    strategy,
    true
  );
  updateProximity(stems, dov, P, F);
  const collisionMatrices1 = computeACSMatrices(
    strategy,
    stems,
    stemOverlapLengths,
    Q,
    F,
    S,
    dov
  );
  analyzeStemKeyPoints(stems);
  sa.radicals = radicals;
  sa.stems = stems;
  sa.stemOverlaps = stemOverlaps;
  sa.stemOverlapLengths = stemOverlapLengths;
  sa.directOverlaps = dov;
  sa.collisionMatrices.annexation = collisionMatrices1.annexation;
  sa.collisionMatrices.darkness = collisionMatrices1.darkness;
  sa.collisionMatrices.flips = F;
  sa.collisionMatrices.flipsSig = FSig;
  sa.collisionMatrices.proximity = P;
  sa.collisionMatrices.spatialProximity = Q;
  sa.slopeDifference = slopeDifference;
}

// packages/ideograph-shape-analyzer-1/src/hint-analyze/calc-annex.ts
import { Support as Support6 } from "@chlorophytum/arch";
var MergeCalculator = class {
  constructor(m, f, fSig, sa, strategy) {
    this.m = m;
    this.f = f;
    this.fSig = fSig;
    this.sa = sa;
    this.strategy = strategy;
  }
  validRep(j, k, rpm) {
    return rpm[j] && rpm[k] && (rpm[j] > 1 || rpm[k] > 1) && rpm[j] >= rpm[k];
  }
  adjustPDistance(m, pDistance) {
    if (m < this.strategy.COEFF_A_SHAPE_LOST_XX) return pDistance * m;
    else return m;
  }
  adjustedMValue(j, k, rpm) {
    const pDistance = Math.abs(this.sa.stems[j].y - this.sa.stems[k].y) / (this.strategy.UPM * (this.strategy.EmBox.SpurTop - this.strategy.EmBox.SpurBottom));
    if (this.validRep(j, k, rpm)) {
      return Math.min(
        this.adjustPDistance(this.m[j][k], pDistance),
        this.strategy.COEFF_A_SAME_RADICAL
      );
    } else {
      return this.adjustPDistance(this.m[j][k], pDistance);
    }
  }
  getMergePairData(j, k, gapIndex, isRepeat, gaps) {
    const fRepeatGapCenter = this.validRep(j, k, isRepeat);
    const sj = this.sa.stems[k];
    const sk = this.sa.stems[j];
    const fTooFar = 4 * (sj.lowKey.y - sk.highKey.y) >= this.strategy.UPM * (this.strategy.EmBox.SpurTop - this.strategy.EmBox.SpurBottom);
    const sjXMiddle = Support6.mix(sj.xMin, sj.xMax, 0.5);
    const skXMiddle = Support6.mix(sk.xMin, sk.xMax, 0.5);
    const fLowerRepeating = isRepeat[k] && !isRepeat[j];
    const fUpperRepeating = isRepeat[j] && !isRepeat[k];
    const fLowerAtSide = sk.xMax < sjXMiddle || sk.xMin > sjXMiddle;
    const fUpperAtSide = sj.xMax < skXMiddle || sj.xMin > skXMiddle;
    const fUpperShorter = sj.xMax - sj.xMin < sk.xMax - sk.xMin;
    const fMergeDown = fLowerRepeating ? true : fUpperRepeating ? false : fUpperAtSide === fLowerAtSide ? fUpperShorter : fUpperAtSide;
    const fDontMerge = k === j || fTooFar || this.adjustedMValue(k, j, isRepeat) >= this.strategy.COEFF_A_SHAPE_LOST_XX;
    const multiplier = fDontMerge ? 0 : fMergeDown ? -1 : 1;
    gaps.push({
      index: gapIndex,
      sidAbove: k,
      sidBelow: j,
      multiplier,
      order: 0,
      merged: false,
      repeatGapMultiplier: fRepeatGapCenter ? 1 / 256 : 1
    });
  }
  optimizeMergeGaps(isRepeat, gaps) {
    let n = 1 + gaps.length;
    for (; ; ) {
      let mergeGapId = -1;
      let minCost = this.strategy.COEFF_A_SHAPE_LOST_XX;
      for (let j = 0; j < gaps.length; j++) {
        const gap = gaps[j];
        if (!gap.multiplier || gap.merged) continue;
        gap.merged = true;
        let jMin = j, jMax = j;
        while (jMin >= 0 && gaps[jMin].merged) jMin--;
        while (jMax < gaps.length && gaps[jMax].merged) jMax++;
        let cost = 0;
        for (let p = jMin + 1; p < jMax; p++) {
          for (let q = jMin + 1; q <= p; q++) {
            cost += this.adjustedMValue(gaps[p].sidAbove, gaps[q].sidBelow, isRepeat) * Math.max(gaps[p].repeatGapMultiplier, gaps[q].repeatGapMultiplier);
          }
        }
        if (cost < minCost) {
          minCost = cost;
          mergeGapId = j;
        }
        gap.merged = false;
      }
      if (mergeGapId >= 0) {
        gaps[mergeGapId].order = n;
        gaps[mergeGapId].merged = true;
        n--;
      } else {
        return;
      }
    }
  }
  getMergePriority(top, bot, middle, md, sidIsRepeat) {
    const gaps = [];
    this.getMergePairData(bot, middle[0], 0, sidIsRepeat, gaps);
    for (let j = 1; j < middle.length; j++) {
      this.getMergePairData(middle[j - 1], middle[j], j, sidIsRepeat, gaps);
    }
    this.getMergePairData(middle[middle.length - 1], top, middle.length, sidIsRepeat, gaps);
    this.optimizeMergeGaps(sidIsRepeat, gaps);
    return gaps.map((x, j) => x.order * x.multiplier * (md[j] ? 0 : 1));
  }
  getMinGapData(j, k, gaps) {
    gaps.push(
      this.f[j][k] >= 3 || this.f[k][j] >= 3 || this.fSig[j][k] >= 2 || this.fSig[k][j] >= 2 ? 1 : 0
    );
  }
  getMinGap(top, bot, middle) {
    const gaps = [];
    this.getMinGapData(middle[0], bot, gaps);
    for (let j = 1; j < middle.length; j++) {
      this.getMinGapData(middle[j], middle[j - 1], gaps);
    }
    this.getMinGapData(top, middle[middle.length - 1], gaps);
    return gaps;
  }
};

// packages/ideograph-shape-analyzer-1/src/hint-analyze/disjoint-set.ts
var DisjointSet2 = class {
  constructor(size) {
    this.size = size;
    this.store = [];
    for (let j = 0; j < size; j++) this.store[j] = j;
  }
  find(x) {
    let root = x;
    while (root != this.store[root]) root = this.store[root];
    while (this.store[x] !== root) {
      const parent = this.store[x];
      this.store[x] = root;
      x = parent;
    }
    return root;
  }
  *sameSet(x) {
    const root = this.find(x);
    for (let t = 0; t < this.size; t++) if (this.find(t) === root) yield t;
  }
  union(j, k) {
    this.store[j] = k;
  }
};

// packages/ideograph-shape-analyzer-1/src/hint-analyze/type.ts
var HintAnalysis;
((HintAnalysis2) => {
  let DependentHintType;
  ((DependentHintType2) => {
    DependentHintType2[DependentHintType2["Symmetry"] = 0] = "Symmetry";
    DependentHintType2[DependentHintType2["DiagLowToHigh"] = 1] = "DiagLowToHigh";
    DependentHintType2[DependentHintType2["DiagHighToLow"] = 2] = "DiagHighToLow";
  })(DependentHintType = HintAnalysis2.DependentHintType || (HintAnalysis2.DependentHintType = {}));
})(HintAnalysis || (HintAnalysis = {}));

// packages/ideograph-shape-analyzer-1/src/hint-analyze/index.ts
function LP(g, ds, w1, w2, j, cache) {
  if (cache[j]) return cache[j];
  const c = { weight: 0, next: -1 };
  for (let k = j; k-- > 0; ) {
    if (!g[j][k]) continue;
    let deltaWeight = 0;
    const linkedStems = [...ds.sameSet(k)];
    for (const s of linkedStems) deltaWeight += w1[j][s];
    deltaWeight *= linkedStems.length * (1 - w2[j][k]);
    const ck = LP(g, ds, w1, w2, k, cache);
    const newWeight = ck.weight + deltaWeight;
    if (newWeight > c.weight) {
      c.weight = newWeight;
      c.next = k;
    }
  }
  cache[j] = c;
  return c;
}
var HintAnalyzer = class {
  constructor(sa, strategy) {
    this.sa = sa;
    this.strategy = strategy;
    this.lastPathWeight = 0;
    this.loops = 0;
    this.stemMask = [];
    this.dependentSet = new DisjointSet2(sa.stems.length);
    for (let j = 0; j < sa.stems.length; j++) {
      this.stemMask[j] = 0 /* Available */;
    }
  }
  pre(hr) {
    hr.stems = this.sa.stems;
    for (const z of this.sa.blueZone.topZs) {
      hr.blues.push({ top: true, point: z });
    }
    for (const z of this.sa.blueZone.bottomZs) {
      hr.blues.push({ top: false, point: z });
    }
    for (const z of this.sa.nonBlueTopBottom.topZs) {
      hr.blues.push({ top: true, point: z });
    }
    for (const z of this.sa.nonBlueTopBottom.bottomZs) {
      hr.blues.push({ top: false, point: z });
    }
  }
  fetch(hr) {
    this.loops++;
    this.fetchImpl(hr, this.getKeyPath());
  }
  fetchImpl(hr, sidPath) {
    const fr = {
      boundaryBottom: null,
      boundaryTop: null,
      pile: null,
      semiBottom: null,
      semiTop: null,
      dependent: []
    };
    if (!sidPath.length) return;
    const dependents = this.getDependents(sidPath);
    this.removeSidPathLinks(dependents, sidPath);
    const { bot, top, sidPile } = this.getBotTopSid(sidPath);
    if (!this.stemIsValid(bot) || !this.stemIsValid(top) || !sidPile.length) return;
    const sp = {
      ...this.analyzeBottomStemSpatial(fr, bot),
      ...this.analyzeTopStemSpatial(fr, top)
    };
    const { sidPileMiddle, sidIsRepeat } = this.getMiddleStems(sidPile, sp, bot, top);
    if (sidPileMiddle.length) {
      const mc = new MergeCalculator(
        this.sa.collisionMatrices.annexation,
        this.sa.collisionMatrices.flips,
        this.sa.collisionMatrices.flipsSig,
        this.sa,
        this.strategy
      );
      const spMD = mc.getMinGap(top, bot, sidPileMiddle);
      const annex = mc.getMergePriority(top, bot, sidPileMiddle, spMD, sidIsRepeat);
      fr.pile = {
        bot: this.sa.stems[bot],
        middle: sidPileMiddle.map((j) => this.sa.stems[j]),
        top: this.sa.stems[top],
        annex,
        minDist: spMD
      };
    } else if (sp.botIsBoundary && !sp.topIsBoundary && !sp.botAtGlyphBottom) {
      fr.boundaryBottom = null;
      fr.semiBottom = {
        stem: this.sa.stems[bot],
        above: this.sa.stems[top]
      };
    } else if (sp.topIsBoundary && !sp.topAtGlyphTop && !sp.botIsBoundary) {
      fr.boundaryTop = null;
      fr.semiTop = {
        stem: this.sa.stems[top],
        below: this.sa.stems[bot]
      };
    }
    for (const dependent of dependents) {
      fr.dependent.push({
        type: dependent.type,
        belowFrom: this.getStemBelow(bot, sidPile, top, dependent.fromStem),
        from: this.sa.stems[dependent.fromStem],
        aboveFrom: this.getStemAbove(bot, sidPile, top, dependent.fromStem),
        to: this.sa.stems[dependent.toStem]
      });
    }
    hr.fetchResults.push(fr);
    for (const j of sidPath) this.stemMask[j] = 2 /* Hinted */;
  }
  removeSidPathLinks(dependents, sidPath) {
    for (const dependent of dependents) {
      this.dependentSet.union(dependent.toStem, dependent.fromStem);
    }
    for (let m = 1; m < sidPath.length; m++) {
      for (const p of this.dependentSet.sameSet(sidPath[m - 1])) {
        for (const q of this.dependentSet.sameSet(sidPath[m])) {
          this.sa.directOverlaps[p][q] = this.sa.directOverlaps[q][p] = false;
        }
      }
    }
  }
  getBotTopSid(sidPath) {
    let ixTop = 0;
    while (ixTop < sidPath.length && this.stemIsValid(sidPath[ixTop]) && this.stemIsValid(sidPath[ixTop + 1]) && !this.stemIsNotAnalyzed(sidPath[ixTop]) && !this.stemIsNotAnalyzed(sidPath[ixTop + 1])) {
      ixTop++;
    }
    let ixBot = sidPath.length - 1;
    while (ixBot > ixTop && this.stemIsValid(sidPath[ixBot]) && this.stemIsValid(sidPath[ixBot - 1]) && !this.stemIsNotAnalyzed(sidPath[ixBot]) && !this.stemIsNotAnalyzed(sidPath[ixBot - 1])) {
      ixBot--;
    }
    const sidPile = [];
    for (let s = ixTop; s <= ixBot; s++) {
      if (this.stemIsValid(sidPath[s]) && this.stemIsNotAnalyzed(sidPath[s])) {
        sidPile.push(sidPath[s]);
      }
    }
    return { top: sidPath[ixTop], bot: sidPath[ixBot], sidPile: sidPile.reverse() };
  }
  stemIsValid(j) {
    return this.sa.stems[j];
  }
  stemIsNotAnalyzed(j) {
    return this.sa.stems[j] && !this.stemMask[j];
  }
  getKeyPath() {
    const lpCache = this.computeLpCache();
    const path = this.fetchKeyPath(lpCache);
    this.amendKeyPath(path);
    return _3.uniq(path);
  }
  computeLpCache() {
    const lpCache = [];
    for (let j = 0; j < this.sa.stems.length; j++) {
      LP(
        this.sa.directOverlaps,
        this.dependentSet,
        this.sa.stemOverlapLengths,
        this.sa.slopeDifference,
        j,
        lpCache
      );
    }
    return lpCache;
  }
  fetchKeyPath(lpCache) {
    let pathStart = -1;
    this.lastPathWeight = 0;
    for (let j = 0; j < this.sa.stems.length; j++) {
      if (lpCache[j].weight > this.lastPathWeight) {
        this.lastPathWeight = lpCache[j].weight;
        pathStart = j;
      }
    }
    const path = [];
    while (pathStart >= 0) {
      path.push(pathStart);
      if (path.length > 1 && this.stemMask[pathStart]) break;
      const next = lpCache[pathStart].next;
      pathStart = next;
    }
    return path;
  }
  amendKeyPath(path) {
    for (let m = 0; m < path.length; m++) {
      const sm = this.sa.stems[path[m]];
      if (!sm || !sm.rid) continue;
      if (!sm.hasGlyphStemBelow && sm.diagHigh || !sm.hasGlyphStemAbove && sm.diagLow) {
        let opposite = -1;
        for (let j = 0; j < this.sa.stems.length; j++) {
          if (j !== path[m] && this.sa.stems[j].rid === sm.rid) opposite = j;
        }
        if (opposite >= 0 && !this.stemMask[opposite]) path[m] = opposite;
      }
    }
  }
  getMiddleStems(sidPile, sp, bot, top) {
    const repeatPatternsOrig = this.findRepeatPatterns(sidPile);
    const m = this.filterRepeatPatternStemIDs(sidPile, repeatPatternsOrig);
    const sidPileMiddle = [];
    for (let j = 0; j < m.sidPileMiddle.length; j++) {
      const item = m.sidPileMiddle[j];
      if (!sp.botAtGlyphBottom && item === bot) continue;
      if (!sp.topAtGlyphTop && item === top) continue;
      sidPileMiddle.push(item);
    }
    return { sidPileMiddle, sidIsRepeat: m.sidIsRepeat };
  }
  findRepeatPatterns(sidPile) {
    const repeatPatterns = [];
    let patternStart = -1, patternEnd = -1;
    for (let sid = 0; sid < sidPile.length; sid++) {
      if (patternStart < 0) {
        patternStart = patternEnd = sid;
      } else {
        const lastStem = this.sa.stems[sidPile[patternEnd]];
        const currentStem = this.sa.stems[sidPile[sid]];
        if (stemsAreSimilar(this.strategy, lastStem, currentStem)) {
          patternEnd = sid;
        } else {
          this.flushRepeatPattern(repeatPatterns, patternStart, patternEnd);
          patternStart = patternEnd = sid;
        }
      }
    }
    this.flushRepeatPattern(repeatPatterns, patternStart, patternEnd);
    return repeatPatterns;
  }
  flushRepeatPattern(repeatPatterns, patternStart, patternEnd) {
    if (patternEnd <= patternStart) return;
    if (repeatPatterns.length && repeatPatterns[repeatPatterns.length - 1][0] + 1 === patternStart) {
      repeatPatterns[repeatPatterns.length - 1][1] = patternEnd;
    } else {
      repeatPatterns.push([patternStart, patternEnd]);
    }
  }
  filterRepeatPatternStemIDs(sidPile, repeatPatterns) {
    const mask = [];
    for (const [s, e] of repeatPatterns)
      for (let j = s; j <= e; j++) mask[sidPile[j]] = j === s || j === e ? 1 : 2;
    return { sidPileMiddle: sidPile, sidIsRepeat: mask };
  }
  getDependents(path) {
    const dependents = [];
    for (const j of path) {
      if (this.stemMask[j]) continue;
      for (let k = 0; k < this.sa.stems.length; k++) {
        if (this.stemMask[k] || k === j) continue;
        if (this.sa.stems[j].rid && this.sa.stems[j].rid === this.sa.stems[k].rid) {
          if (this.sa.stems[j].diagLow && this.sa.stems[k].diagHigh) {
            this.stemMask[k] = 1 /* Dependent */;
            dependents.push({
              type: HintAnalysis.DependentHintType.DiagLowToHigh,
              fromStem: j,
              toStem: k
            });
            continue;
          }
          if (this.sa.stems[j].diagHigh && this.sa.stems[k].diagLow) {
            this.stemMask[k] = 1 /* Dependent */;
            dependents.push({
              type: HintAnalysis.DependentHintType.DiagHighToLow,
              fromStem: j,
              toStem: k
            });
            continue;
          }
        }
        if (this.sa.symmetry[j][k] || this.sa.symmetry[k][j]) {
          this.stemMask[k] = 1 /* Dependent */;
          dependents.push({
            type: HintAnalysis.DependentHintType.Symmetry,
            fromStem: j,
            toStem: k
          });
          continue;
        }
      }
    }
    return dependents;
  }
  analyzeBottomStemSpatial(fr, bot) {
    let botIsBoundary = false, botAtGlyphBottom = false;
    if (!this.stemMask[bot]) {
      const stem = this.sa.stems[bot];
      this.stemMask[bot] = 2 /* Hinted */;
      botAtGlyphBottom = atGlyphBottom(stem, this.strategy) && !isHangingHookShape(stem, this.strategy);
      fr.boundaryBottom = {
        stem,
        locTop: false,
        atBottom: botAtGlyphBottom,
        atTop: atGlyphTop(stem, this.strategy),
        flipsBelow: stem.turnsBelow,
        flipsAbove: stem.turnsAbove
      };
      botIsBoundary = true;
    }
    return { botAtGlyphBottom, botIsBoundary };
  }
  analyzeTopStemSpatial(fr, top) {
    let topIsBoundary = false, topAtGlyphTop = false;
    if (!this.stemMask[top]) {
      const stem = this.sa.stems[top];
      this.stemMask[top] = 2 /* Hinted */;
      topAtGlyphTop = atGlyphTop(stem, this.strategy);
      fr.boundaryTop = {
        stem,
        locTop: true,
        atBottom: atGlyphBottom(stem, this.strategy),
        atTop: topAtGlyphTop,
        flipsBelow: stem.turnsBelow,
        flipsAbove: stem.turnsAbove
      };
      topIsBoundary = true;
    }
    return { topAtGlyphTop, topIsBoundary };
  }
  getStemBelow(bot, middle, top, j) {
    const c = [bot, ...middle, top];
    const jj = c.indexOf(j);
    if (jj > 0) return this.sa.stems[c[jj - 1]];
    else return null;
  }
  getStemAbove(bot, middle, top, j) {
    const c = [bot, ...middle, top];
    const jj = c.lastIndexOf(j);
    if (jj >= 0 && jj < c.length - 1) return this.sa.stems[c[jj + 1]];
    else return null;
  }
  collectIpSaCalls() {
    const a = [
      ...this.sa.interpolations,
      ...this.sa.shortAbsorptions
    ];
    a.sort((p, q) => q.priority - p.priority);
    return a;
  }
  processFloatingStem(hr, sid) {
    let sidBelow = sid - 1, foundStemBelow = false;
    let sidAbove = sid + 1, foundStemAbove = false;
    while (sidBelow >= 0) {
      if (this.sa.directOverlaps[sid][sidBelow] && this.stemMask[sidBelow]) {
        foundStemBelow = true;
        break;
      }
      sidBelow--;
    }
    while (sidAbove < this.sa.stems.length) {
      if (this.sa.directOverlaps[sidAbove][sid] && this.stemMask[sidAbove]) {
        foundStemAbove = true;
        break;
      }
      sidAbove++;
    }
    if (foundStemBelow && foundStemAbove) this.fetchImpl(hr, [sidBelow, sid, sidAbove]);
  }
  post(hr) {
    for (let j = 0; j < this.sa.stems.length; j++) {
      if (this.stemMask[j]) continue;
      this.processFloatingStem(hr, j);
    }
    for (let j = 0; j < this.sa.stems.length; j++) {
      if (this.stemMask[j]) continue;
      const stem = this.sa.stems[j];
      hr.floatingStems.push({
        stem,
        locTop: !stem.hasGlyphStemAbove,
        atBottom: atGlyphBottom(stem, this.strategy),
        atTop: atGlyphTop(stem, this.strategy),
        flipsBelow: stem.turnsBelow,
        flipsAbove: stem.turnsAbove
      });
    }
    hr.interpolationsAndLinks = this.collectIpSaCalls();
  }
};
function analyzeGlyph(strategy, glyph) {
  const analysis = new ShapeAnalysisResult();
  analysis.radicals = analyzeRadicals(glyph.contours);
  analyzeStems(glyph, strategy, analysis);
  analyzePostStemHints(glyph, strategy, analysis);
  const ha = new HintAnalyzer(analysis, strategy);
  const hr = {
    blues: [],
    stems: [],
    fetchResults: [],
    floatingStems: [],
    interpolationsAndLinks: []
  };
  ha.pre(hr);
  do {
    ha.fetch(hr);
  } while (ha.lastPathWeight && ha.loops < 256);
  ha.post(hr);
  return hr;
}

// packages/ideograph-shape-analyzer-1/src/strategy/index.ts
var PREVENT_ANNEX = 1e12;
var DefaultEmBoxProps = {
  Bottom: -120 / 1e3,
  Top: 880 / 1e3,
  StrokeBottom: (380 - 440) / 1e3,
  StrokeTop: (380 + 440) / 1e3,
  SpurBottom: (380 - 475) / 1e3,
  SpurTop: (380 + 475) / 1e3,
  Left: 0 / 1e3,
  Right: 1e3 / 1e3,
  StrokeLeft: 60 / 1e3,
  StrokeRight: 940 / 1e3,
  SpurLeft: 25 / 1e3,
  SpurRight: 975 / 1e3,
  SmallSizeExpansionRate: 1
};
var DefaultAnalyzerStrategy = {
  // Em-box
  EmBox: DefaultEmBoxProps,
  // Stem identification
  CANONICAL_STEM_WIDTH: 67 / 1e3,
  MAX_STEM_WDTH_X: 1.5,
  ABSORPTION_LIMIT: 120 / 1e3,
  STEM_SIDE_MIN_RISE: 36 / 1e3,
  STEM_SIDE_MIN_DESCENT: 53 / 1e3,
  STEM_CENTER_MIN_RISE: 36 / 1e3,
  STEM_CENTER_MIN_DESCENT: 50 / 1e3,
  STEM_SIDE_MIN_DIST_RISE: 75 / 1e3,
  STEM_SIDE_MIN_DIST_DESCENT: 75 / 1e3,
  // Internal coefficients. Do not touch.
  X_FUZZ: 7 / 1e3,
  Y_FUZZ: 8 / 1e3,
  Y_FUZZ_DIAG: 15 / 1e3,
  SLOPE_FUZZ: 0.2,
  SLOPE_FUZZ_POS: 0.2,
  SLOPE_FUZZ_POST: 0.275,
  SLOPE_FUZZ_NEG: 0.075,
  SLOPE_FUZZ_K: 0.035,
  SLOPE_FUZZ_R: 0.01,
  SLOPE_FUZZ_P: 5e-3,
  COEFF_A_SAME_RADICAL: 4e3,
  COEFF_A_SHAPE_LOST: 25,
  COEFF_A_SHAPE_LOST_B: 100,
  COEFF_A_SHAPE_LOST_XX: PREVENT_ANNEX,
  COEFF_A_SHAPE_LOST_XR: PREVENT_ANNEX,
  COEFF_A_TOP_BOT_MERGED: 3,
  COEFF_A_TOP_BOT_MERGED_SR: 15,
  COEFF_A_FEATURE_LOSS: 1e3,
  COEFF_A_FEATURE_LOSS_XR: 30,
  COEFF_A_RADICAL_MERGE: 2,
  COEFF_A_REPEAT_PATTERN: 65536,
  COEFF_S: 100,
  COEFF_DISTORT: 5,
  COEFF_PROXIMITY_SQUASH_HAPPENED: 3,
  COEFF_TOP_BOT_PROXIMITY: 5,
  COEFF_STRICT_TOP_BOT_PROXIMITY: 30,
  STROKE_SEGMENTS_MIN_OVERLAP: 0.0875,
  COLLISION_MIN_OVERLAP_RATIO: 0.15,
  SIDE_TOUCH_LIMIT: 0.075,
  TOP_BOT_MIN_UNBALANCE_AS_SHAPE_LOSS: 0.25,
  SYMMETRY_TEST_PPEM: 32,
  BOTH_OVERLAP_H: 0.8,
  BOTH_OVERLAP_V: 0.85,
  // Outline dicing control
  DoOutlineDicing: false
};
async function createHintingStrategy(font, partialStrategy) {
  return {
    ...DefaultIdeographHintingParams,
    ...DefaultAnalyzerStrategy,
    ...partialStrategy,
    UPM: font.metadata.upm
  };
}

// packages/ideograph-shape-analyzer-1/src/index.ts
var packageJson = { name: "@chlorophytum/ideograph-shape-analyzer-1", version: "0.50.1" };
var ModelVersionPrefix = packageJson.name + "@" + packageJson.version;
var IdeographShapeAnalyzer1 = {
  getGlyphHash(glyph, params) {
    return combineHash(ModelVersionPrefix, JSON.stringify(params), hashGlyphContours(glyph));
  },
  analyzeGlyph,
  createGlyph,
  createHintingStrategy,
  fetchGeometry
};

// packages/ideograph-hint-generator-1/src/glyph-back-end.ts
function ref(z) {
  const r = z.queryReference();
  if (!r) throw new Error("Unable to reference point: " + util2.inspect(z));
  return r;
}
var GlyphHintGenBackEnd = class {
  constructor(params) {
    this.params = params;
    this.blueHints = [];
    this.boundaryStemsBottom = [];
    this.boundaryStemsTop = [];
    this.boundaryHintsFree = [];
    this.subHints = [];
  }
  process(ar) {
    this.pass1(ar);
    return this.pass2();
  }
  pass1(ar) {
    for (const blue of ar.blues) this.addBlue(blue);
    for (const fr of ar.fetchResults) {
      if (fr.boundaryBottom) this.addBoundaryStem(fr.boundaryBottom);
      if (fr.boundaryTop) this.addBoundaryStem(fr.boundaryTop);
      if (fr.pile) this.addStemPileHint(fr.pile);
      if (fr.semiBottom) this.addBottomSemiBoundaryStem(fr.semiBottom);
      if (fr.semiTop) this.addTopSemiBoundaryStem(fr.semiTop);
      for (const dependent of fr.dependent) this.addDependentHint(dependent);
    }
    for (const fs of ar.floatingStems) this.addBoundaryStem(fs);
    for (const s of ar.stems) this.addStemEdgeAlign(s);
    for (const link of ar.interpolationsAndLinks) this.addInterpolateOrLink(link);
  }
  pass2() {
    return new Sequence.Hint([
      WithDirection.Y(
        new Sequence.Hint([
          new UseEmBox.Hint(
            this.params.groupName,
            new Sequence.Hint([
              ...this.blueHints,
              ...this.convertBoundaryStemHints(),
              ...this.boundaryHintsFree,
              ...this.subHints
            ])
          )
        ])
      ),
      new Smooth.Hint()
    ]);
  }
  addBlue(blue) {
    this.blueHints.push(new EmBoxEdge.Hint(this.params.groupName, blue.top, ref(blue.point)));
  }
  addInterpolateOrLink(fn) {
    this.subHints.push(
      fn.ref2 ? new Interpolate.Hint(ref(fn.ref1), ref(fn.ref2), [ref(fn.subject)]) : new LinkChain.Hint([ref(fn.ref1), ref(fn.subject)])
    );
  }
  addBoundaryStem(boundary) {
    if (boundary.atBottom) {
      this.boundaryStemsBottom.push(boundary.stem);
    } else if (boundary.atTop) {
      this.boundaryStemsTop.push(boundary.stem);
    } else {
      this.boundaryHintsFree.push(
        new EmBoxStroke.Hint(this.params.groupName, {
          atTop: boundary.locTop,
          spur: true,
          zsBot: ref(boundary.stem.lowKey),
          zsTop: ref(boundary.stem.highKey),
          leavePixelsAbove: 1,
          // Ignore on purpose for diagonal dots, etc.
          leavePixelsBelow: Math.max(1, Math.min(2, boundary.flipsBelow))
        })
      );
    }
  }
  addTopSemiBoundaryStem(boundary) {
    this.subHints.push(
      new MultiStrokeHint.Hint({
        emBoxName: this.params.groupName,
        gapMinDist: [1, boundary.stem.turnsAbove > 1 ? 2 : 1],
        inkMinDist: [1],
        mergePriority: [0, 0],
        allowCollide: [false, false],
        topPoint: null,
        middleStrokes: [[ref(boundary.stem.lowKey), ref(boundary.stem.highKey)]],
        bottomPoint: ref(boundary.below.highKey)
      })
    );
  }
  addBottomSemiBoundaryStem(boundary) {
    this.subHints.push(
      new MultiStrokeHint.Hint({
        emBoxName: this.params.groupName,
        gapMinDist: [boundary.stem.turnsBelow > 1 ? 2 : 1, 1],
        inkMinDist: [1],
        mergePriority: [0, 0],
        allowCollide: [false, false],
        topPoint: ref(boundary.above.lowKey),
        middleStrokes: [[ref(boundary.stem.lowKey), ref(boundary.stem.highKey)]],
        bottomPoint: null
      })
    );
  }
  tbCollidable(top, s) {
    if (!top || top === s) return false;
    return s.xMin > Support7.mix(top.xMin, top.xMax, 1 / 10) && s.xMax < Support7.mix(top.xMin, top.xMax, 1 - 1 / 10);
  }
  addStemPileHint(pile) {
    if (!pile.middle.length) return;
    const botSame = pile.bot === pile.middle[0];
    const topSame = pile.top === pile.middle[pile.middle.length - 1];
    const zBot = !pile.bot ? null : botSame ? ref(pile.bot.lowKey) : ref(pile.bot.highKey);
    const zTop = !pile.top ? null : topSame ? ref(pile.top.highKey) : ref(pile.top.lowKey);
    const inkMD = Array(pile.middle.length).fill(1);
    const gapMD = pile.minDist.map((t) => t ? 2 : 1);
    const allowCollide = pile.annex.map((a) => true);
    if (botSame) gapMD[0] = 0;
    if (!this.tbCollidable(pile.bot, pile.middle[0])) {
      allowCollide[0] = false;
    }
    if (topSame) gapMD[pile.middle.length] = 0;
    if (!this.tbCollidable(pile.top, pile.middle[pile.middle.length - 1])) {
      allowCollide[pile.middle.length] = false;
    }
    this.subHints.push(
      new MultiStrokeHint.Hint({
        emBoxName: this.params.groupName,
        gapMinDist: gapMD,
        inkMinDist: inkMD,
        bottomBalanceForbidden: botSame,
        topBalanceForbidden: topSame,
        mergePriority: pile.annex,
        allowCollide,
        bottomPoint: zBot,
        topPoint: zTop,
        middleStrokes: pile.middle.map((s) => [ref(s.lowKey), ref(s.highKey)])
      })
    );
  }
  addDependentHint(dependent) {
    if (dependent.type === HintAnalysis.DependentHintType.DiagHighToLow) {
      this.subHints.push(
        new MultiStrokeHint.Hint({
          giveUpMode: 1,
          // high to low
          emBoxName: this.params.groupName,
          gapMinDist: [1, 3 / 4],
          inkMinDist: [1],
          mergePriority: [0, 1],
          allowCollide: [false, true],
          bottomPoint: dependent.belowFrom ? ref(dependent.belowFrom.highKey) : null,
          middleStrokes: [[ref(dependent.to.lowKey), ref(dependent.to.highKey)]],
          topPoint: ref(dependent.from.highKey)
        })
      );
    } else if (dependent.type === HintAnalysis.DependentHintType.DiagLowToHigh) {
      this.subHints.push(
        new MultiStrokeHint.Hint({
          giveUpMode: -1,
          // low to high
          emBoxName: this.params.groupName,
          gapMinDist: [3 / 4, 1],
          inkMinDist: [1],
          mergePriority: [-1, 0],
          allowCollide: [true, false],
          bottomPoint: ref(dependent.from.lowKey),
          middleStrokes: [[ref(dependent.to.lowKey), ref(dependent.to.highKey)]],
          topPoint: dependent.aboveFrom ? ref(dependent.aboveFrom.lowKey) : null
        })
      );
    } else {
      this.subHints.push(
        new LinkChain.Hint([ref(dependent.from.lowKey), ref(dependent.to.lowKey)])
      );
      this.subHints.push(
        new LinkChain.Hint([ref(dependent.from.highKey), ref(dependent.to.highKey)])
      );
    }
  }
  addStemEdgeAlign(stem) {
    if (stem.highAlign.length) {
      this.subHints.push(
        new LinkChain.Hint([ref(stem.highKey), ...stem.highAlign.map((z) => ref(z))])
      );
    }
    if (stem.lowAlign.length) {
      this.subHints.push(
        new LinkChain.Hint([ref(stem.lowKey), ...stem.lowAlign.map((z) => ref(z))])
      );
    }
  }
  convertBoundaryStemHints() {
    const hints = [];
    const bot = this.boundaryStemsBottom.sort((a, b) => a.lowKey.y - b.lowKey.y);
    const top = this.boundaryStemsTop.sort((a, b) => b.lowKey.y - a.lowKey.y);
    if (bot.length) {
      hints.push(
        new EmBoxStroke.Hint(this.params.groupName, {
          atTop: false,
          spur: false,
          zsBot: ref(bot[0].lowKey),
          zsTop: ref(bot[0].highKey),
          leavePixelsAbove: 0,
          leavePixelsBelow: 0
        })
      );
      for (let k = 1; k < bot.length; k++) {
        hints.push(
          new MultiStrokeHint.Hint({
            emBoxName: this.params.groupName,
            gapMinDist: [3 / 4, 1],
            inkMinDist: [1],
            bottomBalanceForbidden: true,
            mergePriority: [-1, 0],
            allowCollide: [true, false],
            bottomPoint: ref(bot[0].lowKey),
            middleStrokes: [[ref(bot[k].lowKey), ref(bot[k].highKey)]],
            topPoint: null
          })
        );
      }
    }
    if (top.length) {
      hints.push(
        new EmBoxStroke.Hint(this.params.groupName, {
          atTop: true,
          spur: false,
          zsBot: ref(top[0].lowKey),
          zsTop: ref(top[0].highKey),
          leavePixelsAbove: 0,
          leavePixelsBelow: 0
        })
      );
      for (let k = 1; k < top.length; k++) {
        hints.push(
          new MultiStrokeHint.Hint({
            emBoxName: this.params.groupName,
            gapMinDist: [1, 3 / 4],
            inkMinDist: [1],
            topBalanceForbidden: true,
            mergePriority: [0, 1],
            allowCollide: [false, true],
            bottomPoint: null,
            middleStrokes: [[ref(top[k].lowKey), ref(top[k].highKey)]],
            topPoint: ref(top[0].highKey)
          })
        );
      }
    }
    return hints;
  }
};

// packages/ideograph-hint-generator-1/src/shared-hints.ts
import { Sequence as Sequence2, WithDirection as WithDirection2 } from "@chlorophytum/hint-common";
function generateSharedHints(params) {
  return new Sequence2.Hint([
    WithDirection2.Y(
      new EmBoxShared.Hint({
        name: params.groupName,
        strokeBottom: params.UPM * params.EmBox.StrokeBottom,
        strokeTop: params.UPM * params.EmBox.StrokeTop,
        spurBottom: params.UPM * params.EmBox.SpurBottom,
        spurTop: params.UPM * params.EmBox.SpurTop,
        smallSizeExpansionRate: params.EmBox.SmallSizeExpansionRate || 0
      })
    ),
    WithDirection2.X(
      new EmBoxShared.HintH({
        name: params.groupName,
        strokeLeft: params.UPM * params.EmBox.StrokeLeft,
        strokeRight: params.UPM * params.EmBox.StrokeRight,
        spurLeft: params.UPM * params.EmBox.SpurLeft,
        spurRight: params.UPM * params.EmBox.SpurRight,
        smallSizeExpansionRate: params.EmBox.SmallSizeExpansionRate || 0
      })
    )
  ]);
}

// packages/ideograph-hint-generator-1/src/index.ts
var IdeographHintGenerator1 = {
  generateGlyphHints(params, glyph, analysis) {
    const sink = new GlyphHintGenBackEnd(params);
    return sink.process(analysis);
  },
  generateSharedHints,
  factoriesOfUsedHints: [
    new Sequence3.Factory(),
    new WithDirection3.HintFactory(),
    new MultiStrokeHint.HintFactory(),
    new LinkChain2.HintFactory(),
    new Interpolate2.HintFactory(),
    new EmBoxStroke.HintFactory(),
    new EmBoxEdge.HintFactory(),
    new UseEmBox.HintFactory(),
    new EmBoxShared.HintFactory(),
    new MultiStrokeHint.HintHFactory(),
    new EmBoxStroke.HintHFactory(),
    new EmBoxEdge.HintHFactory(),
    new EmBoxShared.HintHFactory(),
    new Smooth2.HintFactory()
  ]
};

// packages/hm-ideograph/src/model/constants.ts
var HintModelPrefix = "@chlorophytum/hm-ideograph::IdeographHintingModel1";
var ParallelTaskType = `${HintModelPrefix}::ParallelTask`;

// packages/hm-ideograph/src/model/glyph-hint.ts
var GlyphHintTask = class {
  constructor(font, analyzer, codeGen, params, ee, gid) {
    this.font = font;
    this.analyzer = analyzer;
    this.codeGen = codeGen;
    this.params = params;
    this.ee = ee;
    this.gid = gid;
  }
  async getGlyphCacheKey(shape) {
    const cGlyph = this.analyzer.createGlyph(shape.eigen, this.params);
    return this.analyzer.getGlyphHash(cGlyph, this.params);
  }
  async execute(arb) {
    const gn = await this.font.getUniqueGlyphName(this.gid);
    if (!gn) return;
    const shape = await this.analyzer.fetchGeometry(this.font, this.params, this.gid);
    const ck = await this.getGlyphCacheKey(shape);
    const cached = !ck ? null : this.ee.cacheManager.getCache(ck);
    if (cached) {
      await this.ee.hintStore.setGlyphHints(gn, cached);
    } else {
      await this.executeImpl(arb, gn, ck, shape);
    }
  }
  async executeImpl(arb, gn, ck, shape) {
    let hints = null;
    const pct = new ParallelGlyphHintCoTask(this.font, this.ee, this.params, gn, shape);
    const runPct = arb.runParallelCoTask(pct);
    if (runPct) {
      hints = await runPct;
    } else {
      const pt = new ParallelGlyphHintTask(this.analyzer, this.codeGen, this.params, shape);
      hints = await pt.executeImpl();
    }
    if (!hints) return;
    if (ck) this.ee.cacheManager.setCache(ck, hints);
    await this.ee.hintStore.setGlyphHints(gn, hints);
  }
  async tryGetDifficulty() {
    const geometry = await this.analyzer.fetchGeometry(this.font, this.params, this.gid);
    let d = 0;
    for (const c of geometry.eigen) d += c.length;
    return d;
  }
};
var ParallelGlyphHintCoTask = class {
  constructor(font, ee, params, gn, shape) {
    this.font = font;
    this.ee = ee;
    this.params = params;
    this.gn = gn;
    this.shape = shape;
    this.taskType = ParallelTaskType;
  }
  async getArgRep() {
    return {
      gn: this.gn,
      fmd: this.font.metadata,
      params: this.params,
      shape: this.shape
    };
  }
  async getResult(rep) {
    return this.ee.hintFactory.readJson(rep.hints, this.ee.hintFactory);
  }
};
var ParallelGlyphHintTask = class {
  constructor(analyzer, codeGen, params, shape) {
    this.analyzer = analyzer;
    this.codeGen = codeGen;
    this.params = params;
    this.shape = shape;
    this.type = ParallelTaskType;
  }
  async execute() {
    const hints = await this.executeImpl();
    return { hints: hints.toJSON() };
  }
  async executeImpl() {
    return this.hintGlyphGeometry(this.shape, this.params);
  }
  async hintGlyphGeometry(geometry, params) {
    const glyph = this.analyzer.createGlyph(geometry.eigen, params);
    const analysis = this.analyzer.analyzeGlyph(params, glyph);
    return this.codeGen.generateGlyphHints(params, glyph, analysis);
  }
};

// packages/hm-ideograph/src/model/shared-hint.ts
var SharedHintTask = class {
  constructor(codeGen, params, ee) {
    this.codeGen = codeGen;
    this.params = params;
    this.ee = ee;
  }
  async execute() {
    await this.ee.hintStore.setSharedHints(
      `${HintModelPrefix}::SharedHint{${this.params.groupName || ""}}`,
      this.codeGen.generateSharedHints(this.params)
    );
  }
};

// packages/hm-ideograph/src/model/index.ts
var IdeographHintingTask = class {
  constructor(font, analyzer, codeGen, ptParams, ee) {
    this.font = font;
    this.analyzer = analyzer;
    this.codeGen = codeGen;
    this.ptParams = ptParams;
    this.ee = ee;
    this.m_params = null;
  }
  async getParams() {
    if (!this.m_params) {
      this.m_params = await this.analyzer.createHintingStrategy(this.font, this.ptParams);
    }
    return this.m_params;
  }
  async execute(arb) {
    const params = await this.getParams();
    const entries = await this.font.getEntries();
    const glyphs = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const gs = new Set(await entry.getGlyphSet());
      for (const g of gs) glyphs.add(g);
    }
    const perGlyphHinting = Array.from(glyphs).map(
      (gid) => arb.demand(
        new GlyphHintTask(this.font, this.analyzer, this.codeGen, params, this.ee, gid)
      )
    );
    await Promise.all(perGlyphHinting);
    await arb.demand(new SharedHintTask(this.codeGen, params, this.ee));
  }
};

// packages/hm-ideograph/src/model/dummy.ts
var DummyTask = class {
  constructor() {
  }
  async execute(arb) {
  }
};

// packages/hm-ideograph/src/plugin/index.ts
var IdeographHintingModel1 = class {
  constructor(font, ptParams) {
    this.font = font;
    this.ptParams = ptParams;
    this.type = HintModelPrefix;
    this.allowParallel = false;
  }
  getHintingTask(ee) {
    return new IdeographHintingTask(
      this.font,
      IdeographShapeAnalyzer1,
      IdeographHintGenerator1,
      this.ptParams,
      ee
    );
  }
  getPreTask(ee) {
    return new DummyTask();
  }
};
var CIdeographHintingPass1 = class {
  constructor(parameters) {
    this.parameters = parameters;
    this.requirePreHintRounds = 0;
    this.factoriesOfUsedHints = IdeographHintGenerator1.factoriesOfUsedHints;
  }
  // No pre-analysis is needed
  adopt(font) {
    return new IdeographHintingModel1(font, this.parameters);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createParallelTask(type, _rep) {
    if (type === ParallelTaskType) {
      const rep = _rep;
      return new ParallelGlyphHintTask(
        IdeographShapeAnalyzer1,
        IdeographHintGenerator1,
        rep.params,
        rep.shape
      );
    }
    return null;
  }
};
var CIdeographHintingPlugin1 = class {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async load(loader, parameters) {
    return new CIdeographHintingPass1(parameters);
  }
};
var IdeographHintingModelFactory1 = new CIdeographHintingPlugin1();
var plugin_default = IdeographHintingModelFactory1;

// packages/hm-ideograph/src/index.ts
var HintingModelPlugin = plugin_default;

// index.ts
var index_default = HintingModelPlugin;
export {
  HintingModelPlugin,
  index_default as default
};
