import Main from "./Main";
import { getAllByTestId, getByTestId, render, screen, waitFor } from '@testing-library/react';
import makeRequest from "../util/makeRequest";
jest.mock('react-router-dom');


const mockData = [
    {
        id: 1,
        title: 'Test Title',
        description: 'Test Description',
        claps: 0,
        image: 'https://i.ibb.co/DgWBMwz/reason.png',
        reading_time: "2 mins",
        date: '07/01/2023',
        liked: false,
    },
    {
        id: 2,
        title: 'Test Title 2',
        description: 'Test Description 2',
        claps: 0,
        image: 'https://i.ibb.co/DgWBMwz/reason.png',
        reading_time: "2 mins",
        date: '07/01/2023',
        liked: false,
    }
]

jest.mock("../util/makeRequest");

describe("Main", () => {
    it('should show loading text when BlogPosts is still loading', async () => {
        makeRequest.mockResolvedValue(mockData);
        const { getByText } = render(<Main />);
        expect(getByText("Loading...")).toBeTruthy();
    })
    it('should display the blog posts when the data is loaded', async () => {
        makeRequest.mockResolvedValue(mockData);
        const { getAllByTestId } = render(<Main />);
        
        await waitFor(() => {
            expect(getAllByTestId("blogData")).toHaveLength(2);
        });
    });
}
);