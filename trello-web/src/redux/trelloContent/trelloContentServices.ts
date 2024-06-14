import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/axiosConfig";
import { IResponseData } from "../../models/trello-content-type";

export const fetchExampleData = createAsyncThunk<IResponseData>('trello-content/fetchExampleData', async () => {
    const response = await client.get('/mock-data');
    return response.data;
});