## <a name="quickstart"></a>Quickstart

Configure project:

```bash
./docker/dashboard.sh config > docker-compose.yml
```

Live refresh dev server:

```bash
docker-compose up -d
docker-compose stop client
cd client && yarn start
```

Prod build:

```bash
docker-compose build
docker-compose up -d
```

## <a name="howto"></a>How to create your own service/widgets

_Fist, if your service have to support authentication, you must implement it on the Feathers API (see [here](https://blog.feathersjs.com/how-to-setup-oauth-flow-with-featherjs-522bdecb10a8))_

Now, you just have to configure some things on the client.

### Configure service

Edit _/client/src/constants/Services.js_ and add your service configuration, like this:
```javascript
  myService: {
    icon: 'path/to/icon',
    name: 'My Service',
  },
```

This is the minimal configuration for any service, here is more properties:

| Property  | Type          | Required | Description                                                                                                                                                                | Example                                                                                                 |
| --------- | ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| icon      | string        | Yes      | Can be local path or url to your icon                                                                                                                                      | `'path/to/icon'`                                                                                        |
| name      | string        | Yes      | Name of your service                                                                                                                                                       | `'My Service'`                                                                                          |
| isValid   | function      | No       | Return boolean to determine if user has subscribe to service. The function take the user in parameter.                                                                     | `isValid: user => user.myService && user.myService.accessToken`                                         |
| subscribe | string\|array | No       | Method for subscribing to service. If it's a string, it's the URL to OAuth in your service. Else, if it's an array, it's a list of data to ask user and store in database. | `'https://localhost:8080/auth/service'` or `['autoLogin']` (accessible with `user.myService.autoLogin`) |

You can add extra data in this configuration.

Now you have configured your service, it's time to configure associated widgets!

### Configure widgets

#### Create your widget form

Create _/src/components/widgets/MyWidgetForm.js_ file:

```javascript
import React, {Component} from 'react';
import {Form, Icon, Input} from 'antd';

class MyWidgetForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('some_config', {
            rules: [{required: true, message: 'Please enter a city.'}],
          })(
            <Input prefix={<Icon type='plus' />} placeholder='some config' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(MyWidgetForm);
```

#### Create your widget component

Create _/src/components/widgets/MyWidget.js_ file:

```javascript
import React, {Component} from 'react';
import Services from '../../constants/Services';

class MyWidget extends Component {
  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = () => {
    // code for update your widget data here
  }

  render() {
    console.log(this.props.config.some_config);
    return (
      <span>My widget</span>
    );
  }
}

export default MyWidget;
```

#### Edit widget configuration

Edit _/client/src/constants/Widgets.js_ and add your widgets configuration, like this:
```javascript
  my_widget: {
    service: 'myService', // service key in constants/Services.js
    component: MyWidget,
    form: MyWidgetForm,
    name: 'My Widget', // widget name in widgets list
    desc: 'Description du widget',
    title: config => ('My Widget'), // widget title on dashboard
    w: 2, // default display width
    h: 1, // default display height
  },
```

It's all !
