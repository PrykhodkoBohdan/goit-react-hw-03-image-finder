import axios from "axios";

const instance = axios.create({
baseURL: "https://pixabay.com/api",
params :{
    key: '33204486-ba55bd6901a455e9fbdee83ae',
    image_type: 'photo',
    orientation: 'horizontal',
} 
})

export const searchImg = async (nameImg , page) => {

    const {data} = await instance.get('/',{
        params: {
            q: nameImg,
            page,
            per_page: 12,
        }
    });
return data;
}
