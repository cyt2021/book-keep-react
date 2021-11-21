import {useState} from "react";
import {createId} from "./lib/createId";

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
]
const useTags = () => {//封装一个自定义Hook,且必须用use命名
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    // const changeTags = (tag: { id: number, name: string }) => {
    //     defaultTags = [...tags]
    //     setTags([...tags, tag])
    return {
        tags,
        setTags,
        findTag
    }
}
export default useTags