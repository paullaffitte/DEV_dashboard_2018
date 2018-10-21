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
