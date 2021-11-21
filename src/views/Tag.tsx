import React from "react";
import useTags from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Space} from "../components/Space";
import {Center} from "../components/Center";

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
  align-items: center;
`
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px`
type Params = {
    id: string
}
const Tag: React.FC = () => {
    const {findTag,setTags, updateTag} = useTags()
    let {id:idString} = useParams<Params>()
    const tag = findTag(parseInt(idString))
    return (
        <Layout>
            <Topbar>
                <Icon name='left'/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <InputWrapper>
                <Input label='标签名' type='text' placeholder='标签名'
                    onChange={(e)=>{
                        updateTag(tag.id,{name:e.target.value})
                    }}    value={tag.name}>
                </Input>
            </InputWrapper>
            <Center>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>

    )
}
export {Tag}