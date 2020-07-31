## Begin Aimart ##
* version 1.0.0

# Endpoints

[01] Componenmts

 01. Users
 02. Properties
 03. Reators
 04. Customers 
 05. Admins
 06. Add Properties
 07. Profile
 08. Purchases 
 09. Commisions 
 10. Support
 11.  Chart / Analyt
 12. Roles
 13. Gallery
 14. Videos 
 15. referes
 16. Sms and Email sent (System)
 17. logs (For supper admin only)

[03] Sub-Components
  01. Users
       (a) Customer, (b) Realtor (c) Super Admin

  02. Properties
       (a) Land, (b) House

[03] Actions & Routes

 01. Users
    * api/aimart/v1/user/add [POST] - register 
    * api/aimart/v1/user/login [POST] - login
    * api/aimart/v1/user/get?limit=50 [GET] - get all users
    * api/aimart/v1/user/get?user=19293844 [GET] - get a single user
    * api/aimart/v1/user/get?search=your-query [GET] - seacrh
    * api/aimart/v1/user/edit [PUT] - edit user
    * api/aimart/v1/user/password [PUT] - edit user password
    * api/aimart/v1/user/delete [DELETE] - delete user
    * api/aimart/v1/user/verify?user=1828373 [GET] - verify user
    * api/aimart/v1/user/activate?activation=1828373 [GET] - verify user
    

 02. Lands (Properties)
    * api/aimart/v1/property/add [POST] - add property
    * api/aimart/v1/property/get?limit=50 [GET] - get all lands
    * api/aimart/v1/property/get?property=19293844 [GET] - get a single property
    * api/aimart/v1/property/get?search=your-query [GET] - seacrh
    * api/aimart/v1/property/edit [PUT] - edit property
    * api/aimart/v1/property/delete [DELETE] - delete property
    * api/aimart/v1/property/purchase [POST] - Purchase property

  03. Gallery (Properties)
    * api/aimart/v1/gallery/add [POST] - add gallery
    * api/aimart/v1/gallery/get?limit=50 [GET] - get all lands
    * api/aimart/v1/gallery/get?gallery=19293844 [GET] - get a single gallery
    * api/aimart/v1/gallery/get?search=your-query [GET] - seacrh
    * api/aimart/v1/gallery/edit [PUT] - edit gallery
    * api/aimart/v1/gallery/delete [DELETE] - delete gallery
    

[04] Schemas

   01. Users *
   02. invices *
   03. categories *
   04. next_of_kins *
   05. properties *
   06. states *
   07. surports *
   08. roles *
   09. user_types * 
   10. countries *
   11. purchases *
   12. bacnk_accounts *
   13. payment_plans -
   14. galleries *
   15. downlines *
   16. referrals *
   17. logs *
   18. commission *
   19. System sms and email sent *
   20. marital_status *
   21. geders *

   [05] File Upload (Multetr)
   PDF, IMAGE, VIDEO, *


   [06] Email (Sendgrid, Nodemailer)
   

   [07] Catching (Redis)


   [08] Deployment


   [09] Security
     -- Check for token in every endpoint

   
   [10] Scale


   //=== Probs ==//

   <!-- 01. user
       Protected Route
       File upload 
       State management
       Structures
       Modles -->

    //== Utilites ==//  
    01. Countries
       - ...
    02. States
       - 36
    03. Genders
        - Male
        - Female
    04. Marital_Status
        - Maried
        - Single
    05. User_Types 
        - Administrator 
        - Realtor
        - Customer 

  //== User permission Categories ==//
    01. property
    02. realtor
    03. customer
    04. admin
    05. profile
    06. purchase
    07. commission
    08. role
    09. support
    10. chart
    11. gallery
    12. log
    13. downline
    14. next_of_kin
    15. referral
    16. bank_account
    17. user
          


   
   
     
    
    


