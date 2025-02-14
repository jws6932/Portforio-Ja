document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const sidebar = document.getElementById("sidebar-menu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 2) {
            navbar.classList.add("hidden"); // ซ่อน Navbar
            sidebar.style.display = "block"; // แสดง Sidebar
        } else {
            navbar.classList.remove("hidden"); // แสดง Navbar กลับ
            sidebar.style.display = "none"; // ซ่อน Sidebar
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    // 🔹 เปลี่ยนตำแหน่งพร้อมไอคอน
    const roles = [
        { title: "Project Manager", icon: "fas fa-briefcase" },
        { title: "System Analyst", icon: "fas fa-chart-line" },
        { title: "Full Stack Developer", icon: "fas fa-code" },
        { title: "DevOps", icon: "fas fa-server" },
        { title: "Data Management", icon: "fas fa-database" },
        { title: "Data Analyst", icon: "fas fa-chart-pie" }
    ];

    let roleIndex = 0;
    const dynamicRole = document.getElementById("dynamic-role");

    function changeRole() {
        if (!dynamicRole) return;

        gsap.to(dynamicRole, {
            opacity: 0, duration: 0.5, onComplete: () => {
                dynamicRole.innerHTML = `${roles[roleIndex].title}  <i class="${roles[roleIndex].icon}"></i>`;
                gsap.to(dynamicRole, { opacity: 1, duration: 0.5 });
                roleIndex = (roleIndex + 1) % roles.length;
            }
        });
    }

    setInterval(changeRole, 2000);

    // 🌟 GSAP Animation ให้ Sidebar Slide-in เมื่อปรากฏ
    gsap.from("#sidebar-menu", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#sidebar-menu",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    // ✨ Hero Section Animation
    gsap.from(".hero-text", { duration: 1.2, x: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-img", { duration: 1.5, x: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

    // ✨ Floating Profile Image
    gsap.to(".hero-img img", {
        y: 10,
        repeat: -1,
        duration: 2,
        yoyo: true,
        ease: "power1.inOut"
    });

    // ✨ วงกลมที่ขยับได้
    gsap.to(".circle-main", { scale: 1.1, y: 15, repeat: -1, duration: 3, yoyo: true, ease: "power1.inOut" });
    gsap.to(".circle-secondary", { scale: 1.2, y: 10, x: 10, repeat: -1, duration: 4, yoyo: true, ease: "power1.inOut" });
    gsap.to(".circle-extra", { scale: 1.3, y: -10, x: -10, repeat: -1, duration: 5, yoyo: true, ease: "power1.inOut" });

    // ✨ About Me Section Animation
    gsap.from("#about-title", {
        scrollTrigger: { trigger: "#about", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 50, duration: 1
    });

    gsap.from("#about p", {
        scrollTrigger: { trigger: "#about", start: "top 75%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 1, delay: 0.3
    });

    // ✨ Basic Info Animation
    gsap.from(".info-item", {
        scrollTrigger: { trigger: "#basic-info", start: "top 85%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 1, stagger: 0.2
    });

    // ✨ Career Goals Section Animation
    gsap.from("#career-goals h2", {
        scrollTrigger: { trigger: "#career-goals", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 50, duration: 1
    });

    gsap.from("#career-goals p", {
        scrollTrigger: { trigger: "#career-goals", start: "top 75%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 1, delay: 0.3
    });

    // ✨ Skills Section Animation
    gsap.from("#skills h2", {
        scrollTrigger: { trigger: "#skills", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 50, duration: 1
    });

    gsap.from(".skill-category", {
        scrollTrigger: { trigger: "#skills", start: "top 75%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 1, stagger: 0.2
    });

    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.fromTo(item,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // ✨ Animation ให้ Contact Section ค่อยๆ ปรากฏเมื่อเลื่อนลงมา
    gsap.from("#contact h2", {
        scrollTrigger: { trigger: "#contact", start: "top 85%", toggleActions: "play none none none" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    // 🌀 Animation ให้ Contact Items แสดงแบบ Fade-in ทีละอัน
    gsap.utils.toArray(".contact-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
            opacity: 0,
            x: -30,
            duration: 0.8,
            delay: i * 0.2, // แสดงทีละอัน
            ease: "power2.out"
        });
    });

});
