import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  name: 'default',
  title: 'SnapWave',

  projectId: process.env.SANITY_PROJECT_ID,

  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
