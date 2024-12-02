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
    "پایگاه داده های توزیع شده"
];

// کلمات غیرکلیدی برای جستجوی کتاب
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
function detectIrrelevantWordsMistake(inputWords) {
    return inputWords.filter(word => 
        irrelevantWords.some(irrelevant => lsDistance(word, irrelevant) <= 1)
    );
}

// حذف کلمات غیر مفید از ورودی
function filterIrrelevantWords(input) {
    const inputWords = input.split(' '); // جدا کردن کلمات ورودی با اسپیس
    const detectedIrrelevantWordsWithMistake = detectIrrelevantWordsMistake(inputWords); // شناسایی کلمات غیر مفید با اشتباه تایپی

    // حذف کلمات غیر مفید و کلمات با اشتباه تایپی
    return inputWords
        .filter(word => !irrelevantWords.includes(word) && !detectedIrrelevantWordsWithMistake.includes(word))
        .join(' '); // تبدیل دوباره به رشته
}

function findBooks(input) { 
    // مرتب‌سازی آرایه کتاب‌ها بر اساس حروف الفبای فارسی
    books = books.sort((a, b) => a.localeCompare(b, 'fa'));


    // حذف کلمات غیر مفید از ورودی
    input = filterIrrelevantWords(input);

    // اگه حذف کرد و ورودی خالی بود
    if (input === '') {
        return 0; 
    }

    // بررسی وجود کلمات ورودی در بین کلمات اسم کتاب ها(کلمه های کتاب شامل همه کلمه های ورودی باشد)
    const WordMatches1 = books.filter(book => {
        const wordsInBook = book.split(' '); // جدا کردن کلمات کتاب بر اساس اسپیس
        const inputWords = input.split(' '); //  جدا کردن کلمات ورودی بر اساس اسپیس
        return inputWords.every(inputWord => wordsInBook.some(bookWord => bookWord.includes(inputWord)));
    });

    if (WordMatches1.length > 0) {
        return WordMatches1; // کتاب هایی که شامل کلمات ورودی هستند را بر می گرداند
    }

    // بررسی وجود کلمات ورودی در بین کلمات اسم کتاب ها (با فاصله لون اشتاین)
    const WordMatches2 = books.filter(book => {
        const wordsInBook = book.split(' '); // جدا کردن کلمات کتاب بر اساس اسپیس
        const inputWords = input.split(' '); // جدا کردن کلمات ورودی بر اساس اسپیس
        return inputWords.every(inputWord =>
            wordsInBook.some(bookWord => lsDistance(inputWord, bookWord) <= 1) // استفاده از فاصله لون‌اشتاین
        );
    });

    if (WordMatches2.length > 0) {
        return WordMatches2; // کتاب‌هایی که شامل کلمات ورودی با شباهت هستند را بر می‌گرداند
    }


    inputLength = input.split(' ').length   // برای ذخیره طول لیست ورودی(کلمات ورودی بر اساس اسپیس جدا شده اند و داخل لیست ذخیره شده اند)
    
    // اگر یکی از کلمات ورودی در بین کلمات کتاب بود ، آن کتاب را پیشنهاد می دهد
    // همان wordMatches1 با تغییرات
    for (let i = 0; i < inputLength; i++) {
        const WordMatches1WithLoop = books.filter(book => {
            const wordsInBook = book.split(' '); // جدا کردن کلمات کتاب بر اساس اسپیس
            const inputWords = Array(input.split(' ')[i]); //  جدا کردن کلمات ورودی بر اساس اسپیس و انتخاب یک کلمه(تا زمانی که حلقه متوقف نشود کلمات بعدی انتخاب می شودند)
            return inputWords.some(inputWord => wordsInBook.some(bookWord => bookWord.includes(inputWord)));
        });

        if (WordMatches1WithLoop.length > 0) {
            return WordMatches1WithLoop; // کتاب هایی که شامل کلمات ورودی هستند را بر می گرداند
        }
    }

    // اگر یکی از کلمات ورودی در بین کلمات کتاب بود ، آن کتاب را پیشنهاد می دهد(با فاصله لون اشتاین)
    // همان wordMatches2 با تغییرات 
    for (let i = 0; i < inputLength; i++) {
        const WordMatches2WithLoop = books.filter(book => {
            const wordsInBook = book.split(' '); // جدا کردن کلمات کتاب بر اساس اسپیس
            const inputWords = Array(input.split(' ')[i]); // جدا کردن کلمات ورودی بر اساس اسپیس
            return inputWords.some(inputWord => 
                wordsInBook.some(bookWord => lsDistance(inputWord, bookWord) <= 1) //  جدا کردن کلمات ورودی بر اساس اسپیس و انتخاب یک کلمه(تا زمانی که حلقه متوقف نشود کلمات بعدی انتخاب می شودند)
            );
        });
    
        if (WordMatches2WithLoop.length > 0) {
            return WordMatches2WithLoop; // کتاب‌هایی که شامل کلمات ورودی با شباهت (فاصله لون اشتاین) هستند را بر می‌گرداند
        }
    }
    
    // در صورتی شرایط ورودی به گونه ای بود که توسط کد های بالا نتیجه ای پیدا نشد
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

function checkAllSingleLetterWords(input) {
    const words = input.split(' '); // ورودی را بر اساس اسپیس جدا می‌کنیم
    // بررسی اینکه آیا تمام کلمات یک حرفی هستند
    const allSingleLetterWords = words.every(word => word.length === 1);

    // اگر همه کلمات یک حرفی باشند، ورودی را بازمی‌گرداند
    if (allSingleLetterWords) {
        return input;
    }

    // در غیر این صورت آرایه خالی باز می‌گرداند
    return null;
}

function searchBook() {
    const selectedBookTitleDiv = document.getElementById('selected-book-title');
    const selectedBookImageDiv = document.getElementById('img-place-holder');
    const selectedBookdescriptionDiv = document.getElementById('selected-book-description');
    
    selectedBookTitleDiv.textContent =  '';
    selectedBookImageDiv.textContent = ' ';
    selectedBookdescriptionDiv.textContent =  '';

    let searchInput = document.getElementById('searchInput').value.trim();
    
    // حذف اسپیس های اضافی
    searchInput = cleanInput(searchInput);
    
    // ذخیره کلمات ورودی 
    const inputWords = searchInput.split(' ');
    
    // چک کردن اینکه آیا ورودی فقط یک کلمه غیرمفید است
    const containsIrrelevantWords = inputWords.every(word => irrelevantWords.includes(word));

    const resultDiv = document.getElementById('result');
    
    resultDiv.textContent = ''; // پاک کردن نتیجه قبلی

    setTimeout(() => {

        // بررسی اینکه آیا تمام کلمات ورودی یک حرفی هستند
        const result = checkAllSingleLetterWords(searchInput);
        if (result) {
            resultDiv.textContent = 'لطفا نام یا کلمه ای از کتاب را به صورت کامل وارد کنید.';
            return;
        }

        // اگر ورودی فقط یک کلمه غیر مفید باشد
        if (containsIrrelevantWords) {
            resultDiv.textContent = 'لطفاً از وارد کردن کلمات غیرمفید (مانند حروف ربط و اضافه) خودداری کنید. برای جستجو، نام یک کتاب یا عبارت معنادار وارد کنید';
            return;
        }
        
        // بررسی نداشتن کاراکتر خاص
        const hasSpecialCharacters = SpecialCharacters.some(char => searchInput.includes(char))
        if(hasSpecialCharacters) {
            resultDiv.textContent = 'نام کتاب نمیتواند شامل کلمات خاص باشد';
            return;
        }

        // بررسی اینکه ورودی شامل حروف انگلیسی است یا نه
        const isEnglishInput = /[A-Za-z]/.test(searchInput);
        if (isEnglishInput) {
            resultDiv.textContent = 'لطفا به فارسی جستجو کنید.';
            return;
        }

        // بررسی اینکه ورودی شامل عدد است یا نه
        const hasNumber = /[0-9]/.test(searchInput);
        if (hasNumber) {
            resultDiv.textContent = 'لطفا به فارسی جستجو کنید.';
            return;
        }

        // بررسی 2 حرفی یا کمتر از 2 حرفی نبودن ورودی
        if (searchInput.length <= 2 && searchInput.length >= 1){
            resultDiv.textContent = 'لطفا نام یا کلمه ای از کتاب را به صورت کامل وارد کنید.';
            return;
        }

        // اگه بدون ورودی باشه
        if (searchInput === '') {
            resultDiv.textContent = 'لطفا نام یک کتاب را وارد کنید.';
            return; 
        }

        const similarBooks = findBooks(searchInput);
        if (similarBooks.length > 0) {
            resultDiv.innerHTML = similarBooks
                .map((book,index) => `<p  id="book ${index}"  class="result-text" onclick="selectBook('${book}')">کتاب ${book}</p>`)
                .join(''); // هر کتاب را در یک پاراگراف جداگانه نمایش می‌دهد
        } else if(similarBooks === 0) {
            resultDiv.textContent = 'لطفاً از وارد کردن کلمات غیرمفید (مانند حروف ربط و اضافه) خودداری کنید. برای جستجو، نام یک کتاب یا عبارت معنادار وارد کنید';
        } else{
            resultDiv.textContent = 'کتابی یافت نشد. لطفا در وارد کردن اسم کتاب دقت کنید.';
        }   
        scrollTo('result');
    }, 200);
}

function showAllBooks() {
    const selectedBookTitleDiv = document.getElementById('selected-book-title');
    const selectedBookImageDiv = document.getElementById('img-place-holder');
    const selectedBookdescriptionDiv = document.getElementById('selected-book-description');
    
    selectedBookTitleDiv.textContent =  '';
    selectedBookImageDiv.textContent = ' ';
    selectedBookdescriptionDiv.textContent =  '';

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // پاک کردن نتیجه قبلی

    // مرتب‌سازی آرایه کتاب‌ها بر اساس حروف الفبای فارسی
    const sortedBooks = books.sort((a, b) => a.localeCompare(b, 'fa'));

    setTimeout(() => {
        resultDiv.innerHTML = sortedBooks
                .map((book,index) => `<p  id="book ${index}"  class="result-text" onclick="selectBook('${book}')">کتاب ${book}</p>`)
                .join('');
        scrollTo('result');        
    }, 200);

}
function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// متغیر برای ذخیره کتاب انتخاب شده
let selectedBook = null;

// تابع برای انتخاب کتاب
function selectBook(bookName) {
    selectedBook = bookName;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    console.log('کتاب انتخاب شده:', selectedBook);
    getBookDetails(selectedBook);
}

document.addEventListener("keydown", function(event) {
    // برای بررسی اینکه آیا فیلد ورودی فوکوس دارد
    const inputField = document.getElementById('searchInput');

    if (event.key === "Enter" && document.activeElement === inputField) {
        searchBook();
    }
});


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
    },  1000);
}
