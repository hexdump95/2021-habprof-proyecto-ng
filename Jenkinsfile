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
                sh 'npm run test -- --pass-with-no-tests'
            }
        }
        stage('deploy') {
            when { branch "main" }
            steps {
                echo 'deploy...'
                sh 'npm run build --'
            }
        }
    }
}
