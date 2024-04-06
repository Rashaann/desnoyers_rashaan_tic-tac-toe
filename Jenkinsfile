pipeline{
    agent any
    tools {
        nodejs 'nodejs'
    }
    
    stages{
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
    		sh 'CI=true npm test -- --coverage'
            }
            post {
              always {
                 clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml',
                   healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                 )
              }
            }
        }
        stage('Deploy / Deliver') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
