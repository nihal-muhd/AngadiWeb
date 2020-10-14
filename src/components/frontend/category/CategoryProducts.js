import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import CategoriesBox from "./CategoriesBox";
import ProductGrid from "../product/ProductGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eaeded",
    padding: theme.spacing(2),
    minHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  main: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  banner: {
    height: "auto",
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    minWidth: 0,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    fontSize: 18,
    fontWeight: 300,
    backgroundColor: "#ffffff",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    marginBottom: theme.spacing(1),
    fontStyle: "italic",
    boxSizing: "border-box",
  },
}));

const imgUrl =
  "https://www.jiomart.com/images/category/220/fresh-fruits-20200704.jpg";
const cattext =
  "Nisi aliqua duis ea proident irure. Sit irure laborum irure velit do labore non cillum consectetur sint incididunt officia. Non duis sit do culpa culpa nostrud velit ipsum. Officia irure anim laboris pariatur in proident commodo est qui. Mollit eu quis est anim Lorem irure duis sunt quis laboris. Dolore magna nulla quis est ut labore dolor fugiat ad. Fugiat tempor culpa dolor cillum anim.";

const data = [
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491186625/good-life-almonds-500-g-0-20200901.jpg",
    name: "Good Life Almonds",
    discount: 25,
    price: 449,
    variant: "500gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491337398/sunfeast-yippee-magic-masala-instant-noodles-360-g-0-20200621.jpeg",
    name: "Sunfeast Yippee Magic Masala Instant Noodles",
    discount: 17,
    price: 68,
    variant: "230gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/490001392/amul-pasteurised-butter-500-g-0-20200621.jpeg",
    name: "Amul Pasteurised Butter",
    variant: "1kg",
    discount: 6,
    price: 449,
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491186625/good-life-almonds-500-g-0-20200901.jpg",
    name: "Good Life Almonds",
    discount: 25,
    price: 449,
    variant: "500gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491337398/sunfeast-yippee-magic-masala-instant-noodles-360-g-0-20200621.jpeg",
    name: "Sunfeast Yippee Magic Masala Instant Noodles",
    discount: 17,
    price: 68,
    variant: "230gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/490001392/amul-pasteurised-butter-500-g-0-20200621.jpeg",
    name: "Amul Pasteurised Butter",
    variant: "1kg",
    discount: 6,
    price: 449,
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491186625/good-life-almonds-500-g-0-20200901.jpg",
    name: "Good Life Almonds",
    discount: 25,
    price: 449,
    variant: "500gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491337398/sunfeast-yippee-magic-masala-instant-noodles-360-g-0-20200621.jpeg",
    name: "Sunfeast Yippee Magic Masala Instant Noodles",
    discount: 17,
    price: 68,
    variant: "230gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/490001392/amul-pasteurised-butter-500-g-0-20200621.jpeg",
    name: "Amul Pasteurised Butter",
    variant: "1kg",
    discount: 6,
    price: 449,
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491337398/sunfeast-yippee-magic-masala-instant-noodles-360-g-0-20200621.jpeg",
    name: "Sunfeast Yippee Magic Masala Instant Noodles",
    discount: 17,
    price: 68,
    variant: "230gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/490001392/amul-pasteurised-butter-500-g-0-20200621.jpeg",
    name: "Amul Pasteurised Butter",
    variant: "1kg",
    discount: 6,
    price: 449,
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/491337398/sunfeast-yippee-magic-masala-instant-noodles-360-g-0-20200621.jpeg",
    name: "Sunfeast Yippee Magic Masala Instant Noodles",
    discount: 17,
    price: 68,
    variant: "230gm",
    discountedPrice: 333,
  },
  {
    img:
      "https://www.jiomart.com/images/product/150x150/490001392/amul-pasteurised-butter-500-g-0-20200621.jpeg",
    name: "Amul Pasteurised Butter",
    variant: "1kg",
    discount: 6,
    price: 449,
    discountedPrice: 333,
  },
];

function CategoryProducts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item md={2}>
            <CategoriesBox />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10} container>
          <div className={classes.main}>
            <img className={classes.banner} src={imgUrl} alt={"Fresh Fruits"} />
            <div className={classes.description}>{cattext}</div>
            <ProductGrid data={data} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryProducts;
