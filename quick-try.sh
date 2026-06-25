#!/bin/bash -ex

FONT=sources/shs/SourceHanSansTW-Light.subset.ttf

node ./chl hint --config hcfg/Light.json "$FONT" hint-upright.gz
node ./chl hint --config hcfg/LightR.json rotated.ttf hint-rotated.gz
node ./combine-hints.js > hint-combined
gzip -q hint-combined
node ./chl instruct --config hcfg/Light.json "$FONT" hint-combined.gz combine-hinted.ttf
