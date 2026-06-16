import { glob, file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import {
  pageSchema,
  projectSchema,
} from '~/content/schema'

const pages = defineCollection({
  loader: glob({ base: './src/pages', pattern: '**/*.mdx' }),
  schema: pageSchema,
})

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const projects = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

const releases = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

const prs = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

const highlights = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

export const collections = {
  pages,
  home,
  projects,
  releases,
  prs,
  highlights,
}
