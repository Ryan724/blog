import React from 'react';
import { Button, Form, Input } from 'antd/dist/antd1';
const createForm = Form.create;
const FormItem = Form.Item;



let BasicDemo = React.createClass({
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'JasonWood') {
          callback([new Error('抱歉，该用户名已被占用。')]);
        } else {
          callback();
        }
      }, 800);
    }
  },



  render() {
    const { demoList } = this.props;
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {labelCol: { span: 7 }, wrapperCol: { span: 12 }};

    const formItems = Array(demoList.dataLength).fill(0).map((item, index) => {
    // console.log(getFieldError(`levelAlias_${index}`),isFieldValidating(`levelAlias_${index}`)  );
    // console.log(getFieldProps(`levelAlias_${index}`));
    // setTimeout(()=>{console.log(getFieldProps(`levelAlias_${index}`));},1000)
    return (<FormItem
            {...formItemLayout}
            label={"用户名"+index}
            hasFeedback
            key = { index }
            help={isFieldValidating(`levelAlias_${index}`) ? '校验中...' : (getFieldError(`levelAlias_${index}`) || []).join(', ')}
          >
          <Input {...getFieldProps(`levelAlias_${index}`, 
                          {rules: [
                                { required: true, min: 5, message: '用户名至少为 5 个字符' },
                                { validator: this.userExists },
                              ]})
                  }
                 placeholder="实时校验，输入 JasonWood 看看"
             />
        </FormItem>)
    });
    return (
      <Form horizontal form={this.props.form}>
        {formItems}
        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>重置</Button>
        </FormItem>
      </Form>
    );
  },
});

export default  createForm({
       mapPropsToFields(props) {
            console.log('mapPropsToFields', props);
            let fields = {};
            let dataMap = props.demoList.dataMap;
            for (let key in dataMap) {
                fields[key] = {'value': dataMap[key]}
                // if(dataMap[key].length<5){
                //     fields[key].errors=[
                //         {
                //           fields:key,
                //           message:'用户名至少为five个字符'
                //         }
                //         ]
                // }
            }
            return fields;
        }
      }
  )(BasicDemo);
