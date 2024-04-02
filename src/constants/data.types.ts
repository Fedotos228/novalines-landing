export interface IJob {
    title: string
    desc: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    location: string
    slug: string
    requirements: IRequirements[]
    departament: IDepartament[]
}

interface IDepartament {
    data: {
        id: number,
        attributes: {
            createdAt: string
            updatedAt: string
            title: string
            desc: string
        }
    }
}

interface IRequirements {
    id: number
    title: string
}

export interface IStatistics {
    label: string
    value: number
}
