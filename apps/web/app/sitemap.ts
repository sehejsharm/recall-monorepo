import type { MetadataRoute } from "next";
import { repo } from "@/lib/content";
import { siteUrl } from "@/lib/site-url";

/**
 * Full content sitemap: home, leaderboard, every exam → subject → topic page.
 * Generated from the bundled content so new exams/topics are indexed
 * automatically. Personal routes (account/stats/review/settings) are omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: origin, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/leaderboard`, lastModified: now, changeFrequency: "daily", priority: 0.5 },
    { url: `${origin}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 }
  ];

  for (const exam of repo.exams()) {
    entries.push({
      url: `${origin}/${exam.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    });
    for (const subject of repo.subjectsByExam(exam.id)) {
      entries.push({
        url: `${origin}/${exam.slug}/${subject.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6
      });
      for (const topic of repo.topicsBySubject(subject.id)) {
        entries.push({
          url: `${origin}/${exam.slug}/${subject.slug}/${topic.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6
        });
      }
    }
  }

  return entries;
}
