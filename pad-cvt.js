import { readFont, writeFont } from './make/helpers/font-io.mjs'

if (process.argv.length != 5) {
  console.log(`Usage: ${process.argv[1]} <FONT-IN> <FONT-OUT> <PAD-TO>`);
  process.exit(1);
}

const main = await readFont(process.argv[2]);
if (!padCvtToAppeaseFreetype(main, Number.parseInt(process.argv[4]))) {
  process.exit(1);
}
await writeFont(process.argv[3], main);

// taken from the pass2 of Sarasa-Gothic, originally at make/pass2/index.mjs
// FYI: FreeType has placed some hidden limit in the byte code interpreter that can refuse to process your font correctly. See ttinterp.c.
//      As of v2.14.3, most can be worked around by padding CVT with zeros.
//  * num_twilight_points = FT_MAX(30, 2 * ( n_points + cvtSize ))
//  * loopcall_counter_max = min(
//                             FT_MAX(50, 50 * exec->pts.n_points ) +
//                               FT_MAX(50, cvtSize / 10),
//                             100 * num_glyphs)

function padCvtToAppeaseFreetype(font, padTo) {
    if (!font.cvt) {
      console.log('The font has no CVT info.');
      return false;
    }
    console.log('cvt size:', font.cvt.items.length, 'pad to:', padTo);
    if (font.cvt.items.length > padTo) {
      console.log('CVT size is sufficient, skip padding');
      return true;
    }
    while (font.cvt.items.length < padTo) {
        font.cvt.items.push(0);
    }
    return true;
}
