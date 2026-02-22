import { defineField, defineType } from "sanity";

export const film = defineType({
  name: "film",
  title: "Film",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "youtubeUrl",
      title: "유튜브 URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "coverImage",
      title: "대표 이미지",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "게시일",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "최신순",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});