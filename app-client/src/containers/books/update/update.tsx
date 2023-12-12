import {Box, TextField, Switch, Stack, Typography, Paper,} from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import useUpdate from './update.hooks'; 
import { VisuallyHiddenInput } from './update.styled';

export default function Update() {
    const {
      formValues,
      handleSubmit,
      handleUploadCover,
      loadingCover,
      loadingSubmit,
      setFormValues,
      fileItem,
    } = useUpdate();
  
    return (
      <CommonPage
        withBack
        component={'form'}
        title="Update Book"
        actionElement={
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loadingSubmit}
          >
            Submit
          </LoadingButton>
        }
        onSubmit={handleSubmit}
      >
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">Book Details</Typography>
          <Box
            sx={{
              width: '50%',
            }}
          >
            <TextField
              name="title"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Title"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  title: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.title}
            />
            <TextField
              name="author"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Author"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  author: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.author}
            />
            <TextField
              name="isbn"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="ISBN"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  isbn: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.isbn}
            />
            <TextField
              name="published_year"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Published Year"
              type="number"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  published_year: String(e.target.value),
                })
              }
              variant="filled"
              value={formValues?.published_year}
            />
            <TextField
              name="genre"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Genre"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  genre: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.genre}
            />
            <TextField
              name="total_copies"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Total Copies"
              type="number"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  total_copies: Number(e.target.value),
                })
              }
              variant="filled"
              value={formValues?.total_copies}
            />
            <TextField
              name="copies_available"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Copies Available"
              type="number"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  copies_available: Number(e.target.value),
                })
              }
              variant="filled"
              value={formValues?.copies_available}
            />
            <LoadingButton
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              sx={{ mb: 3 }}
              loading={loadingCover}
            >
              Upload Book Cover
              <VisuallyHiddenInput
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleUploadCover}
              />
            </LoadingButton>
            {fileItem && fileItem.url && (
              <Box>
                <img
                  src={fileItem.secure_url}
                  alt="preview"
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </Box>
            )}
            <Box>
              <Stack direction={'row'} alignItems={'center'}>
                <div>Publish</div>
                <Switch
                  name="published"
                  title="Published"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      published: e.target.checked,
                    })
                  }
                  checked={formValues?.published || false}
                />
              </Stack>
            </Box>
          </Box>
        </Paper>
      </CommonPage>
    );
  }
  