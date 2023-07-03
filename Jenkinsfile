pipeline {
    agent any
    
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/RXstoinkboy/docker-frontend-main.git'
        //     }
        // }
        
        stage('Build') {
            steps {
                nodejs('NodeJS 20.3.1') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Test') {
            steps {
                nodejs('NodeJS 20.3.1') {
                    sh 'npm test'
                }
            }
        }
    }
    
    post {
        changed {
            emailext attachLog: true,
                compressLog: true,
                to: 'erykludwin@gmail.com',
                subject: "Job '${JOB_NAME}' (${BUILD_NUMBER}) was ${currentBuild.result}",
                body: "Please go to ${BUILD_URL} and verify the build",
                recipientProviders: [upstreamDevelopers(), requestor()]
        }
    }
}
