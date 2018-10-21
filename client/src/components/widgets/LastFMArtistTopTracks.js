import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import LastFM from '../../services/LastFM';
import LastFMArtistForm from './LastFMArtistForm';
import './Github.css';

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

  async update() {
    try {
      this.setState((await LastFM('artist.gettoptracks', {
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
                    <td style={{paddingRight: 10}}><img src={item.image.filter(i => i.size == 'medium').pop()['#text']}/></td>
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

export default LastFMArtistTopTracks;
