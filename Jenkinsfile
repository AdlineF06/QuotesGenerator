pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t quotes-generator:%BUILD_NUMBER% ."
                }
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    def appName = "my-quotes-app"
                    bat "docker stop ${appName} || exit /b 0"
                    bat "docker rm ${appName} || exit /b 0"
                    bat "docker run -d --name ${appName} -p 3000:80 quotes-generator:%BUILD_NUMBER%"
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