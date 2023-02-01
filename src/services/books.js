import { axiosClient } from "./apiUrl";

export const getBookList = (startIndex, maxResults, printType, langRestrict, searchTerm, select) => {
    return axiosClient.get('/volumes', {
        params: {
            startIndex: startIndex,
            maxResults: maxResults,
            printType: printType,
            langRestrict: langRestrict,
            q: `${searchTerm}`
        }
    });
}

export const getBookDetails = id => axiosClient.get(`/volumes/${id}`);