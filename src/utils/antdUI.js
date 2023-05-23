import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Result, Form } from 'antd';
import styled from "styled-components"

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { fileAtom } from '../atoms/utilAtom';
import { categoryAtom } from '../atoms/droneAtom';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

const Button = styled.div`
  background-color: #3875F6;
  border-radius: 10px;
  padding: 12px 28px;
  color: white;
  text-align: center;
  cursor: pointer;
  border: 1px solid  #3875F6;
  font-weight: 700;
  &:hover{
    color:  #3875F6;
    background-color: white;
    border: 1px solid #3875F6;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 80,
    }}
    spin
  />
);
export const SpinUI = () => <Spin indicator={antIcon} />;


export const SuccesMessage = (props) => (
  <Result
    status="success"
    title="상담신청이 완료되었습니다."
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button onClick={()=>props.isOpen(false)}>
        메인으로 돌아가기
      </Button>
    ]}
  />
);

const UploadFrame = styled.div`
  color: white;
  width: 150px;
`
const Label = styled.label`
  display: inline-block;
  padding: 1rem;
  color: white;
  background-color: transparents;
  cursor: pointer;
  border: 1px dashed #ebebeb;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover{
    color: rgb(71, 127, 239);
    border: 1px dashed rgb(71, 127, 239);
  }
`
const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
`

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const UploadImg = ({setFile}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const fileInputRef = useRef(null);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  
  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile); 
      handlePreview(uploadFile);
    
  };
  return (
    <>
       <UploadFrame>
        {previewImage === '' ?
          <>
            <Label htmlFor="file-input" className="custom-label">
              <PlusOutlined />
              <div
                style={{
                  marginTop: 18,
                }}
              >
                Upload
              </div>
            </Label>
            <Input type="file" id="file-input" ref={fileInputRef} onChange={onChangeImg}/>
          </>
          :
          <img
            alt="example"
            style={{
              width: '100%',
              height: '100%',
            }}
            src={previewImage}
          />
        }
      </UploadFrame>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

const items = [
  {
    label: '감시 ∙ 정찰 ∙ 수색',
    key: '1',
  },
  {
    label: '물류 ∙ 운송 ∙ 구조',
    key: '2',
  },
  {
    label: '방역 ∙ 방제 ∙ 살포',
    key: '3',
  },
  {
    label: '방송 ∙ 공연',
    key: '4',
  },
  {
    label: '취미 ∙ 교육',
    key: '5',
  },
];
export const DropdownButton = () => {
   const [addItem, setAddItem] = useRecoilState(categoryAtom);

  const onClick = ({ key }) => {
    setAddItem({
      key: key,
      label: items[key-1].label
    })
  };
  return(
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}
      style={{
        marginLeft: "auto", 
        fontSize: "0.9rem",
        color: "white",
      }}
    >
      <Space
        style={{
          color: "transparent"
        }}
      >
        aaaaaaaaaaaaaaaaaaaaasdasdaaa
        <DownOutlined 
          style={{
            color: "white"
          }}
        />
      </Space>
    </a>
  </Dropdown>
  )
};