var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.126.com',
  port: 25,
    auth: {
        user: 'Lihk11844@126.com',
        pass: '416419lhk'
    }
});

var mailOptions = {
    from: 'Lihk11844@126.com', // sender address
    to: 'lcltaixu@163.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world,Love YOU ✔', // plaintext body
    html: '<b>I Love You </b>' // html body
};

function sendMail() {
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });
}



setInterval(function(){
  sendMail()
},10)
