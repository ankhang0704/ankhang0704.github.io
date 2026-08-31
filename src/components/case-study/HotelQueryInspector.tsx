"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";

export function HotelQueryInspector({ isVi }: { isVi: boolean }) {
  const [activeMode, setActiveMode] = useState<"unoptimized" | "optimized">(
    "optimized"
  );

  return (
    <div className="border border-black/10 dark:border-white/10 p-6 md:p-8 bg-bgLight dark:bg-bgDark my-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 block mb-1">
            {isVi ? "Tương tác Thử nghiệm Trực tiếp" : "Interactive Live Benchmark"}
          </span>
          <h4 className="font-display text-xl font-bold uppercase tracking-wider">
            {isVi
              ? "So Sánh Hiệu Năng Truy Vấn Django ORM"
              : "Django ORM Query Performance Benchmark"}
          </h4>
        </div>

        {/* Toggle Buttons */}
        <div className="flex border border-black/20 dark:border-white/20 p-0.5">
          <button
            onClick={() => setActiveMode("unoptimized")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeMode === "unoptimized"
                ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {isVi ? "Chưa Tối Ưu (N+1)" : "Unoptimized (N+1)"}
          </button>
          <button
            onClick={() => setActiveMode("optimized")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeMode === "optimized"
                ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {isVi ? "Đã Tối Ưu (1 Query)" : "Optimized (1 Query)"}
          </button>
        </div>
      </div>

      {/* Metrics Display */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark">
          <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 block mb-1">
            {isVi ? "Thời gian phản hồi" : "Latency / Response Time"}
          </span>
          <div className="font-display text-3xl font-bold">
            {activeMode === "unoptimized" ? "420 ms" : "18 ms"}
          </div>
          <span className="text-[11px] font-mono opacity-70">
            {activeMode === "unoptimized"
              ? isVi ? "Chậm / Nghẽn I/O" : "Slow / I/O Bottleneck"
              : isVi ? "⚡ Giảm 95.7% thời gian" : "⚡ 95.7% Latency Reduction"}
          </span>
        </div>

        <div className="p-4 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark">
          <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 block mb-1">
            {isVi ? "Số lượng truy vấn SQL" : "SQL Queries Executed"}
          </span>
          <div className="font-display text-3xl font-bold">
            {activeMode === "unoptimized" ? "24 Queries" : "1 Query"}
          </div>
          <span className="text-[11px] font-mono opacity-70">
            {activeMode === "unoptimized"
              ? isVi ? "N+1 Query lặp vòng lặp" : "N+1 Loop serialization"
              : isVi ? "Single JOIN with prefetch" : "Single JOIN with prefetch"}
          </span>
        </div>

        <div className="p-4 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark">
          <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 block mb-1">
            {isVi ? "Kỹ thuật Database" : "Database Scan Strategy"}
          </span>
          <div className="font-display text-xl font-bold pt-1">
            {activeMode === "unoptimized" ? "Seq Scan" : "B-Tree Index Scan"}
          </div>
          <span className="text-[11px] font-mono opacity-70">
            {activeMode === "unoptimized"
              ? isVi ? "Quét toàn bảng" : "Full table sequential scan"
              : isVi ? "Targeted Index on dates" : "Targeted Index on dates"}
          </span>
        </div>
      </div>

      {/* Code Snippet Comparison */}
      <div className="border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark p-4 font-mono text-xs overflow-x-auto">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-black/10 dark:border-white/10 opacity-60 text-[10px] uppercase tracking-widest font-sans font-bold">
          <Icons.Code size={14} />
          <span>{activeMode === "unoptimized" ? "Django View (Naive Approach)" : "Django View (Production Architecture)"}</span>
        </div>
        <pre className="text-xs leading-relaxed opacity-90 whitespace-pre-wrap">
          {activeMode === "unoptimized"
            ? `# NAIVE: Gây ra N+1 queries khi lặp qua từng phòng để lấy thông tin khách sạn
rooms = Room.objects.filter(is_available=True)
data = [{"room": r.number, "hotel": r.hotel.name} for r in rooms] # 1 + N queries!`
            : `# OPTIMIZED: Sử dụng select_related và B-Tree Index trên (hotel_id, is_available)
rooms = Room.objects.select_related("hotel").filter(is_available=True)
data = [{"room": r.number, "hotel": r.hotel.name} for r in rooms] # Chỉ duy nhất 1 query!`}
        </pre>
      </div>
    </div>
  );
}
