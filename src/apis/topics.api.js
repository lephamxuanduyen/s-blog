import request from "../utils/request"

export const getTopics = () => {
    const URL = "topics"
    return request.get(URL)
}