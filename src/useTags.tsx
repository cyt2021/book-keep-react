import {useEffect, useRef, useState} from "react";
import {createId} from "./lib/createId";
import {useUpdate} from "./hooks/useUpdate";

const useTags = () => {//封装一个自定义Hook,且必须用use命名
    const [tags, setTags] = useState<{ id: number, name: string }[]>([])
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length===0){
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'},
            ]
        }
        setTags(localTags)
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const AddTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null && tagName !=='' ) {
            setTags([...tags, {id: createId(), name: tagName}])
        }
    }
    return {
        tags,
        setTags,
        findTag,
        findTagIndex,
        updateTag,
        deleteTag,
        AddTag
    }
}
export default useTags