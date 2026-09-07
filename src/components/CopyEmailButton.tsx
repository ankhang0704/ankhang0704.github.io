"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";

interface CopyEmailButtonProps {
  email?: string;
  isVi?: boolean;
  className?: string;
  showText?: boolean;
}

export function CopyEmailButton({
  email = "ankhang.nguyen0704@gmail.com",
  isVi = false,
  className = "",
  showText = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 transition-all group ${className}`}
        title={isVi ? "Sao chép địa chỉ email" : "Copy email address"}
        aria-label={isVi ? "Sao chép email" : "Copy email"}
      >
        <span className="p-1.5 border border-black/20 dark:border-white/20 group-hover:border-black dark:group-hover:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
          {copied ? <Icons.Check size={14} /> : <Icons.Copy size={14} />}
        </span>
        {showText && (
          <span className="text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 font-mono transition-opacity">
            {copied
              ? isVi
                ? "Đã chép!"
                : "Copied!"
              : isVi
              ? "Sao chép"
              : "Copy"}
          </span>
        )}
      </button>

      {/* Floating Toast Notification */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-[100] border border-black dark:border-white bg-bgLight dark:bg-bgDark p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-2 h-2 bg-black dark:bg-white" />
          <span className="text-xs font-mono tracking-wider font-bold">
            {isVi
              ? `[ ✓ Đã sao chép: ${email} ]`
              : `[ ✓ Copied to clipboard: ${email} ]`}
          </span>
        </div>
      )}
    </>
  );
}
