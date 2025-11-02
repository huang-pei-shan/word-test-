// 題目資料（可自行擴充至 50 題）
const wordList = [
  {chinese: "顧客忠誠度", english: "customer loyalty", note: "顧客持續購買與支持的程度" },
  { chinese: "顧客關係管理", english: "customer relationship management", note: "維繫顧客關係的系統與策略" },
  { chinese: "品牌資產", english: "brand equity", note: "品牌所累積的價值" },
  { chinese: "數位行銷", english: "digital marketing", note: "使用網路平台推廣產品或服務" },
  { chinese: "顧客滿意度", english: "customer satisfaction", note: "顧客對產品的滿意程度" },
  { chinese: "廣告", english: "advertising", note: "透過媒介傳遞產品訊息" },
  { chinese: "消費者行為", english: "consumer behavior", note: "研究顧客購買與使用習慣" },
  { chinese: "定價策略", english: "pricing strategy", note: "訂定產品或服務價格的方法" },
  { chinese: "通路", english: "distribution channel", note: "產品從生產者到消費者的路徑" },
  { chinese: "差異化", english: "differentiation", note: "使產品或服務與競爭者不同" },
  { chinese: "促銷", english: "promotion", note: "刺激消費者購買的活動" },
  { chinese: "市場調查", english: "market research", note: "收集與分析市場相關資料" },
  { chinese: "公共關係", english: "public relations", note: "維持企業與大眾良好關係" },
  { chinese: "市場佔有率", english: "market share", note: "企業在市場中的比例" },
  { chinese: "目標市場", english: "target market", note: "企業鎖定的主要顧客群" },
  { chinese: "市場區隔", english: "segmentation", note: "將市場分成不同的消費群體" },
  { chinese: "定位", english: "position", note: "產品在顧客心中的獨特印象" },
  { chinese: "價值主張", english: "value proposition", note: "企業提供給顧客的核心利益" },
  { chinese: "產品生命週期", english: "product life cycle", note: "產品從導入到退出市場的過程" },
  { chinese: "口碑", english: "word of mouth", note: "消費者間的產品推薦" },
  { chinese: "銷售預測", english: "sales forecasting", note: "預測未來銷售量" },
  { chinese: "動機", english: "motivation", note: "驅動員工工作的因素" },
  { chinese: "員工敬業度", english: "employee engagement", note: "員工對工作的投入" },
  { chinese: "績效考核", english: "performance appraisal", note: "評估員工工作表現" },
  { chinese: "薪酬", english: "compensation", note: "員工報酬" },
  { chinese: "福利", english: "benefits", note: "非薪資的額外待遇" },
  { chinese: "員工流動率", english: "employee turnover", note: "員工離職的比例" },
  { chinese: "多元化", english: "diversity", note: "員工背景的多樣性" },
  { chinese: "招募", english: "recruitment", note: "吸引新員工的過程" },
  { chinese: "職務說明", english: "job description", note: "工作內容與責任的文件" },
  { chinese: "團隊合作", english: "teamwork", note: "小組成員的協作" },
  { chinese: "衝突管理", english: "conflict management", note: "處理工作中爭議的方法" },
  { chinese: "勞動法", english: "labor law", note: "規範雇傭關係的法律" },
  { chinese: "新人訓練", english: "onboarding", note: "新員工適應組織的過程" },
  { chinese: "工作滿意度", english: "job satisfaction", note: "員工對工作的滿意程度" },
  { chinese: "顧客回饋", english: "customer feedback", note: "顧客對服務的意見" },
  { chinese: "售後服務", english: "after-sales service", note: "購買後提供的協助" },
  { chinese: "服務藍圖", english: "service blueprint", note: "描述服務流程的工具" },
  { chinese: "顧客期望", english: "customer expectation", note: "顧客對服務的預期" },
  { chinese: "內部顧客", english: "internal customer", note: "公司內部的服務對象" },
  { chinese: "顧客抱怨", english: "customer complaint", note: "顧客對不滿意服務的表達" },
  { chinese: "關鍵時刻", english: "moment of truth", note: "影響顧客感受的重要瞬間" },
  { chinese: "個人化服務", english: "personalized service", note: "依顧客需求提供服務" },
  { chinese: "顧客服務", english: "customer service", note: "協助顧客解決問題" },
  { chinese: "服務容量", english: "service capacity", note: "服務系統可容納的需求量" },
  { chinese: "排隊管理", english: "queue management", note: "安排顧客等候的方式" },
  { chinese: "服務創新", english: "service innovation", note: "提供新型態服務" },
  { chinese: "顧客忠誠計畫", english: "customer loyalty program", note: "鼓勵顧客持續消費的活動" },
  { chinese: "服務傳遞", english: "service delivery", note: "提供服務的過程" }

];

// === Fisher–Yates 洗牌演算法 ===
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const container = document.getElementById("quiz-container");

// === 題目產生函式 ===
function renderQuiz() {
  container.innerHTML = ""; // 清空原本內容
  shuffle(wordList); // 打亂題目
  wordList.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "word-item";
    div.innerHTML = `
      <p><strong>${i + 1}. ${item.chinese}</strong></p>
      <input type="text" id="ans-${i}" placeholder="輸入英文單字">
      <p class="note">提示：${item.note}</p>
    `;
    container.appendChild(div);
  });
}

// === 頁面載入時先顯示題目 ===
renderQuiz();

// === 提交答案按鈕 ===
document.getElementById("submit").addEventListener("click", () => {
  let correct = 0;
  wordList.forEach((item, i) => {
    const input = document.getElementById(`ans-${i}`);
    if (input && input.value.trim().toLowerCase() === item.english.toLowerCase()) {
      input.style.borderColor = "green";
      correct++;
    } else if (input) {
      input.style.borderColor = "red";
    }
  });
  document.getElementById("result").textContent =
    `你答對了 ${correct} / ${wordList.length} 題`;
});

// === 重新洗牌按鈕 ===
document.getElementById("shuffle").addEventListener("click", () => {
  document.getElementById("result").textContent = "";
  renderQuiz(); // 重新顯示題目
});
