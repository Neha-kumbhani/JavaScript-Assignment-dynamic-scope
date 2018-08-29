//creating function createSecretHolder()
function createSecretHolder(secret){
    //returning object< which consists of two functions set and get
    return {
        //creating function getSecret, it returns secret
        getSecret: function () {
            //returning secret
            return secret;
        },
        //creating function setSecret, it receives phrase and put this phrase into variable secret
        setSecret: function (value) {
            secret = value;
        }
    }
}
//creating new object
var secret = createSecretHolder(5);
//calling function setSecret
secret.setSecret(5);
//calling function getSecret
console.log(secret.getSecret());

//creating new object
var secret = createSecretHolder(2);
//calling function setSecret
secret.setSecret(2);
//calling function getSecret
console.log(secret.getSecret());