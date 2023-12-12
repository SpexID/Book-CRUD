import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// import { BookDetail, BookUpdate } from './pages/books';
import Login from './pages/Login';
import BookList from './pages/books/BookList';
import BookCreate from './pages/books/BookCreate';
import BookDetail from './pages/books/BooksDetail';
import BookUpdate from './pages/books/BooksUpdate';
import { theme } from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/detail/:id',
    element: <BookDetail />,
  },
  {
    path: '/create',
    element: <BookCreate />,
  },
  {
    path: '/update/:id',
    element: <BookUpdate />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
