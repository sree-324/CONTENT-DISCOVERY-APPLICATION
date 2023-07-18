import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Notification.css';
import { Link } from 'react-router-dom';
import {AiFillBackward } from 'react-icons/ai';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Notification() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <br></br>
        <div className='d1'>
            <h2>Notification</h2>
        </div>
        <div className='wnbtn'>
      <Link to="/nav">
        <div>
          <AiFillBackward size={30} />
        </div>
      </Link>
    </div>
        <br></br>
    <Card sx={{ maxWidth:545 }} style={{marginLeft:'350px'} }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            sh
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
            
    </Card>
    <br>
    </br>
    <Card sx={{ maxWidth: 345 }} style={{marginLeft:'350px'} }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Rithvi"
        subheader="July12,2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         The minister of kerala ,Ms.Rithvi Subramnium fights against the release of thr rapist.
        </Typography>
      </CardContent>
            
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'350px'} }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            p
          </Avatar>
        }
        title="Pooranam"
        subheader="July 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Think like Its your last day. every moment is important says ,the great artist Poornam
        </Typography>
      </CardContent>
            
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }} style={{marginLeft:'350px'} }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        title="Chella"
        subheader="July 14,2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
            
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'350px'} }>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Iyalini"
        subheader="July 14, 2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello princess,says swiggy .People are thinking it is adorable.
        </Typography>
      </CardContent>
            
    </Card>

    </div>
  );
}
