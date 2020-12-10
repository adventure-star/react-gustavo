import { apiUrl } from "../config.json";


export async function apiGetRecentLessons() {

    //   return http.get(apiUrl + "/recentlessons");

}

export function staticRecentLessons() {
    const recentlessons = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 5,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 6,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 7,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        },
        {
            id: 8,
            title: "Lorem ipsum dolor",
            content: "Donec vulputate mauris turpis",
            src: "images/pyramid.png",
            avatar: "images/account-gray.png"
        }
    ];
    return recentlessons;

}

export async function apiGetLessonTemplates() {

    //   return http.get(apiUrl + "/lessontemplates");

}

export function staticLessonTemplates() {
    
    const templates = {
        "Matemáticas": [
            {
                id: 1,
                src: "/images/child-1.png"
            },
            {
                id: 2,
                src: "/images/child-2.png"
            },
            {
                id: 3,
                src: "/images/child-3.png"
            },
            {
                id: 4,
                src: "/images/child-4.png"
            },
            {
                id: 5,
                src: "/images/child-5.png"
            }
        ],
        "Lenguaje y Comunicación": [
            {
                id: 6,
                src: "/images/child-6.png"
            },
            {
                id: 7,
                src: "/images/child-7.png"
            },
            {
                id: 8,
                src: "/images/child-8.png"
            },
            {
                id: 9,
                src: "/images/child-9.png"
            },
            {
                id: 10,
                src: "/images/child-10.png"
            }
        ]
    };
    return templates;

}

export default {

    apiGetRecentLessons,
    staticRecentLessons,

};
