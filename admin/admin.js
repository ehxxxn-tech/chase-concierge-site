const adminI18n = {
  zh: {
    "login.eyebrow": "ADMIN ACCESS · 私人禮賓後台",
    "login.title": "行政<br />控制中心",
    "login.copy": "管理會員、詢問、內容與營運數據。此入口將在接入後端後啟用正式驗證與權限控管。",
    "login.enter": "進入後台",
    "login.notice": "目前為前端原型。正式環境需接入後端驗證、Session、MFA 與操作紀錄。",
    "nav.dashboard": "總覽",
    "nav.analytics": "數據分析",
    "nav.inquiries": "詢問管理",
    "nav.members": "會員管理",
    "nav.cms": "內容管理",
    "nav.settings": "設定",
    "nav.roles": "權限角色",
    "topbar.lock": "鎖定",
    "search.placeholder": "搜尋姓名、服務、國家...",
    "notes.title": "內部備註",
    "notes.placeholder": "團隊內部備註...",
    dashboard: "總覽",
    analytics: "數據分析",
    inquiries: "詢問管理",
    members: "會員管理",
    cms: "內容管理",
    settings: "設定",
    roles: "權限角色",
    metrics: ["總訪客", "今日訪客", "本月訪客", "在線用戶", "新會員", "新詢問"],
    metricDelta: ["+12.4%", "+8.1%", "+16.8%", "即時", "本月", "本月"],
    dashboardLive: "即時狀態",
    dashboardTraffic: "流量總覽",
    last7Days: "近 7 日",
    liveOnline: "18 位在線",
    statusRows: [["禮賓團隊", "可服務"], ["詢問佇列", "6 筆待處理"], ["會員審核", "3 位新增"]],
    analyticsCards: { "Visitor sources": "訪客來源", "Countries": "國家 / 地區", "Devices": "裝置" },
    analyticsRows: { "Direct": "直接進入", "Instagram": "Instagram", "Referral": "轉介", "Search": "搜尋", "Hong Kong": "香港", "Taiwan": "台灣", "Japan": "日本", "Singapore": "新加坡", "Mobile": "手機", "Desktop": "桌機", "Tablet": "平板" },
    popularPages: "熱門頁面",
    currentMonth: "本月",
    tablePage: "頁面",
    tableViews: "瀏覽",
    tableAvgTime: "平均停留",
    inquiryHeaders: ["編號", "姓名", "服務", "國家", "狀態", "操作"],
    memberHeaders: ["編號", "等級", "Email", "狀態", "重點"],
  },
  en: {
    "login.eyebrow": "ADMIN ACCESS · PRIVATE CONCIERGE",
    "login.title": "Executive<br />Control Center",
    "login.copy": "Manage members, inquiries, content, and operating data. Production access will require backend authentication and role controls.",
    "login.enter": "Enter Dashboard",
    "login.notice": "Prototype access only. Production security requires server-side auth, sessions, MFA, and audit logs.",
    "nav.dashboard": "Dashboard",
    "nav.analytics": "Analytics",
    "nav.inquiries": "Inquiries",
    "nav.members": "Members",
    "nav.cms": "CMS",
    "nav.settings": "Settings",
    "nav.roles": "Roles",
    "topbar.lock": "Lock",
    "search.placeholder": "Search name, service, country...",
    "notes.title": "INTERNAL NOTES",
    "notes.placeholder": "Private staff notes...",
    dashboard: "Dashboard",
    analytics: "Analytics",
    inquiries: "Inquiry Management",
    members: "Member Management",
    cms: "Content Management",
    settings: "Settings",
    roles: "User Roles",
    metrics: ["Total visitors", "Daily visitors", "Monthly visitors", "Online users", "New members", "New inquiries"],
    metricDelta: ["+12.4%", "+8.1%", "+16.8%", "live", "this month", "this month"],
    dashboardLive: "LIVE STATUS",
    dashboardTraffic: "TRAFFIC OVERVIEW",
    last7Days: "Last 7 days",
    liveOnline: "18 online",
    statusRows: [["Concierge Desk", "Available"], ["Inquiry Queue", "6 pending"], ["Member Review", "3 new"]],
    analyticsCards: { "Visitor sources": "Visitor sources", "Countries": "Countries", "Devices": "Devices" },
    analyticsRows: { "Direct": "Direct", "Instagram": "Instagram", "Referral": "Referral", "Search": "Search", "Hong Kong": "Hong Kong", "Taiwan": "Taiwan", "Japan": "Japan", "Singapore": "Singapore", "Mobile": "Mobile", "Desktop": "Desktop", "Tablet": "Tablet" },
    popularPages: "POPULAR PAGES",
    currentMonth: "Current month",
    tablePage: "Page",
    tableViews: "Views",
    tableAvgTime: "Avg. Time",
    inquiryHeaders: ["ID", "Name", "Service", "Country", "Status", "Action"],
    memberHeaders: ["ID", "Tier", "Email", "Status", "Focus"],
  },
};
let adminLang = localStorage.getItem("chase-admin-language") || "zh";
function t(key) { return adminI18n[adminLang]?.[key] ?? adminI18n.zh[key] ?? key; }
function applyAdminLanguage(lang) {
  adminLang = adminI18n[lang] ? lang : "zh";
  document.documentElement.lang = adminLang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-admin-i18n]").forEach((node) => { node.textContent = t(node.dataset.adminI18n); });
  document.querySelectorAll("[data-admin-i18n-attr]").forEach((node) => {
    node.dataset.adminI18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) node.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll("[data-admin-i18n-html]").forEach((node) => { node.innerHTML = t(node.dataset.adminI18nHtml); });
  document.querySelectorAll("[data-admin-lang]").forEach((button) => button.classList.toggle("active", button.dataset.adminLang === adminLang));
  localStorage.setItem("chase-admin-language", adminLang);
  renderMetrics();
  renderAnalytics();
  renderInquiries();
  renderMembers();
  const active = document.querySelector(".admin-section.active")?.id || "dashboard";
  document.querySelector("[data-page-title]").textContent = t(active);
}const state = {
  role: "Admin",
  selectedInquiry: null,
  metrics: [
    ["Total visitors", "48,920", "+12.4%"],
    ["Daily visitors", "1,284", "+8.1%"],
    ["Monthly visitors", "18,740", "+16.8%"],
    ["Online users", "18", "live"],
    ["New members", "36", "this month"],
    ["New inquiries", "62", "this month"],
  ],
  traffic: [44, 58, 51, 72, 86, 69, 93],
  analytics: {
    "Visitor sources": [["Direct", "42%"], ["Instagram", "24%"], ["Referral", "18%"], ["Search", "16%"]],
    "Countries": [["Hong Kong", "31%"], ["Taiwan", "24%"], ["Japan", "15%"], ["Singapore", "12%"]],
    "Devices": [["Mobile", "58%"], ["Desktop", "34%"], ["Tablet", "8%"]],
  },
  pages: [["/", "18,420", "3m 12s"], ["/#aviation", "6,880", "2m 48s"], ["/#membership", "5,410", "4m 02s"], ["/#contact", "3,960", "2m 10s"]],
  inquiries: [
    { id: "INQ-1028", name: "Ms. Lin", service: "Private Aviation", country: "Taiwan", status: "New", note: "Prefers late evening callback." },
    { id: "INQ-1027", name: "Mr. Sato", service: "Yacht", country: "Japan", status: "In Review", note: "Mediterranean charter, August window." },
    { id: "INQ-1026", name: "A. Chen", service: "Chauffeur", country: "Hong Kong", status: "Contacted", note: "Airport and marina transfer package." },
    { id: "INQ-1025", name: "Private Office", service: "Membership", country: "Singapore", status: "New", note: "Potential Prestige member." },
    { id: "INQ-1024", name: "Ms. Rivera", service: "Helicopter", country: "Spain", status: "Closed", note: "Completed quote." },
  ],
  members: [
    ["M-801", "Prestige", "Verified", "VIP", "1:1 Concierge"],
    ["M-802", "Candidate", "Pending Email", "Review", "Aviation"],
    ["M-803", "Prestige", "Verified", "VIP", "Yacht"],
    ["M-804", "On Hold", "Password Reset", "Staff Review", "Chauffeur"],
  ],
  cms: {
    homepage: { title: "為極少數人安排的世界", body: "CHASE 御天禮賓，以絕對的私密與細節，統籌航空、遊艇與豪車接送。" },
    services: { title: "三段行程，皆已備妥", body: "航空、遊艇與陸地豪車接送構成核心移動服務。" },
    faq: { title: "常見問題", body: "會員資格採申請與審核制。所有資訊皆嚴格保密。" },
    media: { title: "Image Library", body: "Upload hero, aviation, yacht, and chauffeur imagery with editorial grayscale treatment." },
    languages: { title: "Multilingual Content", body: "Manage Traditional Chinese, English, Japanese, Korean, Thai, and Spanish content." },
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderMetrics() {
  $("[data-metrics]").innerHTML = state.metrics.map(([label, value, delta], index) => `
    <article class="metric-card"><span>${adminI18n[adminLang].metrics[index]}</span><strong>${value}</strong><small>${adminI18n[adminLang].metricDelta[index]}</small></article>
  `).join("");
  $("[data-online-summary]").textContent = adminI18n[adminLang].liveOnline;
  const traffic = $("[data-dashboard-traffic]");
  if (traffic) traffic.textContent = adminI18n[adminLang].dashboardTraffic;
  const period = $("[data-dashboard-period]");
  if (period) period.textContent = adminI18n[adminLang].last7Days;
  const live = $("[data-dashboard-live]");
  if (live) live.textContent = adminI18n[adminLang].dashboardLive;
  adminI18n[adminLang].statusRows.forEach((row, index) => {
    const target = document.querySelector(`[data-live-row="${index}"]`);
    if (target) target.innerHTML = `<span>${row[0]}</span><strong>${row[1]}</strong>`;
  });
}

function renderTraffic() {
  $("[data-traffic-bars]").innerHTML = state.traffic.map((height, index) => `<div class="bar" style="height:${height}%"><span>D${index + 1}</span></div>`).join("");
}

function renderAnalytics() {
  $("[data-analytics]").innerHTML = Object.entries(state.analytics).map(([title, rows]) => `
    <article class="panel"><div class="panel-head"><span>${adminI18n[adminLang].analyticsCards[title]}</span><strong>${adminLang === "zh" ? "總覽" : "Overview"}</strong></div><div class="status-list">
      ${rows.map(([name, value]) => `<div><span>${adminI18n[adminLang].analyticsRows[name] || name}</span><strong>${value}</strong></div>`).join("")}
    </div></article>
  `).join("");
  $("[data-pages-table]").innerHTML = `<thead><tr><th>${adminI18n[adminLang].tablePage}</th><th>${adminI18n[adminLang].tableViews}</th><th>${adminI18n[adminLang].tableAvgTime}</th></tr></thead><tbody>${state.pages.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderInquiries() {
  const query = $("[data-inquiry-search]").value.toLowerCase();
  const filter = $("[data-inquiry-filter]").value;
  const rows = state.inquiries.filter((item) => {
    const matchesQuery = [item.id, item.name, item.service, item.country, item.status].join(" ").toLowerCase().includes(query);
    const matchesFilter = filter === "all" || item.status === filter;
    return matchesQuery && matchesFilter;
  });
  $("[data-inquiry-table]").innerHTML = `<thead><tr>${adminI18n[adminLang].inquiryHeaders.map((head) => `<th>${head}</th>`).join("")}</tr></thead><tbody>${rows.map((item) => `
    <tr><td>${item.id}</td><td>${item.name}</td><td>${item.service}</td><td>${item.country}</td><td><span class="badge">${item.status}</span></td><td><button class="admin-button ghost" data-open-inquiry="${item.id}">Open</button></td></tr>
  `).join("")}</tbody>`;
  $$('[data-open-inquiry]').forEach((button) => button.addEventListener('click', () => selectInquiry(button.dataset.openInquiry)));
}

function selectInquiry(id) {
  const inquiry = state.inquiries.find((item) => item.id === id);
  state.selectedInquiry = inquiry;
  $("[data-note-name]").textContent = inquiry ? `${inquiry.name} · ${inquiry.id}` : "Select inquiry";
  $("[data-internal-note]").value = inquiry?.note || "";
}

function renderMembers() {
  $("[data-member-table]").innerHTML = `<thead><tr>${adminI18n[adminLang].memberHeaders.map((head) => `<th>${head}</th>`).join("")}</tr></thead><tbody>${state.members.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderCms(key = "homepage") {
  const item = state.cms[key];
  $("[data-cms-form]").innerHTML = `
    <label><span>Title</span><input value="${item.title}" data-cms-title /></label>
    <label><span>Body</span><textarea data-cms-body>${item.body}</textarea></label>
    <label><span>Image Upload</span><input type="file" /></label>
    <button class="admin-button secondary" type="button" data-save-cms>Save Draft</button>
  `;
  $("[data-cms-preview]").innerHTML = `<span class="eyebrow">PREVIEW</span><h3>${item.title}</h3><p>${item.body}</p>`;
  $$('[data-cms-tabs] button').forEach((button) => button.classList.toggle('active', button.dataset.cms === key));
  $('[data-save-cms]').addEventListener('click', () => {
    item.title = $('[data-cms-title]').value;
    item.body = $('[data-cms-body]').value;
    renderCms(key);
  });
}

function renderRoles() {
  const roles = [
    ["Admin", "Full system access for owners and technical operators.", ["Users", "Settings", "CMS", "Analytics", "Audit"]],
    ["Manager", "Operational access for concierge leaders and membership review.", ["Inquiries", "Members", "CMS Drafts", "Analytics"]],
    ["Staff", "Focused access for inquiry handling and internal notes.", ["Inquiries", "Notes", "Member Status"]],
  ];
  $("[data-role-grid]").innerHTML = roles.map(([title, copy, permissions]) => `<article class="role-card"><h3>${title}</h3><p>${copy}</p><ul>${permissions.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("");
}

function switchSection(id) {
  $$('.admin-section').forEach((section) => section.classList.toggle('active', section.id === id));
  $$('[data-section]').forEach((button) => button.classList.toggle('active', button.dataset.section === id));
  $('[data-page-title]').textContent = t(id);
}

$('[data-login-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  $('[data-login-screen]').classList.add('hidden');
  $('[data-dashboard-screen]').classList.remove('hidden');
});

$('[data-lock]').addEventListener('click', () => {
  $('[data-dashboard-screen]').classList.add('hidden');
  $('[data-login-screen]').classList.remove('hidden');
});

$$('[data-section]').forEach((button) => button.addEventListener('click', () => switchSection(button.dataset.section)));
$('[data-role-select]').addEventListener('change', (event) => {
  state.role = event.target.value;
  $('[data-current-role]').textContent = state.role;
});
$('[data-inquiry-search]').addEventListener('input', renderInquiries);
$('[data-inquiry-filter]').addEventListener('change', renderInquiries);
$('[data-save-note]').addEventListener('click', () => {
  if (state.selectedInquiry) state.selectedInquiry.note = $('[data-internal-note]').value;
});
$('[data-member-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  state.members.unshift([`M-${800 + state.members.length + 1}`, "Prestige", "Verification Sent", "VIP", "New Intake"]);
  renderMembers();
});
$$('[data-cms-tabs] button').forEach((button) => button.addEventListener('click', () => renderCms(button.dataset.cms)));

renderMetrics();
renderTraffic();
renderAnalytics();
renderInquiries();
selectInquiry(state.inquiries[0].id);
renderMembers();
renderCms();
renderRoles();
document.querySelectorAll('[data-admin-lang]').forEach((button) => button.addEventListener('click', () => applyAdminLanguage(button.dataset.adminLang)));
applyAdminLanguage(adminLang);
