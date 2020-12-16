pipeline {
    agent { 
        docker {
            image 'node:14-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh "echo ${dcb-username}"
            }
        }
        stage ('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}