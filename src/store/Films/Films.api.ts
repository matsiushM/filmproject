import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FilmInfo,NewPage} from "../../models/models";

export const filmsApi = createApi({
    reducerPath: "filmsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.themoviedb.org/3/",
    }),
    endpoints: build => ({
        pointPage: build.query<NewPage<FilmInfo>, number>({
            query: (page: number) => ({
                url: 'movie/now_playing',
                params: {
                    api_key: "01f754a84a4243b1075d96de64cde473",
                    page
                }
            }),
             transformResponse: (response: NewPage<FilmInfo>) => ({
                 page: response.page,
                 results: response.results,
                 total_pages: response.total_pages,
                 total_results: response.total_results,
             }),
        }),
    })
});
export const {usePointPageQuery} = filmsApi;