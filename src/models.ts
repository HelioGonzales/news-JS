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

interface BaseResponse {
    status: ResStatus;
}

export interface ModelSourcesResponse extends BaseResponse {
    sources: ModelSource[];
}

export interface ModelArticlesResponse extends BaseResponse {
    totalResults: number;
    articles: Article[];
}
