# AWS

1. Create IAM role on AWS
   - create user
   - administrator access
2. Create public and private access key
3. Install serverless
   - `npm i -g serverless`
   - `serverless config credentials --provider aws --key *** --secret *** profile *Profile Name*`
4. Create Application

   - `serverless create --template aws-nodejs path pathName`
   - add to provider profile

5. Set up a project

   - install plugins ('serverless-bundle','serverless-dotenv-plugin','serverless-offline')

   - add to yml file plugins

   ```yml
   plugins:
     - serverless-bundle # Package our functions with Webpack
     - serverless-offline
     - serverless-dotenv-plugin
   ```
