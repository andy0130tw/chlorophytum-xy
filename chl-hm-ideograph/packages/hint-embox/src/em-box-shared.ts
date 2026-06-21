import {
	IFinalHintProgramSink,
	IHint,
	IHintCompiler,
	IHintFactory,
	PropertyBag
} from "@chlorophytum/arch";
import { HlttProgramSink } from "@chlorophytum/final-hint-format-hltt";
import { Miap } from "@chlorophytum/hltt-next-stmt";

import { PREFIX } from "./constants";
import { TInitEmBoxTwilightPoints } from "./programs/init";
import { ControlValues, Twilights } from "./programs/twilight";

export namespace EmBoxShared {
	export interface EmBoxProps {
		name: string;
		strokeBottom: number;
		strokeTop: number;
		spurBottom: number;
		spurTop: number;
		smallSizeExpansionRate: number;
	}
	const TAG = `${PREFIX}::Hints::Shared`;
	export class Hint implements IHint {
		constructor(private readonly props: EmBoxProps) {}
		public toJSON() {
			return {
				type: TAG,
				props: this.props
			};
		}
		public createCompiler(bag: PropertyBag, sink: IFinalHintProgramSink): IHintCompiler | null {
			const hlttSink = sink.dynamicCast(HlttProgramSink);
			if (hlttSink) return new HlttCompiler(hlttSink, this.props);
			return null;
		}
		public traverse() {}
	}

	export class HintFactory implements IHintFactory {
		public readonly type = TAG;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public readJson(json: any) {
			if (json && json.type === TAG) {
				return new Hint(json.props);
			}
			return null;
		}
	}

	class HlttCompiler implements IHintCompiler {
		constructor(
			private readonly sink: HlttProgramSink,
			private readonly props: EmBoxProps
		) {}
		public doCompile() {
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

	////////////////////////////////////////////////////////////////////////////////////////////////

	export interface EmBoxHProps {
		name: string;
		strokeLeft: number;
		strokeRight: number;
		spurLeft: number;
		spurRight: number;
		smallSizeExpansionRate: number;
	}

	const TAGH = `${PREFIX}::Hints::SharedH`;

	export class HintH implements IHint {
		constructor(private readonly props: EmBoxHProps) {}
		public toJSON() {
			return {
				type: TAGH,
				props: this.props
			};
		}
		public createCompiler(bag: PropertyBag, sink: IFinalHintProgramSink): IHintCompiler | null {
			const hlttSink = sink.dynamicCast(HlttProgramSink);
			if (hlttSink) return new HlttCompilerH(hlttSink, this.props);
			return null;
		}
		public traverse() {}
	}


	export class HintHFactory implements IHintFactory {
		public readonly type = TAGH;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public readJson(json: any) {
			if (json && json.type === TAGH) {
				return new HintH(json.props);
			}
			return null;
		}
	}


	class HlttCompilerH implements IHintCompiler {
		constructor(
			private readonly sink: HlttProgramSink,
			private readonly props: EmBoxHProps
		) {}
		public doCompile() {
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
}
