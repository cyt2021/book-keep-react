import {useState} from "react";
const useTags=()=>{//封装一个自定义Hook,且必须用use命名
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    return{
        tags,
        setTags
    }
}
export default useTags