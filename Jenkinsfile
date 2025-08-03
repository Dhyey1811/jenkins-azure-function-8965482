pipeline {
    agent any

    environment {
        AZURE_CLIENT_ID = credentials('azure-client-id')         // Jenkins credential ID for appId
        AZURE_CLIENT_SECRET = credentials('azure-client-secret') // Jenkins credential ID for password
        AZURE_TENANT_ID = credentials('azure-tenant-id')         // Jenkins credential ID for tenant
        AZURE_SUBSCRIPTION_ID = '90d79b4f-a51d-4368-98ed-d9fbeb430024'
        RESOURCE_GROUP = 'your-resource-group'                   // Replace with your Azure resource group
        FUNCTION_APP_NAME = 'dhyeyfunction8965482'               // Replace with your function app name
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Logging into Azure...'
                sh """
                    az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                    az account set --subscription $AZURE_SUBSCRIPTION_ID
                """
                echo 'Deploying Azure Function...'
                sh """
                    func azure functionapp publish $FUNCTION_APP_NAME --force
                """
            }
        }
    }
}
