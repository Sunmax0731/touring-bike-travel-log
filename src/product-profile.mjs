export const productProfile = {
  "repository": "touring-bike-travel-log",
  "title": "ツーリング・バイク・旅行ログ",
  "domain": "AndroidApp",
  "hostApp": null,
  "rank": 84,
  "tier": "P2",
  "ideaNo": 4,
  "overview": "散歩、徒歩圏、ツーリング、旅行、持ち物、郵便、給油、整備、点検メモを位置と日付でまとめる。",
  "problem": "移動の記録、整備履歴、旅行準備が分散し、次回の準備や点検に使いにくい。",
  "differentiation": "バイクや外出の前後で必要な準備、記録、整備メモを1つのログにする。",
  "publish": "Google Play",
  "surface": "Android travel log product core + mobile preview",
  "entity": "touring log item",
  "requiredFields": [
    "id",
    "title",
    "tripDate",
    "routeName",
    "maintenanceStatus",
    "owner"
  ],
  "warningField": "nextChecklist",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
