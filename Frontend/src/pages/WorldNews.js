
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Worldnews.css';
import { Link } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { AiFillBackward } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Worldnews = () => {
  const [expanded, setExpanded] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from the Spring Boot backend
    fetchNewsItems();
  }, []);

  const fetchNewsItems = async () => {
    try {
      const response = await axios.get('http://localhost:7002/api/news/'); 
      setNewsItems(response.data);
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching news items:', error);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="headnews">
        <br />
        <h1>WORLD NEWS</h1>
        <div className="wnbtn">
          <Link to="/homepage">
            <div>
              <AiFillBackward size={30} style={{ color: 'violet' }} />
            </div>
          </Link>
        </div>
        <br /> <br />
      </div>
      {newsItems.map((newsItem) => (
        <Card key={newsItem.id} sx={{ maxWidth: '1545px', boxShadow: '0px 2px 10px ' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {newsItem.author.charAt(0).toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={newsItem.author}
            subheader={newsItem.date}
          />
          <CardMedia
            component="img"
            height="194"
            image={newsItem.imageUrl}
            alt="video"
            sx={{
              marginLeft: '1px', 
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {newsItem.title}
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
              <Typography paragraph>{newsItem.content}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default Worldnews;
