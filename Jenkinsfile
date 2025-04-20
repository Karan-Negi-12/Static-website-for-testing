pipeline {
    agent any

    stages {
        stage('Clone from GitHub') {
            steps {
                git(
                    url: 'https://github.com/Karan-Negi-12/Static-website-for-testing.git',
                    branch: 'main'
                )
            }
        }
        stage('Build') {
            steps {
                echo 'No build steps required for this static website.'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: '***', followSymlinks: false
        }
        failure {
            mail bcc: '', body: "${env.BUILD_NUMBER} is failed", cc: '', from: '', replyTo: '', subject: "Job ${env.JOB_NAME} [${env.BUILD_NUMBER}] failed", to: 'knegi2003@gmail.com'
        }
    }
}