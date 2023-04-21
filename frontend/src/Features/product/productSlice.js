import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProduct,
  getSingleProductDetails,
  createReviewProduct,
  CreateSingleProductDetails,
  adminDeleteProduct,
  adminUpdateProduct,
  getTopRatedProduct,
  getAllProductCategory,
  getProductStats,
} from "./productReducer";

const products = JSON.parse(localStorage.getItem("products"));
import { Shopdata } from "../../dummy";

const initialState = {
  isSuccess: false,
  isError: false,
  product: Shopdata,
  products: Shopdata,
  productDetails: {
    name: "Modern Love Tee",
    price: 27,
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg",
    ],
    additionalInfo:{weight:'24kg',Dimension:'12 x 12 x 48 cm'},
    description: 'Vestibulum tellus justo, vulputate ac nunc eu, laoreet pellentesque erat. Nulla in fringilla ex. Nulla finibus rutrum lorem vehicula facilisis. Sed ornare congue mi, et volutpat diam. Suspendisse eget augue id magna placerat dignissim. Fusce at turpis neque. Nullam commodo consequat risus et iaculis. Aenean felis diam, venenatis et congue non, luctus sed velit. Curabitur vel metus a tellus luctus venenatis. Praesent ultricies non arcu non tincidunt.'
  },

  totalProduct: 0,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  page: 1,
  noOfPages: 0,
  category: "",
  search: "",
  color: "",
  sort: "",
  limit: "",
  rating: 0,
  topRatedProducts: [],
  categories: null,
  reviewLoading: false,
  reviewSuccess: false,
  reviewError: false,
  productAlert: false,
  productStat: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    clearReviewAction: (state, action) => {
      state.reviewLoading = false;
      state.reviewSuccess = false;
    },
    getQuantity: (state, action) => {
      state.quantity = action.payload;
    },

    getPage: (state, action) => {
      state.page = action.payload;
    },
    getLimit: (state, action) => {
      state.limit = action.payload;
    },
    getRating: (state, action) => {
      state.rating = action.payload;
    },
    getColor: (state, action) => {
      state.color = action.payload;
    },
    getSort: (state, action) => {
      state.sort = action.payload;
    },
    getProduct: (state, action) => {
      state.productAlert = true;
      state.productDetails = action.payload;
    },
    getSearch: (state, action) => {
      state.search = action.payload;
    },
    clearProductAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isSuccess = false;
      state.isError = false;
      state.category = "";
      state.search = "";
      state.productAlert = false;
    },
    clearProductDetails: (state, action) => {
      state.productDetails = null
    },
    handleProductSearch: (state, action) => {
      const productpayload = action.payload;
      state.product = state?.product?.filter((product) => {
        if (
          product.title.toLowerCase().includes(productpayload) ||
          product.brand.toLowerCase().includes(productpayload)
        ) {
          return true;
        }
        return false;
      });
    },
    clearPage: (state, action) => {
      state.page = 1;
    },
  },

  extraReducers: {
    //
    [getAllProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.product;
      state.totalProduct = action.payload.totalProduct;
      state.noOfPages = action.payload.noOfPages;
      state.showAlert = true;
      state.alertText = "All Product has been successfully fetched";
    },
    [getAllProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    [getAllProductCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProductCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getAllProductCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [CreateSingleProductDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [CreateSingleProductDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = `${action.payload.title} has been successfully addded to your product data base`;
      state.alertType = "success";
    },
    [CreateSingleProductDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getSingleProductDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleProductDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    },
    [getSingleProductDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [adminUpdateProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [adminUpdateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = "Product has been successfully updated";
    },
    [adminUpdateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    [adminDeleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [adminDeleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = state.product.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.productDetails.title} has been successfully deleted`;
    },
    [adminDeleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    [createReviewProduct.pending]: (state) => {
      state.reviewLoading = true;
    },
    [createReviewProduct.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.alertText = action.payload;
      state.reviewSuccess = true;
      state.alertType = "success";
    },
    [createReviewProduct.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewSuccess = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getTopRatedProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getTopRatedProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topRatedProducts = action.payload;
      state.alertText = action.payload;
      state.alertType = "success";
    },
    [getTopRatedProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getProductStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductStats.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productStat = action.payload;
    },
    [getProductStats.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
  },
});

// console.log(productSlice);
export const {
  clearAlert,
  getColor,
  getSort,
  getPage,
  getRating,
  clearProductAlert,
  getQuantity,
  handleCategoryFilter,
  clearReviewAction,
  clearPage,
  getLimit,
  handleProductSearch,
  getSearch,
  getProduct,
  clearProductDetails
} = productSlice.actions;

export default productSlice.reducer;
