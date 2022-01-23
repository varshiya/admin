import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url: '/api/list',
        method: 'get',
        timeout: 1000,
        response: ({ query }) => {
            return {
                code: 2000,
                data: [
                    { name: 'sy' },
                    { name: 'kk' },
                    { name: 'aa' },
                    { name: 'cc' },
                    { name: 'dd' }
                ],
            }
        },
    }] as MockMethod[]