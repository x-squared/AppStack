#!/usr/bin/env bash
set -euo pipefail

python3 ../AppModules/AppI18n/scripts/check_translation_ownership.py \
  --file ./frontend/src/i18n/translations.base.json \
  --forbid-prefix devForum \
  --forbid-prefix patients \
  --forbid-prefix donors \
  --forbid-prefix colloquiums \
  --forbid-prefix coordinations
