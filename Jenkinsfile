pipeline {
    agent { 
        docker {
            image 'node:14-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
        DCB_USERNAME     = credentials('')
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'touch .env'
                sh "echo DCB_USERNAME=${env.dcb-username}"
            }
        }
        stage ('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}