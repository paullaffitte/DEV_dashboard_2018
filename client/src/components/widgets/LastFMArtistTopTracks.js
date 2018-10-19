import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Axios from 'axios';
import Services from '../../constants/Services';

class LastFMArtistTopTracks extends Component {

  state = {
    data: {
      toptracks: {
        track: []
      }
    }
  }

  componentWillMount() {
    this.update();
  }

  async getLastFM(method, opts) {
    let optsStr = Object.keys(opts).map(k => `${k}=${opts[k]}`).join('&');
    optsStr = optsStr.length ? optsStr + '&' : '';
    return Axios.get(`https://ws.audioscrobbler.com/2.0/?method=${method}&${optsStr}api_key=${Services.lastfm.apiKey}&format=json`);
  }

  async update() {
    try {
      this.setState((await this.getLastFM('artist.gettoptracks', {
        artist: this.props.config.artist.toLowerCase()
      })));
    } catch (e) {
      console.error(e);
      this.setState({ data: [{title: 'Update failed.'}] });
    }
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data.toptracks.track}
          renderItem={item => (
            <List.Item>
              <table>
                <tbody>
                  <tr>
                    <td><img src={item.image.filter(i => i.size == 'medium').pop()['#text']}/></td>
                    <td>{item.name}</td>
                  </tr>
                  <tr><td>Playcount</td><td>{item.playcount}</td></tr>
                  <tr><td>Listeners</td><td>{item.listeners}</td></tr>
                </tbody>
              </table>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

class __LastFMArtistTopTracksForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('artist', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(<Input placeholder='Rick Astley' />)}
        </Form.Item>
      </Form>
    );
  }
}

const LastFMArtistTopTracksForm = Form.create()(__LastFMArtistTopTracksForm);

export {
  LastFMArtistTopTracksForm
};

export default LastFMArtistTopTracks;
