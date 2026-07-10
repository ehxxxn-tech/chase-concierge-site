const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
const revealItems = document.querySelectorAll(".reveal");
const languageButton = document.querySelector("[data-language-button]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageCurrent = document.querySelector("[data-language-current]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
let scrollTicking = false;
const languageLabels = { zh: "繁中", en: "EN", ja: "日本語", ko: "한국어", th: "ไทย", es: "ES" };
const translations = {
  zh: {
    "meta.title":"CHASE | Private Concierge","meta.description":"CHASE 御天禮賓 - 為極少數人服務的私人禮賓。航空、遊艇與豪車接送的全方位安排。",
    "nav.about":"關於","nav.services":"服務","nav.aviation":"航空","nav.yacht":"遊艇","nav.chauffeur":"座駕","nav.membership":"會員","nav.faq":"FAQ","nav.contact":"聯絡","nav.cta":"預約諮詢","nav.language":"Language","nav.menuOpen":"開啟選單",
    "hero.eyebrow":"PRIVATE CONCIERGE · 私人禮賓","hero.title":"為極少數人<br />安排的世界","hero.copy":"CHASE 御天禮賓，以絕對的私密與細節，為您統籌航空、遊艇與豪車接送的每一段行程。","hero.imageAlt":"停於停機坪上的私人飛機，夕陽餘暉映照機身",
    "about.eyebrow":"ABOUT · 關於御天","about.title":"低調，<br />是最高的禮遇","about.lead":"CHASE 御天禮賓存在於聚光燈之外。我們不追求規模，只服務於信任我們的少數人。從起飛、登船到抵達目的地前的每一段移動，皆由專屬團隊以最高標準悉心安排。","about.copy":"我們相信，真正的奢華不在於擁有，而在於從容。當您將時間交付於我們，繁瑣自會退場，留下的只有您應得的寧靜、私密與自由。",
    "stats.always":"全天候待命","stats.cities":"全球城市","stats.concierge":"專屬禮賓","stats.limitless":"不設上限",
    "services.eyebrow":"SERVICES · 服務範疇","services.title":"三段行程，皆已備妥","services.copy":"航空、遊艇與陸地豪車接送，構成 CHASE 御天禮賓的核心移動服務。","services.aviationTitle":"私人航空","services.aviationCopy":"私人飛機與直升機調度，從航線、時段到登機銜接，皆以您的節奏為準。","services.yachtTitle":"遊艇禮遇","services.yachtCopy":"頂級遊艇、專屬船員與航線安排，讓海上的每一刻都成為私人時光。","services.chauffeurTitle":"豪車接送","services.chauffeurCopy":"專屬司機、禮賓座駕與點對點接送。每一段陸地移動，皆準時、私密且周到。",
    "aviation.eyebrow":"AVIATION · 私人航空","aviation.title":"天空，由您定義","aviation.copy1":"無論私人飛機或直升機，御天為您調度最合適的機型與航線，讓每一次起飛都恰如其分。","aviation.copy2":"從私人航廈、快速通關到落地後的座駕銜接，皆於出發前一切備妥。","aviation.item1":"私人飛機調度","aviation.item2":"直升機接駁安排","aviation.item3":"私人航廈與快速通關","aviation.item4":"即時航班協調","aviation.imageAlt":"私人公務噴射機在跑道上準備起飛",
    "yacht.eyebrow":"YACHT · 海上禮遇","yacht.title":"海洋，亦是私域","yacht.copy1":"從地中海到南太平洋，御天為您安排頂級遊艇與專屬船員，將海上的每一刻化為私人時光。","yacht.copy2":"航線、餐飲與岸上接洽一併統籌，您只需登船，其餘交由我們。","yacht.item1":"全球遊艇租賃","yacht.item2":"專屬船員與主廚","yacht.item3":"航線與停泊規劃","yacht.item4":"岸上接送銜接","yacht.imageAlt":"停泊於碧藍海面上的豪華遊艇",
    "chauffeur.eyebrow":"CHAUFFEUR · 豪車接送","chauffeur.title":"陸地之上，亦有分寸","chauffeur.copy1":"機場、碼頭、城市與私人行程之間，御天以高規格座駕與專屬司機完成每一段銜接。","chauffeur.copy2":"車型、路線、等候與接待細節皆預先確認，讓抵達本身也保持安靜與從容。","chauffeur.item1":"豪華座駕接送","chauffeur.item2":"專屬司機待命","chauffeur.item3":"機場與碼頭銜接","chauffeur.item4":"點對點私人行程","chauffeur.imageAlt":"夜色中的豪華座駕",
    "membership.eyebrow":"MEMBERSHIP · 會員資格","membership.title":"僅以邀請，方得其門","membership.copy":"CHASE 採限額審核制，以確保每位會員都能獲得足夠安靜、細緻且即時的照顧。會員資格需經申請與專人確認。","membership.planTitle":"尊榮","membership.planTier":"Prestige","membership.planCopy":"為重視效率、隱私與細節的會員而設。尊榮會員由 CHASE 1:1 專屬禮賓承接航空、遊艇、豪車接送與合作禮遇，重要行程可享優先預留與會員限定條件。","membership.benefit1":"1:1 專屬禮賓窗口","membership.benefit2":"私人航空與直升機安排","membership.benefit3":"快速通關與私人航廈協調","membership.benefit4":"全球遊艇與岸上接送銜接","membership.benefit5":"豪華座駕與專屬司機待命","membership.benefit6":"CHASE 合作品牌專屬禮遇與會員條件","membership.benefit7":"熱門時段優先預留與專案報價","membership.apply":"申請此資格",
    "faq.eyebrow":"FAQ · 常見問題","faq.title":"在安排之前，先讓疑問安靜落定","faq.copy":"我們將常見的貴賓詢問整理如下。每一項安排仍會依您的目的地、行程與安全需求，由專屬禮賓個別確認。","faq.client":"貴賓詢問","faq.answerLabel":"CHASE 回覆","faq.q1":"你們提供的移動服務包含哪些保障？","faq.a1":"每一項陸、海、空移動安排，皆會依服務內容、目的地與行程規格配置相應保障，包含行程確認、供應商審核、接送銜接與必要安全支援，讓旅程保持安心與從容。","faq.q2":"你們服務的國家與地區有哪些？","faq.a2":"目前服務範圍涵蓋台灣、日本、韓國、香港、澳門、泰國、菲律賓、新加坡，並可依需求協調歐洲、北美及其他指定地區的私人行程安排。","faq.q3":"尊榮會員是任何人都可以加入的嗎？","faq.a3":"任何貴賓皆可提出申請。為維持服務品質與會員體驗，CHASE 會先進行審核與需求確認，再由專屬禮賓回覆後續安排。","faq.q4":"豪華座駕接送是否可以安排英文司機？","faq.a4":"可以。依地區與車型安排，CHASE 可協調具備英文溝通能力的司機，必要時亦可安排其他語言支援，降低跨國移動時的溝通負擔。","faq.q5":"你們的司機是否受過培訓？與一般租車司機有什麼不同？","faq.a5":"我們合作的司機需經審核與專業訓練，重視安全駕駛、禮賓應對、時間掌握與行程保密。服務不僅是接送，而是完整旅程的一段安靜銜接。","faq.q6":"你們可安排哪些座駕？","faq.a6":"常見車型包含 Mercedes-Benz S-Class、Lexus LM、Toyota Alphard、Mercedes-Benz V-Class，以及更高規格的保母車、Rolls-Royce 與高級豪華跑車。實際車型會依城市、日期與需求確認。","faq.q7":"如果我想要不一樣的旅程，可以完全客製化嗎？","faq.a7":"可以。您只需提供目的地、同行人數、時間、偏好與安全需求，CHASE 會為您整合可行方案與報價，確認後再進一步安排細節。","faq.q8":"你們主要服務哪些身份或需求的客戶？","faq.a8":"CHASE 服務企業家、國際高階主管、跨國企業團隊、私人航空旅客，以及希望以更私密、更完整方式規劃旅程的貴賓。","faq.q9":"可以提供安全保護或隨行人員方案嗎？","faq.a9":"可以。無論貴賓身處哪個國家或地區，CHASE 可依需求協調專業保鏢、隨行人員與安全移動方案，細節會依目的地風險與行程性質個別規劃。","faq.q10":"其他公司也提供類似服務，為什麼選擇 CHASE？","faq.a10":"CHASE 提供的不是單一交通工具，而是整段旅程的無縫銜接。從航班、碼頭、座駕到安全與接待細節，我們讓每一段移動都保持私密、準時且安定。","faq.q11":"CHASE 的核心價值是什麼？","faq.a11":"我們的核心價值是私密、安全、效率與分寸。真正的高端服務，不只在於被看見的奢華，而在於貴賓無需開口，旅程已被妥善安排。","contact.eyebrow":"CONTACT · 與我們聯絡","contact.title":"開啟一段<br />專屬的對話","contact.copy":"留下您的聯絡方式，御天的會員顧問將於 24 小時內親自與您聯繫。所有資訊皆嚴格保密。","contact.messaging":"MESSAGING · 即時通訊","form.name":"姓名","form.phone":"聯絡電話","form.email":"電子郵件","form.message":"需求描述","form.namePlaceholder":"您的稱呼","form.phonePlaceholder":"含國碼","form.messagePlaceholder":"請簡述您期望御天為您安排的事項","form.submit":"遞交申請","form.statusReady":"您的申請將以私人方式送出。","form.statusReceived":"您的申請已收到。CHASE 專屬禮賓將於審核後與您聯繫，所有資訊皆以最高保密標準處理。","services.aviationCta":"航空諮詢","services.yachtCta":"遊艇諮詢","services.chauffeurCta":"座駕諮詢","serviceRequest.aviation":"我想了解私人航空與直升機安排，請由專屬禮賓與我聯繫。","serviceRequest.yacht":"我想了解遊艇禮遇與航線安排，請由專屬禮賓與我聯繫。","serviceRequest.chauffeur":"我想了解豪車接送與專屬司機安排，請由專屬禮賓與我聯繫。","serviceRequest.membership":"我想申請尊榮 Prestige 會員資格，請由 CHASE 專屬禮賓與我聯繫。","footer.copy":"為極少數人安排的世界。私人禮賓，絕對私密。","footer.rights":"© 2026 CHASE. ALL RIGHTS RESERVED.","footer.privacy":"隱私政策","footer.terms":"服務條款"
  },
  en: {
    "meta.title":"CHASE | Private Concierge","meta.description":"CHASE Concierge - Private concierge for the few. Aviation, yachts, and luxury chauffeur arrangements.",
    "nav.about":"About","nav.services":"Services","nav.aviation":"Aviation","nav.yacht":"Yachts","nav.chauffeur":"Chauffeur","nav.membership":"Membership","nav.faq":"FAQ","nav.contact":"Contact","nav.cta":"Consultation","nav.language":"Language","nav.menuOpen":"Open menu",
    "hero.eyebrow":"PRIVATE CONCIERGE","hero.title":"A World Arranged<br />for the Few","hero.copy":"CHASE Concierge orchestrates every journey by air, sea, and road with absolute discretion and detail.","hero.imageAlt":"A private jet on the tarmac in warm evening light",
    "about.eyebrow":"ABOUT · CHASE","about.title":"Discretion<br />is the highest courtesy","about.lead":"CHASE Concierge exists beyond the spotlight. We do not pursue scale; we serve the few who place their trust in us. From takeoff to boarding to the final arrival, every movement is handled by a dedicated team to the highest standard.","about.copy":"True luxury is not possession, but ease. When you entrust your time to us, complexity withdraws, leaving only calm, privacy, and freedom.",
    "stats.always":"Always on call","stats.cities":"Global cities","stats.concierge":"Dedicated concierge","stats.limitless":"No fixed limit",
    "services.eyebrow":"SERVICES","services.title":"Every leg, already arranged","services.copy":"Aviation, yachts, and luxury chauffeur service form the core mobility offering of CHASE Concierge.","services.aviationTitle":"Private Aviation","services.aviationCopy":"Private jets and helicopters arranged around your route, timing, and boarding preferences.","services.yachtTitle":"Yacht Privileges","services.yachtCopy":"Premier yachts, dedicated crew, and route planning that turn time at sea into a private domain.","services.chauffeurTitle":"Luxury Chauffeur","services.chauffeurCopy":"Dedicated drivers, concierge vehicles, and point-to-point transfers with punctuality, privacy, and care.",
    "aviation.eyebrow":"AVIATION · PRIVATE FLIGHT","aviation.title":"The sky, defined by you","aviation.copy1":"Whether by private jet or helicopter, CHASE coordinates the right aircraft and route for every departure.","aviation.copy2":"Private terminal access, expedited clearance, and onward chauffeur connections are prepared before you arrive.","aviation.item1":"Private jet coordination","aviation.item2":"Helicopter transfers","aviation.item3":"Private terminals and expedited clearance","aviation.item4":"Real-time flight coordination","aviation.imageAlt":"A private business jet preparing for departure on a runway",
    "yacht.eyebrow":"YACHT · AT SEA","yacht.title":"The ocean, made private","yacht.copy1":"From the Mediterranean to the South Pacific, CHASE arranges premier yachts and dedicated crew for private time at sea.","yacht.copy2":"Routes, dining, and shore-side connections are coordinated as one seamless itinerary.","yacht.item1":"Global yacht charters","yacht.item2":"Dedicated crew and private chefs","yacht.item3":"Route and mooring planning","yacht.item4":"Shore-side transfer coordination","yacht.imageAlt":"A luxury yacht moored on clear blue water",
    "chauffeur.eyebrow":"CHAUFFEUR · LUXURY TRANSFERS","chauffeur.title":"On land, every detail has its place","chauffeur.copy1":"Between airports, marinas, cities, and private appointments, CHASE completes each connection with refined vehicles and dedicated drivers.","chauffeur.copy2":"Vehicle class, route, waiting time, and reception details are confirmed in advance, so arrival remains quiet and composed.","chauffeur.item1":"Luxury vehicle transfers","chauffeur.item2":"Dedicated drivers on standby","chauffeur.item3":"Airport and marina connections","chauffeur.item4":"Private point-to-point journeys","chauffeur.imageAlt":"A luxury car at night",
    "membership.eyebrow":"MEMBERSHIP","membership.title":"By invitation only","membership.copy":"CHASE keeps membership limited so every member receives quiet, precise, and timely attention. Applications are reviewed individually by a dedicated advisor.","membership.planTitle":"Prestige","membership.planTier":"Prestige","membership.planCopy":"Designed for members who value efficiency, privacy, and precision. Prestige members receive a 1:1 CHASE concierge for aviation, yachts, luxury chauffeur service, partner privileges, priority access, and member-only terms.","membership.benefit1":"1:1 dedicated concierge contact","membership.benefit2":"Private aviation and helicopter arrangements","membership.benefit3":"Expedited clearance and private terminal coordination","membership.benefit4":"Global yacht access and shore-side transfers","membership.benefit5":"Luxury vehicles with dedicated drivers","membership.benefit6":"CHASE partner privileges and member terms","membership.benefit7":"Priority reservations and tailored quotations","membership.apply":"Apply for Membership",
    "faq.eyebrow":"FAQ","faq.title":"Before arranging, let each detail settle","faq.copy":"Common guest questions are collected below. Every arrangement is still confirmed individually by a dedicated concierge according to destination, itinerary, and safety requirements.","faq.client":"Guest Inquiry","faq.answerLabel":"CHASE Reply","faq.q1":"What safeguards are included in your mobility services?","faq.a1":"Each land, sea, and air arrangement is matched with appropriate safeguards according to service scope, destination, and itinerary, including itinerary confirmation, partner review, transfer coordination, and necessary security support.","faq.q2":"Which countries and regions do you serve?","faq.a2":"Current service coverage includes Taiwan, Japan, Korea, Hong Kong, Macau, Thailand, the Philippines, and Singapore. Europe, North America, and other requested regions may be coordinated according to itinerary needs.","faq.q3":"Can anyone apply for Prestige membership?","faq.a3":"Any guest may apply. To preserve service quality and member experience, CHASE reviews each application and confirms requirements before a dedicated concierge follows up.","faq.q4":"Can luxury chauffeur transfers include English-speaking drivers?","faq.a4":"Yes. Depending on region and vehicle class, CHASE can coordinate English-speaking drivers and, where needed, other language support to reduce friction during international travel.","faq.q5":"Are your drivers trained, and how are they different from ordinary rental drivers?","faq.a5":"Our partner drivers are reviewed and professionally trained, with attention to safe driving, concierge etiquette, timing, and discretion. The service is not only transportation, but a quiet connection within the full journey.","faq.q6":"What vehicles can you arrange?","faq.a6":"Common options include Mercedes-Benz S-Class, Lexus LM, Toyota Alphard, Mercedes-Benz V-Class, higher-tier vans, Rolls-Royce, and luxury sports cars. Actual availability depends on city, date, and request.","faq.q7":"Can a fully customized journey be arranged?","faq.a7":"Yes. Provide destination, number of guests, timing, preferences, and safety needs. CHASE will consolidate available options and quotation for confirmation before arranging the details.","faq.q8":"Who do you primarily serve?","faq.a8":"CHASE serves entrepreneurs, international executives, multinational corporate teams, private aviation travelers, and guests seeking a more private and complete travel experience.","faq.q9":"Can you provide protection or close-protection personnel?","faq.a9":"Yes. Wherever the guest is located, CHASE can coordinate professional bodyguards, close-protection personnel, and customized secure mobility plans according to destination risk and itinerary nature.","faq.q10":"Why choose CHASE when others offer similar services?","faq.a10":"CHASE is not limited to providing vehicles or transport. We coordinate the entire journey, from flights and marinas to chauffeurs, reception, safety, and timing, so every movement remains private, punctual, and composed.","faq.q11":"What is the core value of CHASE?","faq.a11":"Our core values are privacy, safety, efficiency, and discretion. True high-end service is not only visible luxury; it is the ease of knowing every detail has already been arranged.","contact.eyebrow":"CONTACT","contact.title":"Begin a<br />private conversation","contact.copy":"Leave your contact details and a CHASE membership advisor will contact you personally within 24 hours. All information is treated in strict confidence.","contact.messaging":"MESSAGING","form.name":"Name","form.phone":"Phone","form.email":"Email","form.message":"Request details","form.namePlaceholder":"How should we address you?","form.phonePlaceholder":"Include country code","form.messagePlaceholder":"Briefly describe what you would like CHASE to arrange","form.submit":"Submit Request","form.statusReady":"Your request will be sent privately.","form.statusReceived":"Your request has been received. A CHASE dedicated concierge will contact you after review, and all details will be handled in strict confidence.","services.aviationCta":"Aviation Inquiry","services.yachtCta":"Yacht Inquiry","services.chauffeurCta":"Chauffeur Inquiry","serviceRequest.aviation":"I would like to discuss private aviation and helicopter arrangements. Please have a dedicated concierge contact me.","serviceRequest.yacht":"I would like to discuss yacht privileges and itinerary planning. Please have a dedicated concierge contact me.","serviceRequest.chauffeur":"I would like to discuss luxury chauffeur and dedicated driver arrangements. Please have a dedicated concierge contact me.","serviceRequest.membership":"I would like to apply for Prestige membership. Please have a CHASE dedicated concierge contact me.","footer.copy":"A world arranged for the few. Private concierge, absolute discretion.","footer.rights":"© 2026 CHASE. ALL RIGHTS RESERVED.","footer.privacy":"Privacy Policy","footer.terms":"Terms of Service"
  }
};translations.ja = { ...translations.en,
  "nav.about":"概要","nav.services":"サービス","nav.aviation":"航空","nav.yacht":"ヨット","nav.chauffeur":"送迎","nav.membership":"会員","nav.contact":"連絡","nav.cta":"相談予約","nav.menuOpen":"メニューを開く",
  "hero.eyebrow":"PRIVATE CONCIERGE · プライベートコンシェルジュ","hero.title":"限られた方のために<br />整えられた世界","hero.copy":"CHASE 御天コンシェルジュは、航空、ヨット、ラグジュアリー送迎のすべてを、徹底した機密性と細部への配慮で手配します。",
  "about.eyebrow":"ABOUT · 御天について","about.title":"控えめであることこそ<br />最上の礼遇","about.lead":"CHASE 御天コンシェルジュは、華やかな表舞台の外側にあります。規模を追うのではなく、私たちを信頼してくださる限られた方だけにお応えします。離陸、乗船、到着までのすべての移動を、専属チームが高い基準で整えます。","about.copy":"真のラグジュアリーとは所有ではなく、余裕です。お客様の時間をお預けいただくことで、煩雑さは静かに退き、静けさ、プライバシー、自由だけが残ります。",
  "stats.always":"24時間対応","stats.cities":"世界の都市","stats.concierge":"専属コンシェルジュ","stats.limitless":"制限なし",
  "services.eyebrow":"SERVICES · サービス","services.title":"すべての移動を、整えて","services.copy":"航空、ヨット、ラグジュアリー送迎が、CHASE 御天コンシェルジュの中核となる移動サービスです。","services.aviationTitle":"プライベート航空","services.aviationCopy":"プライベートジェットとヘリコプターを、航路、時間、搭乗導線までお客様のペースに合わせて手配します。","services.yachtTitle":"ヨットサービス","services.yachtCopy":"上質なヨット、専属クルー、航路設計により、海上の時間を完全なプライベート空間にします。","services.chauffeurTitle":"ラグジュアリー送迎","services.chauffeurCopy":"専属ドライバーと上質な車両による、時間厳守で静かなポイントツーポイント送迎。",
  "aviation.eyebrow":"AVIATION · プライベート航空","aviation.title":"空は、お客様の基準で","aviation.copy1":"プライベートジェットでもヘリコプターでも、御天がお客様に最適な機体と航路を調整します。","aviation.copy2":"プライベートターミナル、迅速な通関、到着後の車両手配まで、出発前に整えます。","aviation.item1":"プライベートジェット手配","aviation.item2":"ヘリコプター送迎","aviation.item3":"プライベートターミナルと迅速通関","aviation.item4":"リアルタイムのフライト調整",
  "yacht.eyebrow":"YACHT · 海上の礼遇","yacht.title":"海もまた、私的な領域に","yacht.copy1":"地中海から南太平洋まで、御天は上質なヨットと専属クルーを手配し、海上の時間をプライベートなひとときに変えます。","yacht.copy2":"航路、食事、寄港地での移動まで一つの旅程として統括します。","yacht.item1":"世界各地のヨットチャーター","yacht.item2":"専属クルーとプライベートシェフ","yacht.item3":"航路と停泊計画","yacht.item4":"陸上送迎との接続",
  "chauffeur.eyebrow":"CHAUFFEUR · ラグジュアリー送迎","chauffeur.title":"陸上にも、品格ある流れを","chauffeur.copy1":"空港、マリーナ、都市、プライベートな予定の間を、御天が上質な車両と専属ドライバーでつなぎます。","chauffeur.copy2":"車種、ルート、待機時間、迎車の細部まで事前に確認し、到着の瞬間まで静かに整えます。","chauffeur.item1":"高級車による送迎","chauffeur.item2":"専属ドライバー待機","chauffeur.item3":"空港・マリーナ接続","chauffeur.item4":"プライベートな地点間移動",
  "membership.eyebrow":"MEMBERSHIP · 会員資格","membership.title":"招待によってのみ開かれる扉","membership.copy":"御天コンシェルジュは、一人ひとりにふさわしい配慮を保つため会員数を限定しています。会員資格は申請後、個別に審査されます。","membership.planTitle":"尊榮","membership.planCopy":"効率、プライバシー、細部を重視する会員のために。CHASE 御天は 1:1 の専属コンシェルジュが航空、ヨット、ラグジュアリー送迎、提携先での特別待遇を統括します。","membership.benefit1":"1:1 専属コンシェルジュ窓口","membership.benefit2":"プライベート航空とヘリコプター手配","membership.benefit3":"迅速通関とプライベートターミナル調整","membership.benefit4":"世界のヨットと陸上送迎接続","membership.benefit5":"高級車と専属ドライバー","membership.benefit6":"CHASE 御天 提携ブランド特典","membership.benefit7":"会員限定優待と優先予約","membership.apply":"会員申請",
  "contact.eyebrow":"CONTACT · お問い合わせ","contact.title":"専属の対話を<br />始める","contact.copy":"ご連絡先をお残しください。御天の会員アドバイザーが24時間以内に直接ご連絡します。情報はすべて厳格に守秘されます。","contact.messaging":"MESSAGING · メッセージ","form.name":"お名前","form.phone":"電話番号","form.email":"メール","form.message":"ご依頼内容","form.namePlaceholder":"ご希望の呼び名","form.phonePlaceholder":"国番号を含めて入力","form.messagePlaceholder":"御天に手配を希望される内容を簡潔にご記入ください","form.submit":"申請を送信","footer.copy":"限られた方のために整えられた世界。プライベートコンシェルジュ、絶対的な機密性。","footer.privacy":"プライバシーポリシー","footer.terms":"利用規約"
};
translations.ko = { ...translations.en,
  "nav.about":"소개","nav.services":"서비스","nav.aviation":"항공","nav.yacht":"요트","nav.chauffeur":"차량","nav.membership":"멤버십","nav.contact":"문의","nav.cta":"상담 예약","nav.menuOpen":"메뉴 열기",
  "hero.eyebrow":"PRIVATE CONCIERGE · 프라이빗 컨시어지","hero.title":"극소수를 위해<br />준비된 세계","hero.copy":"CHASE 유텐 컨시어지는 항공, 요트, 럭셔리 차량 이동의 모든 여정을 철저한 프라이버시와 세심함으로 조율합니다.",
  "about.eyebrow":"ABOUT · 유텐 소개","about.title":"절제된 품격이<br />가장 높은 예우입니다","about.lead":"CHASE 유텐 컨시어지는 스포트라이트 밖에 존재합니다. 규모를 좇지 않고, 우리를 신뢰하는 소수의 고객만을 위해 일합니다. 이륙, 승선, 최종 도착까지 모든 이동은 전담 팀이 높은 기준으로 관리합니다.","about.copy":"진정한 럭셔리는 소유가 아니라 여유입니다. 시간을 맡겨 주시면 복잡함은 물러나고, 평온함과 프라이버시, 자유만 남습니다.",
  "stats.always":"24시간 대기","stats.cities":"전 세계 도시","stats.concierge":"전담 컨시어지","stats.limitless":"제한 없음",
  "services.eyebrow":"SERVICES · 서비스","services.title":"모든 이동은 이미 준비되어 있습니다","services.copy":"항공, 요트, 럭셔리 차량 이동은 CHASE 유텐 컨시어지의 핵심 모빌리티 서비스입니다.","services.aviationTitle":"프라이빗 항공","services.aviationCopy":"프라이빗 제트와 헬리콥터를 노선, 시간, 탑승 동선까지 고객의 리듬에 맞춰 조율합니다.","services.yachtTitle":"요트 서비스","services.yachtCopy":"최상급 요트, 전담 승무원, 항로 계획으로 바다 위 시간을 온전한 사적 영역으로 만듭니다.","services.chauffeurTitle":"럭셔리 차량 이동","services.chauffeurCopy":"전담 기사와 컨시어지 차량으로 정시성, 프라이버시, 세심함을 갖춘 이동을 제공합니다.",
  "aviation.eyebrow":"AVIATION · 프라이빗 항공","aviation.title":"하늘은 고객의 기준으로","aviation.copy1":"프라이빗 제트든 헬리콥터든, 유텐은 가장 적합한 기체와 노선을 조율합니다.","aviation.copy2":"프라이빗 터미널, 빠른 출입국 절차, 도착 후 차량 연결까지 출발 전 준비됩니다.","aviation.item1":"프라이빗 제트 조율","aviation.item2":"헬리콥터 이동安排","aviation.item3":"프라이빗 터미널 및 빠른 통관","aviation.item4":"실시간 항공편 조율",
  "yacht.eyebrow":"YACHT · 해상 예우","yacht.title":"바다 또한 사적인 영역으로","yacht.copy1":"지중해부터 남태평양까지, 유텐은 최상급 요트와 전담 승무원을 준비해 바다 위 시간을 프라이빗하게 만듭니다.","yacht.copy2":"항로, 다이닝, 육상 연결까지 하나의 여정으로 조율합니다.","yacht.item1":"글로벌 요트 차터","yacht.item2":"전담 승무원과 셰프","yacht.item3":"항로 및 정박 계획","yacht.item4":"육상 이동 연결",
  "chauffeur.eyebrow":"CHAUFFEUR · 럭셔리 차량 이동","chauffeur.title":"육상에서도 흐름은 정교하게","chauffeur.copy1":"공항, 마리나, 도시, 개인 일정 사이를 유텐이 고급 차량과 전담 기사로 연결합니다.","chauffeur.copy2":"차량 등급, 경로, 대기 시간, 의전 세부 사항을 사전에 확인해 도착까지 조용하고 안정적으로 이어집니다.","chauffeur.item1":"고급 차량 이동","chauffeur.item2":"전담 기사 대기","chauffeur.item3":"공항 및 마리나 연결","chauffeur.item4":"프라이빗 지점 간 이동",
  "membership.eyebrow":"MEMBERSHIP · 멤버십","membership.title":"초대받은 분께만 열리는 문","membership.copy":"유텐 컨시어지는 각 회원에게 충분한 관심을 제공하기 위해 멤버십을 제한적으로 운영합니다. 신청 후 개별 심사가 진행됩니다.","membership.planTitle":"尊榮","membership.planCopy":"효율, 프라이버시, 디테일을 중시하는 회원을 위한 등급입니다. CHASE 유텐은 1:1 전담 컨시어지가 항공, 요트, 럭셔리 차량 이동과 파트너 혜택을 통합 관리합니다.","membership.benefit1":"1:1 전담 컨시어지","membership.benefit2":"프라이빗 항공 및 헬리콥터安排","membership.benefit3":"빠른 통관 및 프라이빗 터미널 조율","membership.benefit4":"글로벌 요트와 육상 이동 연결","membership.benefit5":"고급 차량과 전담 기사","membership.benefit6":"CHASE 유텐 제휴 브랜드 특별 혜택","membership.benefit7":"회원 전용 혜택 및 우선 예약","membership.apply":"멤버십 신청",
  "contact.eyebrow":"CONTACT · 문의","contact.title":"전담 상담을<br />시작하세요","contact.copy":"연락처를 남겨주시면 유텐 멤버십 어드바이저가 24시간 이내 직접 연락드립니다. 모든 정보는 엄격히 비밀로 관리됩니다.","contact.messaging":"MESSAGING · 메시지","form.name":"성함","form.phone":"연락처","form.email":"이메일","form.message":"요청 내용","form.namePlaceholder":"어떻게 불러드릴까요?","form.phonePlaceholder":"국가번호 포함","form.messagePlaceholder":"유텐에 원하시는安排를 간단히 적어주세요","form.submit":"신청 제출","footer.copy":"극소수를 위해 준비된 세계. 프라이빗 컨시어지, 절대적 프라이버시.","footer.privacy":"개인정보 처리방침","footer.terms":"서비스 약관"
};
translations.th = { ...translations.en,
  "nav.about":"เกี่ยวกับ","nav.services":"บริการ","nav.aviation":"การบิน","nav.yacht":"ยอชต์","nav.chauffeur":"รถรับส่ง","nav.membership":"สมาชิก","nav.contact":"ติดต่อ","nav.cta":"นัดปรึกษา","nav.menuOpen":"เปิดเมนู",
  "hero.eyebrow":"PRIVATE CONCIERGE · คอนเซียร์จส่วนตัว","hero.title":"โลกที่จัดเตรียมไว้<br />สำหรับคนเพียงไม่กี่คน","hero.copy":"CHASE Concierge ดูแลการเดินทางทางอากาศ ทางทะเล และทางบกอย่างเป็นส่วนตัว รอบคอบ และละเอียดที่สุด",
  "about.eyebrow":"ABOUT · เกี่ยวกับ CHASE","about.title":"ความสงบนิ่ง<br />คือการต้อนรับระดับสูงสุด","about.lead":"CHASE Concierge อยู่เหนือแสงสปอตไลต์ เราไม่มุ่งขยายขนาด แต่ดูแลเฉพาะผู้ที่ไว้วางใจเรา ตั้งแต่การขึ้นบิน ขึ้นเรือ จนถึงจุดหมายปลายทาง ทุกช่วงการเดินทางได้รับการจัดการโดยทีมเฉพาะมาตรฐานสูงสุด","about.copy":"ความหรูหราที่แท้จริงไม่ใช่การครอบครอง แต่คือความสบายใจ เมื่อคุณมอบเวลาให้เรา ความยุ่งยากจะถอยออกไป เหลือไว้เพียงความสงบ ความเป็นส่วนตัว และอิสระ",
  "stats.always":"พร้อมตลอด 24 ชั่วโมง","stats.cities":"เมืองทั่วโลก","stats.concierge":"คอนเซียร์จส่วนตัว","stats.limitless":"ไม่จำกัดกรอบ",
  "services.eyebrow":"SERVICES · บริการ","services.title":"ทุกช่วงการเดินทางพร้อมแล้ว","services.copy":"การบิน ยอชต์ และรถรับส่งหรู คือบริการเคลื่อนที่หลักของ CHASE Concierge","services.aviationTitle":"การบินส่วนตัว","services.aviationCopy":"จัดหาเครื่องบินส่วนตัวและเฮลิคอปเตอร์ตามเส้นทาง เวลา และรูปแบบการขึ้นเครื่องของคุณ","services.yachtTitle":"สิทธิพิเศษด้านยอชต์","services.yachtCopy":"ยอชต์ระดับสูง ลูกเรือเฉพาะ และการวางแผนเส้นทาง เปลี่ยนเวลาบนทะเลให้เป็นพื้นที่ส่วนตัว","services.chauffeurTitle":"รถรับส่งหรู","services.chauffeurCopy":"คนขับส่วนตัว รถระดับคอนเซียร์จ และการรับส่งแบบจุดต่อจุดที่ตรงเวลา เป็นส่วนตัว และใส่ใจ",
  "aviation.eyebrow":"AVIATION · การบินส่วนตัว","aviation.title":"ท้องฟ้า ตามนิยามของคุณ","aviation.copy1":"ไม่ว่าจะเป็นเครื่องบินส่วนตัวหรือเฮลิคอปเตอร์ CHASE จะประสานเครื่องและเส้นทางที่เหมาะที่สุดสำหรับทุกการออกเดินทาง","aviation.copy2":"อาคารผู้โดยสารส่วนตัว การผ่านพิธีการอย่างรวดเร็ว และรถรับส่งหลังลงจอดจะถูกเตรียมไว้ล่วงหน้า","aviation.item1":"ประสานเครื่องบินส่วนตัว","aviation.item2":"บริการเฮลิคอปเตอร์รับส่ง","aviation.item3":"อาคารส่วนตัวและผ่านพิธีการรวดเร็ว","aviation.item4":"ประสานเที่ยวบินแบบเรียลไทม์",
  "yacht.eyebrow":"YACHT · บริการทางทะเล","yacht.title":"ทะเล ก็เป็นพื้นที่ส่วนตัวได้","yacht.copy1":"ตั้งแต่เมดิเตอร์เรเนียนถึงแปซิฟิกใต้ CHASE จัดหายอชต์ระดับสูงและลูกเรือเฉพาะสำหรับเวลาส่วนตัวบนทะเล","yacht.copy2":"เส้นทาง อาหาร และการเชื่อมต่อบนฝั่งจะถูกประสานเป็นแผนเดียวอย่างราบรื่น","yacht.item1":"เช่ายอชต์ทั่วโลก","yacht.item2":"ลูกเรือและเชฟส่วนตัว","yacht.item3":"วางแผนเส้นทางและจุดจอด","yacht.item4":"เชื่อมต่อรถรับส่งบนฝั่ง",
  "chauffeur.eyebrow":"CHAUFFEUR · รถรับส่งหรู","chauffeur.title":"บนพื้นดิน ทุกรายละเอียดต้องพอดี","chauffeur.copy1":"ระหว่างสนามบิน ท่าเรือ เมือง และนัดหมายส่วนตัว CHASE เชื่อมต่อทุกช่วงด้วยรถระดับสูงและคนขับเฉพาะ","chauffeur.copy2":"ประเภทรถ เส้นทาง เวลารอ และรายละเอียดการรับรองจะถูกยืนยันล่วงหน้า เพื่อให้การมาถึงสงบและราบรื่น","chauffeur.item1":"รถหรูรับส่ง","chauffeur.item2":"คนขับส่วนตัวพร้อมรอ","chauffeur.item3":"เชื่อมต่อสนามบินและท่าเรือ","chauffeur.item4":"เดินทางส่วนตัวแบบจุดต่อจุด",
  "membership.eyebrow":"MEMBERSHIP · สมาชิก","membership.title":"เปิดรับเฉพาะผู้ได้รับเชิญ","membership.copy":"CHASE Concierge จำกัดจำนวนสมาชิก เพื่อให้สมาชิกแต่ละท่านได้รับการดูแลอย่างเหมาะสม การสมัครจะได้รับการพิจารณาเป็นรายบุคคล","membership.planTitle":"尊榮","membership.planCopy":"สำหรับสมาชิกที่ให้ความสำคัญกับประสิทธิภาพ ความเป็นส่วนตัว และรายละเอียด CHASE มอบคอนเซียร์จ 1:1 เพื่อดูแลการบิน ยอชต์ รถรับส่งหรู และสิทธิพิเศษจากพันธมิตร","membership.benefit1":"คอนเซียร์จส่วนตัวแบบ 1:1","membership.benefit2":"จัดหาเครื่องบินส่วนตัวและเฮลิคอปเตอร์","membership.benefit3":"ผ่านพิธีการรวดเร็วและอาคารผู้โดยสารส่วนตัว","membership.benefit4":"ยอชต์ทั่วโลกและรถรับส่งบนฝั่ง","membership.benefit5":"รถหรูและคนขับส่วนตัว","membership.benefit6":"สิทธิพิเศษจากแบรนด์พันธมิตร CHASE","membership.benefit7":"ข้อเสนอเฉพาะสมาชิกและสิทธิ์จองก่อน","membership.apply":"สมัครสมาชิก",
  "contact.eyebrow":"CONTACT · ติดต่อเรา","contact.title":"เริ่มต้นบทสนทนา<br />แบบส่วนตัว","contact.copy":"ฝากข้อมูลติดต่อไว้ ที่ปรึกษาสมาชิกของ CHASE จะติดต่อกลับภายใน 24 ชั่วโมง ข้อมูลทั้งหมดจะถูกเก็บเป็นความลับอย่างเคร่งครัด","contact.messaging":"MESSAGING · ข้อความ","form.name":"ชื่อ","form.phone":"โทรศัพท์","form.email":"อีเมล","form.message":"รายละเอียดคำขอ","form.namePlaceholder":"ต้องการให้เราเรียกคุณว่าอย่างไร","form.phonePlaceholder":"รวมรหัสประเทศ","form.messagePlaceholder":"อธิบายสิ่งที่ต้องการให้ CHASE จัดเตรียมโดยย่อ","form.submit":"ส่งคำขอ","footer.copy":"โลกที่จัดเตรียมไว้สำหรับคนเพียงไม่กี่คน คอนเซียร์จส่วนตัว พร้อมความเป็นส่วนตัวสูงสุด","footer.privacy":"นโยบายความเป็นส่วนตัว","footer.terms":"เงื่อนไขการให้บริการ"
};
translations.es = { ...translations.en,
  "nav.about":"Acerca de","nav.services":"Servicios","nav.aviation":"Aviación","nav.yacht":"Yates","nav.chauffeur":"Traslados","nav.membership":"Membresía","nav.contact":"Contacto","nav.cta":"Consulta","nav.menuOpen":"Abrir menú",
  "hero.eyebrow":"PRIVATE CONCIERGE · Concierge privado","hero.title":"Un mundo dispuesto<br />para unos pocos","hero.copy":"CHASE Concierge coordina cada trayecto por aire, mar y tierra con absoluta discreción y atención al detalle.",
  "about.eyebrow":"ABOUT · Sobre CHASE","about.title":"La discreción<br />es la cortesía más alta","about.lead":"CHASE Concierge existe fuera del foco público. No buscamos escala; servimos a las pocas personas que confían en nosotros. Desde el despegue y el embarque hasta la llegada final, cada movimiento es atendido por un equipo dedicado con el más alto estándar.","about.copy":"El verdadero lujo no consiste en poseer, sino en moverse con calma. Al confiarnos su tiempo, la complejidad se retira y permanecen la privacidad, la serenidad y la libertad.",
  "stats.always":"Siempre disponible","stats.cities":"Ciudades globales","stats.concierge":"Concierge dedicado","stats.limitless":"Sin límite fijo",
  "services.eyebrow":"SERVICES · Servicios","services.title":"Cada tramo, ya dispuesto","services.copy":"Aviación, yates y traslados de lujo forman el núcleo de movilidad de CHASE Concierge.","services.aviationTitle":"Aviación privada","services.aviationCopy":"Jets privados y helicópteros coordinados según su ruta, horario y preferencias de embarque.","services.yachtTitle":"Privilegios de yate","services.yachtCopy":"Yates de primer nivel, tripulación dedicada y planificación de ruta para convertir el mar en un espacio privado.","services.chauffeurTitle":"Traslados de lujo","services.chauffeurCopy":"Choferes dedicados, vehículos de concierge y traslados punto a punto con puntualidad, privacidad y cuidado.",
  "aviation.eyebrow":"AVIATION · Aviación privada","aviation.title":"El cielo, definido por usted","aviation.copy1":"Ya sea en jet privado o helicóptero, CHASE coordina la aeronave y la ruta adecuadas para cada salida.","aviation.copy2":"Terminal privada, despacho rápido y conexión terrestre posterior al aterrizaje quedan preparados antes de su llegada.","aviation.item1":"Coordinación de jets privados","aviation.item2":"Traslados en helicóptero","aviation.item3":"Terminales privadas y despacho rápido","aviation.item4":"Coordinación de vuelos en tiempo real",
  "yacht.eyebrow":"YACHT · En el mar","yacht.title":"El océano, hecho privado","yacht.copy1":"Del Mediterráneo al Pacífico Sur, CHASE organiza yates de primer nivel y tripulación dedicada para un tiempo privado en el mar.","yacht.copy2":"Rutas, gastronomía y conexiones en tierra se coordinan como un itinerario continuo.","yacht.item1":"Charters de yates globales","yacht.item2":"Tripulación y chefs privados","yacht.item3":"Planificación de rutas y amarres","yacht.item4":"Coordinación de traslados en tierra",
  "chauffeur.eyebrow":"CHAUFFEUR · Traslados de lujo","chauffeur.title":"En tierra, cada detalle tiene su lugar","chauffeur.copy1":"Entre aeropuertos, marinas, ciudades y compromisos privados, CHASE completa cada conexión con vehículos refinados y choferes dedicados.","chauffeur.copy2":"Clase de vehículo, ruta, tiempo de espera y detalles de recepción se confirman por adelantado para que la llegada conserve calma y compostura.","chauffeur.item1":"Traslados en vehículos de lujo","chauffeur.item2":"Choferes dedicados en espera","chauffeur.item3":"Conexiones con aeropuertos y marinas","chauffeur.item4":"Trayectos privados punto a punto",
  "membership.eyebrow":"MEMBERSHIP · Membresía","membership.title":"Solo por invitación","membership.copy":"CHASE Concierge mantiene una membresía limitada para que cada miembro reciba la atención que merece. Las solicitudes se revisan individualmente.","membership.planTitle":"尊榮","membership.planCopy":"Diseñada para miembros que valoran eficiencia, privacidad y precisión. CHASE ofrece un concierge 1:1 para coordinar aviación, yates, traslados de lujo y privilegios con marcas asociadas.","membership.benefit1":"Concierge dedicado 1:1","membership.benefit2":"Aviación privada y helicópteros","membership.benefit3":"Despacho rápido y terminal privada","membership.benefit4":"Acceso global a yates y traslados en tierra","membership.benefit5":"Vehículos de lujo con chofer dedicado","membership.benefit6":"Privilegios de marcas asociadas a CHASE","membership.benefit7":"Tarifas exclusivas y reservas prioritarias","membership.apply":"Solicitar membresía",
  "contact.eyebrow":"CONTACT · Contacto","contact.title":"Inicie una conversación<br />privada","contact.copy":"Deje sus datos de contacto y un asesor de membresía de CHASE se comunicará personalmente en un plazo de 24 horas. Toda la información se trata con estricta confidencialidad.","contact.messaging":"MESSAGING · Mensajería","form.name":"Nombre","form.phone":"Teléfono","form.email":"Correo electrónico","form.message":"Detalles de la solicitud","form.namePlaceholder":"Cómo debemos dirigirnos a usted","form.phonePlaceholder":"Incluya el código de país","form.messagePlaceholder":"Describa brevemente lo que desea que CHASE organice","form.submit":"Enviar solicitud","footer.copy":"Un mundo dispuesto para unos pocos. Concierge privado, absoluta discreción.","footer.privacy":"Política de privacidad","footer.terms":"Términos de servicio"
};
function translateValue(lang, key) {
  return translations[lang]?.[key] ?? translations.en?.[key] ?? translations.zh[key] ?? key;
}

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : "zh";
  document.documentElement.lang = selected === "zh" ? "zh-Hant" : selected;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translateValue(selected, node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = translateValue(selected, node.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) node.setAttribute(attr, translateValue(selected, key));
    });
  });
  document.title = translateValue(selected, "meta.title");
  if (languageCurrent) languageCurrent.textContent = languageLabels[selected];
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === selected);
  });
  localStorage.setItem("chase-language", selected);
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  scrollTicking = false;
}

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

languageButton?.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("open");
  languageButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-item")) {
    languageMenu?.classList.remove("open");
    languageButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    languageMenu?.classList.remove("open");
    languageButton?.setAttribute("aria-expanded", "false");
    header.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});



document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item?.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });
});
document.querySelectorAll("[data-service-request]").forEach((link) => {
  link.addEventListener("click", () => {
    const selected = localStorage.getItem("chase-language") || "zh";
    const key = `serviceRequest.${link.dataset.serviceRequest}`;
    const message = contactForm?.querySelector("textarea[name='message']");
    if (message) message.value = translateValue(selected, key);
    formStatus?.setAttribute("hidden", "");
    formStatus?.classList.remove("is-visible");
  });
});

document.querySelector("[data-i18n='membership.apply']")?.addEventListener("click", () => {
  const selected = localStorage.getItem("chase-language") || "zh";
  const message = contactForm?.querySelector("textarea[name='message']");
  if (message) message.value = translateValue(selected, "serviceRequest.membership");
  formStatus?.setAttribute("hidden", "");
  formStatus?.classList.remove("is-visible");
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = localStorage.getItem("chase-language") || "zh";
  if (formStatus) {
    formStatus.textContent = translateValue(selected, "form.statusReceived");
    formStatus.removeAttribute("hidden");
    requestAnimationFrame(() => formStatus.classList.add("is-visible"));
  }
  contactForm.querySelector(".submit-button")?.blur();
});
window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(updateHeader);
  }
}, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

applyLanguage(localStorage.getItem("chase-language") || "zh");
updateHeader();
