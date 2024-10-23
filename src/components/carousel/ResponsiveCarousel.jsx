import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Resizable() {
  const settings = {
    infinite: true,
    speed: 500,
    auoplay: true,
    arrows: false,
    slidesToShow: 1, // add in mobile up
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 3000, // Screens 1024px and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1350, // Screens 1024px and above
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000, // Screens 1024px and above
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900, // Screens 768px and above (e.g., tablets)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Screens 480px and below (e.g., mobile devices)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: "auto",
        }}
      >
        <Slider {...settings}>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  "https://res.cloudinary.com/duhaupnxy/image/upload/c_thumb,w_200,g_face/v1729608913/250_m5clyv.png"
                }
                alt={"Lorem Ipsum"}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Lorem Ipsum"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Resizable;
