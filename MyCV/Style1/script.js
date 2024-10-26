const translations = {
    en: {
        title: "Anh Nguyen",
        profession: "Software Developer",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "about-title": "About",
        "about-text": "Hello! I'm Anh Nguyen, a software developer with over 9 years of experience working in Vietnam and the USA. I am passionate about software development and cutting-edge technologies.",
        "skills-title": "Skills",
        "skill-html": "HTML",
        "skill-css": "CSS",
        "skill-js": "JavaScript",
        "skill-react": "React",
        "skill-node": "Node.js",
        "skill-mysql": "MySQL",
        "skill-csharp": "C#.NET",
        "skill-java": "Java",
        "skill-python": "Python",
        "projects-title": "Projects",
        "project1-title": "E-commerce Website",
        "project1-text": "An online shopping platform built with React and Node.js, allowing users to shop online.",
        "project2-title": "Task Management App",
        "project2-text": "An application that helps manage and track daily tasks. Built with Vue.js and Firebase.",
        "contact-title": "Contact",
        "contact-name": "Your Name:",
        "contact-email": "Email:",
        "contact-message": "Message:",
        "contact-submit": "Send",
        footer: "2024 Anh Nguyen - All rights reserved."
    },
    vi: {
        title: "Anh Nguyễn",
        profession: "Lập trình viên",
        "nav-about": "Giới thiệu",
        "nav-skills": "Kỹ năng",
        "nav-projects": "Dự án",
        "nav-contact": "Liên hệ",
        "about-title": "Giới thiệu",
        "about-text": "Xin chào! Tôi là Anh Nguyễn, một lập trình viên với hơn 9 năm kinh nghiệm làm việc tại Việt Nam và Hoa Kỳ. Tôi đam mê phát triển phần mềm và các công nghệ tiên tiến.",
        "skills-title": "Kỹ năng",
        "skill-html": "HTML",
        "skill-css": "CSS",
        "skill-js": "JavaScript",
        "skill-react": "React",
        "skill-node": "Node.js",
        "skill-mysql": "MySQL",
        "skill-csharp": "C#.NET",
        "skill-java": "Java",
        "skill-python": "Python",
        "projects-title": "Dự án",
        "project1-title": "Website Thương mại điện tử",
        "project1-text": "Một nền tảng mua sắm trực tuyến được xây dựng bằng React và Node.js, cho phép người dùng mua sắm trực tuyến.",
        "project2-title": "Ứng dụng quản lý công việc",
        "project2-text": "Một ứng dụng giúp quản lý và theo dõi công việc hàng ngày. Được xây dựng với Vue.js và Firebase.",
        "contact-title": "Liên hệ",
        "contact-name": "Tên của bạn:",
        "contact-email": "Email:",
        "contact-message": "Tin nhắn:",
        "contact-submit": "Gửi",
        footer: "2024 Anh Nguyễn - Bản quyền thuộc về Anh."
    }
};

// Default language is English
function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}

// Language switch buttons
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-vi').addEventListener('click', () => setLanguage('vi'));

// Set default language to English on page load
document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
