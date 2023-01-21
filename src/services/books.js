import { axiosClient } from "./apiUrl";

export const getBookList = (maxResults, printType, langRestrict, searchTerm) => {
    return axiosClient.get('/volumes', {
        params: {
            maxResults: maxResults,
            printType: printType,
            langRestrict: langRestrict,
            q: `intitle:${searchTerm}`
        }
    })
}