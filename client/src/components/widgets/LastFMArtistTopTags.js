import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import LastFM from '../../services/LastFM';
import LastFMArtistForm from './LastFMArtistForm';
import './Github.css';

class LastFMArtistTopTags extends Component {

  state = {
    data: {
      toptags: {
        tag: []
      }
    }
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    try {
      this.setState((await LastFM('artist.gettoptags', {
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
          dataSource={this.state.data.toptags.tag}
          renderItem={item => (
            <List.Item>
              <table>
                <tbody>
                  <tr>
                    <td style={{width: 150}}><a href={item.url}>{item.name}</a></td>
                  </tr>
                  <tr><td>Score</td><td>{item.count}</td></tr>
                </tbody>
              </table>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default LastFMArtistTopTags;
