# 許晉豪個人作品集

這是一個以 HTML、CSS 與 JavaScript 製作的單頁式個人作品集網站。網站集中展示個人簡介、工作與學歷經歷、專業工具、網頁／Logo／影像作品，以及對應的外部作品連結。

本專案沒有後端、資料庫、套件管理檔或建置程序；瀏覽器直接載入 `index.html` 即可執行。

## 網站結構與運作流程

```text
瀏覽器開啟 index.html
  ├─ 載入外部 CDN：Font Awesome、Google Fonts、jQuery、Bootstrap、jQuery Easing
  ├─ 載入 css/styles.css：Bootstrap 4.5 基礎樣式與 Resume 主題版面
  ├─ 載入 assets/：個人照、技能圖示、Logo、PDF 與作品圖片
  ├─ 渲染單頁內容區塊
  │   ├─ 關於我、經歷、學歷、專業能力、興趣
  │   └─ 網頁設計、Logo 設計、影像設計
  └─ 載入 js/scripts.js
      ├─ 導覽列錨點平滑捲動
      ├─ 手機版點擊選單後自動收合
      └─ 依目前捲動位置標示導覽列項目
```

桌面寬度（`>= 992px`）時，左側導覽列固定為寬度 17rem 的側欄，內容位於右側；較小螢幕時，導覽列改為上方的可收合選單。各導覽連結指向同一頁面的 section `id`，由 JavaScript 產生平滑捲動效果。

## 如何在本機瀏覽

最簡單方式是直接以瀏覽器開啟 [index.html](index.html)。如需以本機 HTTP 伺服器檢查 iframe、外部資源與路徑，可在專案根目錄執行：

```bash
python3 -m http.server 8000
```

再開啟 <http://localhost:8000>。

此專案依賴 CDN 提供的字型與 JavaScript；離線瀏覽時，Font Awesome 圖示、Google Fonts、Bootstrap／jQuery 相關互動可能無法正常載入。

## 主要檔案

| 路徑 | 內容與職責 |
| --- | --- |
| [index.html](index.html) | 網站唯一入口。定義導覽列、履歷內容與作品展示卡片；並引入所有外部 CDN 與本地 CSS、JS。 |
| [css/styles.css](css/styles.css) | Start Bootstrap Resume v6.0.0 主題樣式。前段包含 Bootstrap 4.5 編譯樣式，檔案末段定義本網站使用的側欄、內容留白、社群按鈕、技能圖示與響應式規則。 |
| [js/scripts.js](js/scripts.js) | 以 jQuery 實作錨點平滑捲動、行動版導覽選單收合，以及 Bootstrap Scrollspy 導覽狀態。 |
| [assets/img/profile.jpg](assets/img/profile.jpg) | 左側導覽列的個人頭像。 |
| [assets/img/favicon.ico](assets/img/favicon.ico) | 瀏覽器分頁圖示。 |
| [assets/img/webdesign/](assets/img/webdesign) | 網頁設計作品圖片。目前 `GM_index.png` 已納入版本控制，但尚未由 `index.html` 使用。 |
| [assets/img/logo/](assets/img/logo) | Logo 作品 PNG 與識別系統 PDF；其中兩份 PDF 以 iframe 嵌入 Logo 區塊的桌面版面。 |
| [assets/img/adobeicon/](assets/img/adobeicon) | Adobe 工具圖示。HTML 目前使用 SVG，對應 PNG 則保留於專案中。 |
| [assets/img/microsoft/](assets/img/microsoft) | Word、PowerPoint、Excel 的 SVG 圖示。 |
| [assets/img/software/](assets/img/software) | Figma 與 Sony Vegas 的 SVG 圖示。 |

## `index.html` 內容對照

| Section ID | 導覽名稱 | 顯示內容 |
| --- | --- | --- |
| `about` | 關於我 | 姓名、聯絡方式、自我介紹與 LinkedIn／Twitter／Facebook 連結。 |
| `experience` | 經歷 | 翔濬科技、TEDxTainan、成大火舞藝術社等經驗。 |
| `education` | 學歷 | 崑山科技大學與長榮高級中學的學歷與技能說明。 |
| `skills` | 專業能力 | 程式／工具圖示、Adobe、Microsoft、其他軟體及能力清單。 |
| `interests` | 興趣 | 攝影、雜耍表演、活動籌辦與自學技術的文字介紹。 |
| `webdesign` | 作品導覽 - 網頁設計 | GatherMaster iframe 預覽、服務介紹與外部網站連結。 |
| `Logo` | 作品總覽 - Logo 設計 | 川泉與 XI TEA 的識別 PDF，以及 SafeMate、StorageMaster、XI POP、練習作品卡片。 |
| `Video` | 作品總覽 - 影像製作 | 四支 YouTube 嵌入影片、作品說明與外部影片連結。 |

## 外部相依項目

`index.html` 透過 CDN 載入下列前端資源：

- Font Awesome 5.13.0：社群與技能圖示。
- Google Fonts：`Saira Extra Condensed`、`Muli`。
- jQuery 3.5.1：`js/scripts.js` 的互動基礎。
- Bootstrap 4.5.0 bundle：導覽列收合、Scrollspy 與版面元件。
- jQuery Easing 1.4.1：平滑捲動的 `easeInOutExpo` 動畫。

作品區亦會向 GatherMaster、YouTube 與社群平台請求嵌入或連結內容；這些第三方內容的可用性不由本專案控制。

## 維護方式

### 更新文字與作品

直接編輯 [index.html](index.html)：

- 調整導覽項目時，同步確認連結的 `href="#..."` 和目標 section 的 `id` 一致。
- 新增作品時，沿用既有 Bootstrap card／`d-md-flex` 結構；將本機圖片放入語意相符的 `assets/img/` 子資料夾。
- 更換 Logo PDF 時，保留含空白與中文檔名的相對路徑寫法，或一併更新 iframe 的 `src`。
- 若加入社群連結，使用完整 `https://` URL；目前 email 連結未使用 `mailto:` 前綴。

### 調整外觀與互動

- 優先將本網站專屬樣式加在 [css/styles.css](css/styles.css) 末段，避免修改前方的 Bootstrap 打包內容。
- 導覽與捲動互動集中於 [js/scripts.js](js/scripts.js)，修改前須確保 jQuery、Bootstrap 與 jQuery Easing 的載入順序不變。
- 不需編譯；儲存後重新整理瀏覽器即可檢查結果。

## 檢查清單

修改後，至少以桌面與手機寬度檢查：

- 每個導覽列項目是否捲動到正確區塊，且手機版會自動收合。
- 本機圖片、SVG 與 PDF 是否能載入。
- GatherMaster 與 YouTube iframe 是否能顯示（需網路與第三方允許嵌入）。
- 新增或更名的資源路徑是否與實際檔名完全一致。
- 外部按鈕連結是否開啟正確目的地。

## 授權與來源

樣式與互動基於 [Start Bootstrap Resume v6.0.0](https://startbootstrap.com/template-overviews/resume)，其檔頭標示採用 MIT License；Bootstrap 亦在 `css/styles.css` 檔頭標示 MIT License。作品內容、個人資料與 `assets/` 中的素材則應在使用或散布前依其原始權利狀態確認。
