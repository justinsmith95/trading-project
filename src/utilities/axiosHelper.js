import axios from "axios";

export const axiosHelper = ({

    url, 
    method = 'get',
    data = {},
    successMethod = r => console.log(r),
    failureMethod = e => console.log(e)
    // token
}) => {
    return axios({
        method,
        url,
        data
        // header?
    })
    .then(res => {
        console.log(res)
        successMethod(res.data)
    })
    .catch(er => failureMethod(er));

}