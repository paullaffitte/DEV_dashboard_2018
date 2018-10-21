# Dashboard

A fully featured Dashbord wrote in javascript using React and Feathers.

Epitech school project.

## Summary

* [Quickstart](#quickstart)
* [Architecture](#arch)
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
	* [facebook](#facebook)
	* [google](#google)

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

## <a name="arch"></a>Architecture

Bla bla bla thomas remplis ça

### <a name="services"></a>Services

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

### <a name="facebook"></a>facebook

### <a name="google"></a>google



