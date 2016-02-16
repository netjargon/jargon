//var ec2 = new AWS.ec2.

 // See the Configuring section to configure credentials in the SDK
        //AWS.config.credentials = ;
        //AWS.config.update({accessKeyId: 'AKIAIXWX2KZ4CDY7EFQQ', secretAccessKey: 'gNyOVpuNpSY3qMpH8Z/Oc+RAWt2bXHxW57VS1O6X'});
        // Configure your region
        //AWS.config.region = 'us-west-2';

//new AWS.S3().listObjects({Bucket: 'traintracks16'}, function(error, data) {
 // if (error) {
   // console.log(error); // an error occurred
  //} else {
   // document.write(data); // request succeeded
 // }
///});



 var ec2 = new AWS.EC2();
  ec2.describeinstances(function (err, data) {
    if (err) {
      document.getElementById('status').innerHTML =
        'There are no instances running';
    } else {
      document.getElementById('status').innerHTML =
        'Loaded ' + data.Contents.length + ' EC2 instance information is:';
      for (var i = 0; i < data.Contents.length; i++) {
        document.getElementById('objects').innerHTML +=
          '<li>' + data.Contents[i].Key + '</li>';
      }
    }
  });
  
  /*var ec2 = new AWS.EC2();
    ec2.DescribeInstances(params, function(err,data){
        if (err){document.getElementById('status').innerHTML = "There are no instances";
        }
        else {document.getElementbyID('status').innerHTML = data};    }
    );*/

