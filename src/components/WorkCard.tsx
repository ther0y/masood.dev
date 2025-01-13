import Link from "next/link";
import React from "react";

interface WorkCardProps {
  color: string;
  title: string;
  company: string;
  period: string;
  description: string;
  link: string;
  linkText?: string;
}

export function WorkCard({
  color,
  title,
  company,
  period,
  description,
  link,
  linkText = "Coming Soon →",
}: WorkCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg ${color}`} />
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <p className="text-sm text-gray-500">
            {company} · {period}
          </p>
          <p className="max-w-md text-gray-500">{description}</p>
          <Link
            href={link}
            className="inline-block text-sm text-gray-900 underline"
          >
            {linkText}
          </Link>
        </div>
        <div className="relative h-48 w-48 flex-shrink-0">
          <div className="h-full w-full rounded-xl bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
