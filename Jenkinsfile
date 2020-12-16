pipeline {
    agent { 
        docker {
            image 'node:14-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
            withCredentials([usernamePassword(credentialsId: 'test-credentials', passwordVariable: 'password', usernameVariable: 'username')]) {
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage ('test') {
            steps {
                sh 'npm run test'
            }
        }
        }
    }
}