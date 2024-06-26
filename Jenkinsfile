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
        stage('Deploy Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh '''
                    docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASS
                    docker tag apiapp $DOCKERHUB_USER/testapp
                    docker push $DOCKERHUB_USER/testapp
                    '''
                }
            }
        }
    }
}