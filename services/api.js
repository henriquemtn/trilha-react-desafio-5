import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://mkhsbrinmibzvidogncb.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raHNicmlubWlienZpZG9nbmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTczNjksImV4cCI6MjAxMTk3MzM2OX0.hTPr3SQZjH-y68nqMAWx54XBwpVU_ahO1Z4dcfayHjE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raHNicmlubWlienZpZG9nbmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTczNjksImV4cCI6MjAxMTk3MzM2OX0.hTPr3SQZjH-y68nqMAWx54XBwpVU_ahO1Z4dcfayHjE"
    }
})