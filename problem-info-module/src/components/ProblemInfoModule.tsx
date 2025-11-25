import React, { useState } from 'react';
import {
  Card,
  Form,
  Input,
  Select,
  Radio,
  Button,
  Row,
  Col,
  Space
} from 'tdesign-react';
import { ChevronDownIcon, ChevronRightIcon } from 'tdesign-icons-react';

const { FormItem } = Form;
const { Option } = Select;
const { Group: RadioGroup } = Radio;
const { Panel } = Collapse;

// 项目固有基础信息
const projectInfo = {
  projectCode: '20211108209778',
  projectName: '金华和悦-未来社区',
  projectIndustry: '旅建农体/建筑与不动产/地产与物业服务',
  projectStatus: '交付中',
  customerName: '金华金开数智运营科技有限公司',
  customerUIN: '100020778069',
  primaryChannel: '国内东区',
  salesManager: 'yuanXXX',
  projectManager: 'kenXXX',
  architect: 'xxxx',
  subcontractingManager: 'xxxx'
};

// 问题场景选项
const sceneOptions = [
  '场景1-腾讯胜诉，但客户无偿付能力',
  '场景2-质保金等尾款长期未回',
  '场景3-验收款长期未回',
  '场景4-项目核减，A面未定',
  '场景5-项目核减，A面已定，B面未确定',
  '场景6-项目核减，AB面均已定，但A面尚未回款',
  '场景7-A面未签合同，B面提前交付',
  '场景8-其他'
];

// 问题状态选项
const statusOptions = ['草稿', '处理中', '已关闭'];

// 问题级别选项
const levelOptions = ['低', '中', '高', '重大', '特大'];

const ProblemInfoModule: React.FC = () => {
  const [form] = Form.useForm();
  const [expandAdvanced, setExpandAdvanced] = useState(false);

  const handleSubmit = (values: any) => {
    console.log('表单提交:', values);
    // 这里可以添加提交逻辑
  };

  return (
    <div className="space-y-6">
      {/* 项目固有基础信息 */}
      <Card title="项目基础信息" className="shadow-sm">
        <Row gutter={16}>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  项目编码
                </span>
                <Input value={projectInfo.projectCode} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  项目名称
                </span>
                <Input value={projectInfo.projectName} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  项目行业
                </span>
                <Input value={projectInfo.projectIndustry} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  项目状态
                </span>
                <Input value={projectInfo.projectStatus} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  客户名称
                </span>
                <Input value={projectInfo.customerName} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  客户UIN
                </span>
                <Input value={projectInfo.customerUIN} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  一级通路
                </span>
                <Input value={projectInfo.primaryChannel} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  销售经理
                </span>
                <Input value={projectInfo.salesManager} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  项目经理
                </span>
                <Input value={projectInfo.projectManager} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  架构师
                </span>
                <Input value={projectInfo.architect} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                  分包商务经理
                </span>
                <Input value={projectInfo.subcontractingManager} disabled style={{ flex: 1 }} />
              </div>
            </FormItem>
          </Col>
        </Row>
      </Card>

      {/* 问题信息表单 */}
      <Card title="问题信息" className="shadow-sm">
        <Form
          form={form}
          onSubmit={handleSubmit}
          labelWidth="120px"
          className="space-y-4"
        >
          <Row gutter={16}>
            <Col span={12}>
              <FormItem name="problemName" rules={[{ required: true, message: '请输入问题名称' }]}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                    问题名称 <span style={{ color: '#ef4444' }}>*</span>
                  </span>
                  <Input placeholder="请输入问题名称" style={{ flex: 1 }} />
                </div>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                    问题识别人
                  </span>
                  <Input value="sienxu(徐罗帆)" disabled style={{ flex: 1 }} />
                </div>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem name="problemStatus" rules={[{ required: true, message: '请选择问题状态' }]}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                    问题状态 <span style={{ color: '#ef4444' }}>*</span>
                  </span>
                  <Select placeholder="请选择问题状态" style={{ flex: 1 }}>
                    {statusOptions.map(status => (
                      <Option key={status} value={status}>{status}</Option>
                    ))}
                  </Select>
                </div>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem name="problemLevel" rules={[{ required: true, message: '请选择问题级别' }]}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                    问题级别 <span style={{ color: '#ef4444' }}>*</span>
                  </span>
                  <Select placeholder="请选择问题级别" style={{ flex: 1 }}>
                    {levelOptions.map(level => (
                      <Option key={level} value={level}>{level}</Option>
                    ))}
                  </Select>
                </div>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem name="problemScene" rules={[{ required: true, message: '请选择问题场景' }]}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                    问题场景 <span style={{ color: '#ef4444' }}>*</span>
                  </span>
                  <Select placeholder="请选择问题场景" style={{ flex: 1 }}>
                    {sceneOptions.map(scene => (
                      <Option key={scene} value={scene}>{scene}</Option>
                    ))}
                  </Select>
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FormItem name="problemDescription">
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px', paddingTop: '8px' }}>
                    问题描述
                  </span>
                  <Input.Textarea placeholder="请详细描述问题情况" rows={4} style={{ flex: 1 }} />
                </div>
              </FormItem>
            </Col>
          </Row>

          {/* 更多信息 - 可展开/收起 */}
          <div className="mt-6">
            <div
              className="flex items-center cursor-pointer text-blue-600 hover:text-blue-700 transition-colors"
              onClick={() => setExpandAdvanced(!expandAdvanced)}
            >
              {expandAdvanced ? <ChevronDownIcon /> : <ChevronRightIcon />}
              <span className="ml-1">更多信息</span>
            </div>

            {expandAdvanced && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem name="problemType">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          问题类型
                        </span>
                        <Input placeholder="请输入问题类型" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="mainReason">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          主要原因
                        </span>
                        <Input placeholder="请输入主要原因" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="secondaryReason">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          次要原因
                        </span>
                        <Input placeholder="请输入次要原因" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="partner">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          合作伙伴
                        </span>
                        <Input placeholder="请输入合作伙伴" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="product">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          涉及产品
                        </span>
                        <Input placeholder="请输入涉及产品" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="affectedObject">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          问题影响对象
                        </span>
                        <Input placeholder="请输入影响对象" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="impactAmount">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          影响金额
                        </span>
                        <Input placeholder="请输入影响金额" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="delayDays">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          影响延期(天)
                        </span>
                        <Input placeholder="请输入延期天数" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="acceptanceMilestone">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          影响验收里程碑
                        </span>
                        <Input placeholder="请输入影响验收里程碑" style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="weeklyReportDisplay">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          周报显示
                        </span>
                        <Radio.Group>
                          <Radio value="是">是</Radio>
                          <Radio value="否">否</Radio>
                        </Radio.Group>
                      </div>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem name="overdueReminder">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px' }}>
                          逾期控制提醒
                        </span>
                        <Radio.Group>
                          <Radio value="是">是</Radio>
                          <Radio value="否">否</Radio>
                        </Radio.Group>
                      </div>
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <FormItem name="impactAndMeasures">
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ marginRight: '12px', fontSize: '14px', fontWeight: 500, color: '#374151', width: '96px', paddingTop: '8px' }}>
                          问题影响及措施
                        </span>
                        <Input.Textarea placeholder="请描述问题影响及采取的措施" rows={4} style={{ flex: 1 }} />
                      </div>
                    </FormItem>
                  </Col>
                </Row>
              </div>
            )}
          </div>

          <Row className="mt-6">
            <Col span={24}>
              <FormItem>
                <Space>
                  <Button type="submit" theme="primary">
                    保存问题
                  </Button>
                  <Button theme="default" onClick={() => form.reset()}>
                    重置
                  </Button>
                </Space>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ProblemInfoModule;