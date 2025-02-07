import { defineDb, defineTable, column, NOW } from 'astro:db';

const Feedback = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),

    email: column.text({ multiline: false }),
    content: column.text({ multiline: true }),
    rating: column.number({ default: 0 }),

    date: column.date({ default: NOW }),
    progress: column.number({ default: 0 }),
    slug: column.text({ multiline: false })
  },
  indexes: [
    { on: ["id"], unique: true }
  ]
});

const AppMapping = defineTable({
  columns: {
    short: column.text({ primaryKey: true }),
    long: column.text()
  },
  indexes: [
    { on: ["short"], unique: true }
  ]
})

// https://astro.build/db/config
export default defineDb({
  tables: { AppMapping, Feedback }
});
