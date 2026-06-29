import type { MetadataRoute } from "next";
import { repo } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Full content sitemap: home, leaderboard, every exam → subject → topic page.
 * Generated from the bundled content so new exams/topics are indexed
 * automatically. Personal routes (account/stats/review/settings) are omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/leaderboard`, lastModified: now, changeFrequency: "daily", priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 }
  ];

  for (const exam of repo.exams()) {
    entries.push({
      url: `${siteUrl}/${exam.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    });
    for (const subject of repo.subjectsByExam(exam.id)) {
      entries.push({
        url: `${siteUrl}/${exam.slug}/${subject.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6
      });
      for (const topic of repo.topicsBySubject(subject.id)) {
        entries.push({
          url: `${siteUrl}/${exam.slug}/${subject.slug}/${topic.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6
        });
      }
    }
  }

  return entries;
}
