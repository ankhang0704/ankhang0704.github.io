export type ProjectDefinition = {
  id: string;
  code: string;
  contentKey: "fmDictionary" | "githubVaultRelay" | "koiPhanThiet" | "pythonIpChecker" | "hotelManagement";
  image?: string;
  href?: string;
  externalHref?: string;
  externalLabel?: string;
  externalLabelVi?: string;
  secondaryExternalHref?: string;
  secondaryExternalLabel?: string;
  secondaryExternalLabelVi?: string;
  year?: string;
  tags: string[];
  specs?: string[];
  statusBadge?: {
    en: string;
    vi: string;
  };
};

export const PROJECTS: ProjectDefinition[] = [
  {
    id: "project-fm-dictionary",
    code: "PRJ-01",
    contentKey: "fmDictionary",
    image: "/fm-dictionary-editorial-cover.webp",
    href: "/fm-dictionary/",
    externalHref: "https://fm-dictionary.pages.dev/",
    externalLabel: "Website ↗",
    externalLabelVi: "Website ↗",
    secondaryExternalHref: "https://apps.apple.com/us/app/fm-dictionary/id6774868353",
    secondaryExternalLabel: "App Store ↗",
    tags: ["Flutter", "Firebase", "Hive", "Cloudflare Workers", "1,847 terms"],
    specs: ["1,847 Terms", "Hive Offline", "Cloudflare STT Proxy"],
    statusBadge: {
      en: "PRODUCTION · APP STORE",
      vi: "SẢN PHẨM · APP STORE",
    },
  },
  {
    id: "project-github-vault-relay",
    code: "PRJ-02",
    contentKey: "githubVaultRelay",
    image: "/github-vault-relay-cover.webp",
    href: "/github-vault-relay/",
    externalHref: "https://community.obsidian.md/plugins/github-vault-relay",
    externalLabel: "View on Obsidian ↗",
    externalLabelVi: "Xem trên Obsidian ↗",
    tags: ["Open Source", "Obsidian", "GitHub API", "Mobile-first"],
    specs: ["Obsidian Plugin", "GitHub REST API", "Direct Tree Sync"],
    statusBadge: {
      en: "OPEN SOURCE · RELEASED",
      vi: "MÃ NGUỒN MỞ · COMMUNITY",
    },
  },
  {
    id: "project-hotel-management",
    code: "PRJ-03",
    contentKey: "hotelManagement",
    image: "/hotel-management-editorial-cover.webp",
    href: "/hotel-management/",
    externalHref: "https://github.com/ankhang0704/QuanLyKhachSan_AI",
    externalLabel: "GitHub ↗",
    tags: ["Django", "SQLite", "Server-rendered", "RAG", "FAISS"],
    specs: ["Django 5 + SQLite", "FAISS Vector RAG", "Server-Rendered"],
    statusBadge: {
      en: "ACADEMIC CAPSTONE",
      vi: "ĐỒ ÁN TỐT NGHIỆP",
    },
  },
  {
    id: "project-koi-phan-thiet",
    code: "PRJ-04",
    contentKey: "koiPhanThiet",
    image: "/koi-phan-thiet-cover.webp",
    externalHref: "https://koiphanthiet.com/",
    externalLabel: "Visit Site ↗",
    tags: ["WordPress", "Polylang", "5 languages", "Performance"],
    specs: ["WordPress + Polylang", "5 Languages", "High Performance"],
    statusBadge: {
      en: "COMMERCIAL CLIENT",
      vi: "DỰ ÁN KHÁCH HÀNG",
    },
  },
  {
    id: "project-python-ip-checker",
    code: "PRJ-05",
    contentKey: "pythonIpChecker",
    image: "/python-ip-checker-cover.webp",
    year: "2026",
    externalHref: "https://github.com/ankhang0704/python-ip-checker",
    externalLabel: "GitHub ↗",
    tags: ["Python", "IT Utility", "Batch Checking"],
    specs: ["Python 3 Socket/Ping", "Subnet Scanner", "CSV Export"],
    statusBadge: {
      en: "INTERNAL IT UTILITY",
      vi: "CÔNG CỤ NỘI BỘ CNTT",
    },
  },
];

export const SELECTED_PROJECTS = PROJECTS.slice(0, 3);
