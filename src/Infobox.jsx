import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Infobox.css";

const INIT_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzRF6B4EspMD6gyFVDL3k_dukitY6TOSn1TVZtduOaA&s=10";

export default function InfoBox({weather}) {
  

  return (
    <div>

    
    <div className="InfoBox">

      <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="weather"
        />

        <CardContent>

          {/* City Name */}
          <Typography gutterBottom variant="h4" component="div">
            {weather.city}
          </Typography>

          {/* Weather Description */}
          <Typography variant="h6" component="div">
            Weather: {weather.description}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
          >
            <p>Temperature = {weather.temp}&deg;C</p>

            <p>Min Temp = {weather.temp_min}&deg;C</p>

            <p>Max Temp = {weather.temp_max}&deg;C</p>

            <p>Feels Like = {weather.feels_like}&deg;C</p>

            <p>
              The weather can be described as{" "}
              <i>{weather.description}</i>{" "}
              and feels like {weather.feels_like}&deg;C.
            </p>
          </Typography>

        </CardContent>
      </Card>

    </div>

    </div>
  );
}