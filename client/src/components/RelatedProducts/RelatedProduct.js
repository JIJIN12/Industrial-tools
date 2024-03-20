import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import './Relatedproducts.css'
export default function RelatedProduct() {
  const [related_product, set_relatedproduct] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:1000/relatedproducts").then((Response) => {
        set_relatedproduct(Response.data.details);
      });
    } catch (error) {}
  }, []);
  // const relatedproducts_name = related_product.relatedproduct_name?`${related_product.relatedproduct_name.substring(0,20)}...`: related_product.relatedproduct_name

  return (
    <div className="relatedproducts flex flex-col items-center gap-[10px] h-[100%] my-[150px] sm:h-auto">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Related Products
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className=" flex flex-wrap gap-5 my-[20px]">
      {related_product.map((data, key) => (
        <Card sx={{ maxWidth: 200, '@media (max-width: 570px)': {
          maxWidth: 150
        } }} className="relatedproduct-card">
          <CardMedia
            sx={{ height: 140, margin: "10px"}}
            image={data.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {data.relatedproduct_name
                ? `${data.relatedproduct_name.substring(0, 30)}...`
                : ""}
            </Typography>

            <Typography variant="p" color="text.primary">
              <b> RS {data.new_price}</b>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "13px" }}
            >
              <strike> RS {data.old_price}</strike>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
  );
}
