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
import './Worldnews.css'
import ad from './ad.jpg'
import pacific from './pacific.jpg'
import { Link } from 'react-router-dom';
import hill from './hill.jpg'
import {GoSignOut} from 'react-icons/go';
import {AiFillBackward} from 'react-icons/ai';

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

export default function Worldnews() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
     
     
        <div className='headnews'>
        <br></br>
    <h1>WORLD NEWS</h1>
    <div className='wnbtn'>
      <Link to="/nav">
        <div>
          <AiFillBackward size={30}/>
        </div>
      </Link>
    </div>
    <br></br> <br></br>
    </div>
    <Card sx={{ maxWidth: 745 }} style={{marginLeft:'350px'} }  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Angelia"
        subheader="July 14,2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={hill}
        alt="video"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Imagery of the disputed Aksai Chin territory reveals new Chinese military infrastructure and an increased strategic threat to India, write John Pollock and Damien Symon.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          
          India is facing continuing instability in a Himalayan flashpoint. The region of Aksai Chin has long been contested by India and China and was the site of deadly clashes between the two Asian powers three years ago.

Satellite images taken in the six months from October 2022 show a region increasingly in flux. Where once there were scattered People’s Liberation Army (PLA) checkpoints and rudimentary positions on the Chinese side of the poorly demarcated Line of Actual Control, now there is an established Chinese presence.
Claimed by New Delhi as part of Ladakh but administered by Beijing as part of Xinjiang and Tibet, Aksai Chin is home to the Galwan Valley, where 20 Indian soldiers and at least four Chinese soldiers died in a clash in June 2020. As both sides still disagree about the border’s precise location, the danger of an accidental clash escalating into a Sino-Indian crisis between the two nuclear powers is very much present.

For India, this means its armed forces will now have to match a large-scale and probably semi-permanent Chinese presence along the border with Aksai Chin, perhaps for years to come.


          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 745 }} style={{marginLeft:'350px'} }  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Victor"
        subheader="July 14,2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={ad}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       
          Advertise in The World Today
With a global circulation including businesses, governments, NGOs, The World Today presents an excellent opportunity to connect with your audiences.
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
         
          
          <Typography paragraph>
          Advertise with us
A range of organisations already advertise with us, see below how we can help you reach the audiences you want to connect with.
Corporate organisations
Advertise your conference or business and you will reach the institute’s corporate members, high profile individuals, global thought leaders and the British Airways business travelling readership.
Academic organisation
Publicise your post-graduate courses in international relations, politics or development. Advertise international university summer schools, or mid-career courses such as MBAs.
Publishing organisations
Advertise academic books, journals and research papers, or more general interest international relations publications.
Learn more about adve
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 745 }} style={{marginLeft:'350px'} }  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Ch
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Charles"
        subheader="July 14,2023"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        UN slams civilian toll as Russia's war in Ukraine reaches day 500
While this year the casualty numbers have been lower on average than in 2022, the figure began to climb again in May and June, the monitors noted. On June 27, 13 civilians, including four children, were killed in a missile strike on Kramatorsk in eastern Ukraine. And far from the front line in the western city of Lviv, at least five people were killed and another 37 were wounded during a bombing early Thursday that the mayor called the biggest attack on civilian infrastructure since the invasion began.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 745 }} style={{marginLeft:'350px'} }  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Devi"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={pacific}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        NATO allies are expected to increase military support for Ukraine to boost the slow-moving counteroffensive against Russia. According to Kiel Institute for the World Economy, EU and NATO allies have provided Kyiv with €102 billion ($112 billion) in military aid between February 2022 and May 2023. The US made up almost half of this total, providing € 43 billion.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    </div>
  );
}
