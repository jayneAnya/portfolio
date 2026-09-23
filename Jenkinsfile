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

        stage('Docker Build & Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-portfolio',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                        IMAGE_NAME="$DOCKER_USERNAME/portfolio:${BUILD_NUMBER}"

                        docker build -t "$IMAGE_NAME" .

                        echo "$DOCKER_PASSWORD" | docker login \
                            --username "$DOCKER_USERNAME" \
                            --password-stdin

                        docker push "$IMAGE_NAME"

                        docker logout
                    '''
                }
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
