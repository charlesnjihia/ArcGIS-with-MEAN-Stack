const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //parses information from POST

/* the mongoose predefined donor model */
var Donor = require('../models/donormodel'); 	


/*add CORS to allow requests from othe URLs */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});


/*  create new donor details  */
router.post('/donors', (req, res) => {
	var donor=new Donor();
	console.log("Donor:"+JSON.stringify(req.body));
	 
	 donor.first_name=req.body.first_name;
	 donor.last_name=req.body.last_name;
	 donor.contact_number=req.body.contact_number;
	 donor.email_address=req.body.email_address;
	 donor.blood_group=req.body.blood_group;
	 donor.lon=req.body.lon;
	 donor.lat=req.body.lat;
	 donor.ip_address=req.body.ip_address;
	 
	 
 donor.save(function(err,savedDonor) {
      if (err)
       res.send(err);

       res.json(savedDonor);
	  });       
});

/*   update donor details  */
router.put('/donors/:id', (req, res) => {
   console.log("inside put method");
   console.log("Donor:"+JSON.stringify(req.body));
    var donor={};
	 donor.first_name=req.body.first_name;
	 donor.last_name=req.body.last_name;
	 donor.contact_number=req.body.contact_number;
	 donor.email_address=req.body.email_address;
	 donor.blood_group=req.body.blood_group;
	 donor.lon=req.body.lon;
	 donor.lat=req.body.lat;
	 donor.ip_address=req.body.ip_address;
	 var conditions = { _id: req.params.id }
	 
	 Donor.update(conditions, donor, {new: true}, function(err, updatedDonor) {
    if (err)
      res.send(err);
      res.json(updatedDonor);
  });
  });
  
/*list all donors    */
  router.get('/donors', (req, res) => {
	
	Donor.find({}, function (err, donors) {
              if (err) {
                  return console.error(err);
              } else {
				 res.status(200).json(donors);  
			  }
	}); 
});

/* get donor details for a donor whose id is given */
router.get('/donors/:id', (req, res) => {

	Donor.findById(req.params.id, function(err, donor) {
    if (err){
      res.send(err);
	}else{
    res.json(donor);
	}
  });  
});

/*delete a given donor details from the database */
router.delete('/donors/:id', (req, res) => {
	Donor.remove({_id:req.params.id}, function(err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
	
  
});
// test api listing. *
router.get('/', (req, res) => {
	var donor=new Donor();
	 
	 donor.first_name="Charles";
	 donor.last_name="Njihia";
	 donor.contact_number="254725769683";
	 donor.email_address="charles.wanjohi86@gmail.com";
	 donor.blood_group="A";
	 donor.donor_lon=-113.806458;
	 donor.donor_lat=44.847784;
	 donor.ip_address="127.0.0.1";
	 donor.save(function(err,savedDonor) {
            if (err)
                res.send(err);

            res.json(savedDonor);
			});
  
}); 

router.post('/popo', (req, res) => {
pon=
[{
    "clientTransactionId": "1492092949174_3f54c2af",
    "owner": {
      "username": "+254725855822",
      "_perishable_token": "igbhGxGEbRjNo2l6XRWe3dZwC",
      "createdAt": "2015-06-29T10:00:04.272Z",
      "updatedAt": "2017-03-30T13:57:03.704Z",
      "firstName": "Nav",
      "affiliation": "artcaffe",
      "pushNotificationSubscriptions": [
        {
          "endpoint": "https://android.googleapis.com/gcm/send/ctuLTJchpao:APA91bGSZlbfzQQIq0B_CMmlcitDKRCfRHagjzWUWf0nDPra2bLJGfnPh2Q2sNr4oL7m9U8g0c_cWF4Q4mQmlSMf3N-SuilVSK_ydjHfl3itSoSq3w5GgzECvP9iFEl1ivSWj4V9S2EO",
          "keys": {
            "auth": "SR_Pf9ehbzblrGLUDiZixg==",
            "p256dh": "BLlCSMjtVuqrTLHvET7WcMATEW_A2cQTqo57zcXugiWnawljFBu3RjrC05luYqSptqLAKd5ROymGtRaAb4tlbxQ="
          }
        }
      ],
      "roles": [
        "cs",
        "squiggles"
      ],
      "ACL": {
        "LsX7EEIse5": {
          "read": true,
          "write": true
        }
      },
      "objectId": "LsX7EEIse5"
    },
    "userAddressToken": "g1r3s8wfj6m6ajork3ywtu5cm35cow29",
    "createdAt": "2017-04-13T14:15:51.644Z",
    "updatedAt": "2017-06-26T21:25:14.720Z",
    "firstName": "Nav",
    "shortUrlCode": "cswdx",
    "propertyName": "ForFar Towers",
    "propertyNumber": "125",
    "ACL": {
      "LsX7EEIse5": {
        "read": true,
        "write": true
      }
    },
    "objectId": "cswDXlFCU0",
    "phone": "+254725855822"
  },
  
  
  
  
  {
    "AFL": {
      "propertyType": "RESIDENTIAL",
      "propertyNumber": "118",
      "lc_route": "ridgeways road",
      "gatePhotoMedium": {
        "__type": "File",
        "name": "4e7b64f33d00aec1c25e14966fa8d408_mS5F2blz6L_medium.jpg",
        "url": "https://parsefiles.back4app.com/4bpZanrSsZawq4nNPxrVqnUR6EYcqRBNZz7UyZfk/4e7b64f33d00aec1c25e14966fa8d408_mS5F2blz6L_medium.jpg"
      },
      "compositeAddress": false,
      "updatedAt": "2017-06-24T12:48:47.777Z",
      "latitude": -1.2344835,
      "addressObjectId": "mS5F2blz6L",
      "longitude": 36.8529613,
      "propertyName": "",
      "locality": "Nairobi",
      "hasNewImage": true,
      "geoPoint": [
        36.8529613,
        -1.2344835
      ],
      "dummy_tmp": "tmp_op",
      "propertySubtype": "Stand Alone",
      "streetName": "",
      "route": "Ridgeways Road",
      "qa_sync": true,
      "administrative_area_level_1": "Nairobi",
      "gpsAccuracy": 3.9,
      "routeShort": "Ridgeways Rd",
      "gatePhotoThumbnail": "tfss-9c093d98-9045-4944-92b6-331786214ed0-gatePhoto.jpg",
      "creation_time": 1434899052,
      "createdAt": "2015-07-05T20:54:58.217Z",
      "country": "Kenya",
      "gatePhotoOriginal": {
        "__type": "File",
        "name": "adb130a95af2789fed3e9fbe1c163c14_mS5F2blz6L.jpg",
        "url": "https://parsefiles.back4app.com/4bpZanrSsZawq4nNPxrVqnUR6EYcqRBNZz7UyZfk/adb130a95af2789fed3e9fbe1c163c14_mS5F2blz6L.jpg"
      },
      "objectId": "Y8BvuTqF6d"
    },
    "addressType": "home",
    "traditionalStreetNumber": "118",
    "owner": {
      "username": "+254725855822",
      "_perishable_token": "igbhGxGEbRjNo2l6XRWe3dZwC",
      "createdAt": "2015-06-29T10:00:04.272Z",
      "updatedAt": "2017-03-30T13:57:03.704Z",
      "firstName": "Nav",
      "affiliation": "artcaffe",
      "pushNotificationSubscriptions": [
        {
          "endpoint": "https://android.googleapis.com/gcm/send/ctuLTJchpao:APA91bGSZlbfzQQIq0B_CMmlcitDKRCfRHagjzWUWf0nDPra2bLJGfnPh2Q2sNr4oL7m9U8g0c_cWF4Q4mQmlSMf3N-SuilVSK_ydjHfl3itSoSq3w5GgzECvP9iFEl1ivSWj4V9S2EO",
          "keys": {
            "auth": "SR_Pf9ehbzblrGLUDiZixg==",
            "p256dh": "BLlCSMjtVuqrTLHvET7WcMATEW_A2cQTqo57zcXugiWnawljFBu3RjrC05luYqSptqLAKd5ROymGtRaAb4tlbxQ="
          }
        }
      ],
      "roles": [
        "cs",
        "squiggles"
      ],
      "ACL": {
        "LsX7EEIse5": {
          "read": true,
          "write": true
        }
      },
      "objectId": "LsX7EEIse5"
    },
    "userAddressToken": "3zhcana5jyca0pb9zj11886y5j98uxr",
    "createdAt": "2017-03-13T11:25:08.977Z",
    "updatedAt": "2017-06-26T21:25:09.963Z",
    "firstName": "Nav",
    "shortUrlCode": "48jz4",
    "propertyName": "Acme Quarter",
    "propertyNumber": "1a",
    "ACL": {
      "LsX7EEIse5": {
        "read": true,
        "write": true
      }
    },
    "objectId": "48jZ4TjOXM",
    "phone": "+254725855822"
  },
 





 {
    "AFL": {
      "propertyType": "RESIDENTIAL",
      "neighborhoodGoogle": "Bernard Estate",
      "propertyNumber": "",
      "dummy_bool": true,
      "lc_route": "kabarsiran avenue",
      "gatePhotoMedium": {
        "__type": "File",
        "name": "656fbe7484e2ee9a9b3d868e146a894e_0dYGmkW4dk_medium.jpg",
        "url": "https://parsefiles.back4app.com/4bpZanrSsZawq4nNPxrVqnUR6EYcqRBNZz7UyZfk/656fbe7484e2ee9a9b3d868e146a894e_0dYGmkW4dk_medium.jpg"
      },
      "compositeAddress": true,
      "updatedAt": "2017-06-24T12:51:21.010Z",
      "latitude": -1.2664371,
      "addressObjectId": "0dYGmkW4dk",
      "longitude": 36.7656793,
      "locality": "Nairobi",
      "geoPoint": [
        36.7656793,
        -1.2664371
      ],
      "route": "Kabarsiran Avenue",
      "gatePhotoThumbnail": "tfss-7a49d051-e689-48c5-856e-2df5ea355207-gatePhoto.jpg",
      "streetName": "kabarsiran ave",
      "routeShort": "Kabarsiran Ave",
      "sublocality_level_1": "Muthangari",
      "propertySubtype": "Stand Alone",
      "administrative_area_level_1": "Nairobi",
      "gpsAccuracy": 9,
      "dummy_tmp": "no_op",
      "qa_sync": true,
      "creation_time": 1418029987,
      "createdAt": "2014-12-08T11:23:31.160Z",
      "country": "Kenya",
      "gatePhotoOriginal": {
        "__type": "File",
        "name": "3102531edd7cbbf4c5ae97ddc863a6db_0dYGmkW4dk.jpg",
        "url": "https://parsefiles.back4app.com/4bpZanrSsZawq4nNPxrVqnUR6EYcqRBNZz7UyZfk/3102531edd7cbbf4c5ae97ddc863a6db_0dYGmkW4dk.jpg"
      },
      "objectId": "zPAZi6Dzbp"
    },
    "businessName": "OkHi",
    "addressType": "work",
    "traditionalStreetName": "kabarsiran ",
    "directionsFromClosestLandmark": "Kabarsiran avenue, before Kabarsiran close.\nnext to no. 23, black gate inset from the road\nGate with kk sign and purple flowers",
    "owner": {
      "username": "+254725855822",
      "_perishable_token": "igbhGxGEbRjNo2l6XRWe3dZwC",
      "createdAt": "2015-06-29T10:00:04.272Z",
      "updatedAt": "2017-03-30T13:57:03.704Z",
      "firstName": "Nav",
      "affiliation": "artcaffe",
      "pushNotificationSubscriptions": [
        {
          "endpoint": "https://android.googleapis.com/gcm/send/ctuLTJchpao:APA91bGSZlbfzQQIq0B_CMmlcitDKRCfRHagjzWUWf0nDPra2bLJGfnPh2Q2sNr4oL7m9U8g0c_cWF4Q4mQmlSMf3N-SuilVSK_ydjHfl3itSoSq3w5GgzECvP9iFEl1ivSWj4V9S2EO",
          "keys": {
            "auth": "SR_Pf9ehbzblrGLUDiZixg==",
            "p256dh": "BLlCSMjtVuqrTLHvET7WcMATEW_A2cQTqo57zcXugiWnawljFBu3RjrC05luYqSptqLAKd5ROymGtRaAb4tlbxQ="
          }
        }
      ],
      "roles": [
        "cs",
        "squiggles"
      ],
      "ACL": {
        "LsX7EEIse5": {
          "read": true,
          "write": true
        }
      },
      "objectId": "LsX7EEIse5"
    },
    "userAddressToken": "8c16t1wz5830izfr5dun51pkb6ueg66r",
    "createdAt": "2017-03-03T12:03:52.892Z",
    "updatedAt": "2017-06-26T21:25:17.101Z",
    "firstName": "Nav",
    "shortUrlCode": "nqniy",
    "propertyName": "Diamond Place",
    "propertyNumber": "",
    "ACL": {
      "LsX7EEIse5": {
        "read": true,
        "write": true
      }
    },
    "objectId": "NqNiyu2AQ6",
    "phone": "+254725855822"
  }
]


 res.json(pon);
  
}); 



module.exports = router;


