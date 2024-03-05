---
title: New Blog, Who Dis?
date: 2024-03-01
---

I like writing, I like coding, and I like not pushing code. Oh yeah, it's time to reinvent the wheel.

## Integrating a custom blog for fun and (not) profit

So why blog? 

Techno-narcissism aside, this serves more of a personal purpose than anything else. I'm NOT doing this primarily for public reference or SEO farming - instead, I want a **public journal** of anything I'd like to put online.

### Specifically:
- Technical post-mortems of my projects and experiments
- Self-hosts for my writing
- The occasional 3am thoughts

## The Stack (or how I learned to stop worrying and love Obsidian)

My larger site is built with **Next.js** to support light backend functionality if so desired. But past sites have showed me that content can and should be decoupled from code (see my last 3 personal websites!).

The solution is [Obsidian](https://obsidian.md/). TLDR: write notes in Markdown, structure content as files, easily link content together.

Typically, static site generators (Gatsby, Hugo, etc) are used for turning a folder of content into a published site. Some (Quartz, Obsidian Push) even have special mappings for Obsidian features.

But I'm using **Next.js**. I want static routes AND dynamic client-side behavior.

### Really, there were two options:
- Create dedicated blog routes (`blog.abbyfarhat.com/*` or `abbyfarhat.com/blog/*`) that redirect to a separate static site archive with shared HTML snippets
- Integrate static site generation directly into the Next.js build pipeline

Of course, I had to go with option two.

## The beauty of Open Source (theft hehe)
Unsurprisingly, multiple someones have already done this. 

Most recently, **Matthew Wong** with [his Obsidian-powered Next.js site generator](https://github.com/matthewwong525/linked-blog-starter).

This was exactly what I was looking for - a build pipeline in a Next.js app, with [remark](https://github.com/remarkjs/remark)-powered content transforms. This allowed me to integrate blog hosting with my existing site, including dynamic layout elements and route transitions.

### Then things got crazier.

I already back-up my private Obsidian notes to GitHub with the excellent [obsidian-git](https://github.com/denolehov/obsidian-git), which lets me sync notes across devices for free. 

So, what if I placed all my blog content in a dedicated Obsidian Vault, with its own repo and the auto-sync plugin? Then, what if that pushes to that content repo could trigger a GitHub Action to rebuild edited routes automatically on the live site?

Magic, that's what happens.

Now, I can edit and publish all my site content from any device - laptop, desktop, or even mobile (with the addition of [Working Copy](https://workingcopy.app/) for git support). Love it!

## So will I actually publish blog stuff on the regular?
¯\\_(ツ)_/¯

Truth is, lowering the barrier of entry is only part of the problem. If I had a burning desire to push content in the past, I would have done it, overbuilt system or not.

Perhaps that's changed? Or perhaps not.