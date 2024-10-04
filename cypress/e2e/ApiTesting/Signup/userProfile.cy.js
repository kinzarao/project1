
                                                      // Edit Profile BirthDay
   describe('User Profile', () => {
      const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODU1NiwiZXhwIjoxNzMwNTAwMzE0fQ.YiCZnHZM11o5hCugdgdVZhfApb8dtkzsVkA4JJA05sE'
      const edenURL = 'https://8a94-2400-adc5-112-4b00-3e6f-52c8-2e52-58e3.ngrok-free.app/api/v1';
                                                    
         it('Updates the user birth date', () => {
             cy.request({
             method: 'PUT',
             url: `${edenURL}/profiles/`,  
              headers: {
                   "AUTH-TOKEN": authToken,
                    'Content-Type': 'application/json'
},
               body: {
                 "user": {
                 "birth_date": "2019-10-14 10:27:00"
}
}
}).then((response) => {
  expect(response.status).to.eq(201); 
  expect(response.body.data.attributes.phone).to.eq("+19876543210");
});
})
                                                    
                                                    
                                                // Edit Profile UserName
                                                                                                     
                                                         it('Updates the user Name', () => {
                                                            cy.request({
                                                              method: 'PUT',
                                                              url: `${edenURL}/profiles/`,  
                                                            headers: {
                                                              "AUTH-TOKEN": authToken,
                                                              'Content-Type': 'application/json'
                                                          },
                                                             body: {
                                                              "user": {
                                                              "user_name": "New testing"
                                                         }
                                                            }
                                                         }).then((response) => {
                                                             expect(response.status).to.eq(201); 
                                                         });
                                                         })
                                                    
                                                        // Edit InviteCode
                                                                                                   
                                                        it('Updates the user invitecode', () => {
                                                          cy.request({
                                                             method: 'PUT',
                                                             url: `${edenURL}/profiles/`,  
                                                             headers: {
                                                                 "AUTH-TOKEN": authToken,  // Replace with actual token if needed
                                                                 'Content-Type': 'application/json'
                                                        },
                                                             body: {
                                                                 "user": {
                                                                 "registration_code": "J689VN$"
                                                     }
                                                         }
                                                         }).then((response) => {
                                                            expect(response.status).to.eq(201); 
                                                    });
                                                    })
                                                                     
                                                     //UnRead Item                                                 
                                                        it('GET unread item', () => {
                                                          cy.request({
                                                             method: 'GET',
                                                             url: `${edenURL}/profiles/unread_items`,  
                                                             headers: {
                                                                 "AUTH-TOKEN": authToken,  
                                                        },
                                                         }).then((response) => {
                                                            expect(response.status).to.eq(200); 
                                                    });
                                                    })
                                                    
                                                        //Signed Url                                                 
                                                        it('GET signed url', () => {
                                                          cy.request({
                                                             method: 'GET',
                                                             url: `${edenURL}/profiles/edit?file_type=mov`,  
                                                             headers: {
                                                                 "AUTH-TOKEN": authToken,  
                                                        },
                                                         }).then((response) => {
                                                            expect(response.status).to.eq(200); 
                                                    });
                                                     })
                                                    
                                                    
                                                     //Menue Video                                                 
      it('GET menue video', () => {
             cy.request({
             method: 'GET',
              url: `${edenURL}/profiles/menu_videos`,  
               headers: {
                    "AUTH-TOKEN": authToken,  
   },
   }).then((response) => {
       expect(response.status).to.eq(200); 
           });
            })
                                                    
                                                    
                                                        //Total Happy Reaction                                                
 it('GET Happy Reaction', () => {
        cy.request({
        method: 'GET',
        url: `${edenURL}/profiles/happy_reactions`,  
        headers: {
            "AUTH-TOKEN": authToken,  
},
 }).then((response) => {
            expect(response.status).to.eq(200); 
 });
  })
                                                    
                                                    
                                                         //GET User Profile                                                  
   it('GET userprofile', () => {
         cy.request({
         method: 'GET',
         url: `${edenURL}/profiles/28556`,  
           headers: {
                  "AUTH-TOKEN": authToken,  
  },
   }).then((response) => {
         expect(response.status).to.eq(200);              
});
})
})                                                    