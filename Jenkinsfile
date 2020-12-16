pipeline {
    agent { 
        docker {
            image 'node:14-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
        DCB_USERNAME = credentials('DCB_Username')
        DCB_PASSWORD = credentials('DCB_Password')
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