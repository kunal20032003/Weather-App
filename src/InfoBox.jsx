import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
  
    let imageUrl = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    let coldWeather = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let hotWeather = "https://plus.unsplash.com/premium_photo-1688938502983-a14020dc14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rainyWeather = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    return(
        <div className='infoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? rainyWeather : info.temp < 15? 
          coldWeather : info.temp > 35
          ? hotWeather : info.temp > 30 && info.temp < 35
          ? imageUrl : imageUrl
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 
          ? <ThunderstormIcon></ThunderstormIcon> : info.temp < 15? 
          <AcUnitIcon></AcUnitIcon> : info.temp > 35
          ? <SunnyIcon></SunnyIcon> :  <SunnyIcon></SunnyIcon>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temprature = {info.temp}&deg;c</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temp_min}&deg;c</p>
          <p>Max Temp = {info.temp_max}&deg;c</p>
          <p> The Weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}