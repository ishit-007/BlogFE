import axios from 'axios';
import makeRequest from './makeRequest';
jest.mock("axios");
import { GET_BLOG_DATA, UPDATE_BLOG_DATA, BACKEND_URL } from '../constants/apiEndpoints';


describe('makeRequest', () => {
    it('should make API call when only endpoint is passed', async () => {
        const mockEndpoint = GET_BLOG_DATA;
        const mockNavigate = jest.fn();
        const mockData = { data: { title: 'test' } };
        axios.mockResolvedValue(mockData);
        expect(axios).toHaveBeenCalledTimes(0);
        await makeRequest(mockEndpoint, {}, mockNavigate);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: mockEndpoint.url,
            method: mockEndpoint.method
        });
    });
    // it('should make API call when endpoint and dynamicConfig are passed', async () => {
    //     const mockEndpoint = UPDATE_BLOG_DATA;
    //     const mockNavigate = jest.fn();
    //     const mockData = { data: { title: 'test' } }
    //     axios.mockResolvedValue(mockData);
    //     expect(axios).toHaveBeenCalledTimes(0);
    //     await makeRequest(mockEndpoint, {}, mockNavigate);
    //     expect(axios).toHaveBeenCalledTimes(1);
    //     expect(axios).toHaveBeenCalledWith(mockEndpoint());
    // })
})