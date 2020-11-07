module.exports = {
    url: "http://demo.nagui.me",
    title: "Develop Blog",
    lang: "ko",
    description: "Mr.jun's Develop Blog",
    defaultKeywords: [`blog`, `gatsby`, `javascript`, `react`, `choijunho`],
    defaultMetaImage: "/defaultmetaimage.jpg",

    authorNickName: "Mr.Jun",
    authorFullName: "ChoiJunHo",
    authorDescription: "Hello World!",
    photo: "content/assets/profile-pic.png",

    // icon : FontAwesome
    category: [
        {
            id: "Algorithm",
            icon: "fa-code-branch"
        },
        {
            id: "Develop",
            icon: "fa-pencil-alt"
        },
        {
            id: "Language",
            icon: "fa-file-code"
        },
        {
            id: "Project",
            icon: "fa-project-diagram"
        },
        {
            id: "Daily",
            icon: "fa-suitcase"
        },
        {
            id: "Study",
            icon: "fa-pencil-ruler"
        }
    ],

    social: {
        email: "junho5336@gmail.com",
        github: "https://github.com/Choi-JJunho"
    },

    postsPerPage: 5,
    pageListSize: 5,

    copyright: "© All rights reserved.",
    googleAnalyticsId: "UA-143311992-2",
    s3Bucket: "s3.sudosujunho.com"
};
