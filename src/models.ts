enum ResStatus {
    Ok = 'ok',
    Error = 'error',
}

export interface NameOfNewsSource {
    id: string;
    name: string;
}

export interface Article {
    source: NameOfNewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ModelSource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

interface BaseRes {
    status: ResStatus;
}

export interface ModelSourcesRes extends BaseRes {
    sources: ModelSource[];
}

export interface ModelArticlesRes extends BaseRes {
    totalResults: number;
    articles: Article[];
}
