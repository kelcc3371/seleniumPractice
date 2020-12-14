pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
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
            }
        }
        stage ('test') {
            steps {
                sh 'node test.js'
            }
        }
    }
}