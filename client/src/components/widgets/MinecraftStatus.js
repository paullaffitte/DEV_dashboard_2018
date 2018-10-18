import React, {Component} from 'react';
import Axios from 'axios';
import MinecraftForm, {getPort} from './MinecraftForm';

class MinecraftStatus extends Component {

  state = {
    status: false,
    protocol: 'none',
    ping: Infinity,
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    try {
      this.setState((await Axios.get(`https://use.gameapis.net/mc/query/info/${this.props.config.serverUrl}${getPort(this.props.config.port)}`)).data);
    } catch (e) {
      console.error(e);
      this.setState({ data: [{title: 'Update failed.'}] });
    }
  }

  render() {
    return (
      <div>
        <p>Status: {this.state.status ? 'Up' : 'Down'}</p>
        <p>Protocol: {this.state.protocol}</p>
        <p>Ping: {this.state.ping}</p>
        <p>Version: {this.state.version}</p>
      </div>
    );
  }
}

export default MinecraftStatus;
