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
};

export const PROJECTS: ProjectDefinition[] = [
  {
    id: "project-fm-dictionary",
    code: "PRJ-01",
    contentKey: "fmDictionary",
    image: "/fm-dictionary-cover.webp",
    href: "/fm-dictionary/",
    externalHref: "https://apps.apple.com/us/app/fm-dictionary/id6774868353",
    externalLabel: "App Store ↗",
    tags: ["Flutter", "Firebase", "Hive", "Cloudflare Workers", "1,847 terms"],
  },
  {
    id: "project-github-vault-relay",
    code: "PRJ-02",
    contentKey: "githubVaultRelay",
    externalHref: "https://community.obsidian.md/plugins/github-vault-relay",
    externalLabel: "View on Obsidian ↗",
    externalLabelVi: "Xem trên Obsidian ↗",
    secondaryExternalHref: "https://github.com/ankhang0704/github-vault-relay",
    secondaryExternalLabel: "GitHub ↗",
    secondaryExternalLabelVi: "GitHub ↗",
    tags: ["Open Source", "Obsidian", "GitHub API", "Mobile-first"],
  },
  {
    id: "project-hotel-management",
    code: "PRJ-03",
    contentKey: "hotelManagement",
    image: "/hotel-management-cover.webp",
    href: "/hotel-management/",
    externalHref: "https://github.com/ankhang0704/QuanLyKhachSan_AI",
    externalLabel: "GitHub ↗",
    tags: ["Django", "SQLite", "Server-rendered", "RAG", "FAISS"],
  },
  {
    id: "project-koi-phan-thiet",
    code: "PRJ-04",
    contentKey: "koiPhanThiet",
    externalHref: "https://koiphanthiet.com/",
    externalLabel: "Visit Site ↗",
    tags: ["WordPress", "Polylang", "5 languages", "Performance"],
  },
  {
    id: "project-python-ip-checker",
    code: "PRJ-05",
    contentKey: "pythonIpChecker",
    year: "2026",
    externalHref: "https://github.com/ankhang0704/python-ip-checker",
    externalLabel: "GitHub ↗",
    tags: ["Python", "IT Utility", "Batch Checking"],
  },
];

export const SELECTED_PROJECTS = PROJECTS.slice(0, 3);
