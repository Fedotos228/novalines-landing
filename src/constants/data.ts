import { IArticle, IStatistics } from './data.types'

// export const jobs: IJob[] = [
//     {
//         name: 'Truck Dispatcher',
//         location: 'Chisinau, Moldova',
//         responsibilities: [
//             'Plan and coordinate the transportation of goods',
//             'Monitor shipments and maintain accurate records',
//             'Ensure compliance with regulations',
//         ],
//         moreInfo: 'https://carriers.novalines.md/',
//         quickApply: 'https://carriers.novalines.md/',
//     },
//     {
//         name: 'After-Hours Dispatcher',
//         location: 'Chisinau, Moldova',
//         responsibilities: [
//             'Monitor and manage after-hours shipments',
//             'Coordinate with drivers and customers',
//             'Ensure compliance with regulations',
//         ],
//         moreInfo: 'https://carriers.novalines.md/',
//         quickApply: 'https://carriers.novalines.md/',
//     },
//     {
//         name: 'Logistics Coordinator',
//         location: 'Chisinau, Moldova',
//         responsibilities: [
//             'Plan and manage logistics operations',
//             'Coordinate with carriers and customers',
//             'Ensure compliance with regulations',
//         ],
//         moreInfo: 'https://carriers.novalines.md/',
//         quickApply: 'https://carriers.novalines.md/',
//     },
//     {
//         name: 'Truck Driver',
//         location: 'Chisinau, Moldova',
//         responsibilities: [
//             'Transport goods to and from various locations',
//             'Ensure compliance with regulations',
//             'Maintain accurate records',
//         ],
//         moreInfo: 'https://carriers.novalines.md/',
//         quickApply: 'https://carriers.novalines.md/',
//     },
// ];

export const statistics: IStatistics[] = [
    {
        label: 'years of activity',
        value: 10,
    },
    {
        label: 'people in our Chișinău office',
        value: 120,
    },
    {
        label: 'trucks across US states',
        value: 300,
    },
]

export const articles: IArticle[] = [
    {
        thumbnail: '/assets/images/sub.jpg',
        title: 'Your One-Stop Shop for Trucking Dispatch',
        description:
            "We'll handle all your dispatching needs so you can focus on running your business.",
        link: 'https://blog.novalines.md/',
    },
    {
        title: 'Get the Best Rates and Loads with Our Experienced Dispatchers',
        description: 'Find out how we can help you grow your trucking business.',
        link: 'https://blog.novalines.md/',
    },
    {
        thumbnail: '/assets/images/sub2.jpg',
        title: "We'll Keep You Moving with Our 24/7 Dispatching Services",
        description: 'Find out how to get the best rates and loads for your trucking business.',
        link: 'https://blog.novalines.md/',
    },
    {
        title: 'We Make Trucking Dispatch Easy and Stress-Free',
        description: 'Find out how we can help you grow your trucking business.',
        link: 'https://blog.novalines.md/',
    },
]
