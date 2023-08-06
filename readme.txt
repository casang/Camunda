Camunda:
path: ~Documents\dev\Camunda\runBPM
run: mvn spring-boot:run 
environment variable: 
MAIL_CONFIG=/Users/carlos/Documents/dev/Camunda/Mail/mail-config.properties
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.11.jdk/Contents/Home/
script: runCamunda.cmd

Angular:
path: ~Documents\dev\Camunda\credit-request
run: npm start

Charge Card Worker
path: /Users/carlos/Documents/dev/Camunda/charge-card-worker
run: node worker.js