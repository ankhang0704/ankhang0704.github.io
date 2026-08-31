"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";

const LOG_STEPS_VI = [
  "[00:00.1] KHỞI TẠO: Kiểm tra kết nối cụm PostgreSQL 16 tại 10.10.10.5:5432... [OK]",
  "[00:00.8] THỰC THI: pg_dump -U postgres -d eye_hospital_db --format=custom -f backup_20260831.dump",
  "[00:01.9] NÉN DỮ LIỆU: Kích hoạt gzip level 9 -> Kích thước giảm 84.2% (1.8GB -> 284MB)",
  "[00:02.5] KIỂM TRA TOÀN VẸN: SHA-256 hash = e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 [KHỚP ✓]",
  "[00:03.2] LUÂN CHUYỂN BẢN SAO LƯU: Xóa bỏ các bản dump cũ hơn 30 ngày (Chính sách lưu trữ 30 ngày)",
  "[00:03.9] ĐỒNG BỘ NGOẠI BIÊN: rsync bản sao lưu sang máy chủ lưu trữ an toàn Off-site... [THÀNH CÔNG]",
  "[00:04.2] HOÀN TẤT: Toàn bộ quy trình hoàn thành trong 4.2 giây. Trạng thái hệ thống: BÌNH THƯỜNG 99.8% UPTIME.",
];

const LOG_STEPS_EN = [
  "[00:00.1] INIT: Verifying PostgreSQL 16 cluster socket at 10.10.10.5:5432... [OK]",
  "[00:00.8] EXEC: pg_dump -U postgres -d eye_hospital_db --format=custom -f backup_20260831.dump",
  "[00:01.9] COMPRESS: Invoking gzip level 9 -> Payload reduced by 84.2% (1.8GB -> 284MB)",
  "[00:02.5] INTEGRITY: SHA-256 checksum = e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 [VERIFIED ✓]",
  "[00:03.2] ROTATION: Enforcing 30-day retention window. Purging outdated historical snapshots.",
  "[00:03.9] OFFSITE SYNC: Transferring encrypted archive to disaster recovery NAS segment... [SUCCESS]",
  "[00:04.2] COMPLETE: Automated backup pipeline finished in 4.2s. SLA Health: 99.8% UPTIME.",
];

export function BackupTerminalSimulator({ isVi }: { isVi: boolean }) {
  const [isRunning, setIsRunning] = useState(false);
  const [customLogs, setCustomLogs] = useState<string[] | null>(null);
  const steps = isVi ? LOG_STEPS_VI : LOG_STEPS_EN;
  const logs = customLogs ?? steps.slice(0, 3);

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCustomLogs([]);

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setCustomLogs((prev) => [...(prev || []), step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <div className="border border-black/10 dark:border-white/10 p-6 md:p-8 bg-bgLight dark:bg-bgDark my-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 block mb-1">
            {isVi ? "Giả Lập Terminal Tự Động Hóa" : "Automated CLI Simulator"}
          </span>
          <h4 className="font-display text-xl font-bold uppercase tracking-wider">
            {isVi
              ? "Kịch Bản Sao Lưu Dữ Liệu Tự Động"
              : "Automated PostgreSQL Backup Pipeline"}
          </h4>
        </div>

        <button
          onClick={runPipeline}
          disabled={isRunning}
          className="inline-flex items-center gap-2 px-6 py-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black text-xs font-mono uppercase tracking-widest hover:opacity-80 transition-all disabled:opacity-50"
        >
          <Icons.Terminal size={14} />
          <span>
            {isRunning
              ? isVi ? "Đang chạy..." : "Running..."
              : isVi ? "Chạy Thử Kịch Bản ▶" : "Run Backup Script ▶"}
          </span>
        </button>
      </div>

      {/* Terminal Window */}
      <div className="border border-black/15 dark:border-white/15 bg-black text-white p-6 font-mono text-xs overflow-x-auto shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 opacity-70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 bg-white/20 inline-block" />
            <span className="text-[10px] uppercase tracking-widest ml-2">
              powershell.exe — root@ops-backup-node
            </span>
          </div>
          <span className="text-[10px] opacity-50">UTF-8</span>
        </div>

        <div className="space-y-2 leading-relaxed">
          <div className="text-white/60">
            PS C:\Ops\Scripts&gt; ./backup_postgres.ps1 -Target &quot;production&quot; -Compress -Verify
          </div>
          {logs.map((log, index) => (
            <div
              key={index}
              className={`animate-in fade-in duration-300 ${
                index === steps.length - 1
                  ? "font-bold text-white border-t border-white/10 pt-2 mt-2"
                  : "text-white/80"
              }`}
            >
              {log}
            </div>
          ))}
          {isRunning && (
            <div className="animate-pulse text-white/50">
              _
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
