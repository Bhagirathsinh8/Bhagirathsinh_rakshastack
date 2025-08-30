// export const baseURL = import.meta.env.VITE_API_URL
// export const baseURL = "https://tksf97sz-5000.inc1.devtunnels.ms/api"

const SummaryApi = {
    register : {
        url : '/user/register',
        method : 'post'
    },
    login : {
        url : '/user/login',
        method : 'post'
    },
    forgot_password : {
        url : "/user/forgot-password",
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : '/user/verify-forgot-password-otp',
        method : 'put'
    },
    resetPassword : {
        url : "/user/reset-password",
        method : 'put'
    },
    refreshToken : {
        url : '/user/refresh-token',
        method : 'post'
    },
    userDetails : {
        url : '/user/user-details',
        method : "get"
    },
    logout : {
        url : "/user/logout",
        method : 'get'
    },
    uploadAvatar : {
        url : "/user/upload-avatar",
        method : 'put'
    },
    updateUserDetails : {
        url : '/user/update-user',
        method : 'put'
    },
    addCategory : {
        url : '/category/add-category',
        method : 'post'
    },
    uploadImage : {
        url : '/file/upload',
        method : 'post'
    },
    getCategory : {
        url : '/category/get',
        method : 'get'
    },
    updateCategory : {
        url : '/category/update',
        method : 'put'
    },
    deleteCategory : {
        url : '/category/delete',
        method : 'delete'
    },
    createSubCategory : {
        url : '/subcategory/create',
        method : 'post'
    },
    getSubCategory : {
        url : '/subcategory/get',
        method : 'post'
    },
    updateSubCategory : {
        url : '/subcategory/update',
        method : 'put'
    },
    deleteSubCategory : {
        url : '/subcategory/delete',
        method : 'delete'
    },
    createProduct : {
        url : '/product/create',
        method : 'post'
    },
    getProduct : {
        url : '/product/get',
        method : 'post'
    },
    getProductByCategory : {
        url : '/product/get-product-by-category',
        method : 'post'
    },
    getProductByCategoryAndSubCategory : {
        url : '/product/get-pruduct-by-category-and-subcategory',
        method : 'post'
    },
    getProductDetails : {
        url : '/product/get-product-details',
        method : 'post'
    },
    updateProductDetails : {
        url : "/product/update-product-details",
        method : 'put'
    },
    deleteProduct : {
        url : "/product/delete-product",
        method : 'delete'
    },
    searchProduct : {
        url : '/product/search-product',
        method : 'post'
    },
    addTocart : {
        url : "/cart/create",
        method : 'post'
    },
    getCartItem : {
        url : '/cart/get',
        method : 'get'
    },
    updateCartItemQty : {
        url : '/cart/update-qty',
        method : 'put'
    },
    deleteCartItem : {
        url : '/cart/delete-cart-item',
        method : 'delete'
    },
    createAddress : {
        url : '/address/create',
        method : 'post'
    },
    getAddress : {
        url : '/address/get',
        method : 'get'
    },
    updateAddress : {
        url : '/address/update',
        method : 'put'
    },
    disableAddress : {
        url : '/address/disable',
        method : 'delete'
    },
    CashOnDeliveryOrder : {
        url : "/order/cash-on-delivery",
        method : 'post'
    },
    payment_url : {
        url : "/order/checkout",
        method : 'post'
    },
    getOrderItems : {
        url : '/order/order-list',
        method : 'get'
    }
}

export default SummaryApi