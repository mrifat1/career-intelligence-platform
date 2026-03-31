import { PrismaClient, ResourceType, Language, Difficulty } from "@prisma/client";

const prisma = new PrismaClient();

// ─── TAXONOMY ────────────────────────────────────────────────────────────────

const sectors = [
    { name: "Foundations", slug: "foundations", description: "Core programming foundations and theory" },
    { name: "Web Development", slug: "web-dev", description: "Building for the modern web" },
    { name: "Backend Development", slug: "backend-dev", description: "Server-side engineering and databases" },
    { name: "Mobile Development", slug: "mobile-dev", description: "Building apps for iOS and Android" },
    { name: "AI & Machine Learning", slug: "ai-ml", description: "Intelligence, Data Science, and Robotics" },
    { name: "Software Engineering", slug: "software-engineering", description: "Principles, architecture, and testing" },
    { name: "Career & Guidance", slug: "career-guidance", description: "Books, advice, and inspiring content" },
];

const topics: { name: string; slug: string; parentSlug: string; isFeatured: boolean }[] = [
    // Foundations
    { name: "Algorithms", slug: "algorithms", parentSlug: "foundations", isFeatured: true },
    { name: "Data Structures", slug: "data-structures", parentSlug: "foundations", isFeatured: true },
    { name: "Graph Theory", slug: "graph-theory", parentSlug: "foundations", isFeatured: true },
    { name: "Math & Number Theory", slug: "math-theory", parentSlug: "foundations", isFeatured: false },
    { name: "Dynamic Programming", slug: "dp", parentSlug: "foundations", isFeatured: true },
    { name: "Competitive Programming", slug: "cp", parentSlug: "foundations", isFeatured: true },
    // Web Dev
    { name: "Frontend (React/Next)", slug: "frontend", parentSlug: "web-dev", isFeatured: false },
    { name: "JavaScript", slug: "javascript", parentSlug: "web-dev", isFeatured: true },
    { name: "HTML & CSS", slug: "html-css", parentSlug: "web-dev", isFeatured: false },
    // Backend
    { name: "PHP", slug: "php", parentSlug: "backend-dev", isFeatured: false },
    { name: "Node.js", slug: "nodejs", parentSlug: "backend-dev", isFeatured: false },
    { name: "Python", slug: "python", parentSlug: "backend-dev", isFeatured: true },
    { name: "Go / PHP / Java", slug: "backend-langs", parentSlug: "backend-dev", isFeatured: false },
    { name: "Database Systems", slug: "databases", parentSlug: "backend-dev", isFeatured: false },
    // Mobile
    { name: "Flutter", slug: "flutter", parentSlug: "mobile-dev", isFeatured: false },
    { name: "Android / iOS", slug: "native-mobile", parentSlug: "mobile-dev", isFeatured: false },
    // AI & ML
    { name: "Machine Learning", slug: "ml", parentSlug: "ai-ml", isFeatured: false },
    { name: "Natural Language Processing", slug: "nlp", parentSlug: "ai-ml", isFeatured: false },
    // Software Engineering
    { name: "OOP & Design", slug: "oop", parentSlug: "software-engineering", isFeatured: true },
    { name: "Design Patterns", slug: "design-patterns", parentSlug: "software-engineering", isFeatured: true },
    { name: "Software Architecture", slug: "architecture", parentSlug: "software-engineering", isFeatured: false },
    { name: "System Design", slug: "system-design", parentSlug: "software-engineering", isFeatured: false },
    { name: "Git & Version Control", slug: "git", parentSlug: "software-engineering", isFeatured: false },
    { name: "Testing", slug: "testing", parentSlug: "software-engineering", isFeatured: false },
    // Career
    { name: "Books", slug: "books", parentSlug: "career-guidance", isFeatured: true },
    { name: "Career Advice", slug: "career-advice", parentSlug: "career-guidance", isFeatured: false },
    { name: "Tech Talks & Podcast", slug: "tech-talks", parentSlug: "career-guidance", isFeatured: true },
];

// ─── RESOURCES ───────────────────────────────────────────────────────────────

type R = { title: string; author: string; url: string; topics: string[]; type: ResourceType; difficulty: Difficulty };

const resources: R[] = [
    // ── Algorithms ──────────────────────────────────────────────────────────────
    { title: 'বিগ "O" নোটেশন', author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1313", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "কমপ্লেক্সিটি ক্লাস (P-NP, টুরিং মেশিন ইত্যাদি)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1642", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "বাইনারি সার্চ", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1887", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "বাবল সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2004", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "সিলেকশন সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2023", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ইনসার্শন সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2090", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "মার্জ সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2135", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "কুইক সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2166", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "কাউন্টিং সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2206", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ডেটা স্ট্রাকচার এবং অ্যালগরিদম পরিচিতি", author: "শাকিল বাবু", url: "https://baburjhuli.blogspot.com/2021/08/introduction-to-data-structures-and-algorithms.html", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "অ্যালগরিদম লিখার নিয়ম", author: "শাকিল বাবু", url: "https://baburjhuli.blogspot.com/2021/08/algorithm.html", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ফ্লোচার্ট (Flowchart) নিয়ে আলোচনা", author: "শাকিল বাবু", url: "https://baburjhuli.blogspot.com/2021/08/flowchart.html", topics: ["algorithms"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },

    // ── Data Structures ─────────────────────────────────────────────────────────
    { title: "লিঙ্কড লিস্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2689", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "লিঙ্কড লিস্ট ব্যাসিক অপারেশন", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/data-structure/linked-list", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "লিঙ্কড লিস্ট (ভিডিও সিরিজ)", author: "তামিম শাহরিয়ার সুবীন", url: "https://youtu.be/k3wD1KtP8EE", topics: ["data-structures"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "স্ট্যাক (Stack)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2342", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "কিউ (Queue) ব্যাসিক অপারেশন", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/data-structure/queue", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "হিপ (Heap)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1426", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "বাইনারি সার্চ ট্রি", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/data-structure/tree/binary-search-tree-bst", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "হ্যাশটেবিল (Hashtable)", author: "আলাভোলা", url: "https://medium.com/প্রোগ্রামিং-পাতা/হ্যাশ-hash-এবং-হ্যাশিং-hashing-12b7cb6056b8", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ডিসজয়েন্ট সেট (Union Find)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=763", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ট্রাই (Trie) ট্রি", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1679", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "সেগমেন্ট ট্রি", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1557", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "বাইনারি ইন্ডেক্সড ট্রি (BIT / Fenwick Tree)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1902", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "স্পার্স টেবিল (Sparse Table)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2520", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "AVL ট্রি", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/data-structure/tree/avl-tree", topics: ["data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },

    // ── Graph Theory ────────────────────────────────────────────────────────────
    { title: "গ্রাফ থিওরিতে হাতেখড়ি", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=143", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "বিএফএস (BFS)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=604", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ডিএফএস (DFS)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=973", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ডায়াক্সট্রা অ্যালগরিদম", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1500", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "Dijkstra Algorithm Step by Step (ভিডিও)", author: "আসাদুল্লাহ শাওন", url: "https://www.youtube.com/watch?v=V6H1qAeB-l4", topics: ["graph-theory"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "ফ্লয়েড ওয়ার্শল", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1927", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "বেলম্যান ফোর্ড", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2044", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "মিনিমাম স্প্যানিং ট্রি – প্রিমস অ্যালগোরিদম", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=692", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "মিনিমাম স্প্যানিং ট্রি – ক্রুসকাল অ্যালগোরিদম", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=724", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "টপোলজিক্যাল সোর্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1328", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "স্ট্রংলি কানেক্টেড কম্পোনেন্ট", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2104", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "আর্টিকুলেশন পয়েন্ট ও ব্রিজ", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2454", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "নেটওয়ার্ক ফ্লো (Max Flow)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1286", topics: ["graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },

    // ── Math & Number Theory ────────────────────────────────────────────────────
    { title: "প্রাইম নম্বর ও সিভ অফ এরাটোস্থেনিস", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=178", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ইউক্লিড অ্যালগরিদম (GCD)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1376", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "মডুলার এক্সপোনেন্টেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1244", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "সংখ্যাতত্ত্ব – ফার্মা লিটল থিওরেম", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=803", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "কম্বিনেটরিক্স ও পারমুটেশন/কম্বিনেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1203", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ম্যাট্রিক্স এক্সপোনেন্টেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=3139", topics: ["math-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },

    // ── Dynamic Programming ─────────────────────────────────────────────────────
    { title: "ডাইনামিক প্রোগ্রামিংয়ের শুরুর কথা", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1022", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "কয়েন চেঞ্জ", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1158", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "লংগেস্ট ইনক্রিজিং সাবসিকোয়েন্স (LIS)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1508", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "লংগেস্ট কমন সাবসিকোয়েন্স (LCS)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1862", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2261", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "বিটমাস্ক ডিপি", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1357", topics: ["dp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "0/1 Knapsack Step by Step (ভিডিও)", author: "আসাদুল্লাহ শাওন", url: "https://www.youtube.com/watch?v=oTnFF6PhXdg", topics: ["dp"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "মিনিমাম ভারটেক্স কভার (গ্রাফ+ডিপি)", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=2385", topics: ["dp", "graph-theory"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },

    // ── Competitive Programming ─────────────────────────────────────────────────
    { title: "কম্পিটিটিভ প্রোগ্রামিং বই (১ম খণ্ড)", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/2012/01/1.html", topics: ["cp"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },
    { title: "কম্পিটিটিভ প্রোগ্রামিং বই (২য় খণ্ড)", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/2012/07/2.html", topics: ["cp"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },
    { title: "প্রোগ্রামিং কনটেস্ট – কোথা থেকে শুরু করবো", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1432", topics: ["cp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "STL (Standard Template Library) পরিচিতি", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1384", topics: ["cp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "বিট ম্যানিপুলেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1271", topics: ["cp"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "সেগমেন্ট ট্রি – লেজি প্রপাগেশন", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1593", topics: ["cp", "data-structures"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },

    // ── JavaScript ──────────────────────────────────────────────────────────────
    { title: "হাতেকলমে জাভাস্ক্রিপ্ট", author: "Zonayed Ahmed", url: "https://js.zonayed.me", topics: ["javascript"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },
    { title: "জাভাস্ক্রিপ্ট অ্যাসিনক্রোনাস প্রোগ্রামিং", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=3012", topics: ["javascript"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "জাভাস্ক্রিপ্ট প্রমিস (Promise)", author: "হাসিন হায়দার", url: "https://hasin.me/2016/03/31/javascript-promise/", topics: ["javascript"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "JavaScript ES6 বাংলা টিউটোরিয়াল (ভিডিও)", author: "Learn with Sumit", url: "https://www.youtube.com/watch?v=gdKO4ZUaZpM", topics: ["javascript"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "জাভাস্ক্রিপ্ট ক্লোজার (Closure)", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/2017/03/16/javascript-closure/", topics: ["javascript"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "Node.js দিয়ে REST API (ভিডিও)", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9P23SqlHL0QAqiwS_oCofV2", topics: ["nodejs", "javascript"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },

    // ── Frontend ────────────────────────────────────────────────────────────────
    { title: "রিয়েক্ট জেএস (ভিডিও সিরিজ)", author: "Learn with Sumit", url: "https://www.youtube.com/user/sumitanalyzen", topics: ["frontend"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "React Bangla Complete Course", author: "Stack Learner", url: "https://www.youtube.com/channel/UCrmHQdRbYKFsB602Duho4Tw", topics: ["frontend"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "Redux বাংলা টিউটোরিয়াল", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy", topics: ["frontend"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.ADVANCED },

    // ── HTML & CSS ──────────────────────────────────────────────────────────────
    { title: "বাংলায় HTML শেখা", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3oAZUB2QXR-dZac0bnRqBCH", topics: ["html-css"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "বাংলায় CSS শেখা", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3rz5XGuxFLgApoE1G4Sj4tL", topics: ["html-css"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "CSS Flexbox বাংলা", author: "Learn with Sumit", url: "https://www.youtube.com/watch?v=3YW65K6LcIA", topics: ["html-css"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Bootstrap 4 বাংলা টিউটোরিয়াল", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3pOZv0JsXLKc6BTDilBkEIi", topics: ["html-css"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },

    // ── Python ──────────────────────────────────────────────────────────────────
    { title: "বাংলায় পাইথন (howtocode)", author: "How-to-code", url: "http://python.howtocode.dev/", topics: ["python"], type: ResourceType.INTERACTIVE_COURSE, difficulty: Difficulty.BEGINNER },
    { title: "Python বাংলা টিউটোরিয়াল (ভিডিও)", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qFBiJfMtC8bJZ82z4gXWFE", topics: ["python"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Django বাংলা টিউটোরিয়াল", author: "তামিম শাহরিয়ার সুবীন", url: "https://www.youtube.com/watch?v=n0CXXtBECUk", topics: ["python"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "Flask দিয়ে ওয়েব অ্যাপ (ভিডিও)", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9MJDxMHgrFmGMrpSIIRD2KX", topics: ["python"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "পাইথন দিয়ে ডেটা অ্যানালাইসিস", author: "রকিবুল হাসান", url: "https://rakibul-hassan.gitbook.io/", topics: ["python", "ml"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },
    { title: "কম্পিউটার প্রোগ্রামিং ৩য় খণ্ড (Python)", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/p/3.html", topics: ["python", "books"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },

    // ── Backend Languages ───────────────────────────────────────────────────────
    { title: "বাংলায় সি প্রোগ্রামিং", author: "How-to-code", url: "http://c.howtocode.dev/", topics: ["backend-langs"], type: ResourceType.INTERACTIVE_COURSE, difficulty: Difficulty.BEGINNER },
    { title: "জাভা প্রোগ্রামিং", author: "How-to-code", url: "http://java.howtocode.dev/", topics: ["backend-langs"], type: ResourceType.INTERACTIVE_COURSE, difficulty: Difficulty.BEGINNER },
    { title: "বাংলায় গো-ল্যাং", author: "Hasin Hayder", url: "http://go.goragori.com/", topics: ["backend-langs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "PHP বাংলা টিউটোরিয়াল (ভিডিও)", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3pXC8Y8iqPnCZLLTwjkUDlF", topics: ["php", "backend-langs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Laravel বাংলা টিউটোরিয়াল (ভিডিও)", author: "Jhankar Mahbub", url: "https://www.youtube.com/user/jhankarmahbub", topics: ["php", "backend-langs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "C++ বাংলা টিউটোরিয়াল সিরিজ", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qZHPuMoGrMlm2rNXt4e3CW", topics: ["backend-langs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Virtual Function of C++ – OOP Bangla (ভিডিও)", author: "আসাদুল্লাহ শাওন", url: "https://www.youtube.com/watch?v=oIpL2yX3mQ0", topics: ["backend-langs", "oop"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },

    // ── Databases ───────────────────────────────────────────────────────────────
    { title: "MySQL বাংলা টিউটোরিয়াল", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qjcG6QAacqcuS9_L0IDCIY", topics: ["databases"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "PostgreSQL বাংলায় (ভিডিও)", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9Nfse1bJlP1Lz9HFBo0BJJG", topics: ["databases"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "MongoDB বাংলা টিউটোরিয়াল", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9PgOBxBpDPCM1FBDhL-r0FJ", topics: ["databases"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Redis বাংলা পরিচিতি", author: "হাসিন হায়দার", url: "https://hasin.me/2017/04/10/redis-bangla/", topics: ["databases"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },

    // ── Node.js ─────────────────────────────────────────────────────────────────
    { title: "Node.js বাংলা টিউটোরিয়াল", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3pPFRm4i5nSguIKpqmtesjY", topics: ["nodejs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Express.js বাংলা (ভিডিও)", author: "Learn with Sumit", url: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9PHnOIT5yF5163N3nHqCBBa", topics: ["nodejs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },
    { title: "JWT Authentication বাংলায়", author: "Learn with Sumit", url: "https://www.youtube.com/watch?v=iWOsXGMf9nY", topics: ["nodejs"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },

    // ── Flutter / Mobile ────────────────────────────────────────────────────────
    { title: "Flutter বাংলা টিউটোরিয়াল", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3pkLbOG3H8F7KCCEXHYWrIf", topics: ["flutter"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Android Development বাংলা", author: "Anisul Islam", url: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3pf0oouPDCeKJWVJQJwvLSL", topics: ["native-mobile"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },

    // ── Machine Learning ────────────────────────────────────────────────────────
    { title: "হাতেকলমে মেশিন লার্নিং", author: "রকিবুল হাসান", url: "https://rakibul-hassan.gitbook.io/mlbook-titanic/", topics: ["ml"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },
    { title: "ডিপ লার্নিং ও এএনএন", author: "নুহিল মেহেদী", url: "https://dl.howtocode.dev/", topics: ["ml"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },
    { title: "Neural Network বাংলায় (GitHub)", author: "রকিবুল হাসান", url: "https://github.com/raqueeb/mlbook", topics: ["ml"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.INTERMEDIATE },

    // ── NLP ─────────────────────────────────────────────────────────────────────
    { title: "হাতেকলমে এনএলপি", author: "রকিবুল হাসান", url: "https://github.com/raqueeb/nlp_bangla", topics: ["nlp"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.INTERMEDIATE },
    { title: "NLP with Python বাংলায়", author: "রকিবুল হাসান", url: "https://rakibul-hassan.gitbook.io/nlp/", topics: ["nlp"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },

    // ── OOP ─────────────────────────────────────────────────────────────────────
    { title: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং পরিচিতি", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/oop", topics: ["oop"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "ইনহেরিটেন্স (Inheritance) বাংলায়", author: "হাসিন হায়দার", url: "https://hasin.me/2015/10/22/inheritance-bangla/", topics: ["oop"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "পলিমরফিজম (Polymorphism) বাংলায়", author: "হাসিন হায়দার", url: "https://hasin.me/2015/11/01/polymorphism-bangla/", topics: ["oop"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "সলিড (S.O.L.I.D.) ডিজাইন প্রিন্সিপালস", author: "আবু আশরাফ মাসনুন", url: "http://masnun.com/2015/06/15/bangla-screencast-solid-design-principles.html", topics: ["oop"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.INTERMEDIATE },

    // ── Design Patterns ─────────────────────────────────────────────────────────
    { title: "ফ্যাক্টরী ডিজাইন প্যাটার্ণ", author: "হাসিন হায়দার", url: "https://hasin.me/2014/05/13/factory-design-pattern/", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "সিঙ্গেলটন ডিজাইন প্যাটার্ণ", author: "হাসিন হায়দার", url: "https://hasin.me/2014/05/14/singleton-design-pattern/", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "অবজার্ভার ডিজাইন প্যাটার্ণ", author: "হাসিন হায়দার", url: "https://hasin.me/2014/05/20/observer-design-pattern/", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ডেকোরেটর ডিজাইন প্যাটার্ণ", author: "হাসিন হায়দার", url: "https://hasin.me/2014/05/23/decorator-design-pattern/", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "স্ট্রাটেজি ডিজাইন প্যাটার্ণ", author: "How-to-code", url: "http://architecture.howtocode.dev/design_patterns/strategy_pattern.html", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "কমান্ড ডিজাইন প্যাটার্ণ", author: "How-to-code", url: "http://architecture.howtocode.dev/design_patterns/command_pattern.html", topics: ["design-patterns"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },

    // ── Software Architecture ───────────────────────────────────────────────────
    { title: "মাইক্রোসার্ভিস আর্কিটেকচার বাংলা", author: "ইকরাম হোসাইন", url: "http://apikothon.com/microservice-bangla-tutorial", topics: ["architecture"], type: ResourceType.BLOG_POST, difficulty: Difficulty.ADVANCED },
    { title: "REST API ডিজাইন নীতিমালা", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/2017/04/04/restful-api-bangla/", topics: ["architecture"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "MVC আর্কিটেকচার পরিচিতি", author: "হাসিন হায়দার", url: "https://hasin.me/2013/09/22/mvc-architecture-bangla/", topics: ["architecture"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },

    // ── System Design ───────────────────────────────────────────────────────────
    { title: "সিস্টেম ডিজাইন বাংলা (GitHub)", author: "লাহিন", url: "https://github.com/lahin31/system-design-bangla", topics: ["system-design"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.INTERMEDIATE },
    { title: "মন্টু মিয়াঁর সিস্টেম ডিজাইন অভিযান", author: "Shakirul Hasan Khan", url: "https://www.montumia.com", topics: ["system-design"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },
    { title: "Load Balancer বাংলায়", author: "লাহিন", url: "https://github.com/lahin31/system-design-bangla/blob/main/sections/load-balancer.md", topics: ["system-design"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.INTERMEDIATE },
    { title: "Caching বাংলায়", author: "লাহিন", url: "https://github.com/lahin31/system-design-bangla/blob/main/sections/caching.md", topics: ["system-design"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.INTERMEDIATE },
    { title: "Message Queue বাংলায়", author: "লাহিন", url: "https://github.com/lahin31/system-design-bangla/blob/main/sections/message-queue.md", topics: ["system-design"], type: ResourceType.GITHUB_REPO, difficulty: Difficulty.ADVANCED },

    // ── Git ─────────────────────────────────────────────────────────────────────
    { title: "গিট এবং গিটহাব: নতুনদের জন্য গিট", author: "শরিফ হাসান", url: "https://www.youtube.com/watch?v=gwWKnnCMQ5c", topics: ["git"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "গিটহাবে ওপেনসোর্স কন্ট্রিবিউশনের ওয়ার্কফ্লো", author: "আহমেদ শামীম হাসান", url: "https://medium.com/@shamimhassan/open-source-contribution-bangla", topics: ["git"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "Git Branching Strategy বাংলায়", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/2018/02/18/git-branching-strategy-bangla/", topics: ["git"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },

    // ── Testing ─────────────────────────────────────────────────────────────────
    { title: "টিডিডি – টেস্ট ড্রিভেন ডেভেলপমেন্ট", author: "তামিম শাহরিয়ার সুবীন", url: "http://subeen.com/tdd-bangla/", topics: ["testing"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "ইউনিট টেস্টিং", author: "তামিম শাহরিয়ার সুবীন", url: "http://subeen.com/unit-testing-bangla/", topics: ["testing"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "লোড টেস্টিং", author: "তামিম শাহরিয়ার সুবীন", url: "http://subeen.com/load-testing-bangla/", topics: ["testing"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },

    // ── Books ───────────────────────────────────────────────────────────────────
    { title: "সি প্রোগ্রামিং বই", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/", topics: ["books"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },
    { title: "কম্পিউটার প্রোগ্রামিং (১ম খণ্ড)", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/p/blog-page_11.html", topics: ["books"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },
    { title: "কম্পিউটার প্রোগ্রামিং (২য় খণ্ড)", author: "তামিম শাহরিয়ার সুবীন", url: "http://cpbook.subeen.com/p/2.html", topics: ["books"], type: ResourceType.BOOK, difficulty: Difficulty.INTERMEDIATE },
    { title: "হাতেকলমে জাভাস্ক্রিপ্ট বই", author: "Zonayed Ahmed", url: "https://js.zonayed.me/book", topics: ["books", "javascript"], type: ResourceType.BOOK, difficulty: Difficulty.BEGINNER },

    // ── Career Advice ───────────────────────────────────────────────────────────
    { title: "কেন আমি প্রোগ্রামিং শিখবো?", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=1437", topics: ["career-advice"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "কনফিউজড প্রোগ্রামার", author: "শাফায়েত আশরাফ", url: "http://www.shafaetsplanet.com/planetcoding/?p=3113", topics: ["career-advice"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "প্রোগ্রামার হিসেবে চাকরি পাবো কীভাবে?", author: "তামিম শাহরিয়ার সুবীন", url: "http://subeen.com/job-preparation-bangla/", topics: ["career-advice"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },
    { title: "সফটওয়্যার ইন্টার্ভিউ প্রস্তুতি বাংলায়", author: "হাসান আবদুল্লাহ", url: "http://hellohasan.com/category/interview", topics: ["career-advice"], type: ResourceType.BLOG_POST, difficulty: Difficulty.INTERMEDIATE },
    { title: "রিমোট জব বাংলা গাইড", author: "হাসিন হায়দার", url: "https://hasin.me/2016/08/10/remote-job-bangla-guide/", topics: ["career-advice"], type: ResourceType.BLOG_POST, difficulty: Difficulty.BEGINNER },

    // ── Tech Talks / Channels ───────────────────────────────────────────────────
    { title: "Anisul Islam YouTube Channel", author: "Anisul Islam", url: "https://www.youtube.com/user/ANIS3730", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Stack Learner YouTube", author: "Stack Learner", url: "https://www.youtube.com/channel/UCrmHQdRbYKFsB602Duho4Tw", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Learn with Sumit YouTube", author: "Sumit Saha", url: "https://www.youtube.com/user/sumitanalyzen", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Jhankar Mahbub YouTube", author: "Jhankar Mahbub", url: "https://www.youtube.com/user/jhankarmahbub", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Hasin Hayder YouTube", author: "Hasin Hayder", url: "https://www.youtube.com/user/hasinhayder", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
    { title: "Tamim Shahriar Subeen Talks", author: "তামিম শাহরিয়ার সুবীন", url: "https://www.youtube.com/user/tamimshahriar", topics: ["tech-talks"], type: ResourceType.VIDEO_SERIES, difficulty: Difficulty.BEGINNER },
];

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main() {
    console.log("🌱 Seeding ResourceHub...");

    // 1. Clear existing data
    await prisma.resource.deleteMany();
    await prisma.category.deleteMany();

    // 2. Create sectors (parent categories)
    const categoryMap = new Map<string, string>(); // slug → id

    for (const s of sectors) {
        const created = await prisma.category.create({
            data: { name: s.name, slug: s.slug, description: s.description },
        });
        categoryMap.set(s.slug, created.id);
    }

    // 3. Create topics (child categories)
    for (const t of topics) {
        const created = await prisma.category.create({
            data: {
                name: t.name,
                slug: t.slug,
                parentId: categoryMap.get(t.parentSlug),
                isFeatured: t.isFeatured,
            },
        });
        categoryMap.set(t.slug, created.id);
    }

    // 4. Insert resources
    let inserted = 0;
    let skipped = 0;

    for (const res of resources) {
        try {
            await prisma.resource.create({
                data: {
                    title: res.title,
                    author: res.author,
                    url: res.url,
                    type: res.type,
                    language: Language.BANGLA,
                    difficulty: res.difficulty,
                    categories: {
                        connect: res.topics.map((slug) => ({ slug })),
                    },
                },
            });
            inserted++;
        } catch (e: any) {
            if (e.code === "P2002") {
                console.warn(`  ⚠ Skipped duplicate: ${res.url}`);
                skipped++;
            } else {
                throw e;
            }
        }
    }

    console.log(`\n✅ Done!`);
    console.log(`   Sectors  : ${sectors.length}`);
    console.log(`   Topics   : ${topics.length}`);
    console.log(`   Inserted : ${inserted}`);
    console.log(`   Skipped  : ${skipped} (duplicates)`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });