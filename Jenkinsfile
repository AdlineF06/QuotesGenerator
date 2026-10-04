pipeline {
    agent any
    environment {
        DOCKER = 'C:\\Users\\Adline\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    bat "\"${DOCKER}\" build -t quotes-generator:%BUILD_NUMBER% ."
                }
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    def appName = "my-quotes-app"
                    bat "\"${DOCKER}\" stop ${appName} || exit /b 0"
                    bat "\"${DOCKER}\" rm ${appName} || exit /b 0"
                    bat "\"${DOCKER}\" run -d --name ${appName} -p 3000:80 quotes-generator:%BUILD_NUMBER%"
                }
            }
        }
    }
    post {
        always {
            bat 'echo "Pipeline finished successfully."'
        }
    }
}