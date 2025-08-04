import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Job {
  id: number
  title: string
  company: string
  location: string
  description: string
  remote: boolean
  postedAt: string
}

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Job'],
  endpoints: (build) => ({
    getJobs: build.query<Job[], void>({
      query: () => 'jobs',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Job' as const, id })),
              { type: 'Job', id: 'LIST' },
            ]
          : [{ type: 'Job', id: 'LIST' }],
    }),
    getJob: build.query<Job, number>({
      query: (id) => `jobs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Job', id }],
    }),
    addJob: build.mutation<Job, Partial<Job>>({
      query: (body) => ({
        url: 'jobs',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Job', id: 'LIST' }],
    }),
    updateJob: build.mutation<Job, Partial<Job> & Pick<Job, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `jobs/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Job', id }],
    }),
    deleteJob: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `jobs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Job', id }],
    }),
  }),
})

export const {
  useGetJobsQuery,
  useGetJobQuery,
  useAddJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobsApi
