pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'build...'
                sh 'npm ci'
            }
        }
        stage('test') {
            steps {
                echo 'test...'
                sh 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploy...'
                sh 'npm run build --'
            }
        }
    }
}
