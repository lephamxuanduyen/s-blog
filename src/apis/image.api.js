import axios from "axios"

export const uploadImage = ( image ) => {
    const URL = import.meta.env.VITE_IMAGE_API
    if (!image) return
    axios
    .post(URL, image)
    .then((res) => {
        alert("Image Upload Successfully!")
        console.log(res.data.url)
        return res.data.url
    })
    .catch((err) => {
        alert("Something went wrong!");
    })
}