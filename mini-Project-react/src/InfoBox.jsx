import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";
export default function InfoBox({info}) {
    let INT_URL = "https://images.indianexpress.com/2018/06/chandigarh-dust-1.jpeg";
   let HotUrl = "https://www.shutterstock.com/shutterstock/photos/360422789/display_1500/stock-photo-standalone-trees-during-a-very-hot-summer-360422789.jpg";
   let coldUrl = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
   let RainUrl = "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?cs=srgb&dl=pexels-hikaique-125510.jpg&fm=jpg"; 
   let imageUrl;
   if (info.humidity > 70 && info.temp>20) {
       imageUrl = RainUrl;
   } else if ( (info.humidity <70 && info.humidity >30) && info.temp > 25) {
       imageUrl = HotUrl;
   } else {
       imageUrl = coldUrl;
   }

   return(
        <div className="InfoBox">
           <div className='CardContainer'>
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }}  image={imageUrl}  title="green iguana"/>
            <CardContent>
                
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {" "}
                {info.humidity > 70 && info.temp>20 ? (
                    <ThunderstormIcon />
                ):(info.humidity < 70 && info.humidity >30) && info.temp > 25 ? (
                    <WbSunnyIcon />
                ): (
                    <AcUnitIcon />
                )}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature = {info.temp}&deg;C</div>
                <br></br>
                <div>Humidity = {info.humidity}</div>
                <br></br>
                <div>Max Temperature= {info.temp}&deg;C</div>
                <br></br>
                <div>Min Temperature = {info.temp}&deg;C</div>
                <br></br>
                <div>The Weather can be described as <i>{info.description}</i> feels like {info.feel_like}&deg;C</div>
                </Typography>
            </CardContent>
         </Card>
          </div>
        </div>
    )
}
