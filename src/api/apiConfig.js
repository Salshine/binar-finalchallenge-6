const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : '89aa31757c591b4215db7a2e2b340392',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig

// const apiConfig = {
//     baseUrl: 'https://api.themoviedb.org/3/',
//     apiKey: '89aa31757c591b4215db7a2e2b340392',
//     originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
//     w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
// }

// export default apiConfig;