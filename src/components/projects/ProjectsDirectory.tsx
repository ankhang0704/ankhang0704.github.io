"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDefinition } from "@/content/projects";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltedCard } from "@/components/TiltedCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type ProjectCopy = {
  type: string;
  status: string;
  category: string;
  title: string;
  desc: string;
};

type ProjectsDictionary = {
  label: string;
  title: string;
  viewCaseStudy: string;
  viewSource: string;
  items: Record<ProjectDefinition["contentKey"], ProjectCopy>;
};

interface ProjectsDirectoryProps {
  projects: ProjectDefinition[];
  projectsDict: ProjectsDictionary;
}

type CategoryKey = "all" | "mobile" | "backend" | "tools" | "web";

export function ProjectsDirectory({
  projects,
  projectsDict,
}: ProjectsDirectoryProps) {
  const { isVi } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const categories: { key: CategoryKey; labelEn: string; labelVi: string }[] = [
    { key: "all", labelEn: "All Works", labelVi: "Tất cả" },
    {
      key: "mobile",
      labelEn: "Mobile & Flutter",
      labelVi: "Di động (Flutter)",
    },
    {
      key: "backend",
      labelEn: "Backend & AI",
      labelVi: "Hệ thống (Django / AI)",
    },
    {
      key: "tools",
      labelEn: "Open Source & Tools",
      labelVi: "Mã nguồn mở & Công cụ",
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "mobile" && project.category !== "mobile")
          return false;
        if (selectedCategory === "backend" && project.category !== "backend")
          return false;
        if (selectedCategory === "tools" && project.category !== "tools")
          return false;
      }

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const copy = projectsDict.items[project.contentKey];

      const matchTitle = copy?.title.toLowerCase().includes(q) ?? false;
      const matchDesc = copy?.desc.toLowerCase().includes(q) ?? false;
      const matchCode = project.code.toLowerCase().includes(q);
      const matchTags = project.tags.some((t) => t.toLowerCase().includes(q));
      const matchSpecs =
        project.specs?.some((s) => s.toLowerCase().includes(q)) ?? false;

      return matchTitle || matchDesc || matchCode || matchTags || matchSpecs;
    });
  }, [projects, selectedCategory, searchQuery, projectsDict]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full space-y-12">
      {/* Precision Controls Toolbar */}
      <div className="border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark p-4 md:p-6 space-y-6">
        {/* Row 1: Search bar & View mode toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Terminal Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none opacity-40">
              <Icons.Terminal size={16} aria-hidden="true" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isVi
                  ? "[ TÌM KIẾM // NHẬP TÊN DỰ ÁN, CÔNG NGHỆ HOẶC THÔNG SỐ ]"
                  : "[ SEARCH // ENTER PROJECT, TECH STACK, OR SPEC ]"
              }
              className="w-full pl-10 pr-10 py-3 bg-bgLight dark:bg-bgDark border border-black/15 dark:border-white/15 text-xs font-mono uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-textLight dark:text-textDark placeholder:text-black/40 dark:placeholder:text-white/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center opacity-60 hover:opacity-100"
                aria-label={isVi ? "Xóa tìm kiếm" : "Clear search"}
              >
                <Icons.Close size={16} />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 border border-black/15 dark:border-white/15 p-1 bg-bgLight dark:bg-bgDark shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 transition-colors ${
                viewMode === "grid"
                  ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-pressed={viewMode === "grid"}
            >
              <Icons.Folder size={14} aria-hidden="true" />
              <span>{isVi ? "Dạng Lưới" : "Grid View"}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 transition-colors ${
                viewMode === "table"
                  ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-pressed={viewMode === "table"}
            >
              <Icons.File size={14} aria-hidden="true" />
              <span>{isVi ? "Bảng Thông Số" : "Data Sheet"}</span>
            </button>
          </div>
        </div>

        {/* Row 2: Category Filters & Counter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              const count =
                cat.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border transition-all ${
                    isSelected
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black font-bold"
                      : "border-black/15 dark:border-white/15 opacity-70 hover:opacity-100 hover:border-black/40 dark:hover:border-white/40"
                  }`}
                >
                  <span>{isVi ? cat.labelVi : cat.labelEn}</span>
                  <span className="ml-2 text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-widest opacity-60 shrink-0">
            {isVi
              ? `Hiển thị ${filteredProjects.length} / ${projects.length} dự án kỹ thuật`
              : `Showing ${filteredProjects.length} of ${projects.length} engineering artifacts`}
          </div>
        </div>
      </div>

      {/* Zero State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border border-dashed border-black/20 dark:border-white/20 p-8 space-y-4">
          <Icons.Alert size={32} className="mx-auto opacity-40" />
          <h3 className="font-display text-xl font-bold">
            {isVi
              ? "Không tìm thấy dự án phù hợp"
              : "No matching engineering artifacts found"}
          </h3>
          <p className="text-sm font-light opacity-75 max-w-md mx-auto">
            {isVi
              ? `Không có kết quả nào khớp với "${searchQuery}". Hãy thử tìm bằng từ khóa công nghệ khác.`
              : `No project matched query "${searchQuery}". Try searching for other technologies like Flutter, Django, or Python.`}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 border border-black dark:border-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {isVi ? "Đặt lại bộ lọc" : "Reset search & filters"}
          </button>
        </div>
      )}

      {/* VIEW MODE 1: EDITORIAL VISUAL GRID */}
      {viewMode === "grid" && filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const copy = projectsDict.items[project.contentKey];
            const spanClass =
              filteredProjects.length === 1
                ? "lg:col-span-12"
                : index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-6";

            const statusLabel = project.statusBadge
              ? isVi
                ? project.statusBadge.vi
                : project.statusBadge.en
              : null;

            return (
              <RevealOnScroll
                key={project.id}
                className={spanClass}
                delay={index * 80}
              >
                <SpotlightCard className="h-full border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between hover:border-black dark:hover:border-white transition-colors duration-300 scroll-mt-24">
                  <article
                    id={project.id}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      {/* Image Header with Tilted Card */}
                      <TiltedCard maxTilt={5}>
                        <div className="relative border-b border-black/10 dark:border-white/10 bg-bgLight dark:bg-bgDark overflow-hidden">
                          {/* Architectural Bar */}
                          <div className="flex items-center justify-between px-4 py-2 border-b border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark text-[10px] font-mono uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-black dark:bg-white inline-block" />
                              <span className="font-bold opacity-90">
                                {project.code}
                              </span>
                              {project.year && (
                                <span className="opacity-50">
                                  · {project.year}
                                </span>
                              )}
                            </div>
                            {statusLabel && (
                              <span className="opacity-75 tracking-widest">
                                {statusLabel}
                              </span>
                            )}
                          </div>

                          {/* Image Box */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={copy?.title ?? project.code}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest opacity-60">
                                <span className="text-2xl font-bold">
                                  {project.code}
                                </span>
                                <span>Engineered System</span>
                              </div>
                            )}

                            {/* Specs overlay */}
                            {project.specs && project.specs.length > 0 && (
                              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                                {project.specs.map((spec) => (
                                  <span
                                    key={spec}
                                    className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border border-white/20 dark:border-black/20 backdrop-blur-sm font-semibold"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </TiltedCard>

                      {/* Content Area */}
                      <div className="p-6 md:p-8 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                              {project.code} / {copy?.category}
                            </span>
                            <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold">
                              {copy?.title}
                            </h3>
                          </div>
                        </div>

                        <p className="font-light text-base leading-relaxed opacity-80">
                          {copy?.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-black/15 dark:border-white/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider opacity-75"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-6 md:p-8 pt-0 flex flex-wrap gap-3">
                      {project.href && (
                        <Link
                          href={project.href}
                          className="inline-flex items-center gap-2.5 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-5 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-85 transition-opacity"
                        >
                          <span>{projectsDict.viewCaseStudy}</span>
                          <Icons.ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      )}
                      {project.externalHref && (
                        <a
                          href={project.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center border border-black/30 dark:border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-colors"
                        >
                          {isVi
                            ? (project.externalLabelVi ?? project.externalLabel)
                            : (project.externalLabel ??
                              projectsDict.viewSource)}
                        </a>
                      )}
                      {project.secondaryExternalHref && (
                        <a
                          href={project.secondaryExternalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center border border-black/20 dark:border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-widest opacity-80 hover:opacity-100 hover:border-black dark:hover:border-white transition-all"
                        >
                          {isVi
                            ? (project.secondaryExternalLabelVi ??
                              project.secondaryExternalLabel)
                            : project.secondaryExternalLabel}
                        </a>
                      )}
                    </div>
                  </article>
                </SpotlightCard>
              </RevealOnScroll>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: TECHNICAL DATA SHEET / TABLE VIEW */}
      {viewMode === "table" && filteredProjects.length > 0 && (
        <div className="border border-black/15 dark:border-white/15 overflow-x-auto bg-cardLight dark:bg-cardDark">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] opacity-75">
                <th className="py-4 px-4 font-bold">CODE</th>
                <th className="py-4 px-4 font-bold">PROJECT & ARTIFACT</th>
                <th className="py-4 px-4 font-bold">DISCIPLINE</th>
                <th className="py-4 px-4 font-bold">CORE SPECS</th>
                <th className="py-4 px-4 font-bold">YEAR</th>
                <th className="py-4 px-4 font-bold">STATUS</th>
                <th className="py-4 px-4 font-bold text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 dark:divide-white/10 text-xs font-mono">
              {filteredProjects.map((project) => {
                const copy = projectsDict.items[project.contentKey];
                const statusLabel = project.statusBadge
                  ? isVi
                    ? project.statusBadge.vi
                    : project.statusBadge.en
                  : "RELEASED";

                return (
                  <tr
                    key={project.id}
                    className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="py-4 px-4 font-bold tracking-wider">
                      {project.code}
                    </td>
                    <td className="py-4 px-4">
                      {project.href ? (
                        <Link
                          href={project.href}
                          className="font-display text-sm font-bold hover:underline"
                        >
                          {copy?.title}
                        </Link>
                      ) : (
                        <span className="font-display text-sm font-bold">
                          {copy?.title}
                        </span>
                      )}
                      <div className="text-[10px] font-light opacity-70 max-w-sm truncate mt-0.5">
                        {copy?.desc}
                      </div>
                    </td>
                    <td className="py-4 px-4 uppercase text-[11px] opacity-80">
                      {project.category}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {project.specs?.map((spec) => (
                          <span
                            key={spec}
                            className="bg-black/10 dark:bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 opacity-75">
                      {project.year ?? "2026"}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-85">
                        {statusLabel}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        {project.href && (
                          <Link
                            href={project.href}
                            className="border border-black dark:border-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                          >
                            Case Study ↗
                          </Link>
                        )}
                        {project.externalHref && (
                          <a
                            href={project.externalHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-black/20 dark:border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:border-black dark:hover:border-white transition-colors"
                          >
                            External ↗
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
