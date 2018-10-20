import React, {Component} from 'react';
import {Card, Button, Icon} from 'antd'
import PropTypes from 'prop-types';

import WidgetForm from './WidgetForm';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

import './Widget.css';

class Widget extends Component {

  state = {
    title: '',
		widgetFormIsOpen: false,
	}

  setChildRef = ref => {
    this.widgetContent = ref;
    this.widgetContent.update();
    this.refresh = setInterval(this.widgetContent.update, this.props.config.refreshInterval || 5000);
  };

  updateTitle = title => {
    this.setState({
      title: title
    });
  };

  componentWillUnmount() {
    clearInterval(this.refresh);
	}


  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.config) !== JSON.stringify(prevProps.config)) {
      this.widgetContent && this.widgetContent.update();
    }
  }

  toggleWidgetForm = (isOpen) => {
    this.setState({ widgetFormIsOpen: isOpen });
  }

  onUpdate = (_, values) => {
    this.props.onUpdate(this.props.id, values);
  }

  onDelete = () => {
    this.toggleWidgetForm(false);
    this.props.onRemove(this.props.id);
  }

  render() {
    const WidgetComponent = Widgets[this.props.name].component;
    const icon = Services[Widgets[this.props.name].service].icon;
    let title = Widgets[this.props.name].title;

    if (typeof title === 'function') {
      title = title(this.props.config);
    }

    return (
      <div
        className="Widget"
      >
        <div className="Widget--title">
          <img
            alt=''
            style={{width: 20, height: 20, marginRight: 4}}
            src={icon}
          />
          <h3>{title}</h3>
        </div>
        <div className="Widget--body">
          <WidgetComponent
            config={this.props.config}
            user={this.props.user}
            setChildRef={this.setChildRef}
          />
        </div>
        <div className="Widget--extra">
          <Icon className="button" type="setting" onClick={() => (this.setState({ widgetFormIsOpen: true }))} />
        </div>
        <WidgetForm
          widget={this.state.widgetFormIsOpen && this.props.name}
          onAddWidget={this.onUpdate}
          onClose={() => this.toggleWidgetForm(null)}
          onDelete={this.onDelete}
          update={true}
        />
      </div>
    );
  }
}

Widget.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  config: PropTypes.object,
  onRemove: PropTypes.func,
  onTitleUpdate: PropTypes.func,
  onUpdate: PropTypes.func,
  user: PropTypes.object,
};

export default Widget;
