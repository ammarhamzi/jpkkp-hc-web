import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Halaman Utama',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
                defineField({ name: 'titlePart1', title: 'Tajuk Bahagian 1', type: 'string' }),
                defineField({ name: 'titlePart2', title: 'Tajuk Bahagian 2 (Warna Merah)', type: 'string' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                defineField({ name: 'heroImage', title: 'Gambar Hero', type: 'image', options: { hotspot: true } }),
            ]
        }),
        defineField({
            name: 'coreValues',
            title: 'Nilai Teras',
            type: 'object',
            fields: [
                defineField({ name: 'heading', title: 'Tajuk Kecil', type: 'string' }),
                defineField({ name: 'subheading', title: 'Tajuk Besar', type: 'string' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                defineField({
                    name: 'values',
                    title: 'Senarai Nilai',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Tajuk', type: 'string' }),
                                defineField({ name: 'desc', title: 'Deskripsi', type: 'text' }),
                                defineField({ name: 'icon', title: 'Nama Ikon (Lucide React)', type: 'string', description: 'Contoh: Users, TrendingUp, ShieldCheck' }),
                            ]
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: 'community',
            title: 'Seksyen Komuniti',
            type: 'object',
            fields: [
                defineField({ name: 'image', title: 'Gambar', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'heading', title: 'Tajuk', type: 'string' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                defineField({ name: 'ctaText', title: 'Teks Pautan', type: 'string' }),
                defineField({ name: 'ctaLink', title: 'Pautan', type: 'string' })
            ]
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action (Footer)',
            type: 'object',
            fields: [
                defineField({ name: 'heading', title: 'Tajuk', type: 'string' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                defineField({ name: 'buttonText', title: 'Teks Butang', type: 'string' }),
                defineField({ name: 'buttonLink', title: 'Pautan Butang', type: 'url' })
            ]
        })
    ]
})
