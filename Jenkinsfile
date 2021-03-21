pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/francois-dorval/cool-score.git'
                sh "npm install"
                sh "npm run test-jenkins"

            }

            post {
                success {
                    junit 'report.xml'
                }
            }
        }
    }
}
