pipeline {
    agent any
    tools {
        nodejs 'node-18.7.0'
    }

    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm t'
            }
        }
    }
}