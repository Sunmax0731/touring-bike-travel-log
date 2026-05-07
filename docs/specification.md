# 仕様

## プロダクト範囲

- Domain: AndroidApp
- Repository: touring-bike-travel-log
- 主な公開先: Google Play
- Surface: Android travel log product core + mobile preview

## 入力データ

必須項目:

- `id`
- `title`
- `tripDate`
- `routeName`
- `maintenanceStatus`
- `owner`

推奨項目:

- `nextChecklist`

## 判定

- 必須項目不足は `failed`。
- 推奨項目不足、`waiting`、`blocked`、`riskLevel=high` は `warning`。
- エラーも警告もない場合は `passed`。
