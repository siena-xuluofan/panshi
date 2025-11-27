import React, { useState } from 'react';
import { Button, Input, Table, Tag, Space, Pagination, Select } from 'tdesign-react';
import type { TableProps } from 'tdesign-react';
import './App.css';

interface ProblemRecord {
  id: string;
  rowNum: string;
  problemId: string;
  discoverer: string;
  responsiblePerson: string;
  creator: string;
  createDate: string;
  completeDate: string;
  level: string;
  problemType: string;
  version: string;
  status: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('risk');
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // 模拟数据
  const mockData: ProblemRecord[] = [
    {
      id: '1',
      rowNum: '1113',
      problemId: 'Q2025111311127168652',
      discoverer: 'sienaxu(徐罗帆)',
      responsiblePerson: 'sienaxu(徐罗帆)',
      creator: '处理中',
      createDate: '2025-11-29',
      completeDate: '',
      level: '低',
      problemType: '其他',
      version: '无需升级',
      status: '项目交付'
    },
    {
      id: '2',
      rowNum: '111',
      problemId: 'Q2025111201604569606',
      discoverer: 'sienaxu(徐罗帆)',
      responsiblePerson: 'sienaxu(徐罗帆)',
      creator: '处理中',
      createDate: '2025-11-27',
      completeDate: '',
      level: '高',
      problemType: '其他',
      version: 'L1',
      status: '项目交付'
    },
    {
      id: '3',
      rowNum: '111',
      problemId: 'Q2025111141041018339',
      discoverer: 'sienaxu(徐罗帆)',
      responsiblePerson: 'sienaxu(徐罗帆)',
      creator: '已关闭',
      createDate: '2025-11-14',
      completeDate: '2025-11-14',
      level: '中',
      problemType: '其他',
      version: '无需升级',
      status: '项目交付'
    }
  ];

  const columns: TableProps<ProblemRecord>['columns'] = [
    {
      colKey: 'rowNum',
      title: '问题名称',
      width: 80,
      cell: ({ row }) => <a style={{ color: '#0052d9' }}>{row.rowNum}</a>
    },
    { 
      colKey: 'problemId', 
      title: '问题编号', 
      width: 180
    },
    { colKey: 'discoverer', title: '问题识别人', width: 130 },
    { colKey: 'responsiblePerson', title: '问题责任人', width: 130 },
    { colKey: 'creator', title: '问题状态', width: 100 },
    { colKey: 'createDate', title: '期望完成日期', width: 120 },
    { colKey: 'completeDate', title: '实际完成日期', width: 120 },
    { colKey: 'level', title: '问题级别', width: 80 },
    { colKey: 'problemType', title: '问题类型', width: 100 },
    { colKey: 'version', title: '升级级别', width: 110 },
    {
      colKey: 'status',
      title: '问题来源系统',
      width: 150
    },
    {
      colKey: 'operation',
      title: '操作',
      width: 200,
      cell: () => (
        <Space size="small">
          <a style={{ color: '#0052d9' }}>编辑</a>
          <a 
            style={{ color: '#0052d9', cursor: 'pointer' }} 
            onClick={() => window.open('https://panshi111.vercel.app/', '_blank')}
          >
            处理
          </a>
          <a 
            style={{ color: '#0052d9', cursor: 'pointer' }} 
            onClick={() => window.open('https://dev.panshi.woa.com/tpms/project/issue/202301101185855/edit/QD202511201034056906?questionListCode=QL202305191706059029', '_blank')}
          >
            升级
          </a>
          <a style={{ color: '#0052d9' }}>删除</a>
        </Space>
      )
    }
  ];

  const tabs = [
    { label: '概览', value: 'overview' },
    { label: '信息', value: 'info' },
    { label: '计划', value: 'plan' },
    { label: '风险', value: 'risk' },
    { label: '合同', value: 'contract' },
    { label: '需求单', value: 'requirement' },
    { label: '分包', value: 'subcontract' },
    { label: '供应商', value: 'supplier' },
    { label: '维度', value: 'dimension' },
    { label: '流程', value: 'process' },
    { label: '工时', value: 'worktime' },
    { label: '打卡', value: 'checkin' },
    { label: '收入', value: 'income' },
    { label: '排班', value: 'schedule' },
    { label: '文档', value: 'document' }
  ];

  return (
    <div className="app-container">
      {/* 顶部标题栏 */}
      <div className="page-header">
        <div className="page-title">
          <span>无合同项目用项目-问题单</span>
          <Tag theme="warning" variant="light" style={{ marginLeft: '12px' }}>已关注</Tag>
          <Tag theme="default" variant="light" style={{ marginLeft: '8px' }}>切换旧版</Tag>
        </div>
        <div className="page-actions">
          <Button theme="primary">项目操作</Button>
        </div>
      </div>

      {/* 项目编号 */}
      <div className="project-info">
        <span className="info-label">项目编号：</span>
        <span>20250110011865855</span>
      </div>

      {/* 标签页导航 */}
      <div className="tabs-container">
        <div className="tabs-wrapper">
          {tabs.map(tab => (
            <div 
              key={tab.value} 
              className={`tab-item ${activeTab === tab.value ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tabs-sub">
          <div className="tab-sub-item active">项目问题</div>
          <div className="tab-sub-item">项目风险</div>
        </div>
      </div>

      {/* 筛选区域 */}
      <div className="filter-section">
        <div className="filter-row">
          <span className="filter-label">关键字段</span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Select
              value={searchType}
              onChange={(value) => setSearchType(value as string)}
              style={{ width: '120px' }}
              options={[
                { label: '问题名称', value: 'name' },
                { label: '问题编号', value: 'id' },
                { label: '问题责任人', value: 'responsible' }
              ]}
            />
            <Input
              placeholder="请输入问题名称/问题编号/问题责任人..."
              value={searchText}
              onChange={(value) => setSearchText(value)}
              style={{ width: '400px' }}
              clearable
            />
          </div>
        </div>

        <div className="filter-row">
          <span className="filter-label">问题状态</span>
          <Space size="small">
            <Tag theme="primary" variant="light">全部</Tag>
            <Tag theme="default" variant="outline">草稿</Tag>
            <Tag theme="default" variant="outline">处理中</Tag>
            <Tag theme="default" variant="outline">已关注</Tag>
          </Space>
        </div>

        <div className="filter-row">
          <span className="filter-label">开始级别</span>
          <Space size="small">
            <Tag theme="primary" variant="light">全部</Tag>
            <Tag theme="default" variant="outline">无需升级</Tag>
            <Tag theme="default" variant="outline">L1</Tag>
            <Tag theme="default" variant="outline">L2</Tag>
            <Tag theme="default" variant="outline">L3</Tag>
          </Space>
        </div>

        <div className="filter-actions">
          <a className="link-btn">更多的筛选项 ↓</a>
          <a className="link-btn">显示筛选条件</a>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="action-bar">
        <Button 
          theme="primary" 
          onClick={() => window.open('https://problem-info-module.vercel.app/', '_blank')}
        >
          新增问题
        </Button>
      </div>

      {/* 数据表格 */}
      <Table
        data={mockData}
        columns={columns}
        rowKey="id"
        bordered
        stripe
        size="medium"
        hover
      />

      {/* 分页 */}
      <div className="pagination-wrapper">
        <Pagination
          current={currentPage}
          total={30}
          pageSize={pageSize}
          onChange={(pageInfo) => setCurrentPage(pageInfo.current)}
          showJumper
          showPageSize={false}
        />
      </div>
    </div>
  );
};

export default App;
