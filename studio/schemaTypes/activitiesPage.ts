import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'activitiesPage',
    title: 'Halaman Aktiviti',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tajuk Halaman',
            type: 'string',
            initialValue: 'Aktiviti Terkini'
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Halaman',
            type: 'text',
            initialValue: 'Ikuti perkembangan semasa dan program yang dijalankan oleh JPKKP Hulu Chuchoh.'
        }),
        defineField({
            name: 'facebookUrl',
            title: 'URL Facebook Page',
            type: 'url',
            initialValue: 'https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/'
        }),
        defineField({
            name: 'infoSection',
            title: 'Seksyen Info (Kiri)',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Tajuk', type: 'string', initialValue: 'Sentiasa Berhubung' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text', initialValue: 'Kami aktif berkongsi maklumat terkini, gambar program, dan pengumuman penting di laman Facebook rasmi kami.' }),
                defineField({ name: 'ctaText', title: 'Teks Butang', type: 'string', initialValue: 'Ikuti Laman Facebook' })
            ]
        }),
        defineField({
            name: 'contactSection',
            title: 'Seksyen Hubungi (Merah)',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Tajuk', type: 'string', initialValue: 'Ada Aduan?' }),
                defineField({ name: 'description', title: 'Deskripsi', type: 'text', initialValue: 'Salurkan aduan atau cadangan anda terus kepada pihak admin melalui mesej Facebook.' }),
                defineField({ name: 'buttonText', title: 'Teks Butang', type: 'string', initialValue: 'Mesej Kami' })
            ]
        })
    ]
})
