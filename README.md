# Dashboard

A fully featured Dashbord wrote in javascript using React and Feathers.

Epitech school project.

## Summary

* [Quickstart](#quickstart)
* [Creating services and widgets](#howto)
* [Services](#services)
	* [weather](#weather)
		* [weather_city](#weather_city)
	* [github](#github)
		* [github_commits](#github_commits)
		* [github_issues](#github_issues)
		* [github_pr](#github_pr)
	* [twitter](#twitter)
		* [twitter_tweets](#twitter_tweets)
	* [dataatwork](#dataatwork)
		* [dataatwork_jobs](#dataatwork_jobs)
		* [dataatwork_skills](#dataatwork_skills)
	* [minecraft](#minecraft)
		* [minecraft_banner](#minecraft_banner)
		* [minecraft_status](#minecraft_status)
	* [loripsum](#loripsum)
		* [loripsum](#loripsum)
	* [yammer](#yammer)
		* [posts](#posts)
		* [received](#received)
		* [thread](#thread)
	* [trello](#trello)
		* [trello_column](#trello_column)
		* [trello_assigned](#trello_assigned)
		* [trello_mine](#trello_mine)
		* [trello_lists](#trello_lists)
		* [trello_board](#trello_board)
	* [epitech_intra](#epitech_intra)
		* [notifications](#notifications)
		* [module](#module)
	* [lastfm](#lastfm)
		* [lastfm_artistTopTracks](#lastfm_artistTopTracks)
		* [lastfm_artistTopAlbums](#lastfm_artistTopAlbums)
		* [lastfm_artistTopTags](#lastfm_artistTopTags)
	* [steam](#steam)
		* [recently_played](#recently_played)
	* [facebook](#facebook)

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

| Property | Type | Required | Description | Example |
| -------- | ---- | -------- | ----------- | ------- |
| icon | string | Yes | Can be local path or url to your icon | `'path/to/icon'` |
| name | string | Yes | Name of your service | `'My Service'` |
| isValid | function | No | Return boolean to determine if user has subscribe to service. The function take the user in parameter. | `isValid: user => user.myService && user.myService.accessToken` |
| subscribe | string\|array | No | Method for subscribing to service. If it's a string, it's the URL to OAuth in your service. Else, if it's an array, it's a list of data to ask user and store in database. | `'https://localhost:8080/auth/service'` or `['autoLogin']` (accessible with `user.myService.autoLogin`)|

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

## <a name="services"></a>Services

### <a name="weather"></a>weather

#### <a name="weather_city"></a>weather_city

Affiche la météo d'une ville donnée

##### Parameters

`city: string`

### <a name="github"></a>github

#### <a name="github_commits"></a>github_commits

Affiche les commits d'un repository

##### Parameters

`repository: string`

#### <a name="github_issues"></a>github_issues

Affiche les issues d'un repository

##### Parameters

`repository: string`

#### <a name="github_pr"></a>github_pr

Affiche les pull requests d'un repository

##### Parameters

`repository: string`

### <a name="twitter"></a>twitter

#### <a name="twitter_tweets"></a>twitter_tweets

Affiche les tweets d'un compte

##### Parameters

`account: string`

### <a name="dataatwork"></a>dataatwork

#### <a name="dataatwork_jobs"></a>dataatwork_jobs

Affiche des emplois relatif à une compétence

##### Parameters

`skill: string`

#### <a name="dataatwork_skills"></a>dataatwork_skills

Affiche des compétence relatif à une emplois

##### Parameters

`skill: string`

### <a name="minecraft"></a>minecraft

#### <a name="minecraft_banner"></a>minecraft_banner

Affiche la bannière d'un serveur

##### Parameters

`server_url: string`

#### <a name="minecraft_status"></a>minecraft_status

Affiche le status d'un serveur

##### Parameters

`server_url: string`

### <a name="loripsum"></a>loripsum

#### <a name="loripsum"></a>loripsum

Génère des lorem ipsum

##### Parameters

`paragraphs: integer`
`length: enum[short|medium|long|verylong]`
`decorate: boolean`
`link: boolean`
`ul: boolean`
`ol: boolean`
`dl: boolean`
`bq: boolean`
`code: boolean`
`headers: boolean`
`allcaps: boolean`
`prude: boolean`
`plaintext: boolean`

### <a name="yammer"></a>yammer

#### <a name="posts"></a>posts

Affiche les messages d'un groupe

##### Parameters

`groupId: string`

#### <a name="received"></a>received

Affiche les messages reçus



#### <a name="thread"></a>thread

Affiche les messages d'un thread

##### Parameters

`threadId: string`

### <a name="trello"></a>trello

#### <a name="trello_column"></a>trello_column

Affiche une liste de cartes

##### Parameters

`listId: string`

#### <a name="trello_assigned"></a>trello_assigned

Affiche les cartes assignées a un utilisateur

##### Parameters

`memberId: string`

#### <a name="trello_mine"></a>trello_mine

Affiche les cartes assignées a moi-même



#### <a name="trello_lists"></a>trello_lists

Affiche les listes d'un tableau

##### Parameters

`boardId: string`

#### <a name="trello_board"></a>trello_board

Affiche les cartes d'un tableau

##### Parameters

`boardId: string`

### <a name="epitech_intra"></a>epitech_intra

#### <a name="notifications"></a>notifications

Affiche les notifications de l'utilisateur



#### <a name="module"></a>module

Affiche les activités d'un module

##### Parameters

`moduleId: string`

### <a name="lastfm"></a>lastfm

#### <a name="lastfm_artistTopTracks"></a>lastfm_artistTopTracks

Top tracks d'un artiste

##### Parameters

`artist: string`

#### <a name="lastfm_artistTopAlbums"></a>lastfm_artistTopAlbums

Top albums d'un artiste

##### Parameters

`artist: string`

#### <a name="lastfm_artistTopTags"></a>lastfm_artistTopTags

Top tags d'un artiste

##### Parameters

`artist: string`

### <a name="steam"></a>steam

#### <a name="recently_played"></a>recently_played

Affiche les jeux auquel X a récemment joué

##### Parameters

`steamId: string`

### <a name="facebook"></a>facebook



