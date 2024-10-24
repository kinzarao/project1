

describe('My Share', () => {
   
     const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODU4MiwiZXhwIjoxNzMyMzA5NDg0fQ.P3ahFoIunj-N4AHtQpQlF7aAzigA1RBN5yHwmFa_Htg'
    const edenURL = 'https://bluepalm.xyz/api/v1';
      it('POST create MyShare', () => {
        cy.request({
          method: 'POST',
          url: `${edenURL}/profiles/shares`,
          headers: {
            "AUTH-TOKEN": authToken,
            'Content-Type': 'application/json'
        },
          body: { 
          share: {
		// "anonymous": false,
		 "video_url": "https://eden-app.s3.amazonaws.com/users/14271/shares/24a89062-a5ec-4e22-90cb-b1bd2afbe4cb.mov",
		 "image_url": "https://dummyimage.com/350x250/33cc99/fff",
		 "public": true,
		 "feel": "cry",
		 "reaction_time": 5,
		"feel_category_id": 1,
		"see_category_id": 1,
		"visibility": "both",
		// "reactions_allowed": true,
		// "video_orientation": "landscape",
        "story_starter_id": 7
        //"share_type": "comedian_share"
	}
        }
  
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.attributes.feel).to.eq("cry");
        
        
      });
    })
})
      