import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { CardImage } from './CardImage';
import "./CustomCard.css"


export const CustomCard = props => {

    const {cardTitle, file} = props

    return (
        <Card sx={{ minWidth: 200, textAlign: "center" }}>
      <CardContent >
        <Typography sx={{ fontSize: 14, maxWidth: "170px" }} color="text.secondary" gutterBottom>
          {cardTitle}
        </Typography>
        <CardMedia
            component={CardImage}
        />
      </CardContent>
      <CardActions sx={{margin: "0 25%"}}>
        <Button size="large" variant="text">{<a className="CustomCardDownloader" href={file} download>Բեռնել</a>}</Button>
      </CardActions>
    </Card>
    )
}