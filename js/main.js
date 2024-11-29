const translations = {
    en: {
        title: "Welcome to our website!",
        description: "This is an example of a multilingual site."
    },
    ar: {
        title: "مرحبًا بكم في موقعنا!",
        description: "هذا مثال على موقع متعدد اللغات."
    }
};

function updateLanguage(language) {

    console.log(language);
    
    const mainTitle = document.getElementById("mainTitle");
    const description = document.getElementById("description");
    
    mainTitle.textContent = translations[language].title;
    description.textContent = translations[language].description;
    
    if (language === "ar") {
        document.body.style.direction = "rtl";
        document.getElementById('navList').classList.replace("ms-auto", "me-auto") ; 
    } 
    else {
        document.body.style.direction = "ltr";
        document.getElementById("navList").classList.replace("me-auto", "ms-auto") ; 
    }
}

