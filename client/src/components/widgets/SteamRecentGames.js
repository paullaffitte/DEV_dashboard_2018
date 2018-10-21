import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import SteamAPI from 'steamapi';
import Services from '../../constants/Services';
import Steam from '../../services/Steam';

class SteamRecentGames extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.steam = new SteamAPI(Services.steam.apiKey);
    this.steam.resolve(this.props.config.steamid).then(id => this.id = id);
    this.props.setChildRef(this);
  }

  update = async () => {
    try {
      this.setState({
        data: (await Steam('IPlayerService/GetRecentlyPlayedGames', this.id)).data.response.games
      });
    } catch (e) {
      this.setState({
        data: [
          {
            title: 'Update failed.'
          }
        ]
      });
    }
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <table>
                <tbody>
                  <tr>
                    <td style={{paddingRight: 10}}><h3>{item.name}</h3></td>
                    <td><img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${item.appid}/${item.img_logo_url}.jpg`}/></td>
                  </tr>
                  <tr><td style={{paddingRight: 10}}>Temps joué les 2 dernières semaines: </td><td>{item.playtime_2weeks} minutes</td></tr>
                  <tr><td>Temps joué total: </td><td>{item.playtime_forever} minutes</td></tr>
                </tbody>
              </table>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SteamRecentGames;
