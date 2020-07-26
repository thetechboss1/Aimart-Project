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
 07. Chart / Analytic
 08. Purchases 
 09. Commisions 
 10. Support
 10. Profile
 11. Roles
 12. Gallery
 13. Videos 
 14. referes
 15. Sms and Email sent (System)
 16. logs (For supper admin only)

[03] Sub-Components
  01. Users
       (a) Customer, (b) Realtor (c) Super Admin

  02. Properties
       (a) Land, (b) House

[03] Actions 
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
    * api/aimart/v1/user/commision?user=1828373 [POST] - Save user commit 

 02. Lands (Properties)
    * api/aimart/v1/land/add [POST] - register 
    * api/aimart/v1/land/get?limit=50 [GET] - get all lands
    * api/aimart/v1/land/get?land=19293844 [GET] - get a single land
    * api/aimart/v1/land/get?search=your-query [GET] - seacrh
    * api/aimart/v1/land/edit [PUT] - edit land
    * api/aimart/v1/land/delete [DELETE] - delete land
    * api/aimart/v1/land/purchase [POST] - delete land

 03. Housess (Properties)
    * api/aimart/v1/house/add [POST] - register 
    * api/aimart/v1/house/get?limit=50 [GET] - get all houses
    * api/aimart/v1/house/get?house=19293844 [GET] - get a single house
    * api/aimart/v1/house/get?search=your-query [GET] - seacrh
    * api/aimart/v1/house/edit [PUT] - edit house
    * api/aimart/v1/house/delete [DELETE] - delete house
    * api/aimart/v1/house/purchase [POST] - delete house


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
   16. referrals
   17. logs 
   18. commission
   19. System sms and email sent
     
    
    


