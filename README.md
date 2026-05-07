# ツーリング・バイク・旅行ログ

散歩、徒歩圏、ツーリング、旅行、持ち物、郵便、給油、整備、点検メモを位置と日付でまとめる。

| 項目 | 内容 |
| --- | --- |
| Rank | 84 |
| Domain | AndroidApp |
| Idea No. | 4 |
| Repository | touring-bike-travel-log |
| 主な公開先 | Google Play |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: QCDS / 手動レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/app-adapter.mjs`: Android travel log product core + mobile preview 向けの表示状態を作る。
- `src/cli.mjs`: CLI。
- `public/`: closed alpha preview 用の静的 UI。

## Validation

```powershell
npm test
npm start
```

`npm test` で代表シナリオ、QCDS、docs ZIP、静的UI smoke、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
