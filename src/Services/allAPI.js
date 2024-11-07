// saveVideoAPI - called Add Component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// save video api - post http request called add component when user click on add button 
export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST", `${SERVERURL}/uploadVideos`, videoDetails)
}

// getAllVideosApi = get http rqst called view component when component displayed in browser inside its useeffect hook

export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI - post http request to http://localhost:3000/history called by VideoCard component when we play video
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST", `${SERVERURL}/history`, historyDetails)
}

// getAllHistoryAPI -get http request to json/history called by History component when it open in browser
export const getAllHistoryAPI = async() => {
    return await commonAPI("GET", `${SERVERURL}/history`, "")
}

// deleteHistoryAPI - delete http request to json/history/id called by HIstory component when user click on delete button
export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`, {})
}
// removeVideoAPI - delete http request called VideoCard component when user click on delete button
export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI- post http request to json/categories called by Category component when user click on add btn

export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVERURL}/categories`, categoryDetails)
}

// getAllCategoryAPI- get http request to json/categories called by Category component when component loaded in browser.

export const getAllCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/categories`, {});
}

// removeCategoryAPI - delete http request called  when user click on delete button
export const removeCategoryAPI = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`, {})
}

// updateCategoryAPI = put http request to json/category/id called by Category component when video drop over the category
export const updateCategoryAPI = async (categoryDetails) => {
    return await commonAPI("PUT", `${SERVERURL}/categories/${categoryDetails.id}`, categoryDetails);
}