import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'Halaman Tentang Kami',
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
            name: 'mainContent',
            title: 'Kandungan Utama',
            type: 'array',
            of: [{ type: 'text' }],
            description: 'Setiap item adalah satu perenggan.'
        }),
        defineField({
            name: 'roleSection',
            title: 'Seksyen Peranan',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Tajuk Seksyen', type: 'string' }),
                defineField({
                    name: 'roles',
                    title: 'Senarai Peranan',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'role', title: 'Peranan', type: 'string' }),
                                defineField({ name: 'description', title: 'Deskripsi', type: 'text' })
                            ]
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: 'image',
            title: 'Gambar Utama',
            type: 'image',
            options: { hotspot: true }
        })
    ]
})
