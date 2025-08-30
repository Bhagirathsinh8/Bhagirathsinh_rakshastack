import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import fetchUserDetails from './utils/fetchUserDetails';
import { setUserDetails } from './store/userSlice';
import { setAllCategory,setAllSubCategory,setLoadingCategory } from './store/productSlice';
import { useDispatch } from 'react-redux';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
// import { handleAddItemCart } from './store/cartProduct'
import GlobalProvider from './provider/GlobalProvider';
// import { FaCartShopping } from "react-icons/fa6";
import CartMobileLink from './components/CartMobile';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  

  // const fetchUser = async()=>{
  //     const userData = await fetchUserDetails()
  //     dispatch(setUserDetails(userData.data))
  // }
 // ✅ wrap in try/catch so 401 doesn’t break app
  const fetchUser = async () => {
    try {
      const userData = await fetchUserDetails()
      if (userData?.data) {
        dispatch(setUserDetails(userData.data))
      }
    } catch (error) {
      console.error("fetchUser error:", error)
      if (error.response?.status === 401) {
        console.log("User not authenticated")
      } else {
        toast.error(error.message || "Failed to fetch user")
      }
    }
  }

  const fetchCategory = async()=>{
    try {
        dispatch(setLoadingCategory(true))
        const response = await Axios({
            ...SummaryApi.getCategory
        })
        const { data : responseData } = response

        if(responseData.success){
           dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
        }
    } catch (error) {
       toast.error(error.message || "Failed to fetch categories")
    }finally{
      dispatch(setLoadingCategory(false))
    }
  }

  const fetchSubCategory = async()=>{
    try {
        const response = await Axios({
            ...SummaryApi.getSubCategory
        })
        const { data : responseData } = response

        if(responseData.success){
           dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
        }
    } catch (error) {
       toast.error(error.message || "Failed to fetch subcategories")
      }finally{
      dispatch(setLoadingCategory(false))
    }
  }

  

  useEffect(()=>{
    fetchUser()
    fetchCategory()
    fetchSubCategory()
    // fetchCartItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <GlobalProvider> 
      <Header/>
      <main className='min-h-[78vh]'>
          <Outlet/>
      </main>
      <Footer/>
      <Toaster/>
      {
        location.pathname !== '/checkout' && (
          <CartMobileLink/>
        )
      }
    </GlobalProvider>
  )
}

export default App
