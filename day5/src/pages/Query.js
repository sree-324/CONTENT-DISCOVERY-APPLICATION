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
import chandrayan from './chandrayyan.jfif'
import taylor from './taylor.jfif'


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

export default function Politics() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='alignquery'>
      <br></br><br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Veeramuthuvel"
        subheader="July 13,2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={chandrayan}
        alt="Chandrayan-3"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Chandrayaan-3 is a planned third lunar exploration mission by the Indian Space Research Organisation (ISRO).[6] It will consist of a lander and a rover similar to Chandrayaan-2, but would not have an orbiter.
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
          Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface.
        It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota.
        The propulsion module will carry the lander and rover configuration till 100 km lunar orbit. 
    The propulsion module has Spectro-polarimetry of Habitable Planet Earth 
     payload to study the spectral and Polari metric measurements of Earth from the lunar orbit.
          </Typography>
          <Typography paragraph>
          Chandrayaan-3 consists of an indigenous Lander module (LM), Propulsion module (PM) and a Rover with an objective of developing and demonstrating new technologies required for Inter planetary missions. The Lander will have the capability to soft land at a specified lunar site and deploy the Rover which will carry out in-situ chemical analysis of the lunar surface during the course of its mobility. The Lander and the Rover have scientific payloads to carry out experiments on the lunar surface. The main function of PM is to carry the LM from launch vehicle injection till final lunar 100 km circular polar orbit and separate the LM from PM. Apart from this, the Propulsion Module also has one scientific payload as a value addition which will be operated post separation of Lander Module. The launcher identified for Chandrayaan-3 is GSLV-Mk3 which will place the integrated module in an Elliptic Parking Orbit (EPO) of size ~170 x 36500 km.
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
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
        title="Vinoth"
        subheader="July 11,2023"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The Indian men’s football team won the SAFF Championship 2023 title after beating Kuwait 5-4 in a thrilling penalty shootout at the Sree Kanteerava Stadium in Bengaluru on Tuesday.
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
          India, who are 100th in the latest FIFA rankings, won their ninth SAFF Championship 2023 in 14 editions. This was India’s second silverware on the trot after clinching the Intercontinental Cup last month.    

After the regulation time ended 1-1 and neither team could score in the extra time, the final came down to penalties. Kuwait’s captain Hajjeia missed the decisive spotkick in sudden death.
In regulation time, the newly-crowned AIFF Player of the Year Lallianzuala Chhangte (39’) had equalised for India after Shabaib Al Khaldi (14’) had given the Kuwait football team the early lead.
Indian head coach Igor Stimac, who was banned from the touchline and had to watch the match from the stands, made three changes from the starting eleven that started against Lebanon in the semi-finals. Akash Mishra and Nikhil Poojary returned as full-backs while Sandesh Jhingan, who was suspended in the previous match, returned to replace Mehtab Singh at the heart of the defence.
India, playing with a four-man defence, started on a cautious note and resorted to counter-attacks. Kuwait, meanwhile, pressed high and attacked the Indian half with incisive crosses and through-balls. It was the visitors who took the early lead via Shabaib Al Khaldi, a quarter into the match.
Al Feneeni dribbled into the Indian half and cut the ball back for an unmarked Shabaib Al Khaldi in the box, who slotted it past the Indian goalkeeper to give Kuwait a 1-0 lead.
Trailing by a goal, India pushed their men forward in search of the equaliser, Minutes later the hosts had a golden opportunity to level the scores but Lallianzuala Chhangte’s long-range shot was saved by goalkeeper Mubarak Marzouq.
As the game progressed, India grew in confidence and attacked the Kuwait half in waves. The hosts managed to score the equaliser during one such move. Ashique Kuruniyan won the ball in the Kuwait half and passed it to Sunil Chhetri. The Indian football team captain sent in a weighted through-ball to Lallianzuala Chhangte, who slotted it in to make it 1-1.
The first half ended with scores deadlocked at 1-1.      

Towards the beginning of the second half, Nikhil Pooojary and Lallianzuala Chhangte combined on the right and made overlapping runs down the flank in an attempt to get the ball to Sunil Chhetri. However, the alert Kuwait defence thwarted any dangers.
India had a golden opportunity to go ahead in the match in the 62nd minute when Kuwait goalkeeper Mubarak Marzouq’s kick was headed back by Sunil Chhetri towards Lallianzuala Chhangte. The Mizoram player’s weak shot at the goal, though, was comfortably collected by the Kuwait custodian.
As the clock ticked away, the game turned into a feisty affair with the referee dishing out yellow cards to the players on both sides.
With minutes left in the regulation time, Kuwait almost scored the winner when Mohammad Abdhulla intercepted a throw-in and sent the ball flying towards the Indian goal but an alert Gurpreet Singh Sandhu made a brilliant save to deny the visitors a certain goal.
Regulation time ended with scores level at 1-1, forcing the match into extra time.
Both teams had several chances to clinch the match in the extra time but neither could score the decisive goal as the final progressed into the penalty shootout, where India claimed a thrilling win.      
En route to the final, the Indian football team beat Lebanon in the semi-finals after finishing the group stage with wins over Pakistan and Nepal while drawing against Kuwait.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John"
        subheader="July 13, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={taylor}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Speak Now (Taylor's Version) is the third re-recorded album by American singer-songwriter Taylor Swift, released on July 7, 2023, via Republic Records. 
        It is a re-recording of Swift's third studio album, Speak Now (2010)<br></br>
        <a href='https://www.youtube.com/watch?v=JlZnvyBqceY'>Click here to watch it!!</a>
        </Typography>
      </CardContent>
      
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Anushka"
        subheader="July 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media.giphy.com/media/3xz2BHFXxvFDYwnA9W/giphy.gif"
        alt="Cat"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Anushka shares a funny gif of her cat!! and comment as her beloved friend.Netizens couldn't stop talking about her adorable cat.
        </Typography>
      </CardContent>
      
    </Card>



    </div>
  );
}
