const about = {
  client: {
    host: null, // "10.101.53.35"
  },
  server: {
    current_time: null, // 1531680780
    services: [
      {
        name: 'weather',
        widgets: [
          {
            name: 'weather_city',
            description: 'Affiche la météo d\'une ville donnée',
            params: [
              {
                name: "city",
                type: "string"
              }
            ]
          },
        ]
      },
      {
        name: 'github',
        widgets: [
          {
            name: 'github_commits',
            description: 'Affiche les commits d\'un repository',
            params: [
              {
                name: "repository",
                type: "string"
              }
            ]
          },
          {
            name: 'github_issues',
            description: 'Affiche les issues d\'un repository',
            params: [
              {
                name: "repository",
                type: "string"
              }
            ]
          },
          {
            name: 'github_pr',
            description: 'Affiche les pull requests d\'un repository',
            params: [
              {
                name: "repository",
                type: "string"
              }
            ]
          },
        ]
      },
      {
        name: 'twitter',
        widgets: [
          {
            name: 'twitter_tweets',
            description: 'Affiche les tweets d\'un compte',
            params: [
              {
                name: "account",
                type: "string"
              }
            ]
          },
        ]
      },
      {
        name: 'dataatwork',
        widgets: [
          {
            name: 'dataatwork_jobs',
            description: 'Affiche des emplois relatif à une compétence',
            params: [
              {
                name: "skill",
                type: "string"
              }
            ]
          },
          {
            name: 'dataatwork_skills',
            description: 'Affiche des compétence relatif à une emplois',
            params: [
              {
                name: "skill",
                type: "string"
              }
            ]
          },
        ]
      },
      {
        name: 'minecraft',
        widgets: [
          {
            name: 'minecraft_banner',
            description: 'Affiche la bannière d\'un serveur',
            params: [
              {
                name: "server_url",
                type: "string"
              }
            ]
          },
          {
            name: 'minecraft_status',
            description: 'Affiche le status d\'un serveur',
            params: [
              {
                name: "server_url",
                type: "string"
              }
            ]
          },
        ]
      },
      {
        name: 'loripsum',
        widgets: [
          {
            name: 'loripsum',
            description: 'Génère des lorem ipsum',
            params: [
              {
                name: 'paragraphs',
                type: 'integer'
              },
              {
                name: 'length',
                type: 'enum[short|medium|long|verylong]'
              },
              {
                name: 'decorate',
                type: 'boolean'
              },
              {
                name: 'link',
                type: 'boolean'
              },
              {
                name: 'ul',
                type: 'boolean'
              },
              {
                name: 'ol',
                type: 'boolean'
              },
              {
                name: 'dl',
                type: 'boolean'
              },
              {
                name: 'bq',
                type: 'boolean'
              },
              {
                name: 'code',
                type: 'boolean'
              },
              {
                name: 'headers',
                type: 'boolean'
              },
              {
                name: 'allcaps',
                type: 'boolean'
              },
              {
                name: 'prude',
                type: 'boolean'
              },
              {
                name: 'plaintext',
                type: 'boolean'
              },
            ]
          },
        ]
      },
      {
        name: 'yammer',
        widgets: [
          {
            name: 'posts',
            description: 'Affiche les messages d\'un groupe',
            params: [
              {
                name: 'groupId',
                type: 'string'
              }
            ]
          },
          {
            name: 'received',
            description: 'Affiche les messages reçus',
            params: []
          },
          {
            name: 'thread',
            description: 'Affiche les messages d\'un thread',
            params: [
              {
                name: 'threadId',
                type: 'string'
              }
            ]
          },
        ]
      },
      {
        name: 'trello',
        widgets: [
          {
            name: 'trello_column',
            description: 'Affiche une liste de cartes',
            params: [
              {
                name: 'listId',
                type: 'string'
              }
            ]
          },
          {
            name: 'trello_assigned',
            description: 'Affiche les cartes assignées a un utilisateur',
            params: [
              {
                name: 'memberId',
                type: 'string'
              }
            ]
          },
          {
            name: 'trello_mine',
            description: 'Affiche les cartes assignées a moi-même',
            params: []
          },
          {
            name: 'trello_lists',
            description: 'Affiche les listes d\'un tableau',
            params: [
              {
                name: 'boardId',
                type: 'string'
              }
            ]
          },
          {
            name: 'trello_board',
            description: 'Affiche les cartes d\'un tableau',
            params: [
              {
                name: 'boardId',
                type: 'string'
              }
            ]
          },
        ]
      },
      {
        name: 'epitech_intra',
        widgets: [
          {
            name: 'notifications',
            description: 'Affiche les notifications de l\'utilisateur',
            params: []
          },
          {
            name: 'mpdule',
            description: 'Affiche les activités d\'un module',
            params: [
              {
                name: 'moduleId',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'lastfm',
        widgets: [
          {
            name: 'lastfm_artistTopTracks',
            description: 'Top tracks d\'un artiste',
            params: [
              {
                name: "artist",
                type: "string"
              }
            ]
          },
          {
            name: 'lastfm_artistTopAlbums',
            description: 'Top albums d\'un artiste',
            params: [
              {
                name: "artist",
                type: "string"
              }
            ]
          },
          {
            name: 'lastfm_artistTopTags',
            description: 'Top tags d\'un artiste',
            params: [
              {
                name: "artist",
                type: "string"
              }
            ]
          },
        ]
      },
    ]
  }
}

module.exports = {...about};
