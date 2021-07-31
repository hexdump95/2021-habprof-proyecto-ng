pipeline {
    agent any
    stages {
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
