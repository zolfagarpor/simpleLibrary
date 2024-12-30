function lsDistance(a, b) {
    const matrix = [];

    // ایجاد ماتریس
    for (let i = 0; i <= b.length; i++) { // برای ایجاد سطر
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) { // برای ایجاد ستون
        matrix[0][j] = j;
    }

    // محاسبه فاصله
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1]; // کاراکترها برابرند
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // جایگزینی
                    matrix[i][j - 1] + 1,     // حذف
                    matrix[i - 1][j] + 1      // افزودن
                );
            }
        }
    }

    return matrix[b.length][a.length]; // فاصله نهایی
}

// لیستی از اسم کتاب های موجود
let books = [
    "طراحی الگوریتم ها",
    "ساختمان داده ها",
    "مدار های الکترونیکی",
    "سیگنال ها و سیستم ها",
    "هوش مصنوعی",
    "سیستم های عامل",
    "طراحی پایگاه داده ها",
    "اصول طراحی کامپایلر",
    "شبکه‌ های کامپیوتری",
    "یادگیری ماشین",
    "مدارهای منطقی",
    "مبانی کامپیوتر و برنامه سازی",
    "اصول شبکه‌های کامپیوتری",
    "امنیت اطلاعات و رمزنگاری",
    "مهندسی نرم افزار",
    "تحلیل و طراحی سیستم ها",
    "پردازش تصویر دیجیتال",
    "هوش مصنوعی و یادگیری عمیق",
    "پردازش زبان طبیعی",
    "آمار و احتمالات مهندسی",
    "ریاضیات گسسته و کاربرد های آن",
    "پردازش سیگنال های دیجیتال",
    "مهندسی اینترنت",
    "رایانش ابری",
    "پایگاه داده های توزیع شده",
    "Clean Code",
    "The Pragmatic Programmer",
    "Code Complete",
    "Design Patterns",
    "Cracking the Coding Interview",
    "Refactoring"
];

// کلمات غیرمفید برای جستجوی کتاب
const irrelevantWords = [
    "در", "با", "از", "برای", "به", "تا", "که", "و", "یا", "فقط", "چند",
    "آن", "این", "هم", "هنگام", "پس", "اما", "اگر", "بهتر", "سایر", "شده",
    "های", "اش", "شد", "خواهد", "شدن", "ما", "کدام", "شما",
    "هستند", "هستیم", "گفت", "همچنین", "بیشتر", "اینکه",
    "هیچ", "پیش", "بروی", "جای", "دو", "یک", "آنها", "هر", "همه", "دیگر",
    "خود", "چه", "می‌توان", "کرد", "حالا", "باشد",
    "خودش", "جستجو", "کتاب", "اینجا", "نزدیک", "ها"
];

// کاراکتر های خاص
const SpecialCharacters = [
    "!","@","#","%","^","&","*","(",")","-","_",
    "=","+","<",">",",",".","/","\\","{","}","[","]",
    "؟","'",'"',":",";","|","`","~","«", "»","،"
]

// تابع شناسایی کلمات غیر مفید با اشتباه تایپی
// کلمات ورودی با کلمه های غیر مفیدی که قبلا در لیستش تعریف شده مقایسه می شود(با 1 فاصله لون اشتاین)
// و کلمات غیر مفید داخل ورودی کاربر شناسایی می شوند
function detectIrrelevantWordsMistake(inputWords) {
    return inputWords.filter(word => 
        irrelevantWords.some(irrelevant => lsDistance(word, irrelevant) <= 1)
    );
}

// حذف کلمات غیر مفید و کاراکتر های خاص از ورودی
function filterIrrelevantWordsAndSpecialCharacters(input) {
    const inputWords = input.split(' '); // جدا کردن کلمات ورودی با اسپیس
    const detectedIrrelevantWordsWithMistake = detectIrrelevantWordsMistake(inputWords); // شناسایی کلمات غیر مفید با اشتباه تایپی

    // حذف کلمات غیر مفید و کلمات با اشتباه تایپی
    return inputWords
        .filter(word => !irrelevantWords.includes(word) && !detectedIrrelevantWordsWithMistake.includes(word) && !SpecialCharacters.includes(word))
        .join(' '); // تبدیل دوباره لیستی از کلمه های ورودی به رشته
}


// تابع یافتن کتاب ها بر اساس ورودی کاربر
function findBooks(input) { 
    // مرتب‌سازی آرایه کتاب‌ها بر اساس حروف الفبای فارسی
    books = books.sort((a, b) => a.localeCompare(b, 'fa'));

    // حذف کلمات غیر مفید و کاراکتر های خاص از ورودی
    input = filterIrrelevantWordsAndSpecialCharacters(input);

    // اگه حذف کرد و ورودی خالی بود
    if (input === '') {
        return 0; 
    }

    // بررسی وجود کلمات ورودی در بین کلمات اسم کتاب ها(کلمه های کتاب شامل همه کلمه های ورودی باشد)
    const WordMatches1 = books.filter(book => {
        const wordsInBook = book.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات کتاب بر اساس اسپیس
        const inputWords = input.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); //  جدا کردن کلمات ورودی بر اساس اسپیس
        return inputWords.every(inputWord => wordsInBook.some(bookWord => bookWord === inputWord));
    });

    if (WordMatches1.length > 0) {
        return WordMatches1; // کتاب هایی که شامل کلمات ورودی هستند را بر می گرداند
    }

    // بررسی وجود کلمات ورودی در بین کلمات اسم کتاب ها (با فاصله لون اشتاین)
    const WordMatches2 = books.filter(book => {
        const wordsInBook = book.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات کتاب بر اساس اسپیس
        const inputWords = input.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات ورودی بر اساس اسپیس
        return inputWords.every(inputWord =>
            wordsInBook.some(bookWord => lsDistance(inputWord, bookWord) <= 1) // استفاده از فاصله لون‌اشتاین
        );
    });

    if (WordMatches2.length > 0) {
        return WordMatches2; // کتاب‌هایی که شامل کلمات ورودی با 1 اشتباهی تایپی در کلمه هستند را بر می‌گرداند
    }


    inputLength = input.split(' ').length   // برای ذخیره طول لیست ورودی(کلمات ورودی بر اساس اسپیس جدا شده اند و داخل لیست ذخیره شده اند)
    
    // اگر یکی از کلمات ورودی در بین کلمات کتاب بود ، آن کتاب را پیشنهاد می دهد
    // همان wordMatches1 با تغییرات
    for (let i = 0; i < inputLength; i++) {
        const WordMatches1WithLoop = books.filter(book => {
            const wordsInBook = book.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات کتاب بر اساس اسپیس
            const inputWords = Array(input.split(' ')[i]).map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); //  جدا کردن کلمات ورودی بر اساس اسپیس و انتخاب یک کلمه(تا زمانی که حلقه متوقف نشود کلمات بعدی انتخاب می شودند)
            return inputWords.some(inputWord => wordsInBook.some(bookWord => bookWord === inputWord));
        });

        if (WordMatches1WithLoop.length > 0) {
            return WordMatches1WithLoop; // کتاب هایی که شامل یکی از کلمات ورودی هستند را بر می گرداند
        }
    }

    // اگر یکی از کلمات ورودی در بین کلمات کتاب بود ، آن کتاب را پیشنهاد می دهد(با فاصله لون اشتاین)
    // همان wordMatches2 با تغییرات 
    for (let i = 0; i < inputLength; i++) {
        const WordMatches2WithLoop = books.filter(book => {
            const wordsInBook = book.split(' ').map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات کتاب بر اساس اسپیس
            const inputWords = Array(input.split(' ')[i]).map(word => /^[a-zA-Z]+$/.test(word) ? word.toLowerCase() : word); // جدا کردن کلمات ورودی بر اساس اسپیس
            return inputWords.some(inputWord => 
                wordsInBook.some(bookWord => lsDistance(inputWord, bookWord) <= 1) //  جدا کردن کلمات ورودی بر اساس اسپیس و انتخاب یک کلمه(تا زمانی که حلقه متوقف نشود کلمات بعدی انتخاب می شودند)
            );
        });
    
        if (WordMatches2WithLoop.length > 0) {
            return WordMatches2WithLoop; // کتاب‌هایی که شامل یکی از کلمات ورودی با شباهت (فاصله لون اشتاین 1) هستند را بر می‌گرداند
        }
    }
    
    // در صورتی که شرایط ورودی به گونه ای بود که توسط کد های بالا نتیجه ای پیدا نشد
    // یک لیست خالی ریترن می کنیم 
    // و طبق دستورات تابع اخر ، اگر نتیجه ای حاصل نشود ، در خروجی کتابی یافت نشد را چاپ میکند
    return []
} 
 
// حذف اسپیس های اضافی
function cleanInput(input) {
    // حذف اسپیس‌های اضافی ابتدا و انتهای ورودی
    input = input.trim();

    // حذف اسپیس‌ های اضافی بین کلمات
    input = input.replace(/\s+/g, ' ');

    return input;
}

// بررسی می کند که همه اجزای ورودی کاربر به صورت کلمه های تک حرفی هستند یا نه
function checkAllSingleLetterWords(input) {
    const words = input.split(' '); // ورودی را بر اساس اسپیس جدا می‌کنیم
    // بررسی اینکه آیا تمام کلمات یک حرفی هستند
    const allSingleLetterWords = words.every(word => word.length === 1);

    // اگر همه کلمات یک حرفی باشند، ورودی را بازمی‌گرداند
    if (allSingleLetterWords) {
        return input;
    }

    // در غیر این صورت نال برگردانده می شود تا آن شرط اجرا نشود
    return null;
}

// برای جایگزین کردن نیم فاصله های وروی به فاصله کامل
function convertHalfSpaceToFullSpace(text) {
    return text.replace(/\u200C/g, ' ');
}

// تابعی که با کلیک بر روی دکمه جستجو اجرا می شود و مراحل جستجو شروع می شود
function searchBook() {
    // تغییر دیسپلی دیو ریزالت به حالت دیفالت  تا نتایج نشان داده شوند
    document.querySelector('.result').style.display = 'block';

    // برای خالی کردن محتوای داخل هر یک از دیو های سلکت شده
    const selectedBookTitleDiv = document.getElementById('selected-book-title');
    const selectedBookImageDiv = document.getElementById('img-place-holder');
    const selectedBookdescriptionDiv = document.getElementById('selected-book-description');
    selectedBookTitleDiv.textContent =  '';
    selectedBookImageDiv.textContent = ' ';
    selectedBookdescriptionDiv.textContent =  '';

    // تغییر دیسپلی دیو بوک دیتیلز به نان تا کلا نمایش داده نشود و جا نگیرد در صفحه
    document.querySelector('.book-details').style.display = 'none';

    // گرفتن ورودی کاربر از اینپوت و ذخیره آن داخل متغییر سرچ اینپوت
    let searchInput = document.getElementById('searchInput').value.trim();
    
    // حذف اسپیس های اضافی به وسیله تابعی که در بالا تعریف کردیم
    searchInput = cleanInput(searchInput);
    
    searchInput = convertHalfSpaceToFullSpace(searchInput);

    // اتصال متغییر ریزالت دیو به تگ دیوی که با ایدی ریزالت تعریف شده در اچ تی ام ال
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // پاک کردن نتیجه قبلی

    // استفاده از تابع ست تایم اوت برای نشان دادن نتیجه بعد از 2دهم ثانیه
    setTimeout(() => {

        // بررسی اینکه آیا تمام کلمات ورودی یک حرفی هستند
        const result = checkAllSingleLetterWords(searchInput);
        if (result) {
            resultDiv.textContent = 'لطفا نام یا کلمه ای از کتاب را به صورت کامل وارد کنید.';
            return;
        }

        // بررسی اینکه ورودی 2 یا 1 حرف باشد
        if (searchInput.length <= 2 && searchInput.length >= 1){
            resultDiv.textContent = 'لطفا نام یا کلمه ای از کتاب را به صورت کامل وارد کنید.';
            return;
        }

        // اگه بدون ورودی باشه
        if (searchInput === '') {
            resultDiv.textContent = 'لطفا نام یک کتاب را وارد کنید.';
            return; 
        }

        // بعد از اینکه تمام مراحل بالا سپری شد
        // حالا ورودی را به تابع فایند بوک داده تا کتاب ها یافت شوند و داخل متغییر ذخیره شوند
        const similarBooks = findBooks(searchInput);

        // اگه کتابی یافت بشه یعنی طول لیست بیشتر از 0 باشه
        if (similarBooks.length > 0) {
            resultDiv.innerHTML = `<p style="text-align: center; margin-bottom: 10px;">تعداد کتاب های یافت شده: ${similarBooks.length}</p>` + similarBooks
                .map((book,index) => `<p  id="book ${index+1}"  class="result-text" onclick="selectBook('${book}')">${index+1}-کتاب ${book}</p>`)
                .join(''); // هر کتاب را در یک پاراگراف جداگانه نمایش می‌دهد

        } else if(similarBooks === 0) { // اگه طول لیست صفر باشه (یعنی با استفاده از دستوراتی که در تابع فایند بوک بود ورودی حذف شده و لیست خالی شده)
            resultDiv.textContent = 'کتابی یافت نشد لطفا در وارد کردن اسم کتاب دقت کنید.';

        } else{ // اگه اصلا کتابی یافت نشده باشه
            resultDiv.textContent = 'کتابی یافت نشد لطفا در وارد کردن اسم کتاب دقت کنید.';
        }   

        // اسکرول به دیو ریزالت
        scrollTo('result');
    }, 200);
}

// تابعی که با کلیک بر روی دکمه تمامی کتاب ها اجرا می شود و تمامی کتاب ها نمایش داده می شوند
function showAllBooks() {

    // برای خالی کردن محتوای داخل هر یک از دیو های سلکت شده
    const selectedBookTitleDiv = document.getElementById('selected-book-title');
    const selectedBookImageDiv = document.getElementById('img-place-holder');
    const selectedBookdescriptionDiv = document.getElementById('selected-book-description');
    selectedBookTitleDiv.textContent =  '';
    selectedBookImageDiv.textContent = ' ';
    selectedBookdescriptionDiv.textContent =  '';

    // تغییر دیسپلی دیو بوک دیتیلز به نان تا کلا نمایش داده نشود و جا نگیرد در صفحه
    document.querySelector('.book-details').style.display = 'none';

    // اتصال متغییر ریزالت دیو به تگ دیوی که با ایدی ریزالت تعریف شده در اچ تی ام ال
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // پاک کردن نتیجه قبلی

    // تغییر دیسپلی دیو ریزالت به حالت دیفالت  تا نتایج نشان داده شوند
    document.querySelector('.result').style.display = 'block';

    // مرتب‌سازی آرایه کتاب‌ها بر اساس حروف الفبای فارسی
    const sortedBooks = books.sort((a, b) => a.localeCompare(b, 'fa'));
    
    // استفاده از تابع ست تایم اوت برای نشان دادن نتیجه بعد از 2دهم ثانیه
    setTimeout(() => {
        resultDiv.innerHTML = `<p style="text-align: center; margin-bottom: 10px;">تعداد کتاب های یافت شده: ${sortedBooks.length}</p>` + sortedBooks
                .map((book,index) => `<p  id="book ${index+1}"  class="result-text" onclick="selectBook('${book}')">${index+1}-کتاب ${book}</p>`)
                .join('');

        // برای اسکرول صفحه به تگ ریزالت
        scrollTo('result');        
    }, 200);

}

// برای استفاده جهت اسکرول صفحه
// فقط برای اسکرول در حالت موبایل
function scrollTo(id) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // بررسی اینکه آیا صفحه کوچکتر یا مساوی 768px است
    if (mediaQuery.matches) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// متغیر سراسری با مقدار پیش فرض نال برای ذخیره کتاب انتخاب شده
let selectedBook = null;

// تابع برای انتخاب کتاب و نمایش محتوای آن کتاب
function selectBook(bookName) {
    // با توجه به این که تگ هر اسم کتاب با کلیک بر روی ان اسم کتاب را به ورودی 
    // این تابع می دهد ، آن اسم کتاب در متغییر سلکتید بوک ذخیره می شود
    selectedBook = bookName;

    // برای برگرداندن دیسپلی تگی که با کلاس بوک دیتیلز تعریف شده به حالت قبلیش
    // تا محتوا بتونه در صفحه نمایش داده بشه
    document.querySelector('.book-details').style.display = 'flex';

    // اتصال متغییر ریزالت دیو به تگ دیوی که با ایدی ریزالت تعریف شده در اچ تی ام ال
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // پاک کردن نتیجه قبلی

    // استفاده از تابعی که در فایل جاوا اسکریپت دومی که تعریف شده
    // نام کتاب انتخاب شدرو به عنوان ورودی میگیره
    // و محتوای ان کتاب رو نشون میده در صفحه
    getBookDetails(selectedBook);

    // تغییر دیسپلی تگ ریزالت به نان تا در صفحه جا اشغال نکند
    document.querySelector('.result').style.display = 'none';
}

// برای اینکه وقتی کاربر بر روی اینپوت کلیک کرده و اینپوت فعاله
// اگه اینتر رو بزنه همان عمل جستجو انجام بشه بدون کلیک بر روی دکمه جستجو
document.addEventListener("keydown", function(event) {
    // برای بررسی اینکه آیا فیلد ورودی فوکوس دارد
    const inputField = document.getElementById('searchInput');

    if (event.key === "Enter" && document.activeElement === inputField) {
        searchBook();
    }
});

// برای حرکت دادن به صفحه اینترو
function animateBackground() {
    // حرکت دادن بخش‌های چپ و راست
    document.querySelector('.leftside').style.transform = 'translateX(-100%)';
    document.querySelector('.rightside').style.transform = 'translateX(100%)';
    // تنظیم شفافیت بخش چپ و راست به 0.8 بعد از حرکت دادن
    document.querySelector('.leftside').style.opacity = '0.8';
    document.querySelector('.rightside').style.opacity = '0.8';

    // دسترسی به سی اس اس عنصری که با کلاس اینترو تعریف شده
    const intro = document.querySelector('.intro');
    // دسترسی به سی اس اس دکمه ای که با کلاس اینترو باتن تعریف شده
    const button = document.querySelector('.intro-button');
    // غیرفعال کردن عملکرد دکمه
    button.disabled = true;

    // اضافه کردن افکت محو شدن و حذف دکمه بعد از 0.1 ثانیه
    setTimeout(() => {
        button.style.transition = 'opacity 0.5s ease'; // برای افکت محو شدن
        button.style.opacity = '0'; // محو شدن
    }, 100); // محو شدن بعد از 0.1 ثانیه

    // پس از گذشت یک ثانیه مقدار زد ایندکس عنصر اینترو به 0 تنظیم می شود
    setTimeout(() => {
        intro.style.zIndex = '0';
        intro.style.display = 'none';
    },  1000);
}
