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
        stage('Run tests') {
            steps {
                sh "docker run apiapp npm test"
            }
        }
    }
}