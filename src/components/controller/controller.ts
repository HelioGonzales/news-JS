import { ModelArticlesRes, ModelSourcesRes } from './../../models';

import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: ModelSourcesRes) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: ModelArticlesRes) => void) {
        let target: Element = e.target as HTMLElement;
        const newsContainer: Element = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id')!;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ModelArticlesRes>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentElement) {
                target = target.parentElement;
            }
        }
    }
}

export default AppController;
