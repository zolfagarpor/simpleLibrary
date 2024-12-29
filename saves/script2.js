// لیستی از اشیا که اسم کتابی که کاربر انتخاب کرده محتواش از داخل این لیست استخراج میشه
const saves = [
    { title: "طراحی الگوریتم ها",
    image: "algorithm-design.jpg",
    description: "این کتاب به بررسی و تحلیل الگوریتم‌های مختلف پرداخته و نحوه انتخاب و طراحی بهترین الگوریتم‌ها برای حل مسائل مختلف را آموزش می‌دهد. موضوعات شامل جستجو، مرتب‌سازی، تقسیم و حل، و برنامه‌نویسی پویا هستند. این مباحث به بهبود کارایی و کاهش زمان اجرای برنامه‌ها کمک می‌کنند." },
    
    { title: "ساختمان داده ها", 
    image: "data-structures.jpg", 
    description: "کتابی که به مفاهیم پایه‌ای ساختمان داده‌ها مانند آرایه‌ها، لیست‌های پیوندی، درخت‌ها، گراف‌ها و جداول هش پرداخته و روش‌های مختلف دسترسی و مدیریت داده‌ها را آموزش می‌دهد. شناخت ساختمان داده‌ها به بهینه‌سازی عملکرد الگوریتم‌ها کمک می‌کند. استفاده از این ساختارها در حل مسائل پیچیده ضروری است." },

    { title: "مدار های الکترونیکی", 
    image: "electronic-circuits.jpg", 
    description: "این کتاب اصول طراحی و تحلیل مدارهای الکترونیکی آنالوگ و دیجیتال را پوشش می‌دهد. مباحثی چون دیودها، ترانزیستورها، تقویت‌کننده‌ها و مدارهای منطقی در این کتاب مطرح می‌شود. آشنایی با این مفاهیم برای طراحی مدارهای عملی و مفهومی ضروری است." },

    { title: "سیگنال ها و سیستم ها", 
    image: "signals-systems.jpg", 
    description: "این کتاب به بررسی اصول پایه‌ای سیگنال‌ها و سیستم‌ها در پردازش سیگنال‌ها می‌پردازد. مفاهیمی مانند تبدیل فوریه، فیلترها، و سیستم‌های خطی و غیرخطی در آن توضیح داده می‌شود. این دانش در زمینه‌های مختلف مهندسی برق و ارتباطات کاربرد دارد." },

    { title: "هوش مصنوعی", 
    image: "artificial-intelligence.jpg", 
    description: "کتابی که به مفاهیم پایه‌ای هوش مصنوعی شامل جستجو، یادگیری ماشین، منطق فازی و سیستم‌های خبره می‌پردازد. هدف آن ایجاد ماشین‌هایی است که قادر به حل مسائل به‌طور هوشمندانه باشند. در این کتاب، الگوریتم‌های هوش مصنوعی در حل مسائل دنیای واقعی معرفی می‌شود." },

    { title: "سیستم های عامل", 
    image: "operating-systems.jpg", 
    description: "این کتاب به تشریح عملکرد سیستم‌های عامل از جمله مدیریت منابع، فرآیندها، حافظه و سیستم فایل‌ها می‌پردازد. نحوه تعامل نرم‌افزار با سخت‌افزار و خدماتی که سیستم‌عامل برای برنامه‌ها فراهم می‌کند، در این کتاب توضیح داده می‌شود. دانش سیستم‌های عامل برای طراحی و استفاده از کامپیوترها ضروری است." },

    { title: "طراحی پایگاه داده ها", 
    image: "database-design.jpg", 
    description: "این کتاب اصول طراحی و مدیریت پایگاه‌های داده رابطه‌ای را آموزش می‌دهد. موضوعاتی مانند مدل‌های داده‌ای، طراحی پایگاه داده، زبان SQL و بهینه‌سازی پرس‌وجوها در این کتاب بررسی می‌شوند. این مفاهیم برای ساخت سیستم‌های اطلاعاتی و مدیریت داده‌ها بسیار مهم است." },

    { title: "اصول طراحی کامپایلر", 
    image: "compiler-principles.jpg", 
    description: "کتابی که فرآیند طراحی کامپایلرها، از جمله تحلیل لغوی، نحوی، بهینه‌سازی و تولید کد را توضیح می‌دهد. این کتاب به دانشجویان کمک می‌کند تا مراحل تبدیل کد منبع به کد اجرایی را درک کنند. کامپایلرها ابزارهای اصلی در زبان‌های برنامه‌نویسی هستند." },

    { title: "شبکه‌ های کامپیوتری", 
    image: "computer-networks.jpg", 
    description: "این کتاب به مباحث پایه‌ای شبکه‌های کامپیوتری شامل پروتکل‌ها، معماری شبکه، مسیریابی و امنیت شبکه می‌پردازد. آشنایی با شبکه‌های کامپیوتری برای ارتباطات دیجیتال و اینترنت امری ضروری است. مباحث پیشرفته‌تری مانند شبکه‌های بی‌سیم و IPv6 نیز در آن گنجانده شده است." },

    { title: "یادگیری ماشین", 
    image: "machine-learning.jpg", 
    description: "در این کتاب الگوریتم‌ها و روش‌های مختلف یادگیری ماشین برای تحلیل داده‌ها و پیش‌بینی نتایج بررسی می‌شوند. از جمله این روش‌ها می‌توان به یادگیری نظارت‌شده، یادگیری بدون نظارت و یادگیری تقویتی اشاره کرد. این مفاهیم برای ایجاد سیستم‌های هوشمند و تحلیل داده‌های پیچیده کاربرد دارند." },

    { title: "مدارهای منطقی", 
    image: "logic-circuits.jpg", 
    description: "کتابی که اصول طراحی مدارهای منطقی را شامل گیت‌های منطقی، فلیپ‌فلاپ‌ها و ماشین‌های حالت می‌آموزد. این مدارها برای پیاده‌سازی عملیات منطقی در دستگاه‌های دیجیتال استفاده می‌شوند. آشنایی با آن‌ها برای طراحی سیستم‌های دیجیتال مانند پردازنده‌ها و سیستم‌های کنترلی ضروری است." },

    { title: "مبانی کامپیوتر و برنامه سازی", 
    image: "computer-basics.jpg", 
    description: "این کتاب به معرفی مفاهیم پایه‌ای کامپیوتر و زبان‌های برنامه‌نویسی می‌پردازد. موضوعاتی چون ساختار داده‌ها، الگوریتم‌ها، و اصول طراحی نرم‌افزار در آن مطرح می‌شود. این کتاب مبنای خوبی برای یادگیری برنامه‌نویسی و توسعه نرم‌افزار است." },

    { title: "اصول شبکه‌های کامپیوتری", 
    image: "network-principles.jpg", 
    description: "کتابی که به اصول و مفاهیم پایه‌ای شبکه‌های کامپیوتری و نحوه عملکرد آن‌ها در اتصال دستگاه‌ها پرداخته است. مباحثی مانند پروتکل‌های اینترنت، مدیریت شبکه و امنیت شبکه در آن مطرح می‌شود. برای طراحی و پیاده‌سازی شبکه‌های محلی و گسترده ضروری است." },

    { title: "امنیت اطلاعات و رمزنگاری", 
    image: "information-security.jpg", 
    description: "این کتاب به مباحث امنیت اطلاعات و روش‌های رمزنگاری داده‌ها می‌پردازد. اصول امنیتی مانند الگوریتم‌های رمزنگاری، امضای دیجیتال و امنیت شبکه‌ها در آن توضیح داده می‌شود. این کتاب برای حفاظت از اطلاعات در دنیای دیجیتال امری حیاتی است." },

    { title: "مهندسی نرم افزار", 
    image: "software-engineering.jpg", 
    description: "کتابی که به تحلیل، طراحی و توسعه سیستم‌های نرم‌افزاری می‌پردازد. مدل‌های نرم‌افزاری، فرآیندهای توسعه و تست نرم‌افزار در آن پوشش داده می‌شود. این کتاب به مهندسین نرم‌افزار کمک می‌کند تا سیستم‌های نرم‌افزاری کارآمد و بدون خطا تولید کنند." },

    { title: "تحلیل و طراحی سیستم ها", 
    image: "systems-analysis.jpg", 
    description: "این کتاب به فرآیند تحلیل و طراحی سیستم‌ها با رویکرد مهندسی پرداخته و به تشریح نحوه شبیه‌سازی و مدل‌سازی سیستم‌های پیچیده می‌پردازد. موضوعات شامل تحلیل نیازها، طراحی معماری سیستم و پیاده‌سازی مدل‌ها است. این مفاهیم در پروژه‌های بزرگ مهندسی نرم‌افزار کاربرد دارند." },

    { title: "پردازش تصویر دیجیتال", 
    image: "digital-image-processing.jpg", 
    description: "این کتاب به تجزیه و تحلیل تصاویر دیجیتال و پردازش آن‌ها با استفاده از الگوریتم‌های ریاضی پرداخته است. موضوعاتی چون فیلتر کردن، تشخیص لبه‌ها و فشرده‌سازی تصویر در آن شرح داده می‌شود. پردازش تصویر در کاربردهای پزشکی، امنیتی و صنعتی مهم است." },

    { title: "هوش مصنوعی و یادگیری عمیق", 
    image: "ai-deep-learning.jpg", 
    description: "کتابی که به ترکیب مباحث هوش مصنوعی و یادگیری عمیق پرداخته و الگوریتم‌های پیچیده‌تری چون شبکه‌های عصبی عمیق را توضیح می‌دهد. این روش‌ها در شبیه‌سازی مغز انسان برای حل مسائل پیچیده و تحلیل داده‌های بزرگ استفاده می‌شوند. کاربرد آن‌ها در بینایی کامپیوتری و پردازش زبان طبیعی گسترده است." },

    { title: "پردازش زبان طبیعی", 
    image: "natural-language-processing.jpg", 
    description: "این کتاب به تحلیل و پردازش زبان‌های انسانی با استفاده از روش‌های هوش مصنوعی می‌پردازد. مباحثی چون تجزیه و تحلیل نحوی، مدل‌های زبانی و ترجمه ماشینی در آن پوشش داده می‌شود. پردازش زبان طبیعی برای ساخت سیستم‌های مبتنی بر زبان مانند چت‌بات‌ها و مترجم‌های ماشینی حیاتی است." },

    { title: "آمار و احتمالات مهندسی", 
    image: "statistics-computer-science.jpg", 
    description: "این کتاب اصول آمار و احتمالات را با تمرکز بر کاربردهای مهندسی شرح می‌دهد. مباحثی چون آزمون‌های فرض، توزیع‌های احتمالاتی و مدل‌سازی تصادفی در آن بررسی می‌شود. این دانش برای تحلیل داده‌های آزمایشگاهی و سیستم‌های پیچیده ضروری است." },

    { title: "ریاضیات گسسته و کاربرد های آن", 
    image: "discrete-mathematics.jpg", 
    description: "کتابی که به بررسی مفاهیم ریاضیات گسسته مانند گراف‌ها، مجموعه‌ها و نظریه اعداد می‌پردازد. این مفاهیم برای تحلیل الگوریتم‌ها و طراحی سیستم‌های کامپیوتری کاربرد فراوانی دارند. در حل مسائل بهینه‌سازی و رمزنگاری نیز از آن‌ها استفاده می‌شود." },

    { title: "پردازش سیگنال های دیجیتال", 
    image: "digital-signal-processing.jpg", 
    description: "این کتاب به تحلیل و پردازش سیگنال‌های دیجیتال با استفاده از روش‌های ریاضی می‌پردازد. موضوعاتی چون فیلتر کردن، تبدیل فوریه و تحلیل زمان-فرکانس در آن توضیح داده می‌شود. این مفاهیم برای بهبود کیفیت سیگنال‌ها در سیستم‌های مخابراتی و صوتی کاربرد دارند." },

    { title: "مهندسی اینترنت", 
    image: "internet-engineering.jpg", 
    description: "کتابی که به اصول و تکنیک‌های مهندسی اینترنت پرداخته و مفاهیم مربوط به توسعه وب، سرویس‌های وب و اینترنت اشیاء را بررسی می‌کند. این کتاب شامل راه‌حل‌های طراحی و پیاده‌سازی سیستم‌های آنلاین و مبتنی بر اینترنت است. برای توسعه اپلیکیشن‌های وب و شبکه‌های اجتماعی حیاتی است." },

    { title: "رایانش ابری", 
    image: "cloud-computing.jpg", 
    description: "این کتاب به بررسی مفاهیم و معماری رایانش ابری پرداخته و نحوه استفاده از منابع محاسباتی از راه دور را توضیح می‌دهد. فناوری‌های IaaS، PaaS و SaaS در آن بررسی می‌شوند. رایانش ابری در کاهش هزینه‌ها و مقیاس‌پذیری سیستم‌های کامپیوتری بسیار مفید است." },

    { title: "پایگاه داده های توزیع شده", 
    image: "distributed-databases.jpg", 
    description: "این کتاب به طراحی و مدیریت پایگاه‌های داده‌ای می‌پردازد که در سیستم‌های توزیع‌شده برای پردازش داده‌ها استفاده می‌شوند. موضوعاتی چون همگام‌سازی داده‌ها، مسأله نگهداری اطلاعات و مقیاس‌پذیری در آن بررسی می‌شود. این مفاهیم برای سیستم‌های بزرگ و توزیع‌شده ضروری است." },

    { title: "Clean Code", 
    image: "clean-code.jpg", 
    description: "این کتاب توسط 'Robert C. Martin' نوشته شده و اصول کدنویسی تمیز و قابل خواندن را ارائه می‌دهد. این کتاب برای توسعه‌دهندگان نرم‌افزار بسیار مناسب است تا مهارت‌های خود را در نوشتن کدی که قابل درک، نگهداری و بهبود باشد، تقویت کنند." },

    { title: "The Pragmatic Programmer", 
    image: "The Pragmatic Programmer.jpg", 
    description: "اثری از 'Andrew Hunt' و 'David Thomas'، این کتاب یک راهنمای جامع برای توسعه‌دهندگان است که اصول، ابزارها و تکنیک‌های عملی برای توسعه نرم‌افزارهای باکیفیت را توضیح می‌دهد." },

    { title: "Code Complete", 
    image: "Code Complete.jpg", 
    description: "نوشته 'Steve McConnell'، این کتاب یک منبع جامع برای بهترین شیوه‌های کدنویسی است که در آن به طراحی، ساختاردهی و پیاده‌سازی کدهای موثر و حرفه‌ای پرداخته شده است." },

    { title: "Design Patterns", 
    image: "Design Patterns.jpg", 
    description: "این کتاب که توسط 'Erich Gamma' و دیگران نوشته شده، یکی از برجسته‌ترین منابع در زمینه الگوهای طراحی شی‌گرا است که اصول و راه‌حل‌های استاندارد برای مشکلات متداول در توسعه نرم‌افزار را ارائه می‌کند." },

    { title: "Cracking the Coding Interview", 
    image: "Cracking the Coding Interview.jpg", 
    description: "کتابی از 'Gayle Laakmann McDowell' که شامل بیش از ۱۸۰ سوال مصاحبه برنامه‌نویسی است. این کتاب به توسعه‌دهندگان کمک می‌کند تا برای مصاحبه‌های شغلی فنی آماده شوند.'" },

    { title: "Refactoring", 
    image: "Refactoring.jpg", 
    description: "نوشته 'Martin Fowler'، این کتاب به معرفی تکنیک‌های بهبود ساختار کد بدون تغییر رفتار آن می‌پردازد و مناسب برای کسانی است که می‌خواهند کیفیت کدهای موجود را ارتقا دهند.'" },
];

// تابع برای دریافت اطلاعات کتاب و نمایش ان در صفحه
function getBookDetails(bookTitle) {
    // جستجو برای کتاب انتخاب شده و ذخیره هر 3 محتوای ان در این متغییر
    const save = saves.find(b => b.title === bookTitle);
    
    // اتصال هر کدام از تگ هایی که با ایدی مشخص شده به متغییر تعریف شده
    const selectedBookTitleDiv = document.getElementById('selected-book-title');
    const selectedBookImageDiv = document.getElementById('img-place-holder');
    const selectedBookdescriptionDiv = document.getElementById('selected-book-description');

    
    if (save) {
        // ذخیره محتوای کتاب به صورت جداگانه در متغیرها
        const bookTitle = save.title;
        const bookImage = save.image;
        const bookDescription = save.description;
        
        // قرار دادن هر یک از محتوا ها در تگ های خود در اچ تی ام ال
        selectedBookTitleDiv.textContent =  bookTitle;
        selectedBookImageDiv.innerHTML = `<img src="saves/images/${bookImage}" id="selected-book-image" class="selected-book-image">`;
        selectedBookdescriptionDiv.textContent =  bookDescription;

        // اطمینان از بارگذاری کامل تصویر قبل از اسکرول
        // برای حالت موبایل کاربر دارد
        const imageElement = document.getElementById('selected-book-image');
        imageElement.onload = () => {
            // تصویر بارگذاری شده، حالا اسکرول می‌کنیم
            scrollTo('selected-book-description')
        };
    }
}
