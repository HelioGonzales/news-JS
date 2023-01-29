import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7bc2fe47c7a54418ad13122fa4384ac2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

// 7bc2fe47c7a54418ad13122fa4384ac2
