## Aimart Realtors Portal (version 1.0)

<h3 style="color: yellow"> Endpoints <h3>
- ** Means ready
- Status: 200 = successful, 400 = client error, 500 = Server error
- Bring means the feilds to come with

01. User
- ** /api/aimart/v1/user/add [POST]  - Regiter |
   Bring: (firstname*, lastname*, email*, referred_by, password*, user_type*, role*)

- ** /api/aimart/v1/user/login [POST] - Login |
  <p>Bring: (email*, password*)</p>

- ** /api/aimart/v1/user/get [GET] - Get all users and single user (Admin only)
    <p>Bring: (limit, user)</p>

- ** /api/aimart/v1/user/edit [PUT] - Edit user info
   <p> Bring: firstname*, lastname*, phone_number, address, company, photo, referred_by, id_card, gender, country, state, marital_status, date_of_birth, editUserId*</p>

- ** /api/aimart/v1/user/password [PUT] - Change user password
    Bring: (limit, user)

- ** /api/aimart/v1/user/delete/:userId [DELETE] (Admin only)
    Bring: (userId*) 

- ** /api/aimart/v1/user/activate/:activationToken [GET]
    Bring: (activationToken*) 

- ** /api/aimart/v1/user/profile [GET]
     Bring: (token*) 

* /api/aimart/v1/user/forgot-password [POST]


02 Gallery
- ** /api/aimart/v1/gallery/add
- ** /api/aimart/v1/gallery/get
- ** /api/aimart/v1/gallery/edit
- ** /api/aimart/v1/gallery/delete

03. Gender
- ** /api/aimart/v1/gender/add | 
- ** /api/aimart/v1/gender/get | 
- ** /api/aimart/v1/gender/edit | 

04. Marital Status
- ** /api/aimart/v1/marital_status/add | 
- ** /api/aimart/v1/marital_status/get | 
- ** /api/aimart/v1/marital_status/edit | 

05. User Types (Utilities: no crud) 
- ** /api/aimart/v1/user_type/add | 
- ** /api/aimart/v1/user_type/get | 
- ** /api/aimart/v1/user_type/edit | 
- ** /api/aimart/v1/user_type/delete | 

06. State 
- ** /api/aimart/v1/state/add | 
- ** /api/aimart/v1/state/get | 
- ** /api/aimart/v1/state/edit | 
- ** /api/aimart/v1/state/delete | 

07. Role
- ** /api/aimart/v1/role/add | 
- ** /api/aimart/v1/role/get | 
- ** /api/aimart/v1/role/edit | 
- ** /api/aimart/v1/role/delete | 

08. Country
- ** /api/aimart/v1/country/add | 
- ** /api/aimart/v1/country/get | 
- ** /api/aimart/v1/country/edit | 
- ** /api/aimart/v1/country/delete | 

09. Properties
* /api/aimart/v1/property/add
* /api/aimart/v1/property/purchase
* /api/aimart/v1/property/get
* /api/aimart/v1/property/edit
* /api/aimart/v1/property/delete

10. Support 
* /api/aimart/v1/support/add
* /api/aimart/v1/support/get
* /api/aimart/v1/support/edit
* /api/aimart/v1/support/delete

11. schedule_message
* /api/aimart/v1/schedule_message/add
* /api/aimart/v1/schedule_message/get
* /api/aimart/v1/schedule_message/edit
* /api/aimart/v1/schedule_message/delete

12. Referral
* /api/aimart/v1/referral/add
* /api/aimart/v1/referral/get
* /api/aimart/v1/referral/edit
* /api/aimart/v1/referral/delete

13. Purchase
* /api/aimart/v1/purchase/add
* /api/aimart/v1/purchase/get
* /api/aimart/v1/purchase/edit
* /api/aimart/v1/purchase/delete

14. Next Of kin
* /api/aimart/v1/next_of_kin/add
* /api/aimart/v1/next_of_kin/get
* /api/aimart/v1/next_of_kin/edit
* /api/aimart/v1/next_of_kin/delete

15. Log
* /api/aimart/v1/log/add
* /api/aimart/v1/log/get
* /api/aimart/v1/log/edit
* /api/aimart/v1/log/delete

16. Invoice
* /api/aimart/v1/invoice/add
* /api/aimart/v1/invoice/get
* /api/aimart/v1/invoice/edit
* /api/aimart/v1/invoice/delete

17. Downline
* /api/aimart/v1/downline/add
* /api/aimart/v1/downline/get
* /api/aimart/v1/downline/edit
* /api/aimart/v1/downline/delete

18. Commission
* /api/aimart/v1/commission/add
* /api/aimart/v1/commission/get
* /api/aimart/v1/commission/edit
* /api/aimart/v1/commission/delete

19. Category
* /api/aimart/v1/category/add
* /api/aimart/v1/category/get
* /api/aimart/v1/category/edit
* /api/aimart/v1/category/delete

20. Bank Acount
* /api/aimart/v1/bank_account/add
* /api/aimart/v1/bank_account/get
* /api/aimart/v1/bank_account/edit





