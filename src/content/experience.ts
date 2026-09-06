export type ExperienceDefinition = {
  index: string;
  contentKey: "hospital" | "sojo" | "sailingBay" | "degree";
  timeEn: string;
  timeVi: string;
  statusEn: string;
  statusVi: string;
  badgeEn: string;
  badgeVi: string;
  isActive: boolean;
  tags: string[];
};

export const EXPERIENCE: ExperienceDefinition[] = [
  {
    index: "01",
    contentKey: "hospital",
    timeEn: "04/2026 — Present",
    timeVi: "04/2026 — Nay",
    statusEn: "CURRENT",
    statusVi: "HIỆN TẠI",
    badgeEn: "IT Support",
    badgeVi: "Hỗ trợ CNTT",
    isActive: true,
    tags: ["IT Helpdesk", "Hardware Support", "Network Troubleshooting"],
  },
  {
    index: "02",
    contentKey: "sojo",
    timeEn: "01/2026 — 03/2026",
    timeVi: "01/2026 — 03/2026",
    statusEn: "COMPLETED",
    statusVi: "ĐÃ HOÀN THÀNH",
    badgeEn: "IT Operations",
    badgeVi: "Vận hành CNTT",
    isActive: false,
    tags: ["IT Support", "Operations", "Service Workflows"],
  },
  {
    index: "03",
    contentKey: "sailingBay",
    timeEn: "Earlier",
    timeVi: "Trước đây",
    statusEn: "COMPLETED",
    statusVi: "ĐÃ HOÀN THÀNH",
    badgeEn: "Internship",
    badgeVi: "Thực tập",
    isActive: false,
    tags: ["IT Internship", "The Sailing Bay"],
  },
  {
    index: "04",
    contentKey: "degree",
    timeEn: "2022 — 2026",
    timeVi: "2022 — 2026",
    statusEn: "COMPLETED",
    statusVi: "ĐÃ HOÀN THÀNH",
    badgeEn: "Academic Degree",
    badgeVi: "Bằng cấp",
    isActive: false,
    tags: ["Information Technology", "Django & Python", "Flutter & Dart"],
  },
];
