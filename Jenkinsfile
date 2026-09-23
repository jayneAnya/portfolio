pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    stages {

        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t portfolio:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying portfolio application...'
                echo 'Deployment simulation completed.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }

        success {
            echo 'Pipeline succeeded!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
