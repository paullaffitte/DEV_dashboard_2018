import React, {Component} from 'react';
import MinecraftForm, {getPort} from './MinecraftForm';

class MinecraftBanner extends Component {

  state = {}

  componentWillMount() {
    this.update();
  }

  async update() {
  }

  render() {
    return (<img src={`https://use.gameapis.net/mc/query/banner/${this.props.config.serverUrl}${getPort(this.props.config.port)}`} />);
  }
}

export default MinecraftBanner;
