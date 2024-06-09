import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// App.js Dosyasi Icinde Olusturulan
// Grid Yapisi Icinde Bulunan Card larin Ve Iceriklerin
// Ekranda Gorunmesi Icin Course.js Dosyasi Icinde Dondurulmesi Gerekiyor
function Course({ image, title, description }) {
    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt="kurslarım" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Course;