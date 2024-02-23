const projects = [
    {
        title: 'LayanObat',
        url: '/projects/layanobat',
        cover: '/assets/projects/layanobat/cover.png',
        description: 'Multi-platform Pharmacy Management Application',
        org: {
            name: 'PT LayanObat Solusi Medika',
            url: 'https://layanobat.com',
        },
        repository: null,
        demo: 'https://layanobat.com',
        featured: true,
    },
    {
        title: 'Career Counseling App',
        url: '/projects/career-counseling-app',
        cover: '/assets/projects/career-counseling-app/cover.png',
        description: 'Web-based Chat Application for Online Counseling Service',
        org: {
            name: 'Universitas Airlangga',
            url: 'https://unair.ac.id',
        },
        repository: null,
        demo: 'https://dpkka.unair.ac.id/ext/counseling',
        featured: true,
    },
    {
        title: 'Airlangga Tracer Study System',
        url: '/projects/airlangga-tracer-study-system',
        cover: '/assets/projects/cover-tracer.png',
        description: 'Modern and Powerful Tracer Study Application',
        org: {
            name: 'Universitas Airlangga',
            url: 'https://unair.ac.id',
        },
        repository: null,
        demo: 'https://tracerstudy.unair.ac.id',
        featured: false,
    },
    {
        title: 'E-Sertifikat Vokasi',
        url: '/projects/e-sertifikat-vokasi',
        cover: '/assets/projects/cover-esertif.png',
        description: 'Digital Certificate Management Application',
        org: {
            name: 'Faculty of Vocational Studies Universitas Airlangga',
            url: 'https://vokasi.unair.ac.id',
        },
        repository: null,
        demo: 'https://esertif.vokasiunair.com',
        featured: false,
    },
]

export function findProjectBySlug(slug: string) {
    return projects.find((project) => project.url.split('/').pop() === slug)
}

export default projects
