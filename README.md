# Alexa FAA Example

Original blog posts

* https://developer.amazon.com/public/community/post/Tx3DV6ANE5HTG9H/Big-Nerd-Ranch-Series-Developing-Alexa-Skills-Locally-with-Node-js-Setting-Up-Yo
* https://developer.amazon.com/public/community/post/Tx1BIPOTYRL82PV/Big-Nerd-Ranch-Series-Developing-Alexa-Skills-Locally-with-Node-js-Implementing
* https://developer.amazon.com/public/community/post/Tx2LL8LQWN9T33O/Big-Nerd-Ranch-Series-Developing-Alexa-Skills-Locally-with-Node-js-Deploying-You

1) Download the FAA example

    git clone 
    nvm install 4.3
    nvm alias default v4.3.2
    npm install --save alexa-app chai chai-as-promised mocha lodash request-promise
    npm test

2) Download the Alexa Test Server

    git clone git clone https://github.com/matt-kruse/alexa-app-server.git
    cd examples/apps/
    ln -s ~/v/alexa-faa-example/

