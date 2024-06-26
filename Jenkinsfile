pipeline {
    agent any

    stages {
        stage('building Image') {
            steps {
                sh '''
                    docker build -t apiapp .
                '''
            }
        }
    }
}