export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Header
    nav: {
      masterplan: "Masterplan",
      smartHome: "Smart Home",
      accessControl: "Access",
      cityTech: "City Tech",
      inquireNow: "Inquire Now",
      arabicTag: "Egypt's First Integrated Smart City",
      languageToggle: "عربي",
    },
    // Hero Section
    hero: {
      presenter: "Talaat Moustafa Group Presenting",
      arabicTagline: "أول سمارت سيتي متكاملة في مصر",
      title: "NOOR CAPITAL GARDENS",
      subtitle: "Your New Address for 5G-Powered Smart Living",
      scroll: "Scroll To Discover",
    },
    // Masterplan Section
    masterplan: {
      tag: "City Masterplan & Floor Plans",
      title: "EXPLORE THE MASTERPLAN & RESIDENCES",
      subtitle: "Discover Egypt’s premier 5G-powered smart city. Explore key district hotspots on the masterplan and download official unit brochures.",
      districtTag: "Selected District Highlight",
      viewFloorPlans: "View Floor Plans",
      brochuresTag: "Official Property Catalogs",
      brochuresTitle: "UNIT TYPES & BROCHURES",
      downloadBrochure: "Download PDF Brochure",
      hotspots: {
        residential: {
          title: "Residential Districts",
          description: "Modern smart apartments & luxury villas surrounded by lush green belts and internal walking tracks.",
        },
        park: {
          title: "Central Park & Lakes",
          description: "Over 500 feddans of continuous green open spaces, water features, and outdoor sports trails.",
        },
        club: {
          title: "Noor Sporting Club",
          description: "Olympic-standard sports facilities, clubhouse, swimming pools, and tennis academies.",
        },
        commercial: {
          title: "Commercial & Business Hub",
          description: "Smart office plazas, international retail brands, open-air cafes, and digital service centers.",
        },
        command: {
          title: "Command & Data Center",
          description: "Central AI governance hub monitoring utility efficiency, 24/7 security, and 5G connectivity.",
        },
      },
      units: {
        aptB: {
          title: "Apartment Type B",
          category: "Smart Apartment",
          specs: "2-3 Bedrooms • 120-165 m²",
          description: "Optimized layout for young families with integrated smart home panel, balcony garden views, and underground parking.",
        },
        aptC: {
          title: "Apartment Type C",
          category: "Smart Apartment",
          specs: "3 Bedrooms + Maid • 175-210 m²",
          description: "Spacious family residence featuring dual master suites, smart climate control, and digital intercom integration.",
        },
        aptD: {
          title: "Apartment Type D",
          category: "Luxury Penthouse",
          specs: "4 Bedrooms + Terrace • 240-290 m²",
          description: "Executive penthouse with panoramic city views, private elevator access key, and expansive outdoor terrace.",
        },
        aptE: {
          title: "Apartment Type E",
          category: "Garden Apartment",
          specs: "2 Bedrooms + Private Garden • 135 m²",
          description: "Ground floor unit with private landscaped garden, direct park access, and automated irrigation sensors.",
        },
        villaB: {
          title: "Standalone Villa Type B",
          category: "Luxury Villa",
          specs: "5 Bedrooms + Private Pool • 450 m²",
          description: "Ultra-luxury standalone villa featuring private pool, solar rooftop energy, private EV charger, and smart gate access.",
        },
      },
    },
    // Smart Home Section
    smartHome: {
      tag: "In-Unit Intelligence",
      title: "SMARTER. SAFER. MORE EFFICIENT.",
      subtitle: "Step inside your home, where comfort meets cutting-edge automation. Manage lighting, climate, security, and utilities with a single touch.",
      captions: {
        routines: "Automated Smart Home Routines",
        panel: "Noor Central In-Unit Tablet",
        intercom: "Neuton | NOOR Video Intercom",
        sensors: "Automated Safety Leakage Sensors",
        series: "Smart Home Series 1.0",
      },
      tabs: {
        routines: {
          title: "Smart Routines & Scenes",
          desc: "Set customized 'Welcome Home', 'Night Mode', or 'Away Mode' routines that adjust lighting, AC, and security shutters instantly.",
        },
        panel: {
          title: "Central Touch Control Panel",
          desc: "High-resolution wall panel seamlessly connects lighting, climate control, curtain motorized drives, and security feeds.",
        },
        intercom: {
          title: "Video Intercom & Entrance Release",
          desc: "Answer building callers from your central panel or mobile phone, verify visitor video in crystal-clear HD, and grant access remotely.",
        },
        sensors: {
          title: "Active Safety & Leakage Detection",
          desc: "Automated water, gas, and smoke sensors instantly notify the central city command and automatically shut off valves to prevent damage.",
        },
      },
    },
    // Smart Access Section
    smartAccess: {
      tag: "Smart Access Control",
      title: "FRICTIONLESS SECURITY & GUEST ACCESS",
      subtitle: "Experience 100% keyless access from city perimeter gates to your front door, powered by digital QR passes, AI video intercoms, and smart elevators.",
      tabs: {
        resident: "Resident Experience",
        visitor: "Visitor Experience",
      },
      spotlightTag: "Hardware Spotlight",
      spotlightTitle: "Neuton | NOOR Facial Video Intercom",
      spotlightDesc: "Featuring instant AI facial recognition, encrypted RFID keycards, and live mobile HD audio/video call integration with the central Noor App.",
      residentSteps: {
        step1: {
          badge: "Hands-Free Gate Pass",
          title: "Zone Entry & Perimeter Gate",
          desc: "Drive or walk into your city zone effortlessly with instant vehicle plate recognition and digital QR clearance.",
        },
        step2: {
          badge: "Facial Recognition Intercom",
          title: "Building Entry & Video Intercom",
          desc: "Approach your residential lobby. Entrance doors release automatically via IP Touchscreen Intercom with ultra-fast facial recognition or mobile release.",
        },
        step3: {
          badge: "Zero Lobby Wait",
          title: "Smart Elevator Dispatch",
          desc: "Lobby sensors automatically call the nearest elevator down to the ground floor the moment you cross the main entrance.",
        },
        step4: {
          badge: "Contactless Luxury",
          title: "Destination Floor Lift",
          desc: "The elevator automatically takes you directly to your specific residence floor without needing to touch any buttons.",
        },
      },
      visitorSteps: {
        step1: {
          badge: "Instant App Sharing",
          title: "Digital QR Invitation",
          desc: "Generate a secure, single-use or timed visitor QR Code from your Noor app and send it directly to your guest via WhatsApp.",
        },
        step2: {
          badge: "Verified Gate Entry",
          title: "Perimeter Security Clearance",
          desc: "Your guest scans their QR Code at the main gate terminal for instant security verification and vehicle parking guidance.",
        },
        step3: {
          badge: "Live Video Release",
          title: "Intercom Guest Verification",
          desc: "Upon reaching your lobby, the visitor calls your unit via the Neuton intercom. You verify their video and unlock the main door from your app.",
        },
        step4: {
          badge: "Guided Elevator Access",
          title: "Automated Guest Escort",
          desc: "Smart elevator opens and escorts your guest strictly to your floor, maintaining privacy and security for all neighbors.",
        },
      },
    },
    // Smart City Section
    smartCity: {
      tag: "Macro Vision & Scale",
      title: "REVOLUTIONIZING THE LIVING EXPERIENCE",
      subtitle: "Spanning 5,000 feddans, Noor is Egypt's premier 4th-generation smart city. Engineered with sustainable green tech, 5G fiber networks, AI traffic control, and 24/7 digital security.",
      features: {
        command: {
          tag: "24/7 Monitoring",
          title: "Command & Control Center",
          desc: "Continuous utility monitoring, automated emergency scenarios, and rapid incident response around the clock.",
        },
        safety: {
          tag: "Security",
          title: "Proactive Safety Solutions",
          desc: "Cutting-edge facial recognition, license plate recognition (LPR), and crowd dynamics management for total community peace of mind.",
        },
        transport: {
          tag: "Mobility",
          title: "Smart Transportation",
          desc: "Real-time shuttle location tracking from your app, dedicated bicycle lanes, and eco-friendly shared community routes.",
        },
        ev: {
          tag: "Green Mobility",
          title: "EV Charging Infrastructure",
          desc: "Fast EV charging in commercial hubs, plus dedicated slow chargers in private purchased parking spaces — the first in Egypt.",
        },
        irrigation: {
          tag: "Sustainability",
          title: "Weather-Based Smart Irrigation",
          desc: "Automated landscape watering that adjusts dynamically to real-time weather forecasts, conserving water resources.",
        },
        solar: {
          tag: "Renewable Energy",
          title: "Solar-Powered Rooftops",
          desc: "State-of-the-art clean energy generation across city rooftops, drastically reducing carbon footprint.",
        },
        waste: {
          tag: "Clean City",
          title: "Smart Waste Management",
          desc: "Bin-fill level sensors paired with intelligent truck routing to optimize collection and eliminate overflow.",
        },
        wifi: {
          tag: "Connectivity",
          title: "5G & Public Wi-Fi Everywhere",
          desc: "High-speed continuous internet coverage across all commercial plazas, public parks, and transit stations.",
        },
      },
    },
    // Video Section & Modal
    video: {
      tag: "Official Film & Media",
      title: "EXPERIENCE NOOR CAPITAL GARDENS",
      subtitle: "Watch the official cinematic film showcasing the architecture, green parks, and 5G smart city innovations of Noor.",
      ctaButton: "Book a Sales Consultation",
      modal: {
        title: "Inquire About Noor Residences",
        subtitle: "Leave your contact details and our senior property consultants will reach out to guide you through available units and flexible payment plans.",
        fullName: "Full Name",
        phone: "Phone Number (WhatsApp)",
        email: "Email Address",
        unitType: "Interested Property Type",
        selectUnit: "Select Property Type...",
        apt: "Smart Apartment",
        villa: "Luxury Villa",
        commercial: "Commercial / Retail Space",
        notes: "Preferred District / Notes",
        notesPlaceholder: "Tell us about your preferences, budget, or move-in timeline...",
        submit: "Submit Inquiry",
        successTitle: "Inquiry Submitted Successfully!",
        successDesc: "Thank you for reaching out. A Noor Sales Representative will contact you shortly.",
        close: "Close Window",
      },
    },
    // Footer
    footer: {
      about: "Noor Capital Gardens is Egypt's first fully integrated 4th generation smart city developed by Talaat Moustafa Group (TMG). Designed for sustainable, high-tech, and luxurious living.",
      developer: "Developed by Talaat Moustafa Group (TMG)",
      rights: "All Rights Reserved. Noor Capital Gardens.",
      sections: "Quick Navigation",
      masterplan: "City Masterplan",
      smartHome: "In-Unit Intelligence",
      accessControl: "Smart Access Control",
      cityTech: "Macro City Tech",
    },
  },
  ar: {
    // Header
    nav: {
      masterplan: "المخطط العام",
      smartHome: "المنزل الذكي",
      accessControl: "أنظمة التحكم بالدخول",
      cityTech: "تقنيات المدينة",
      inquireNow: "سجّل اهتمامك",
      arabicTag: "أول مدينة ذكية متكاملة في مصر",
      languageToggle: "EN",
    },
    // Hero Section
    hero: {
      presenter: "مجموعة طلعت مصطفى تقدم",
      arabicTagline: "أول مدينة ذكية متكاملة في مصر",
      title: "مدينة نور - كابيتال جاردنز",
      subtitle: "عنوانك الجديد لحياة مستقبلية تدار بتقنيات الـ 5G",
      scroll: "اكتشف المزيد",
    },
    // Masterplan Section
    masterplan: {
      tag: "المخطط العام ونماذج الوحدات",
      title: "استكشف المخطط العام والوحدات السكنية",
      subtitle: "تعرّف على أول وأكبر مدينة ذكية من الجيل الرابع في مصر. تصفح أبرز مناطق المدينة وحمّل الكتالوجات الرسمية للوحدات السكنية.",
      districtTag: "المنطقة المختارة",
      viewFloorPlans: "عرض التصاميم المعمارية",
      brochuresTag: "كتالوجات المشروع الرسمية",
      brochuresTitle: "نماذج الوحدات والكتالوجات",
      downloadBrochure: "تحميل الكتالوج (PDF)",
      hotspots: {
        residential: {
          title: "المناطق السكنية",
          description: "شقق ذكية وفيلات فاخرة محاطة بمساحات خضراء واسعة ومسارات مخصصة للمشي والجري.",
        },
        park: {
          title: "الحديقة المركزية والبحيرات",
          description: "أكثر من 500 فدان من المساحات الخضراء المفتوحة والبحيرات الصناعية والمسارات الرياضية.",
        },
        club: {
          title: "نادي نور الرياضي",
          description: "منشآت رياضية بمواصفات أولمبية، ونادٍ اجتماعي راقٍ، وحمامات سباحة، وأكاديميات للتنس.",
        },
        commercial: {
          title: "منطقة الأعمال والأنشطة التجارية",
          description: "مراكز أعمال ذكية، وفروع لأشهر العلامات التجارية العالمية، ومطاعم ومقاهٍ مفتوحة.",
        },
        command: {
          title: "مركز التحكم والسيطرة الرئيسي",
          description: "غرفة إدارة مركزية تعمل بالذكاء الاصطناعي لمتابعة الخدمات، والمنظومة الأمنية، وشبكات الـ 5G على مدار الساعة.",
        },
      },
      units: {
        aptB: {
          title: "شقة سكنية - نموذج B",
          category: "شقة ذكية",
          specs: "2 - 3 غرف نوم • 120 - 165 م²",
          description: "تصميم عصري يناسب العائلات، مزود بنظام تحكم ذكي مدمج، وإطلالات رائعة على الحدائق، وموقف سيارات مغطى.",
        },
        aptC: {
          title: "شقة سكنية - نموذج C",
          category: "شقة ذكية",
          specs: "3 غرف نوم + غرفة خدمات • 175 - 210 م²",
          description: "سكن عائلي واسع يضم جناحين رئيسيين (Master Suites)، ونظام تكييف ذكي، وإنتركم مرئي.",
        },
        aptD: {
          title: "بنتهاوس فاخر - نموذج D",
          category: "بنتهاوس فاخر",
          specs: "4 غرف نوم + تراس • 240 - 290 م²",
          description: "بنتهاوس فاخر بإطلالة بانورامية ساحرة، ومصعد بخاصية الدخول الذكي، وتراس خارجي متسع.",
        },
        aptE: {
          title: "شقة أرضي بحديقة - نموذج E",
          category: "شقة بحديقة",
          specs: "2 غرفة نوم + حديقة خاصة • 135 م²",
          description: "وحدة بالدور الأرضي ملحق بها حديقة خاصة، مع دخول مباشر للحديقة المركزية ونظام ري ذكي.",
        },
        villaB: {
          title: "فيلا مستقلة - نموذج B",
          category: "فيلا فاخرة",
          specs: "5 غرف نوم + حمام سباحة خاص • 450 م²",
          description: "فيلا مستقلة راقية تضم حمام سباحة خاص، ونظام طاقة شمسية، وشاحن للسيارات الكهربائية، وبوابة ذكية.",
        },
      },
    },
    // Smart Home Section
    smartHome: {
      tag: "التقنيات الذكية بالوحدة",
      title: "حياة أذكى.. أمان أكثر.. وكفاءة أعلى",
      subtitle: "استمتع بأسلوب حياة استثنائي يجمع بين الراحة التامة وتقنيات المنزل الذكي. تحكم في الإضاءة والتكييف وأنظمة الأمان والمرافق بلمسة واحدة.",
      captions: {
        routines: "إعداد الأوضاع والسيناريوهات الذكية",
        panel: "شاشة التحكم اللمسية المركزية",
        intercom: "الإنتركم المرئي الذكي من Neuton | NOOR",
        sensors: "أنظمة الأمان وحساسات الحماية التلقائية",
        series: "الجيل الأول من أنظمة المنزل الذكي",
      },
      tabs: {
        routines: {
          title: "الأوضاع والسيناريوهات الذكية",
          desc: "خصص أوضاعك المفضلة مثل 'العودة للمنزل' أو 'وضع النوم' أو 'المغادرة' لضبط الإضاءة والتكييف والستائر الذكية تلقائياً.",
        },
        panel: {
          title: "شاشة التحكم اللمسية المركزية",
          desc: "شاشة حائط فائقة الوضوح تتيح لك التحكم الكامل في الإضاءة، التكييف، الستائر الكهربائية، وأنظمة الأمان.",
        },
        intercom: {
          title: "الإنتركم المرئي وفتح الأبواب",
          desc: "استقبل مكالمات زوار المبنى عبر الشاشة المركزية أو من هاتفك، وشاهد الزائر بجودة عالية وافتح البوابات عن بُعد.",
        },
        sensors: {
          title: "أنظمة الحماية الذكية وحساسات الأمان",
          desc: "حساسات متطورة للكشف عن تسريبات المياه والغاز والدخان تنبه مركز التحكم وتغلق المحابس تلقائياً لحماية منزلك.",
        },
      },
    },
    // Smart Access Section
    smartAccess: {
      tag: "أنظمة التحكم في الدخول",
      title: "أمان متكامل وبوابات ذكية بدون مفاتيح",
      subtitle: "تجربة دخول ذكية بالكامل وبدون مفاتيح تقليدية من البوابات الرئيسية للمدينة وحتى باب شقتك، باستخدام رموز الـ QR وانتركم الوجه والمصاعد الذكية.",
      tabs: {
        resident: "تجربة القاطنين",
        visitor: "تجربة الزوار",
      },
      spotlightTag: "المنظومة التقنية",
      spotlightTitle: "إنتركم التعرف على الوجه من Neuton | NOOR",
      spotlightDesc: "مزود بتقنية التعرف الفوري على الوجه بالذكاء الاصطناعي، والكروت الذكية المشفرة، مع إمكانية إجراء المكالمات الصوتية والمرئية عالية الدقة عبر تطبيق نور.",
      residentSteps: {
        step1: {
          badge: "عبور سلس ومباشر",
          title: "البوابات الرئيسية للمدينة",
          desc: "ادخل منطقتك السكنية بسيارتك بكل سهولة عبر النظام التلقائي لقراءة لوحات السيارات والتصاريح الرقمية.",
        },
        step2: {
          badge: "التعرف الذكي على الوجه",
          title: "مدخل العمارة والإنتركم المرئي",
          desc: "عند اقترابك من مدخل العمارة، تفتح الأبواب تلقائياً عبر الإنتركم الذكي بالتعرف السريع على الوجه أو من تطبيق الموبايل.",
        },
        step3: {
          badge: "استدعاء تلقائي للمصعد",
          title: "طلب المصعد الذكي",
          desc: "بمجرد دخولك من البوابة الداخلية، تستشعر الأجهزة وجودك وتستدعي المصعد تلقائياً للدور الأرضي.",
        },
        step4: {
          badge: "وصول مباشر لشقتك",
          title: "التوجه المباشر لدور الشقة",
          desc: "ينقلك المصعد تلقائياً إلى دور شقتك دون الحاجة للضغط على أي أزرار.",
        },
      },
      visitorSteps: {
        step1: {
          badge: "تصريح دخول رقمي",
          title: "إرسال دعوة QR",
          desc: "أنشئ تصريح دخول (QR Code) مؤقتاً لزائرك من خلال تطبيق نور وأرسله له مباشرة عبر الواتساب.",
        },
        step2: {
          badge: "تأكيد الدخول بالبوابة",
          title: "البوابة الرئيسية للمدينة",
          desc: "يقوم الزائر بمسح رمز الـ QR عند البوابة الرئيسية للتحقق السريع وتوجيهه لأماكن الانتظار المخصصة.",
        },
        step3: {
          badge: "تحقق مرئي مباشر",
          title: "الإنتركم المرئي عند المدخل",
          desc: "عند وصول الزائر لمدخل العمارة، يتصل بك عبر إنتركم Neuton، حيث يمكنك التأكد منه بالصوت والصورة وفتح الباب من هاتفك.",
        },
        step4: {
          badge: "توجيه ذكي للمصعد",
          title: "الصعود المباشر لشقتك",
          desc: "يفتح المصعد الذكي وينقل الزائر حصرياً إلى الدور الخاص بك، للحفاظ على أقصى درجات الخصوصية والأمان لباقي القاطنين.",
        },
      },
    },
    // Smart City Section
    smartCity: {
      tag: "الرؤية والشغف المعماري",
      title: "مفهوم جديد لجودة الحياة",
      subtitle: "على مساحة 5,000 فدان، تقام مدينة نور كأول وأكبر مدينة ذكية متكاملة من الجيل الرابع في مصر، بأحدث تقنيات البنية التحتية المستدامة، شبكات الألياف الضوئية والـ 5G، والإدارة الذكية للمرور والمنظومة الأمنية على مدار 24 ساعة.",
      features: {
        command: {
          tag: "إدارة مركزية",
          title: "مركز التحكم والسيطرة الرئيسي",
          desc: "مراقبة مستمرة للبنية التحتية والمرافق، مع سيناريوهات طوارئ أوتوماتيكية واستجابة فورية على مدار الساعة.",
        },
        safety: {
          tag: "الأمن والسلامة",
          title: "منظومة الأمان الاستباقي",
          desc: "كاميرات مراقبة ذكية مزودة بتقنيات قراءة لوحات السيارات (LPR) والتعرف على الوجوه لراحة بال كاملة.",
        },
        transport: {
          tag: "منظومة التنقل",
          title: "وسائل المواصلات الذكية",
          desc: "تتبع حركة حافلات النقل الداخلي لحظياً عبر التطبيق، مع مسارات مخصصة للدراجات ووسائل نقل صديقة للبيئة.",
        },
        ev: {
          tag: "تنقل مستدام",
          title: "محطات شحن السيارات الكهربائية",
          desc: "محطات شحن سريع بالمناطق التجارية، وشواحن مخصصة بأماكن انتظار السيارات بالوحدات — لأول مرة في مصر.",
        },
        irrigation: {
          tag: "الاستدامة البيئية",
          title: "أنظمة الري الذكية المناخية",
          desc: "ري أوتوماتيكي للمساحات الخضراء يتكيف تلقائياً مع توقعات الطقس لترشيد استهلاك المياه.",
        },
        solar: {
          tag: "طاقة متجددة",
          title: "أسطح مجهزة بالطاقة الشمسية",
          desc: "منظومات توليد طاقة نظيفة ومتطورة على أسطح المباني لتقليل الأثر الكربوني وترشيد الكهرباء.",
        },
        waste: {
          tag: "مدينة نظيفة",
          title: "الإدارة الذكية للمخلفات",
          desc: "حساسات لقياس مستوى امتلاء الحاويات وتوجيه سيارات الجمع تلقائياً لمنع التراكم والحفاظ على النظافة.",
        },
        wifi: {
          tag: "شبكات الاتصال",
          title: "تغطية الـ 5G والإنترنت الفائق",
          desc: "تغطية إنترنت فائقة السرعة وشبكة Wi-Fi مجانية في جميع المتنزهات، والميادين، والمراكز التجارية.",
        },
      },
    },
    // Video Section & Modal
    video: {
      tag: "الفيلم الترويجي للمشروع",
      title: "عِش تجربة مدينة نور",
      subtitle: "شاهد الفيلم السينمائي الرسمي واستكشف التصميم المعماري المميز والمساحات الخضراء وتقنيات الجيل الرابع.",
      ctaButton: "تواصل مع مستشار المبيعات",
      modal: {
        title: "سجّل اهتمامك بوحدات مدينة نور",
        subtitle: "أدخل بياناتك وسيقوم أحد مستشاري المبيعات بالتواصل معك فوراً لمساعدتك في اختيار الوحدة المناسبة وأنظمة السداد المتاحة.",
        fullName: "الاسم بالكامل",
        phone: "رقم الهاتف (أو الواتساب)",
        email: "البريد الإلكتروني",
        unitType: "نوع الوحدة المطلوبة",
        selectUnit: "اختر نوع الوحدة...",
        apt: "شقة سكنية ذكية",
        villa: "فيلا فاخرة",
        commercial: "وحدة تجارية / إدارية",
        notes: "ملاحظات إضافية / تفضيلاتك",
        notesPlaceholder: "اكتب لنا عن تفضيلاتك، أو أنظمة السداد المناسبة، أو موعد الاستلام المخطط...",
        submit: "إرسال الطلب",
        successTitle: "تم تسجيل طلبك بنجاح!",
        successDesc: "نشكر اهتمامك بمدينة نور. سيتواصل معك مستشار المبيعات في أقرب وقت ممكن.",
        close: "إغلاق",
      },
    },
    // Footer
    footer: {
      about: "مدينة نور كابيتال جاردنز هي أول مدينة ذكية متكاملة من الجيل الرابع في مصر، تقدمها مجموعة طلعت مصطفى (TMG) برؤية مستقبلية ترتكز على الاستدامة وأحدث التقنيات العالمية.",
      developer: "إحدى مشروعات مجموعة طلعت مصطفى (TMG)",
      rights: "جميع الحقوق محفوظة © مدينة نور كابيتال جاردنز.",
      sections: "أقسام الموقع",
      masterplan: "المخطط العام",
      smartHome: "المنزل الذكي",
      accessControl: "أنظمة التحكم بالدخول",
      cityTech: "تقنيات المدينة",
    },
  },
};
