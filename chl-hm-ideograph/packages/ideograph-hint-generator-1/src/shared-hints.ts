import { Sequence, WithDirection } from "@chlorophytum/hint-common";
import { EmBoxShared } from "@chlorophytum/hint-embox";
import { HintingStrategy } from "@chlorophytum/ideograph-shape-analyzer-1";

export function generateSharedHints(params: HintingStrategy) {
	return new Sequence.Hint([
		WithDirection.Y(
			new EmBoxShared.Hint({
				name: params.groupName,
				strokeBottom: params.UPM * params.EmBox.StrokeBottom,
				strokeTop: params.UPM * params.EmBox.StrokeTop,
				spurBottom: params.UPM * params.EmBox.SpurBottom,
				spurTop: params.UPM * params.EmBox.SpurTop,
				smallSizeExpansionRate: params.EmBox.SmallSizeExpansionRate || 0
			})
		),
		WithDirection.X(
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
