import axios from "axios"

export const uploadImage = ( image ) => {
    const URL = import.meta.env.VITE_IMAGE_API
    if (!image) return
    return axios.post(URL, image)
}