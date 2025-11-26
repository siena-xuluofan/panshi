import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  Input, 
  DatePicker, 
  Table, 
  Modal, 
  Card, 
  Space,
  Divider,
  Textarea,
  Tag,
  Message
} from 'tdesign-react';
import { AddIcon, EditIcon } from 'tdesign-icons-react';
import dayjs from 'dayjs';
import './App.css';

const { FormItem, FormList } = Form;
const { TextArea } = Input;

// 模拟处理记录数据
const mockRecords = [
  {
    id: 1,
    createTime: '2023-11-20 10:30:00',
    issue: '修复登录页面BUG',
    processor: '张三',
    estimatedCompleteTime: '2023-11-21 18:00:00',
    actualCompleteTime: '2023-11-21 15:30:00',
    result: '已修复',
    resultFiller: '李四'
  },
  {
    id: 2,
    createTime: '2023-11-19 14:20:00',
    issue: '优化数据库查询性能',
    processor: '王五',
    estimatedCompleteTime: '2023-11-20 12:00:00',
    actualCompleteTime: '',
    result: '',
    resultFiller: ''
  },
  {
    id: 3,
    createTime: '2023-11-18 09:15:00',
    issue: '更新用户手册文档',
    processor: '赵六',
    estimatedCompleteTime: '2023-11-19 17:00:00',
    actualCompleteTime: '2023-11-19 16:45:00',
    result: '已完成',
    resultFiller: '赵六'
  }
];

// 模拟评论数据
const mockComments = [
  {
    id: 1,
    author: '李四',
    time: '2023-11-20 16:30:00',
    content: '登录页面BUG已经修复，请测试验证。'
  },
  {
    id: 2,
    author: '张三',
    time: '2023-11-20 17:15:00',
    content: '测试通过，功能正常。'
  },
  {
    id: 3,
    author: '王五',
    time: '2023-11-21 09:45:00',
    content: '数据库查询优化方案已实施，性能提升约30%。'
  }
];

function App() {
  const [visible, setVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [records, setRecords] = useState(mockRecords);
  const [comments, setComments] = useState(mockComments);
  const [currentRecordId, setCurrentRecordId] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [formData, setFormData] = useState({
    issue: '',
    processor: '',
    estimatedCompleteTime: '',
    actualCompleteTime: ''
  });
  const [resultForm, setResultForm] = useState({
    result: '',
    actualCompleteTime: ''
  });

  // 打开新增处理事项弹窗
  const handleAddIssue = () => {
    setVisible(true);
  };

  // 提交新增处理事项
  const handleSubmit = () => {
    if (!formData.issue || !formData.processor || !formData.estimatedCompleteTime) {
      Message.error('请填写所有必填项');
      return;
    }

    const newRecord = {
      id: records.length + 1,
      createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      issue: formData.issue,
      processor: formData.processor,
      estimatedCompleteTime: dayjs(formData.estimatedCompleteTime).format('YYYY-MM-DD HH:mm:ss'),
      actualCompleteTime: formData.actualCompleteTime ? dayjs(formData.actualCompleteTime).format('YYYY-MM-DD HH:mm:ss') : '',
      result: '',
      resultFiller: ''
    };

    setRecords([newRecord, ...records]);
    setVisible(false);
    setFormData({
      issue: '',
      processor: '',
      estimatedCompleteTime: '',
      actualCompleteTime: ''
    });
    Message.success('处理事项添加成功');
  };

  // 打开处理结果弹窗
  const handleOpenResultModal = (record) => {
    setCurrentRecordId(record.id);
    setResultVisible(true);
    setResultForm({
      result: record.result,
      actualCompleteTime: record.actualCompleteTime ? dayjs(record.actualCompleteTime) : ''
    });
  };

  // 提交处理结果
  const handleResultSubmit = () => {
    if (!resultForm.result) {
      Message.error('请填写处理结果');
      return;
    }

    const updatedRecords = records.map(record => {
      if (record.id === currentRecordId) {
        return {
          ...record,
          result: resultForm.result,
          actualCompleteTime: resultForm.actualCompleteTime ? dayjs(resultForm.actualCompleteTime).format('YYYY-MM-DD HH:mm:ss') : dayjs().format('YYYY-MM-DD HH:mm:ss'),
          resultFiller: '当前用户' // 实际应用中应为当前登录用户
        };
      }
      return record;
    });

    setRecords(updatedRecords);
    setResultVisible(false);
    Message.success('处理结果已更新');
  };

  // 添加评论
  const handleAddComment = () => {
    if (!newComment.trim()) {
      Message.error('请输入评论内容');
      return;
    }

    const comment = {
      id: comments.length + 1,
      author: '当前用户', // 实际应用中应为当前登录用户
      time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      content: newComment
    };

    setComments([comment, ...comments]);
    setNewComment('');
    Message.success('评论添加成功');
  };

  // 处理记录表格列定义
  const columns = [
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180
    },
    {
      title: '处理事项',
      dataIndex: 'issue',
      key: 'issue'
    },
    {
      title: '处理人',
      dataIndex: 'processor',
      key: 'processor',
      width: 120
    },
    {
      title: '预计完成时间',
      dataIndex: 'estimatedCompleteTime',
      key: 'estimatedCompleteTime',
      width: 180
    },
    {
      title: '实际完成时间',
      dataIndex: 'actualCompleteTime',
      key: 'actualCompleteTime',
      width: 180
    },
    {
      title: '处理结果',
      dataIndex: 'result',
      key: 'result',
      width: 120,
      render: (text, record) => (
        <Space>
          {text ? <Tag theme="success">{text}</Tag> : '-'}
          {!text && (
            <Button 
              size="small" 
              variant="text" 
              onClick={() => handleOpenResultModal(record)}
            >
              填写
            </Button>
          )}
        </Space>
      )
    },
    {
      title: '处理完成填写人',
      dataIndex: 'resultFiller',
      key: 'resultFiller',
      width: 120
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">问题处理</h1>
      </div>

      {/* 处理记录部分 */}
      <Card className="content-card">
        <div className="section-title">处理记录</div>
        <div className="action-buttons">
          <Button 
            theme="primary" 
            icon={<AddIcon />}
            onClick={handleAddIssue}
          >
            新增处理事项
          </Button>
        </div>
        <Table
          data={records}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </Card>

      {/* 评论部分 */}
      <Card className="content-card">
        <div className="section-title">评论</div>
        <div className="comment-input">
          <Space direction="vertical" style={{ width: '100%' }}>
            <TextArea
              placeholder="请输入评论内容"
              value={newComment}
              onChange={(value) => setNewComment(value)}
              autos={{ minRows: 3, maxRows: 6 }}
            />
            <div style={{ textAlign: 'right' }}>
              <Button theme="primary" onClick={handleAddComment}>
                提交评论
              </Button>
            </div>
          </Space>
        </div>
        <Divider />
        <div className="comment-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{comment.time}</span>
              </div>
              <div className="comment-content">{comment.content}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* 新增处理事项弹窗 */}
      <Modal
        header="新增处理事项"
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={handleSubmit}
        confirmBtn="确定"
        cancelBtn="取消"
      >
        <Form>
          <FormItem label="处理事项" name="issue" required>
            <Input
              placeholder="请输入处理事项"
              value={formData.issue}
              onChange={(value) => setFormData({ ...formData, issue: value })}
            />
          </FormItem>
          <FormItem label="处理人" name="processor" required>
            <Input
              placeholder="请输入处理人"
              value={formData.processor}
              onChange={(value) => setFormData({ ...formData, processor: value })}
            />
          </FormItem>
          <FormItem label="预计完成时间" name="estimatedCompleteTime" required>
            <DatePicker
              enableTimePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="请选择预计完成时间"
              value={formData.estimatedCompleteTime ? dayjs(formData.estimatedCompleteTime) : ''}
              onChange={(value) => setFormData({ ...formData, estimatedCompleteTime: value })}
            />
          </FormItem>
          <FormItem label="实际完成时间" name="actualCompleteTime">
            <DatePicker
              enableTimePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="请选择实际完成时间（可选）"
              value={formData.actualCompleteTime ? dayjs(formData.actualCompleteTime) : ''}
              onChange={(value) => setFormData({ ...formData, actualCompleteTime: value })}
            />
          </FormItem>
        </Form>
      </Modal>

      {/* 处理结果弹窗 */}
      <Modal
        header="填写处理结果"
        visible={resultVisible}
        onClose={() => setResultVisible(false)}
        onConfirm={handleResultSubmit}
        confirmBtn="确定"
        cancelBtn="取消"
      >
        <Form>
          <FormItem label="处理结果" name="result" required>
            <Input
              placeholder="请输入处理结果"
              value={resultForm.result}
              onChange={(value) => setResultForm({ ...resultForm, result: value })}
            />
          </FormItem>
          <FormItem label="实际完成时间" name="actualCompleteTime">
            <DatePicker
              enableTimePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="请选择实际完成时间"
              value={resultForm.actualCompleteTime}
              onChange={(value) => setResultForm({ ...resultForm, actualCompleteTime: value })}
            />
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
}

export default App;