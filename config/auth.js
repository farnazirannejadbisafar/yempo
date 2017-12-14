// configuration of auth.js

// expose this configuration directly to yempo application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1983707671915939', // Facebook App ID
        'clientSecret'    : 'e385cc141d50844b9fb31703fbf8cb46', // Facebook App Secret
        'callbackURL'     : 'https://karanam-saikrishna-webdev.herokuapp.com/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'azhUTF9LfQnc91hNcm09Pj8SY',
        'consumerSecret'     : 'fz2hM5dlhoofxKifpcVH0oAUHWJW5ikyT0O4H93RW6SgdzTKxw',
        'callbackURL'        : 'https://yempoapp.herokuapp.com/auth/twitter/callback'
    }
};
