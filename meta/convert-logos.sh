#!/usr/bin/env bash
set -e

mkdir out
for file in gemeenten-logos-larger/*.png; do
  echo ""
  echo "Processing $(basename "$file")..."
  convert "$file" -resize 100x75\> "out/$(basename "$file")"
  pngcrush -q -ow "out/$(basename "$file")"
done