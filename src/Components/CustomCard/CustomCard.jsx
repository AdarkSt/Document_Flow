import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { CardImage } from './CardImage';
import "./CustomCard.css"

export const CustomCard = props => {

    const {cardTitle, DialogComponent} = props

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
      <CardActions sx={{margin: "0 28%"}}>
        {DialogComponent && <DialogComponent/>}
      </CardActions>
    </Card>
    )
}