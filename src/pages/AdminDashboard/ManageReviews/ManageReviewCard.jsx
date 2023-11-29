import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ManageReviewCard = ({ review, onDelete }) => {

    // console.log('Review Data:', review);
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={review.photoURL}
        alt={`${review.user}'s profile`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reviewer Name: {review.user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Reviewer Email: {review.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Reviews : {review.review}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onDelete(review._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ManageReviewCard;
