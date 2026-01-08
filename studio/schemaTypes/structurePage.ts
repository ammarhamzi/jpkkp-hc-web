import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'structurePage',
    title: 'Halaman Carta Organisasi',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Tajuk Laman (SEO)', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi Laman (SEO)', type: 'text' }),
        defineField({
            name: 'header',
            title: 'Header Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Tajuk Utama', type: 'string' }),
                defineField({ name: 'subtitle', title: 'Subtajuk', type: 'text' })
            ]
        }),
        defineField({
            name: 'orgChart',
            title: 'Carta Organisasi',
            type: 'object',
            fields: [
                defineField({ name: 'image', title: 'Gambar Carta', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'placeholderTitle', title: 'Tajuk Placeholder (Jika tiada gambar)', type: 'string' }),
                defineField({ name: 'placeholderDesc', title: 'Deskripsi Placeholder', type: 'text' })
            ]
        }),
        defineField({
            name: 'committee',
            title: 'Jawatankuasa Tertinggi',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Tajuk', type: 'string' }),
                defineField({
                    name: 'members',
                    title: 'Ahli',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'position', title: 'Jawatan', type: 'string' }),
                                defineField({ name: 'name', title: 'Nama', type: 'string' })
                            ]
                        }
                    ]
                })
            ]
        })
    ]
})
