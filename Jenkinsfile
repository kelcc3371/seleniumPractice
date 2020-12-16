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
                sh "echo 'DCB_USERNAME=${dcb_user}' >> .env"
                sh "echo 'DCB_PASSWORD=${dcb_password} >> .env"
            }
        }
        stage ('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}