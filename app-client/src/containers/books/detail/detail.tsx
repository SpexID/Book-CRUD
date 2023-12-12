// Detail.tsx
import { Box, Typography, Paper, Switch } from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import useDetail from './detail.hooks'; // Import the useDetail hook

export default function Detail() {
  const { bookDetails } = useDetail();

  return (
    <CommonPage withBack title="Book Details">
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6">Book Details</Typography>
        <Box
          sx={{
            width: '50%',
          }}
        >
          {/* Display book details */}
          <Typography>Title: {bookDetails?.title}</Typography>
          <Typography>Author: {bookDetails?.author}</Typography>
          <Typography>ISBN: {bookDetails?.isbn}</Typography>
          <Typography>Published Year: {bookDetails?.published_year}</Typography>
          <Typography>Genre: {bookDetails?.genre}</Typography>
          <Typography>Total Copies: {bookDetails?.total_copies}</Typography>
          <Typography>Copies Available: {bookDetails?.copies_available}</Typography>
          
          {/* Display the switch for "published" */}
          <Typography>Publish: </Typography>
          <Switch
            name="published"
            title="Published"
            disabled
            checked={bookDetails?.published || false}
          />
          
          {/* Display the cover image if available */}
          {bookDetails?.cover && (
            <Box>
              <img
                src={bookDetails.cover.secure_url}
                alt="preview"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </CommonPage>
  );
}
