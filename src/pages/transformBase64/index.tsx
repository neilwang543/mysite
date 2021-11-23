import { FC } from 'react'
import { Layout, Row, Col, Input, Button, Form } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import './index.less'
const { Content, Header } = Layout
const { TextArea } = Input

interface TransformBase64Props {}

const TransformBase64: FC<TransformBase64Props> = () => {
  const [form] = Form.useForm()

  const encodeContent = () => {
    let encodeStr = form.getFieldValue('content')
    form.setFieldsValue({
      transformContent: encodeStr ? window.btoa(encodeStr) : '',
    })
  }

  const decodeContent = () => {
    let decodeStr = form.getFieldValue('transformContent')
    form.setFieldsValue({
      content: decodeStr ? window.atob(decodeStr) : '',
    })
  }
  return (
    <Content className="jojo-content">
      <Form autoComplete="off" layout="vertical" form={form}>
        <Row wrap={false}>
          <Col flex={1}>
            <Form.Item label="明文" name="content">
              <TextArea
                showCount
                autoSize={{ minRows: 24 }}
                placeholder="在此填入需要转化的内容"
              />
            </Form.Item>
          </Col>
          <Col className="btn-cols" offset={1}>
            <Button type="primary" onClick={encodeContent}>
              base64编码
              <RightOutlined />
            </Button>
            <br />
            <Button icon={<LeftOutlined />} onClick={decodeContent}>
              base64解码
            </Button>
          </Col>
          <Col offset={1} flex={1}>
            <Form.Item label="base64" name="transformContent">
              <TextArea
                showCount
                autoSize={{ minRows: 24 }}
                placeholder="在此填入需要解析的内容"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Content>
  )
}

export default TransformBase64
