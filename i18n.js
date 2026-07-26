/* Sabai Dee Thai massage & Spa — EN / עברית / ไทย */
(function (global) {
  var SITE_URL = "https://sabaidee.co.il";

  var T = {
    en: {
      meta_title: "Sabai Dee Thai massage & Spa — Jerusalem",
      meta_desc:
        "Thai-only massage and spa in Jerusalem — Sabai Dee Thai massage & Spa (สบายดี). sabaidee.co.il · Rooted in Thailand. Booking and visit details.",
      logo_aria: "Sabai Dee Thai massage & Spa — home",
      logo_tagline: "Sabai Dee Thai massage & Spa",
      nav_about: "About",
      nav_treatments: "Treatments",
      nav_prices: "Prices",
      nav_reviews: "Reviews",
      nav_contact: "Contact",
      nav_visit: "Visit",
      nav_open: "Open menu",
      nav_close: "Close menu",
      lang_label: "Language",
      hero_eyebrow: "Jerusalem · Ben Sira 3 · Thai massage only",
      hero_title_1: "Stillness,",
      hero_title_em: "made tangible.",
      hero_lede:
        "Thai techniques learned and practiced the Thai way — here in Jerusalem, with calm hands and no rush. Only Thai-style massage and spa care.",
      hero_btn_primary: "Book or inquire",
      hero_btn_ghost: "View treatments",
      about_h2: "About",
      about_kicker: "From Thailand, in Jerusalem",
      about_p1:
        "Sabai Dee (สบายดี) is our greeting and our promise: ease in the body. The studio is rooted in Thailand — training and rhythm come from there — and we keep the menu strictly Thai: traditional mat massage, oil massage, herbal compress, foot work, and small spa touches from the same tradition.",
      about_p2:
        "We do not mix in Swedish or other Western styles. Sessions are tuned to you with Thai pressure levels, stretching, and breath — quiet room, clear communication, and respect for how your body feels that day.",
      about_credentials_h: "Training & credentials",
      about_ann_p:
        "Our spa manager, Ann Jamnong, recently completed a training program organized by the Thai Ambassador — with two teachers brought from Thailand on office syndrome (desk-related tension and strain). The certificate was presented by the Thai Ambassador; it joins the three certifications Ann already holds.",
      treatments_h2: "Treatments",
      treatments_kicker: "Thai traditions only",
      t1_h: "Traditional Thai massage",
      t1_p:
        "Mat-based classic Nuad Thai: rhythmic pressure, stretching, and energy lines — clothes on, deep release without oil.",
      t2_h: "Thai massage with oils",
      t2_p:
        "Classic Thai technique with warm oils worked into the session — rhythmic pressure and stretches with an aromatic, relaxing layer.",
      t3_h: "Neck, back & shoulders",
      t3_p:
        "Focused Thai work on the upper back, shoulders, and neck — ideal for desk tension, stiffness, and office syndrome.",
      t4_h: "Head massage",
      t4_p:
        "Thai-style scalp and head work to ease tension, improve circulation, and quiet the mind — often paired with neck release.",
      t5_h: "Four-hands massage",
      t5_p:
        "Two therapists in synchronized Thai rhythm — deeper release, full-body flow, and a luxurious, enveloping experience.",
      t6_h: "Thai foot massage",
      t6_p:
        "Thai-style work on the soles and feet — pressure points and lines while seated comfortably.",
      t7_h: "Hot stone massage",
      t7_p:
        "Warm stones placed and glided in Thai rhythm to melt tension, ease stiffness, and deepen relaxation.",
      prices_h2: "Prices",
      prices_kicker: "Thai massage menu",
      prices_note: "All prices in NIS (₪).",
      price_col_treatment: "Treatment",
      price_col_30: "30 min",
      price_col_50: "50 min",
      price_col_60: "60 min",
      price_col_90: "90 min",
      price_col_120: "120 min",
      price_na: "—",
      price_row_body_h: "Body massage · Traditional Thai / with oils",
      price_body_30: "—",
      price_body_50: "₪260",
      price_body_60: "₪280",
      price_body_90: "₪400",
      price_body_120: "₪550",
      price_t3_30: "₪150",
      price_t3_50: "₪250",
      price_t3_60: "₪260",
      price_t3_90: "—",
      price_t3_120: "—",
      price_t4_30: "₪150",
      price_t4_50: "₪230",
      price_t4_60: "₪250",
      price_t4_90: "₪380",
      price_t4_120: "—",
      price_t5_30: "₪300",
      price_t5_50: "₪500",
      price_t5_60: "₪550",
      price_t5_90: "₪700",
      price_t5_120: "—",
      price_t6_30: "₪150",
      price_t6_50: "₪230",
      price_t6_60: "₪250",
      price_t6_90: "—",
      price_t6_120: "—",
      price_t7_30: "—",
      price_t7_50: "—",
      price_t7_60: "₪330",
      price_t7_90: "₪450",
      price_t7_120: "—",
      reviews_h2: "Guest voices",
      reviews_kicker: "What visitors say",
      reviews_note: "Sample guest experiences — names changed for privacy.",
      r1_name: "Michal · Jerusalem",
      r1_text:
        "The traditional Thai massage was exactly what I needed — strong, precise, and still calming. The room on Ben Sira feels like a small escape.",
      r2_name: "David · Mevaseret",
      r2_text:
        "I've tried Thai massage in Thailand and this is the closest I've found in Jerusalem. Ann really knows the stretches and pressure points.",
      r3_name: "Ronit · German Colony",
      r3_text:
        "Booked oil massage after a stressful week. Warm oil, slow rhythm, and zero rush. I'll be back for 90 minutes next time.",
      r4_name: "James · visitor",
      r4_text:
        "Clean, quiet, and professional. Foot massage after walking the Old City was a lifesaver. Easy to find on Ben Sira.",
      r5_name: "Ofra · Talpiot",
      r5_text:
        "Only Thai treatments — no mixed styles — and you can feel it. Herbal compress on the back was wonderful with the massage.",
      r6_name: "Yossi · Beit HaKerem",
      r6_text:
        "Friendly team, clear communication, and fair prices. Haim helped me book a Friday morning slot without hassle.",
      r7_name: "Shira · City Center",
      r7_text:
        "A new spa that already feels established. Soft lighting, Thai details, and therapists who listen to how your body feels that day.",
      r8_name: "Alon · Givat Ze'ev",
      r8_text:
        "My partner and I both had traditional massage. Deep release in the shoulders and hips — we walked out floating.",
      contact_h2: "Contact",
      contact_kicker: "We reply personally",
      contact_intro:
        "Send a message with your preferred times and any health notes we should know. We will confirm availability by email or phone.",
      lbl_email: "Email",
      lbl_phone_spa: "Appointments",
      lbl_hours: "Opening hours",
      hours_weekdays: "Sun–Thu 10:00–21:30",
      hours_friday: "Fri 9:00–15:30",
      lbl_managers: "Managers",
      phone_spa_tel: "+97274824666",
      phone_spa_display: "07-482-4666",
      manager_ann: "Ann",
      phone_ann_tel: "+972559906352",
      phone_ann_display: "055-990-6352",
      manager_haim: "Haim",
      phone_haim_tel: "+972548132322",
      phone_haim_display: "054-813-2322",
      lbl_website: "Website",
      site_link: "sabaidee.co.il",
      contact_email: "spa@sabaidee.co.il",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      ph_name: "Your name",
      ph_email: "you@email.com",
      ph_message: "Treatment interest, preferred days…",
      form_submit: "Send message",
      form_sending: "Sending…",
      form_success: "Thank you — we received your message and will reply soon.",
      form_error: "Something went wrong. Please try again or email us directly.",
      form_need_key:
        "Form is not connected yet: create a form at formspree.io and set data-formspree-id on the form in index.html to your form id (the letters after /f/ in the endpoint URL).",
      form_email_subject: "Sabai Dee — website contact",
      thank_you_title: "Thank you",
      thank_you_lede: "We received your message and will reply soon by email or phone.",
      thank_you_back: "Back to home",
      thank_you_call: "Or call for appointments:",
      visit_h2: "Visit us",
      visit_kicker: "Address",
      address_line1: "3 Ben Sira Street",
      address_line2: "Jerusalem, Israel",
      visit_note: "New Thai spa in central Jerusalem — Ben Sira 3.",
      map_title: "Map — Sabai Dee, Ben Sira 3, Jerusalem",
      footer_tag: "Sabai Dee Thai massage & Spa · Jerusalem",
      footer_contact: "Contact",
      img_hero_alt: "Calm Thai massage and spa atmosphere",
      img_about_alt: "Peaceful treatment space with natural light",
      img_t1_alt: "Traditional Thai massage on a mat",
      img_t2_alt: "Thai massage with warm oils on the back",
      img_t3_alt: "Thai massage focusing on neck, back and shoulders",
      img_t4_alt: "Relaxing Thai head and scalp massage",
      img_t5_alt: "Four-hands Thai massage with two therapists",
      img_t6_alt: "Thai foot massage on the soles",
      img_t7_alt: "Hot stone massage on the back",
    },
    he: {
      meta_title: "עיסוי תאילנדי בירושלים — Sabai Dee | בן סירא 3",
      meta_desc:
        "עיסוי תאילנדי וספא תאילנדי בלבד — Sabai Dee, רחוב בן סירא 3 ירושלים. עיסוי מסורתי, שמן תאילנדי, כרית עשבים. זימון 07-482-4666 · sabaidee.co.il",
      logo_aria: "Sabai Dee Thai massage & Spa — דף הבית",
      logo_tagline: "Sabai Dee Thai massage & Spa · סבאי די עיסוי תאילנדי וספא",
      nav_about: "אודות",
      nav_treatments: "טיפולים",
      nav_prices: "מחירון",
      nav_reviews: "המלצות",
      nav_contact: "צור קשר",
      nav_visit: "הגעה",
      nav_open: "פתח תפריט",
      nav_close: "סגור תפריט",
      lang_label: "שפה",
      hero_eyebrow: "ירושלים · בן סירא 3 · עיסוי תאילנדי",
      hero_title_1: "שקט",
      hero_title_em: "שנוגע בגוף.",
      hero_lede:
        "ספא Sabai Dee ברחוב בן סירא 3, ירושלים — עיסוי תאילנדי מסורתי, עיסוי שמן תאילנדי וטיפולי ספא תאילנדי בלבד. טכניקות שנלמדו בתאילנד, בידיים רגועות ובלי למהר.",
      hero_btn_primary: "זימון או שאלה",
      hero_btn_ghost: "לסוגי הטיפולים",
      about_h2: "אודות",
      about_kicker: "מתאילנד, בירושלים",
      about_p1:
        "בסבאי די, רחוב בן סירא 3 בירושלים, Sabai Dee (สบายดี) הוא הברכה וההבטחה שלנו: נוחות בגוף. הסטודיו שורש בתאילנד — ההכשרה והקצב מגיעים משם — והתפריט נשאר עיסוי תאילנדי בלבד: מסורתי, בשילוב שמנים, צוואר–גב–כתפיים, ראש, ארבע ידיים, כפות רגליים ואבנים חמות.",
      about_p2:
        "לא משלבים שוודי או סגנונות מערביים אחרים. כל מפגש מכוון אליכם עם רמות לחץ תאילנדיות, מתיחות ונשימה — חדר שקט, תקשורת ברורה, וכבוד לאיך שהגוף מרגיש באותו יום.",
      about_credentials_h: "השתלמויות ותעודות",
      about_ann_p:
        "מנהלת הספא, הגב' Ann Jamnong, סיימה לאחרונה השתלמות שאירגן השגריר התאילנדי, שבמסגרתה הגיעו לישראל שני מורים מטאילנד בנושא תסמונת המשרד (office syndrome). תעודה על ההשתלמות הוענקה על ידי השגריר התאילנדי; תעודה זו מתווספת לשלוש התעודות הקיימות של Ann.",
      treatments_h2: "טיפולים",
      treatments_kicker: "רק מסורת תאילנדית",
      t1_h: "עיסוי תאילנדי מסורתי",
      t1_p:
        "נואד תאי קלאסי על מזרן: לחץ קצבי, מתיחות וקווי אנרגיה — עם בגדים, שחרור עמוק בלי שמן.",
      t2_h: "עיסוי תאילנדי בשילוב שמנים",
      t2_p:
        "טכניקה תאילנדית קלאסית עם שמנים חמים במהלך העיסוי — לחץ קצבי, מתיחות ושכבה ארומטית מרגיעה.",
      t3_h: "עיסוי צוואר, גב וכתפיים",
      t3_p:
        "עבודה ממוקדת על הגב העליון, הכתפיים והצוואר בסגנון תאילנדי — מצוין לתסמונת משרד, מתח ונוקשות.",
      t4_h: "עיסוי ראש",
      t4_p:
        "עיסוי קרקפת וראש בתאילנדית להקלה במתח, שיפור זרימה ורוגע — לעיתים בשילוב שחרור צוואר.",
      t5_h: "עיסוי 4 ידיים",
      t5_p:
        "שני מטפלים בקצב תאילנדי מסונכרן — שחרור עמוק יותר, זרימה על כל הגוף וחוויה מפנקת.",
      t6_h: "עיסוי תאילנדי בכפות רגליים",
      t6_p:
        "עבודה תאילנדית על כפות הרגליים — לחץ, קווים ונקודות אנרגיה בישיבה נוחה.",
      t7_h: "עיסוי אבנים חמות",
      t7_p:
        "אבנים חמות מונחות ומגולגלות בקצב תאילנדי — להמסת מתח, הקלה בנוקשות והרפיה עמוקה.",
      prices_h2: "מחירון",
      prices_kicker: "תפריט עיסוי תאילנדי",
      prices_note: "כל המחירים בשקלים (₪).",
      price_col_treatment: "טיפול",
      price_col_30: "30 דק׳",
      price_col_50: "50 דק׳",
      price_col_60: "60 דק׳",
      price_col_90: "90 דק׳",
      price_col_120: "120 דק׳",
      price_na: "—",
      price_row_body_h: "עיסויי גוף · תאילנדי מסורתי / בשילוב שמנים",
      price_body_30: "—",
      price_body_50: "₪260",
      price_body_60: "₪280",
      price_body_90: "₪400",
      price_body_120: "₪550",
      price_t3_30: "₪150",
      price_t3_50: "₪250",
      price_t3_60: "₪260",
      price_t3_90: "—",
      price_t3_120: "—",
      price_t4_30: "₪150",
      price_t4_50: "₪230",
      price_t4_60: "₪250",
      price_t4_90: "₪380",
      price_t4_120: "—",
      price_t5_30: "₪300",
      price_t5_50: "₪500",
      price_t5_60: "₪550",
      price_t5_90: "₪700",
      price_t5_120: "—",
      price_t6_30: "₪150",
      price_t6_50: "₪230",
      price_t6_60: "₪250",
      price_t6_90: "—",
      price_t6_120: "—",
      price_t7_30: "—",
      price_t7_50: "—",
      price_t7_60: "₪330",
      price_t7_90: "₪450",
      price_t7_120: "—",
      reviews_h2: "מה אומרים עלינו",
      reviews_kicker: "חוויות מלקוחות",
      reviews_note: "המלצות לדוגמה — שמות שונו לשמירה על פרטיות.",
      r1_name: "מיכל · ירושלים",
      r1_text:
        "עיסוי תאילנדי מסורתי בדיוק במידה הנכונה — חזק, מדויק, ובכל זאת מרגיע. החדר ברחוב בן סירא מרגיש כמו בריחה קטנה מהעיר.",
      r2_name: "דוד · מבשרת",
      r2_text:
        "ניסיתי עיסוי תאילנדי בתאילנד, וזה הכי קרוב שמצאתי בירושלים. לאן יודעת את המתיחות ונקודות הלחץ.",
      r3_name: "רונית · המושבה הגרמנית",
      r3_text:
        "הזמנתי עיסוי בשילוב שמנים אחרי שבוע לחוץ. שמן חם, קצב איטי, ובלי למהר. בפעם הבאה אקח 90 דקות.",
      r4_name: "James · מבקר",
      r4_text:
        "נקי, שקט ומקצועי. עיסוי רגליים אחרי הליכה בעיר העתיקה הציל אותי. קל למצוא בבן סירא.",
      r5_name: "עפרה · תלפיות",
      r5_text:
        "רק טיפולים תאילנדיים — בלי ערבוב סגנונות — וזה מורגש. עיסוי האבנים החמות על הגב היה מדהים.",
      r6_name: "יוסי · בית הכרם",
      r6_text:
        "צוות אדיב, תקשורת ברורה, ומחירים הוגנים. חיים עזר לי לתאם תור לשישי בבוקר בלי כאב ראש.",
      r7_name: "שירה · מרכז העיר",
      r7_text:
        "ספא חדש שכבר מרגיש מבוסס. תאורה רכה, פרטים תאילנדיים, ומטפלים שמקשיבים לאיך שהגוף מרגיש באותו יום.",
      r8_name: "אלון · גבעת זאב",
      r8_text:
        "אני והבת זוג עשינו עיסוי מסורתי. שחרור עמוק בכתפיים ובירכיים — יצאנו צפים.",
      contact_h2: "צור קשר",
      contact_kicker: "עונים באופן אישי",
      contact_intro:
        "שלחו הודעה עם זמנים מועדפים וכל מידע בריאותי שחשוב שנדע. נאשר זמינות במייל או בטלפון.",
      lbl_email: "דוא\"ל",
      lbl_phone_spa: "זימון תורים",
      lbl_hours: "שעות פתיחה",
      hours_weekdays: "א׳–ה׳ 10:00–21:30",
      hours_friday: "יום שישי 9:00–15:30",
      lbl_managers: "מנהלים",
      phone_spa_tel: "+97274824666",
      phone_spa_display: "07-482-4666",
      manager_ann: "אן",
      phone_ann_tel: "+972559906352",
      phone_ann_display: "055-990-6352",
      manager_haim: "חיים",
      phone_haim_tel: "+972548132322",
      phone_haim_display: "054-813-2322",
      lbl_website: "אתר",
      site_link: "sabaidee.co.il",
      contact_email: "spa@sabaidee.co.il",
      form_name: "שם",
      form_email: "דוא\"ל",
      form_message: "הודעה",
      ph_name: "השם שלכם",
      ph_email: "you@email.com",
      ph_message: "סוג טיפול, ימים מועדפים…",
      form_submit: "שליחת הודעה",
      form_sending: "שולחים…",
      form_success: "תודה — קיבלנו את ההודעה ונחזור אליכם בקרוב.",
      form_error: "משהו השתבש. נסו שוב או כתבו אלינו במייל ישירות.",
      form_need_key:
        "הטופס עדיין לא מחובר: צרו טופס ב־formspree.io והגדירו ב־index.html ב־data-formspree-id את מזהה הטופס (האותיות אחרי /f/ בכתובת).",
      form_email_subject: "Sabai Dee — פנייה מהאתר",
      thank_you_title: "תודה — קיבלנו את ההודעה",
      thank_you_lede: "נחזור אליכם בהקדם במייל או בטלפון.",
      thank_you_back: "חזרה לדף הבית",
      thank_you_call: "או לזימון תורים:",
      visit_h2: "לבקר אותנו",
      visit_kicker: "כתובת",
      address_line1: "בן סירא 3",
      address_line2: "ירושלים",
      visit_note:
        "ספא תאילנדי במרכז ירושלים — בן סירא 3, ליד העיר העתיקה. עיסוי תאילנדי, זימון תורים בטלפון 07-482-4666.",
      map_title: "מפה — Sabai Dee, בן סירא 3, ירושלים",
      footer_tag: "Sabai Dee Thai massage & Spa · ירושלים",
      footer_contact: "צור קשר",
      img_hero_alt: "אווירת ספא ועיסוי רגועה",
      img_about_alt: "חלל טיפולים שקט עם אור טבעי",
      img_t1_alt: "עיסוי תאילנדי מסורתי על מזרן",
      img_t2_alt: "עיסוי תאילנדי בשילוב שמנים על הגב",
      img_t3_alt: "עיסוי תאילנדי בצוואר, גב וכתפיים",
      img_t4_alt: "עיסוי ראש תאילנדי מרגיע",
      img_t5_alt: "עיסוי 4 ידיים — שני מטפלים",
      img_t6_alt: "עיסוי תאילנדי בכפות רגליים",
      img_t7_alt: "עיסוי אבנים חמות על הגב",
    },
    th: {
      meta_title: "Sabai Dee Thai massage & Spa — เยรูซาเล็ม",
      meta_desc:
        "นวดและสปาแบบไทยล้วนในเยรูซาเล็ม — Sabai Dee Thai massage & Spa · sabaidee.co.il รากฐานจากไทย การจองและที่อยู่",
      logo_aria: "Sabai Dee Thai massage & Spa — หน้าแรก",
      logo_tagline: "Sabai Dee Thai massage & Spa",
      nav_about: "เกี่ยวกับเรา",
      nav_treatments: "ทรีตเมนต์",
      nav_prices: "ราคา",
      nav_reviews: "รีวิว",
      nav_contact: "ติดต่อ",
      nav_visit: "ที่ตั้ง",
      nav_open: "เปิดเมนู",
      nav_close: "ปิดเมนู",
      lang_label: "ภาษา",
      hero_eyebrow: "เยรูซาเล็ม · Ben Sira 3 · เฉพาะนวดไทย",
      hero_title_1: "ความนิ่ง",
      hero_title_em: "ที่สัมผัสได้จริง",
      hero_lede:
        "เทคนิคไทยที่เรียนและฝึกแบบไทยๆ — ที่นี่ในเยรูซาเล็ม มือนุ่ม ไม่เร่ง มีแค่นวดและสปาในสไตล์ไทยเท่านั้น",
      hero_btn_primary: "จองหรือสอบถาม",
      hero_btn_ghost: "ดูทรีตเมนต์",
      about_h2: "เกี่ยวกับเรา",
      about_kicker: "จากไทย สู่เยรูซาเล็ม",
      about_p1:
        "Sabai Dee (สบายดี) คือคำทักทายและคำมั่นของเรา: ความสบายในร่างกาย สตูดิโอมีรากจากไทย — การอบรมและจังหวะมาจากที่นั่น — และเมนูเป็นไทยล้วน: นวดบนเสื่อ นวดน้ำมัน ประคบสมุนไพร นวดเท้า และสัมผัสสปาเล็กๆ จากธรรมเนียมเดียวกัน",
      about_p2:
        "ไม่ผสมสวีเดนหรือสไตล์ตะวันตกอื่น ปรับเซสชันให้คุณด้วยระดับแรงกดแบบไทย การยืด และลมหายใจ — ห้องเงียบ สื่อสารชัดเจน เคารพว่าร่างกายรู้สึกอย่างไรในวันนั้น",
      about_credentials_h: "การฝึกอบรมและใบรับรอง",
      about_ann_p:
        "Ann Jamnong ผู้จัดการสปา เพิ่งจบการฝึกอบรมที่จัดโดยทูตไทย ซึ่งนำครูจากไทยสองท่านมาสอนเรื่องออฟฟิศซินโดรม (อาการจากการทำงานในออฟฟิศ) ได้รับใบรับรองจากทูตไทย และเป็นใบรับรองใบที่สี่ ต่อจากสามใบเดิม",
      treatments_h2: "ทรีตเมนต์",
      treatments_kicker: "เฉพาะประเพณีไทย",
      t1_h: "นวดไทยแผนโบราณ",
      t1_p:
        "นวดไทยคลาสสิกบนเสื่อ: จังหวะกด ยืดเหยียด และเส้นพลังงาน — ใส่เสื้อผ้า คลายความตึงลึกโดยไม่ใช้น้ำมัน",
      t2_h: "นวดไทยผสมน้ำมัน",
      t2_p:
        "เทคนิคนวดไทยคลาสสิกพร้อมน้ำมันอุ่น — กดจังหวะ ยืดเหยียด และกลิ่นหอมผ่อนคลาย",
      t3_h: "นวดคอ หลัง และไหล่",
      t3_p:
        "เน้นหลังส่วนบน ไหล่ และคอแบบไทย — เหมาะกับออฟฟิศซินโดรม ความตึงและความเมื่อย",
      t4_h: "นวดศีรษะ",
      t4_p:
        "นวดศีรษะและหนังศีรษะแบบไทย คลายความตึง เพิ่มการไหลเวียน และความสงบ",
      t5_h: "นวดสี่มือ",
      t5_p:
        "นักบำบัดสองคนทำงานพร้อมกันในจังหวะไทย — คลายลึก ไหลทั่วร่างกาย ประสบการณ์หรูหรา",
      t6_h: "นวดเท้าไทย",
      t6_p:
        "นวดฝ่าเท้าแบบไทย — กดจุดและเส้นทางพลังงานในท่านั่งสบาย",
      t7_h: "นวดหินร้อน",
      t7_p:
        "หินอุ่นวางและลูบไล้ตามจังหวะไทย — คลายความตึงและผ่อนคลายลึก",
      prices_h2: "ราคา",
      prices_kicker: "เมนูนวดไทย",
      prices_note: "ราคาเป็นชีเกล (₪)",
      price_col_treatment: "ทรีตเมนต์",
      price_col_30: "30 นาที",
      price_col_50: "50 นาที",
      price_col_60: "60 นาที",
      price_col_90: "90 นาที",
      price_col_120: "120 นาที",
      price_na: "—",
      price_row_body_h: "นวดตัว · ไทยแผนโบราณ / ผสมน้ำมัน",
      price_body_30: "—",
      price_body_50: "₪260",
      price_body_60: "₪280",
      price_body_90: "₪400",
      price_body_120: "₪550",
      price_t3_30: "₪150",
      price_t3_50: "₪250",
      price_t3_60: "₪260",
      price_t3_90: "—",
      price_t3_120: "—",
      price_t4_30: "₪150",
      price_t4_50: "₪230",
      price_t4_60: "₪250",
      price_t4_90: "₪380",
      price_t4_120: "—",
      price_t5_30: "₪300",
      price_t5_50: "₪500",
      price_t5_60: "₪550",
      price_t5_90: "₪700",
      price_t5_120: "—",
      price_t6_30: "₪150",
      price_t6_50: "₪230",
      price_t6_60: "₪250",
      price_t6_90: "—",
      price_t6_120: "—",
      price_t7_30: "—",
      price_t7_50: "—",
      price_t7_60: "₪330",
      price_t7_90: "₪450",
      price_t7_120: "—",
      reviews_h2: "เสียงจากแขก",
      reviews_kicker: "ประสบการณ์จากผู้มาใช้บริการ",
      reviews_note: "ตัวอย่างประสบการณ์ — เปลี่ยนชื่อเพื่อความเป็นส่วนตัว",
      r1_name: "Michal · เยรูซาเล็ม",
      r1_text:
        "นวดไทยแบบดั้งเดิมกำลังดีพอดี — แรง แม่นยำ และยังผ่อนคลาย ห้องที่ Ben Sira รู้สึกเหมือนหลบจากเมือง",
      r2_name: "David · Mevaseret",
      r2_text:
        "เคยนวดไทยที่ไทยแล้ว และที่นี่ใกล้เคียงที่สุดในเยรูซาเล็ม Ann เก่งเรื่องการยืดและจุดกด",
      r3_name: "Ronit · German Colony",
      r3_text:
        "จองนวดน้ำมันหลังสัปดาห์ที่เครียด น้ำมันอุ่น จังหวะช้า ไม่เร่ง ครั้งหน้าจะเอา 90 นาที",
      r4_name: "James · นักท่องเที่ยว",
      r4_text:
        "สะอาด เงียบ เป็นมืออาชีพ นวดเท้าหลังเดินในเมืองเก่าช่วยได้มาก หาเจอง่ายที่ Ben Sira",
      r5_name: "Ofra · Talpiot",
      r5_text:
        "มีแต่ทรีตเมนต์ไทย — ไม่ผสมสไตล์อื่น — และรู้สึกได้ ประคบสมุนไพรบนหลังดีมากคู่กับนวด",
      r6_name: "Yossi · Beit HaKerem",
      r6_text:
        "ทีมเป็นกันเอง สื่อสารชัดเจน ราคาเป็นธรรม Haim ช่วยจองคิวเช้าวันศุกร์ได้สะดวก",
      r7_name: "Shira · ใจกลางเมือง",
      r7_text:
        "สปาใหม่ที่รู้สึกมั่นคงแล้ว แสงนุ่ม รายละเอียดไทย และนักบำบัดที่ฟังว่าร่างกายรู้สึกอย่างไรในวันนั้น",
      r8_name: "Alon · Givat Ze'ev",
      r8_text:
        "ผมกับคู่รักนวดแบบดั้งเดิมทั้งคู่ คลายความตึงที่ไหล่และสะโพก — ออกมาเบาๆ",
      contact_h2: "ติดต่อ",
      contact_kicker: "ตอบกลับด้วยตนเอง",
      contact_intro:
        "ส่งข้อความพร้อมเวลาที่สะดวกและหมายเหตุด้านสุขภาพที่เราควรทราบ เราจะยืนยันคิวทางอีเมลหรือโทรศัพท์",
      lbl_email: "อีเมล",
      lbl_phone_spa: "จองที่สปา",
      lbl_hours: "เวลาเปิด",
      hours_weekdays: "อา.–พฤ. 10:00–21:30",
      hours_friday: "ศ. 9:00–15:30",
      lbl_managers: "ผู้จัดการ",
      phone_spa_tel: "+97274824666",
      phone_spa_display: "07-482-4666",
      manager_ann: "Ann",
      phone_ann_tel: "+972559906352",
      phone_ann_display: "055-990-6352",
      manager_haim: "Haim",
      phone_haim_tel: "+972548132322",
      phone_haim_display: "054-813-2322",
      lbl_website: "เว็บไซต์",
      site_link: "sabaidee.co.il",
      contact_email: "spa@sabaidee.co.il",
      form_name: "ชื่อ",
      form_email: "อีเมล",
      form_message: "ข้อความ",
      ph_name: "ชื่อของคุณ",
      ph_email: "you@email.com",
      ph_message: "ทรีตเมนวันที่สะดวก…",
      form_submit: "ส่งข้อความ",
      form_sending: "กำลังส่ง…",
      form_success: "ขอบคุณ — เราได้รับข้อความแล้วและจะตอบกลับโดยเร็ว",
      form_error: "เกิดข้อผิดพลาด ลองอีกครั้งหรือส่งอีเมลหาเราโดยตรง",
      form_need_key:
        "ยังไม่ได้เชื่อมฟอร์ม: สร้างฟอร์มที่ formspree.io แล้วตั้ง data-formspree-id ใน index.html เป็นรหัสฟอร์ม (ส่วนหลัง /f/ ใน URL)",
      form_email_subject: "Sabai Dee — ติดต่อจากเว็บไซต์",
      thank_you_title: "ขอบคุณ",
      thank_you_lede: "เราได้รับข้อความแล้วและจะตอบกลับทางอีเมลหรือโทรศัพท์โดยเร็ว",
      thank_you_back: "กลับหน้าแรก",
      thank_you_call: "หรือโทรจอง:",
      visit_h2: "แวะมาเยี่ยม",
      visit_kicker: "ที่อยู่",
      address_line1: "3 Ben Sira Street",
      address_line2: "Jerusalem, Israel",
      visit_note: "สปาไทยใหม่ใจกลางเยรูซาเล็ม — Ben Sira 3",
      map_title: "แผนที่ — Sabai Dee, Ben Sira 3, Jerusalem",
      footer_tag: "Sabai Dee Thai massage & Spa · เยรูซาเล็ม",
      footer_contact: "ติดต่อ",
      img_hero_alt: "บรรยากาศสปาและนวดที่ผ่อนคลาย",
      img_about_alt: "ห้องทรีตเมนต์เงียบสงบแสงธรรมชาติ",
      img_t1_alt: "นวดไทยแบบดั้งเดิมบนเสื่อ",
      img_t2_alt: "นวดไทยผสมน้ำมันบนหลัง",
      img_t3_alt: "นวดคอ หลัง และไหล่แบบไทย",
      img_t4_alt: "นวดศีรษะไทยผ่อนคลาย",
      img_t5_alt: "นวดสี่มือ — นักบำบัดสองคน",
      img_t6_alt: "นวดเท้าไทย",
      img_t7_alt: "นวดหินร้อนบนหลัง",
    },
  };

  function detectLang() {
    var nav = (global.navigator && global.navigator.language) || "en";
    var n = nav.toLowerCase();
    if (n.indexOf("he") === 0) return "he";
    if (n.indexOf("th") === 0) return "th";
    return "en";
  }

  var LANG_KEY = "sabai-spa-lang";
  var LANG_KEY_LEGACY = ["ann-spa-lang", "linur-spa-lang"];

  function getStoredLang() {
    try {
      var s = global.localStorage.getItem(LANG_KEY);
      if (s === "en" || s === "he" || s === "th") return s;
      for (var i = 0; i < LANG_KEY_LEGACY.length; i++) {
        s = global.localStorage.getItem(LANG_KEY_LEGACY[i]);
        if (s === "en" || s === "he" || s === "th") {
          global.localStorage.setItem(LANG_KEY, s);
          LANG_KEY_LEGACY.forEach(function (k) {
            global.localStorage.removeItem(k);
          });
          return s;
        }
      }
    } catch (e) {}
    return null;
  }

  function setStoredLang(code) {
    try {
      global.localStorage.setItem(LANG_KEY, code);
      LANG_KEY_LEGACY.forEach(function (k) {
        global.localStorage.removeItem(k);
      });
    } catch (e) {}
  }

  function applyLang(code) {
    var dict = T[code] || T.en;
    var root = global.document.documentElement;
    root.setAttribute("lang", code === "he" ? "he" : code === "th" ? "th" : "en");
    root.setAttribute("dir", code === "he" ? "rtl" : "ltr");

    var meta = global.document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict.meta_desc);

    var titleEl = global.document.querySelector("title");
    if (titleEl) {
      if (/thank-you\.html/.test(global.location.pathname) && dict.thank_you_title) {
        titleEl.textContent = dict.thank_you_title + " — Sabai Dee";
      } else {
        titleEl.textContent = dict.meta_title;
      }
    }

    var canonical = global.document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", SITE_URL + "/");

    var ogUrl = global.document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", SITE_URL + "/");

    var ogTitle = global.document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict.meta_title);

    var ogDesc = global.document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict.meta_desc);

    var ogLocale = global.document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute(
        "content",
        code === "he" ? "he_IL" : code === "th" ? "th_TH" : "en_IL"
      );
    }

    var twTitle = global.document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", dict.meta_title);

    var twDesc = global.document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", dict.meta_desc);

    global.document.querySelectorAll("[data-site-home]").forEach(function (el) {
      el.setAttribute("href", SITE_URL + "/");
    });

    global.document.querySelectorAll("[data-i18n-mailto]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-mailto");
      if (key && dict[key] != null) el.setAttribute("href", "mailto:" + dict[key]);
    });

    global.document.querySelectorAll("[data-i18n-tel]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-tel");
      if (key && dict[key] != null) el.setAttribute("href", "tel:" + dict[key]);
    });

    var mapFrame = global.document.querySelector(".visit-map iframe");
    if (mapFrame && dict.map_title) mapFrame.setAttribute("title", dict.map_title);

    global.document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) el.textContent = dict[key];
    });

    global.document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    global.document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    global.document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    global.document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var is = btn.getAttribute("data-lang") === code;
      btn.setAttribute("aria-pressed", is ? "true" : "false");
    });

    var toggle = global.document.querySelector(".nav-toggle");
    if (toggle) {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", expanded ? dict.nav_close : dict.nav_open);
    }

    setStoredLang(code);
  }

  global.SPA_I18N = {
    siteUrl: SITE_URL,
    strings: T,
    detectLang: detectLang,
    getStoredLang: getStoredLang,
    applyLang: applyLang,
  };
})(typeof window !== "undefined" ? window : this);
