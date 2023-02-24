import Card from './Card';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
// import { apiGetMethod } from './api'

const mockData = {
  id: 1,
  title: 'Test Title',
  description: 'Test Description',
  claps: 0,
  image: 'https://i.ibb.co/DgWBMwz/reason.png',
  reading_time: "2 mins",
  date: '07/01/2023',
  liked: false,
}

describe('Card', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the Card component', () => {
    const { queryByText } = render(<Card {...mockData} />);
    expect(queryByText(mockData.title)).toBeTruthy();
    expect(queryByText(mockData.description)).toBeTruthy();
    expect(queryByText(mockData.reading_time)).toBeTruthy();
    expect(queryByText(mockData.claps)).toBeTruthy();
    expect(queryByText(mockData.date)).toBeTruthy();
  });
  it('should show black heart when liked is false', () => {
    const { getByTestId } = render(<Card {...mockData} />);
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "black")
  });
  it('should show red heart when liked is true', () => {
    const { getByTestId } = render(<Card {...mockData} liked={true} />);
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "red")
  }
  );
  it('should change color of heart from black to red when the like button is clicked on a blog not liked yet', () => {
    const { getByTestId } = render(<Card {...mockData} />);
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "black");
    fireEvent.click(getByTestId('likeIcon'));
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "red");
  });
  it('should change color of heart from red to black when the like button is clicked on a blog already liked', () => {
    const { getByTestId } = render(<Card {...mockData} liked={true} />);
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "red");
    fireEvent.click(getByTestId('likeIcon'));
    expect(getByTestId('likeIcon')).toHaveAttribute("color", "black");
  });
});
