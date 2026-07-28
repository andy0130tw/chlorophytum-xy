import {
	CGlyph,
	combineHash,
	hashGlyphContours,
	IShapeAnalyzer
} from "@chlorophytum/ideograph-shape-analyzer-shared";

import { createGlyph, fetchGeometry } from "./geometry-intro/create-glyph";
import analyzeGlyph from "./hint-analyze";
import { HintAnalysis } from "./hint-analyze/type";
import { createHintingStrategy, type HintingStrategy } from "./strategy";

export { HintAnalysis } from "./hint-analyze/type";
export { createHintingStrategy, type HintingStrategy } from "./strategy";
export { default as Stem } from "./types/stem";

// const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));
const packageJson = { name: "@chlorophytum/ideograph-shape-analyzer-1", version: "0.50.1" };
export const ModelVersionPrefix = packageJson.name + "@" + packageJson.version;

export type IdeographShapeAnalyzer = IShapeAnalyzer<HintingStrategy, CGlyph, HintAnalysis.Result>;
export const IdeographShapeAnalyzer1: IdeographShapeAnalyzer = {
	getGlyphHash(glyph, params) {
		return combineHash(ModelVersionPrefix, JSON.stringify(params), hashGlyphContours(glyph));
	},
	analyzeGlyph,
	createGlyph,
	createHintingStrategy,
	fetchGeometry
};
