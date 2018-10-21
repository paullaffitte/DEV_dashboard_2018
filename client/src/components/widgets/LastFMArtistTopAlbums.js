import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import LastFM from '../../services/LastFM';
import LastFMArtistForm from './LastFMArtistForm';
import './Github.css';

class LastFMArtistTopAlbums extends Component {

  state = {
    data: {
      topalbums: {
        album: []
      }
    }
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    try {
      this.setState((await LastFM('artist.gettopalbums', {
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
          dataSource={this.state.data.topalbums.album}
          renderItem={item => (
            <List.Item>
              <table>
                <tbody>
                  <tr>
                    <td style={{paddingRight: 10}}><img src={item.image.filter(i => i.size == 'medium').pop()['#text']}/></td>
                    <td>{item.name}</td>
                  </tr>
                  <tr><td>Playcount</td><td>{item.playcount}</td></tr>
                </tbody>
              </table>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default LastFMArtistTopAlbums;
