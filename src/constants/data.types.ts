export interface IJob {
    name: string;
    location: string;
    responsibilities: string[];
    moreInfo: string;
    quickApply: string;
}

export interface IStatistics {
    label: string;
    value: number | string;
}

export interface IArticle {
    thumbnail?: string | undefined;
    title: string;
    description: string;
    link: string;
}

export interface IGalleryProps {
    image: string;
}
