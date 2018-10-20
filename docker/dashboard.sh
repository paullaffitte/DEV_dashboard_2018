#! /usr/bin/env bash

function setTarget {
	export TARGET="$1"
	COMPOSE_PROJECT_NAME="dashboard${TARGET}"

	if [[ "${TARGET}" != "dev" && "${TARGET}" != "prod" ]]; then
		>&2 echo "Supported targets are dev and prod"
	fi
}

function readTarget {
	setTarget `cat .dashboard.target 2> /dev/null`
}

function selectTarget {
	readTarget
	while [[ "${TARGET}" != "dev" && "${TARGET}" != "prod" ]]; do
		read -p "select a target (dev/prod): " target
		mkdir -p data/
		echo ${target} > .dashboard.target
		readTarget
	done
}

function check {
	status=$?

	if [ $status -ne 0 ]
	then
		echo "==> Error: command exited with code" $status
		exit 1
	fi
}

function composeFiles {
	echo "-f ./docker/docker-compose.yml "

	if [[ ${TARGET} == "dev" ]]; then
		echo "-f ./docker/docker-compose.dev.yml"
	fi

	if [[ ${TARGET} == "prod" ]]; then
		echo "-f ./docker/docker-compose.prod.yml"
	fi
}

function launch {
	if [[ $1 == "default" ]]; then
		launch up -d
		return
	fi

	docker-compose -p ${COMPOSE_PROJECT_NAME} $(composeFiles) $@
}

pushd `pwd` > /dev/null
cd "`dirname $0`/../"

selectTarget

if [ "$1" == "target" ]; then
	rm -rf .dashboard.target
	selectTarget
elif [ "$1" == "re" ]; then
	launch build ${@:2}
	launch default
elif [ "$1" == "build" ]; then
	launch build ${@:2}
	launch config | sed -r "s#$(pwd)#.#g" > docker-compose.yml
elif [ "$1" == "" ]; then
	launch default
else
	launch ${@:1}
fi

popd > /dev/null
