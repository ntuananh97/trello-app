import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/axiosConfig";

export const fetchExampleData = createAsyncThunk('trello-content/fetchExampleData', async () => {
    const response = await client.get('/mock-data');
    return response.data;
});